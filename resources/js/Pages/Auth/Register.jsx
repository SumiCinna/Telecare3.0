import { useState, useEffect, useRef } from 'react';
import { useForm, Link } from '@inertiajs/react';

// ─── Design tokens ────────────────────────────────────────────────────────────
const c = {
    red:        '#8B1A1A',
    redLight:   '#C0392B',
    green:      '#1A6B3A',
    greenLight: '#E8F5EE',
    ink:        '#1A1A2E',
    inkLight:   '#4A5568',
    inkMuted:   '#718096',
    border:     '#E2E8F0',
    bg:         '#F7F8FC',
    white:      '#FFFFFF',
    inputBg:    '#FAFBFD',
    orange:     '#DD6B20',
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function EyeIcon({ open }) {
    return open ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
            <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
            <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}

function LockIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
    );
}

function ScaleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18M3 6l9-3 9 3M3 18l9 3 9-3" />
            <path d="M3 6l4 8H-1M21 6l4 8H17" />
        </svg>
    );
}

// ─── Logo (same as Welcome.jsx) ───────────────────────────────────────────────
function Logo() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexShrink: 0 }}>
            <img
                src="/images/logo.jpg"
                alt="Telecare"
                style={{ height: '40px', width: '40px', objectFit: 'contain' }}
            />
            <div style={{ width: '1px', height: '32px', background: c.border, margin: '0 0.85rem' }} />
            <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: c.ink, lineHeight: 1.1, letterSpacing: '0.04em' }}>
                    TELECARE
                </div>
                <div style={{ fontSize: '0.6rem', color: c.inkMuted, letterSpacing: '0.07em', fontWeight: 500, marginTop: '1px' }}>
                    MEDICAL SYSTEMS
                </div>
            </div>
        </div>
    );
}

// ─── Layout ───────────────────────────────────────────────────────────────────
function Layout({ children }) {
    return (
        <div style={{ minHeight: '100vh', background: c.bg, fontFamily: "'Inter','Segoe UI',sans-serif", display: 'flex', flexDirection: 'column' }}>
            <nav style={{
                height: '64px', borderBottom: `1px solid ${c.border}`, background: c.white,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 2rem', position: 'sticky', top: 0, zIndex: 50,
            }}>
                <Logo />
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <Link href="/" style={{ fontSize: '0.85rem', fontWeight: 600, color: c.inkLight, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        ← Back to Home
                    </Link>
                    {['Help Center', 'Emergency'].map(label => (
                        <a key={label} href="#" style={{
                            fontSize: '0.85rem', color: label === 'Emergency' ? c.red : c.inkLight,
                            textDecoration: 'none', fontWeight: label === 'Emergency' ? 600 : 400,
                        }}>{label}</a>
                    ))}
                </div>
            </nav>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem' }}>
                {children}
            </div>

            <footer style={{ borderTop: `1px solid ${c.border}`, background: c.white, padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: c.red }}>TELE-CARE AI</div>
                    <div style={{ fontSize: '0.75rem', color: c.inkMuted }}>© 2024 Clinical Precision Systems. All rights reserved.</div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {['Privacy Policy', 'Terms of Service', 'Support', 'Security'].map(label => (
                        <a key={label} href="#" style={{ fontSize: '0.78rem', color: c.inkMuted, textDecoration: 'none' }}>{label}</a>
                    ))}
                </div>
            </footer>
        </div>
    );
}

// ─── Stepper ──────────────────────────────────────────────────────────────────
function Stepper({ step }) {
    const steps = [{ num: 1, label: 'INFO' }, { num: 2, label: 'SECURITY' }, { num: 3, label: 'AGREEMENT' }];
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.75rem' }}>
            {steps.map((s, i) => {
                const done = step > s.num, active = step === s.num, pending = step < s.num;
                return (
                    <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '50%',
                                background: done ? c.green : active ? c.green : c.white,
                                border: pending ? `2px solid ${c.border}` : `2px solid ${c.green}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: (done || active) ? c.white : c.inkMuted,
                                fontWeight: 700, fontSize: '0.8rem',
                                transition: 'all 0.3s ease',
                            }}>
                                {done ? '✓' : s.num}
                            </div>
                            <span style={{ fontSize: '0.6rem', fontWeight: 600, color: active ? c.ink : c.inkMuted, letterSpacing: '0.06em' }}>{s.label}</span>
                        </div>
                        {i < steps.length - 1 && (
                            <div style={{ flex: 1, height: '2px', background: step > s.num ? c.green : c.border, margin: '0 4px', marginBottom: '18px', transition: 'background 0.3s ease' }} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// ─── Left panel ───────────────────────────────────────────────────────────────
function LeftPanel() {
    return (
        <div style={{ background: c.bg, padding: '2.5rem 2rem', borderRight: `1px solid ${c.border}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 700, color: c.ink, lineHeight: 1.25, margin: '0 0 1rem', maxWidth: '200px' }}>
                    Join the Future of Precision Healthcare
                </h2>
                <p style={{ fontSize: '0.85rem', color: c.inkLight, lineHeight: 1.65, margin: 0, maxWidth: '200px' }}>
                    Access real-time clinical dashboards, AI-assisted diagnostics, and seamless specialist consultations.
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldIcon />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: c.green }}>HIPAA Compliant</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <LockIcon />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: c.green }}>End-to-End Encryption</span>
                </div>
            </div>
        </div>
    );
}

