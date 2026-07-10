<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    }

    return Inertia::render('Welcome');
});

Route::middleware('guest')->group(function () {
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/dashboard', function () {
        return match (auth()->user()->role) {
            'doctor' => redirect()->route('doctor.dashboard'),
            'staff' => redirect()->route('staff.dashboard'),
            'admin' => redirect()->route('admin.dashboard'),
            default => redirect()->route('patient.dashboard'),
        };
    })->name('dashboard');

    Route::get('/patient/dashboard', function () {
        return Inertia::render('Patient/Dashboard');
    })->name('patient.dashboard');

    Route::get('/patient/schedules', function () {
        return Inertia::render('Patient/Schedules');
    })->name('patient.schedules');

    Route::get('/patient/care-team', function () {
        return Inertia::render('Patient/CareTeam');
    })->name('patient.care-team');

    Route::get('/patient/records', function () {
        return Inertia::render('Patient/Section', [
            'title' => 'Records',
            'subtitle' => 'Review your visit history, notes, and uploaded documents.',
        ]);
    })->name('patient.records');

    Route::get('/patient/insights', function () {
        return Inertia::render('Patient/Section', [
            'title' => 'Health Insights',
            'subtitle' => 'Track trends and follow AI-assisted recommendations.',
        ]);
    })->name('patient.insights');

    Route::get('/doctor/dashboard', function () {
        return Inertia::render('Doctor/Dashboard');
    })->name('doctor.dashboard');

    Route::get('/staff/dashboard', function () {
        return Inertia::render('Staff/Dashboard');
    })->name('staff.dashboard');

    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
});