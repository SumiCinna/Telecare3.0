<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client;

class AuthController extends Controller
{
    public function showRegister()
    {
        return Inertia::render('Auth/Register');
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'patient',
            'status' => 'active',
        ]);

        Auth::login($user);

        return redirect()->route('patient.dashboard');
    }

    public function showLogin()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (! Auth::attempt($credentials, $request->boolean('remember'))) {
            return back()->withErrors([
                'email' => 'These credentials do not match our records.',
            ])->onlyInput('email');
        }

        $request->session()->regenerate();

        return match (Auth::user()->role) {
            'patient' => redirect()->route('patient.dashboard'),
            'doctor' => redirect()->route('doctor.dashboard'),
            'staff' => redirect()->route('staff.dashboard'),
            'admin' => redirect()->route('admin.dashboard'),
            default => redirect('/'),
        };
    }

    public function redirectToGoogle()
    {
        $driver = Socialite::driver('google');
        $driver->setHttpClient(new Client(['verify' => false]));
        return $driver->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $driver = Socialite::driver('google');
            $driver->setHttpClient(new Client(['verify' => false]));
            $googleUser = $driver->user();

            $user = User::where('email', $googleUser->getEmail())->first();

            if ($user) {
                $user->update([
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                ]);
                Auth::login($user);
            } else {
                $user = User::create([
                    'name' => $googleUser->getName(),
                    'email' => $googleUser->getEmail(),
                    'password' => Hash::make(Str::random(16)),
                    'role' => 'patient',
                    'status' => 'active',
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                ]);
                Auth::login($user);
            }

            return match (Auth::user()->role) {
                'patient' => redirect()->route('patient.dashboard'),
                'doctor' => redirect()->route('doctor.dashboard'),
                'staff' => redirect()->route('staff.dashboard'),
                'admin' => redirect()->route('admin.dashboard'),
                default => redirect('/'),
            };
        } catch (\Exception $e) {
            Log::error('Google login failed: ' . $e->getMessage());
            return redirect('/login')->withErrors(['email' => 'Google login failed: ' . $e->getMessage()]);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}