// ─── Shared field components ──────────────────────────────────────────────────
function Field({ label, required, error, children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {label && (
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: c.ink }}>
                    {label}{required && <span style={{ color: c.redLight }}> *</span>}
                </label>
            )}
            {children}
            {error && (
                <span style={{ fontSize: '0.75rem', color: c.redLight, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    ⚠ {error}
                </span>
            )}
        </div>
    );
}

function inputStyle(hasError) {
    return {
        padding: '0.62rem 0.85rem',
        border: `1.5px solid ${hasError ? c.redLight : c.border}`,
        borderRadius: '6px',
        fontSize: '0.9rem',
        background: c.inputBg,
        color: c.ink,
        outline: 'none',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit',
    };
}

function TextInput({ error, onFocus, onBlur, ...props }) {
    const [focused, setFocused] = useState(false);
    return (
        <input
            {...props}
            style={{
                ...inputStyle(!!error),
                borderColor: focused ? (error ? c.redLight : c.green) : (error ? c.redLight : c.border),
            }}
            onFocus={e => { setFocused(true); onFocus && onFocus(e); }}
            onBlur={e => { setFocused(false); onBlur && onBlur(e); }}
        />
    );
}

function SelectInput({ error, ...props }) {
    const [focused, setFocused] = useState(false);
    return (
        <select
            {...props}
            style={{
                ...inputStyle(!!error),
                borderColor: focused ? (error ? c.redLight : c.green) : (error ? c.redLight : c.border),
                cursor: 'pointer',
                appearance: 'auto',
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        />
    );
}

function PrimaryBtn({ children, disabled, onClick, type = 'button' }) {
    const [pressed, setPressed] = useState(false);
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            style={{
                background: disabled ? '#9B9B9B' : c.red,
                color: c.white,
                fontWeight: 600,
                fontSize: '0.92rem',
                padding: '0.72rem 1.75rem',
                borderRadius: '6px',
                border: 'none',
                cursor: disabled ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transform: pressed ? 'scale(0.97)' : 'scale(1)',
                transition: 'transform 0.12s ease, background 0.2s',
                boxShadow: pressed ? 'none' : '0 2px 8px rgba(139,26,26,0.25)',
            }}
        >
            {children}
        </button>
    );
}

function BackBtn({ onClick }) {
    const [pressed, setPressed] = useState(false);
    return (
        <button
            type="button"
            onClick={onClick}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: c.inkLight, fontWeight: 600, fontSize: '0.88rem',
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: 0,
                transform: pressed ? 'translateX(-3px)' : 'translateX(0)',
                transition: 'transform 0.15s ease',
            }}
        >
            ← Back
        </button>
    );
}

// ─── Slide animation wrapper ──────────────────────────────────────────────────
function SlidePane({ direction, children }) {
    // direction: 'left' = entering from right (going forward), 'right' = entering from left (going back)
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const from = direction === 'left' ? '40px' : '-40px';
        el.animate([
            { opacity: 0, transform: `translateX(${from})` },
            { opacity: 1, transform: 'translateX(0)' },
        ], { duration: 280, easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'both' });
    }, [direction]);

    return <div ref={ref}>{children}</div>;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
// Max DOB = 18 years ago from today
function maxDob() {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 18);
    return d.toISOString().split('T')[0];
}

// Min DOB = reasonable oldest age (120 years)
function minDob() {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 120);
    return d.toISOString().split('T')[0];
}

// Only allow letters and spaces in name fields
function onlyAlpha(value) {
    return value.replace(/[^a-zA-Z\s\-']/g, '');
}

// Only allow digits in phone
function onlyDigits(value) {
    return value.replace(/\D/g, '');
}

// ─── STEP 1: Personal Info ────────────────────────────────────────────────────
function StepInfo({ data, setData, onNext, direction }) {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    function touch(field) {
        setTouched(prev => ({ ...prev, [field]: true }));
    }

    function validateField(field, value) {
        switch (field) {
            case 'email':
                if (!value) return 'Email is required.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
                return '';
            case 'first_name':
                if (!value.trim()) return 'First name is required.';
                return '';
            case 'last_name':
                if (!value.trim()) return 'Last name is required.';
                return '';
            case 'dob':
                if (!value) return 'Date of birth is required.';
                if (value > maxDob()) return 'You must be at least 18 years old to register.';
                if (value < minDob()) return 'Please enter a valid date of birth.';
                return '';
            case 'gender':
                if (!value) return 'Please select a gender.';
                return '';
            case 'phone':
                if (!value) return 'Phone number is required.';
                if (value.length !== 10) return 'Phone number must be exactly 10 digits.';
                return '';
            default:
                return '';
        }
    }

    function handleChange(field, raw) {
        let value = raw;
        if (field === 'first_name' || field === 'last_name' || field === 'middle_name') {
            value = onlyAlpha(raw);
        }
        if (field === 'phone') {
            value = onlyDigits(raw).slice(0, 10); // hard cap at 10 digits
        }
        setData(field, value);
        if (touched[field]) {
            setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
        }
    }

    function handleBlur(field) {
        touch(field);
        setErrors(prev => ({ ...prev, [field]: validateField(field, data[field]) }));
    }

    function validate() {
        const fields = ['email', 'first_name', 'last_name', 'dob', 'gender', 'phone'];
        const newErrors = {};
        fields.forEach(f => { newErrors[f] = validateField(f, data[f]); });
        setErrors(newErrors);
        setTouched(Object.fromEntries(fields.map(f => [f, true])));
        return fields.every(f => !newErrors[f]);
    }

    return (
        <SlidePane direction={direction}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: c.ink, margin: '0 0 0.35rem' }}>Create Portal Account</h1>
            <p style={{ fontSize: '0.85rem', color: c.inkMuted, margin: '0 0 1.5rem' }}>
                Already have an account?{' '}
                <Link href="/login" style={{ color: c.redLight, fontWeight: 600, textDecoration: 'none' }}>Login here</Link>
            </p>

            <Stepper step={1} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Field label="Email Address" error={errors.email}>
                    <TextInput
                        type="email"
                        placeholder="e.g. user@telecareai.com"
                        value={data.email}
                        error={errors.email}
                        onChange={e => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                    />
                </Field>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                    <Field label="First Name" error={errors.first_name}>
                        <TextInput
                            type="text"
                            placeholder="First"
                            value={data.first_name}
                            error={errors.first_name}
                            onChange={e => handleChange('first_name', e.target.value)}
                            onBlur={() => handleBlur('first_name')}
                        />
                    </Field>
                    <Field label="Middle Name">
                        <TextInput
                            type="text"
                            placeholder="Middle"
                            value={data.middle_name}
                            onChange={e => handleChange('middle_name', e.target.value)}
                        />
                    </Field>
                    <Field label="Last Name" error={errors.last_name}>
                        <TextInput
                            type="text"
                            placeholder="Last"
                            value={data.last_name}
                            error={errors.last_name}
                            onChange={e => handleChange('last_name', e.target.value)}
                            onBlur={() => handleBlur('last_name')}
                        />
                    </Field>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <Field label="Date of Birth" error={errors.dob}>
                        <TextInput
                            type="date"
                            value={data.dob}
                            error={errors.dob}
                            min={minDob()}
                            max={maxDob()}
                            onChange={e => handleChange('dob', e.target.value)}
                            onBlur={() => handleBlur('dob')}
                        />
                    </Field>
                    <Field label="Gender" error={errors.gender}>
                        <SelectInput
                            value={data.gender}
                            error={errors.gender}
                            onChange={e => handleChange('gender', e.target.value)}
                            onBlur={() => handleBlur('gender')}
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer_not">Prefer not to say</option>
                        </SelectInput>
                    </Field>
                </div>

                <Field label="Phone Number" error={errors.phone}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            padding: '0.62rem 0.85rem',
                            border: `1.5px solid ${errors.phone ? c.redLight : c.border}`,
                            borderRight: 'none',
                            borderRadius: '6px 0 0 6px',
                            background: '#EDF2F7',
                            fontSize: '0.85rem',
                            color: c.inkLight,
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                        }}>+63</div>
                        <input
                            type="tel"
                            placeholder="9XX XXX XXXX"
                            value={data.phone}
                            maxLength={10}
                            onChange={e => handleChange('phone', e.target.value)}
                            onBlur={() => handleBlur('phone')}
                            style={{
                                ...inputStyle(!!errors.phone),
                                borderRadius: '0 6px 6px 0',
                                borderColor: errors.phone ? c.redLight : c.border,
                                flex: 1,
                            }}
                        />
                    </div>
                    {/* digit counter */}
                    <span style={{ fontSize: '0.7rem', color: data.phone.length === 10 ? c.green : c.inkMuted, textAlign: 'right' }}>
                        {data.phone.length}/10 digits
                    </span>
                </Field>
            </div>

            <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'flex-end' }}>
                <PrimaryBtn onClick={() => { if (validate()) onNext(); }}>Continue →</PrimaryBtn>
            </div>

            {/* OR divider + Google */}
            <div style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ flex: 1, height: '1px', background: c.border }} />
                <span style={{ fontSize: '0.75rem', color: c.inkMuted, whiteSpace: 'nowrap' }}>OR REGISTER WITH</span>
                <div style={{ flex: 1, height: '1px', background: c.border }} />
            </div>
            <button type="button" style={{
                width: '100%', padding: '0.7rem', border: `1.5px solid ${c.border}`,
                borderRadius: '6px', background: c.white, fontSize: '0.9rem', color: c.ink,
                fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '0.6rem', transition: 'border-color 0.2s',
                fontFamily: 'inherit',
            }}
                onMouseEnter={e => e.currentTarget.style.borderColor = c.inkLight}
                onMouseLeave={e => e.currentTarget.style.borderColor = c.border}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continue with Google
            </button>
        </SlidePane>
    );
}

// ─── STEP 2: Security ─────────────────────────────────────────────────────────
function StepSecurity({ data, setData, onNext, onBack, direction }) {
    const [errors, setErrors]       = useState({});
    const [showPass, setShowPass]   = useState(false);
    const [showConf, setShowConf]   = useState(false);
    const [touchedConf, setTouchedConf] = useState(false);

    const checks = [
        { label: '8 to 20 characters',           pass: data.password.length >= 8 && data.password.length <= 20 },
        { label: 'At least one uppercase letter', pass: /[A-Z]/.test(data.password) },
        { label: 'At least one number or symbol', pass: /[\d\W_]/.test(data.password) },
    ];
    const passedCount = checks.filter(ch => ch.pass).length;
    const strengthColor = passedCount === 3 ? c.green : passedCount === 2 ? c.orange : c.redLight;

    // Realtime confirm password validation
    const confirmError = touchedConf && data.password_confirmation
        ? data.password !== data.password_confirmation
            ? 'Passwords do not match.'
            : ''
        : touchedConf && !data.password_confirmation
            ? 'Please confirm your password.'
            : '';

    function validate() {
        const e = {};
        if (!data.password)              e.password = 'Password is required.';
        else if (!checks.every(ch => ch.pass)) e.password = 'Password does not meet all requirements.';
        if (!data.password_confirmation) e.password_confirmation = 'Please confirm your password.';
        else if (data.password !== data.password_confirmation) e.password_confirmation = 'Passwords do not match.';
        setErrors(e);
        setTouchedConf(true);
        return Object.keys(e).length === 0;
    }

    return (
        <SlidePane direction={direction}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: c.ink, margin: '0 0 0.35rem' }}>Secure Your Account</h1>
            <p style={{ fontSize: '0.85rem', color: c.inkMuted, margin: '0 0 1.5rem' }}>Step 2: Set up your portal access credentials.</p>

            <Stepper step={2} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {/* Password */}
                <Field label="CREATE PASSWORD" required error={errors.password}>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPass ? 'text' : 'password'}
                            value={data.password}
                            maxLength={20}
                            onChange={e => {
                                setData('password', e.target.value);
                                if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                            }}
                            placeholder="••••••••"
                            style={{
                                ...inputStyle(!!errors.password),
                                paddingRight: '2.75rem',
                                borderColor: errors.password ? c.redLight : data.password.length > 0 ? c.green : c.border,
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPass(v => !v)}
                            tabIndex={-1}
                            style={{
                                position: 'absolute', right: '0.75rem', top: '50%',
                                transform: 'translateY(-50%)', background: 'none',
                                border: 'none', cursor: 'pointer', color: c.inkMuted,
                                padding: 0, display: 'flex', alignItems: 'center',
                            }}
                        >
                            <EyeIcon open={showPass} />
                        </button>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: c.inkMuted }}>
                        Use 8–20 characters with a mix of letters, numbers &amp; symbols.
                        <span style={{ marginLeft: '0.5rem', color: data.password.length > 0 ? (data.password.length > 20 ? c.redLight : c.inkMuted) : c.inkMuted }}>
                            ({data.password.length}/20)
                        </span>
                    </span>

                    {/* Strength bar */}
                    {data.password.length > 0 && (
                        <div style={{ height: '3px', borderRadius: '2px', background: c.border, overflow: 'hidden', marginTop: '2px' }}>
                            <div style={{
                                height: '100%',
                                width: `${(passedCount / 3) * 100}%`,
                                background: strengthColor,
                                transition: 'width 0.3s, background 0.3s',
                            }} />
                        </div>
                    )}
                </Field>

                {/* Confirm password */}
                <Field label="CONFIRM PASSWORD" required error={errors.password_confirmation || confirmError}>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showConf ? 'text' : 'password'}
                            value={data.password_confirmation}
                            maxLength={20}
                            placeholder="••••••••"
                            onChange={e => {
                                setData('password_confirmation', e.target.value);
                                setTouchedConf(true);
                                if (errors.password_confirmation) setErrors(prev => ({ ...prev, password_confirmation: '' }));
                            }}
                            onBlur={() => setTouchedConf(true)}
                            style={{
                                ...inputStyle(!!(errors.password_confirmation || confirmError)),
                                paddingRight: '2.75rem',
                                borderColor: (errors.password_confirmation || confirmError)
                                    ? c.redLight
                                    : (touchedConf && data.password_confirmation && data.password === data.password_confirmation)
                                        ? c.green
                                        : c.border,
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConf(v => !v)}
                            tabIndex={-1}
                            style={{
                                position: 'absolute', right: '0.75rem', top: '50%',
                                transform: 'translateY(-50%)', background: 'none',
                                border: 'none', cursor: 'pointer', color: c.inkMuted,
                                padding: 0, display: 'flex', alignItems: 'center',
                            }}
                        >
                            <EyeIcon open={showConf} />
                        </button>
                    </div>
                    {/* Inline match indicator */}
                    {touchedConf && data.password_confirmation && (
                        <span style={{ fontSize: '0.72rem', color: data.password === data.password_confirmation ? c.green : c.redLight }}>
                            {data.password === data.password_confirmation ? '✓ Passwords match' : '✗ Passwords do not match'}
                        </span>
                    )}
                </Field>

                {/* Checklist */}
                <div style={{ background: '#F7F8FC', border: `1px solid ${c.border}`, borderRadius: '8px', padding: '1rem 1.25rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: c.ink, letterSpacing: '0.07em', marginBottom: '0.65rem' }}>
                        SECURITY CHECKLIST
                    </div>
                    {checks.map(ch => (
                        <div key={ch.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
                            <div style={{
                                width: '16px', height: '16px', borderRadius: '50%',
                                border: `2px solid ${ch.pass ? c.green : c.border}`,
                                background: ch.pass ? c.green : 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'all 0.2s ease',
                            }}>
                                {ch.pass && <CheckIcon />}
                            </div>
                            <span style={{ fontSize: '0.82rem', color: ch.pass ? c.green : c.inkLight, transition: 'color 0.2s' }}>
                                {ch.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <BackBtn onClick={onBack} />
                <PrimaryBtn onClick={() => { if (validate()) onNext(); }}>Continue →</PrimaryBtn>
            </div>
        </SlidePane>
    );
}

// ─── STEP 3: Agreement ────────────────────────────────────────────────────────
function StepAgreement({ data, setData, onBack, onSubmit, processing, direction }) {
    const [errors, setErrors] = useState({});

    function validate() {
        const e = {};
        if (!data.agreed) e.agreed = 'You must agree to the Terms and Conditions to proceed.';
        setErrors(e);
        return !e.agreed;
    }

    return (
        <SlidePane direction={direction}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: c.ink, margin: '0 0 0.35rem' }}>Create Portal Account</h1>
            <p style={{ fontSize: '0.85rem', color: c.inkMuted, margin: '0 0 1.5rem' }}>
                Already have an account?{' '}
                <Link href="/login" style={{ color: c.redLight, fontWeight: 600, textDecoration: 'none' }}>Login here</Link>
            </p>

            <Stepper step={3} />

            {/* Legal header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: `1px solid ${c.border}` }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: c.ink, letterSpacing: '0.05em' }}>LEGAL &amp; TERMS</span>
            </div>

            {/* Agreement card */}
            <div style={{ background: '#F7F8FC', border: `1px solid ${c.border}`, borderRadius: '8px', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: c.ink, marginBottom: '0.4rem' }}>Registration Agreement</div>
                    <div style={{ fontSize: '0.82rem', color: c.inkLight, lineHeight: 1.55 }}>
                        Review our clinical service guidelines and data privacy policy.
                    </div>
                </div>
                <a href="#" style={{
                    whiteSpace: 'nowrap', border: `1.5px solid ${c.green}`, color: c.green,
                    fontWeight: 600, fontSize: '0.82rem', padding: '0.55rem 1rem',
                    borderRadius: '6px', textDecoration: 'none', flexShrink: 0,
                }}>
                    View Terms and Conditions
                </a>
            </div>

            {/* Checkbox */}
            <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <input
                    type="checkbox"
                    id="agree"
                    checked={data.agreed}
                    onChange={e => {
                        setData('agreed', e.target.checked);
                        if (e.target.checked) setErrors({});
                    }}
                    style={{ marginTop: '3px', accentColor: c.green, width: '15px', height: '15px', flexShrink: 0, cursor: 'pointer' }}
                />
                <label htmlFor="agree" style={{ fontSize: '0.85rem', color: c.inkLight, lineHeight: 1.55, cursor: 'pointer' }}>
                    I have read and agree to the{' '}
                    <a href="#" style={{ color: c.redLight, fontWeight: 600, textDecoration: 'none' }}>Terms and Conditions</a>
                    {' '}and understand how my health data will be processed.
                </label>
            </div>
            {errors.agreed && (
                <span style={{ fontSize: '0.75rem', color: c.redLight, marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    ⚠ {errors.agreed}
                </span>
            )}

            <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: `1px solid ${c.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <BackBtn onClick={onBack} />
                <PrimaryBtn disabled={processing} onClick={() => { if (validate()) onSubmit(); }}>
                    {processing ? 'Submitting…' : 'Complete Registration'}
                </PrimaryBtn>
            </div>
        </SlidePane>
    );
}

// ─── Main Register ────────────────────────────────────────────────────────────
export default function Register() {
    const [step, setStep]           = useState(1);
    const [direction, setDirection] = useState('left'); // 'left' = forward, 'right' = back

    const { data, setData, post, processing } = useForm({
        email:                 '',
        first_name:            '',
        middle_name:           '',
        last_name:             '',
        dob:                   '',
        gender:                '',
        phone:                 '',
        password:              '',
        password_confirmation: '',
        agreed:                false,
        name:                  '',
    });

    function goNext() {
        setDirection('left');
        setStep(s => s + 1);
    }

    function goBack() {
        setDirection('right');
        setStep(s => s - 1);
    }

    function handleSubmit() {
        // Build the name field for Laravel auth
        const fullName = [data.first_name, data.middle_name, data.last_name].filter(Boolean).join(' ');
        setData('name', fullName);
        // Small timeout to let setData flush before posting
        setTimeout(() => post(route('register')), 0);
    }

    return (
        <Layout>
            <div style={{
                display: 'flex', background: c.white,
                borderRadius: '12px', border: `1px solid ${c.border}`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                overflow: 'hidden', width: '100%', maxWidth: '920px',
            }}>
                {/* Left panel */}
                <div style={{ width: '220px', flexShrink: 0, display: 'flex' }}>
                    <LeftPanel />
                </div>

                {/* Right content */}
                <div style={{ flex: 1, padding: '2.5rem 2.25rem', overflowY: 'auto', overflowX: 'hidden' }}>
                    {step === 1 && (
                        <StepInfo
                            data={data}
                            setData={setData}
                            onNext={goNext}
                            direction={direction}
                        />
                    )}
                    {step === 2 && (
                        <StepSecurity
                            data={data}
                            setData={setData}
                            onNext={goNext}
                            onBack={goBack}
                            direction={direction}
                        />
                    )}
                    {step === 3 && (
                        <StepAgreement
                            data={data}
                            setData={setData}
                            onBack={goBack}
                            onSubmit={handleSubmit}
                            processing={processing}
                            direction={direction}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}