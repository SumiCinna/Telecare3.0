import { Link } from '@inertiajs/react';
import { colors, fonts } from '../theme';

export default function Welcome() {
    return (
        <div style={{ fontFamily: fonts.body, color: colors.ink, background: colors.white }}>
            <Nav />
            <Hero />
            <Services />
            <TeleCareAI />
            <PhysicalClinic />
            <CTABand />
            <Footer />
        </div>
    );
}

function Nav() {
    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 5vw',
            height: '64px',
            borderBottom: `1px solid ${colors.border}`,
            background: colors.white,
            position: 'sticky',
            top: 0,
            zIndex: 100,
        }}>
            {/* Logo block */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexShrink: 0 }}>
                <img
                    src="/images/logo.jpg"
                    alt="Telecare"
                    style={{ height: '40px', width: '40px', objectFit: 'contain' }}
                />
                <div style={{
                    width: '1px',
                    height: '32px',
                    background: colors.border,
                    margin: '0 0.85rem',
                }} />
                <div>
                    <div style={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: colors.ink,
                        lineHeight: 1.1,
                        letterSpacing: '0.04em',
                    }}>
                        TELECARE
                    </div>
                    <div style={{
                        fontSize: '0.6rem',
                        color: colors.inkMuted,
                        letterSpacing: '0.07em',
                        fontWeight: 500,
                        marginTop: '1px',
                    }}>
                        MEDICAL SYSTEMS
                    </div>
                </div>
            </div>

            {/* Nav links */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {[
                    { label: 'Services', href: '#services' },
                    { label: 'Tele-Care AI', href: '#telecare-ai' },
                    { label: 'Visit Us', href: '#visit' },
                    { label: 'Home', href: '/', active: true },
                ].map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        style={{
                            fontSize: '0.88rem',
                            color: item.active ? colors.red : colors.inkLight,
                            fontWeight: item.active ? 600 : 400,
                            borderBottom: item.active ? `2px solid ${colors.red}` : '2px solid transparent',
                            paddingBottom: '2px',
                            transition: 'color 0.2s, border-color 0.2s',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                            if (!item.active) {
                                e.currentTarget.style.color = colors.red;
                                e.currentTarget.style.borderBottomColor = colors.red;
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!item.active) {
                                e.currentTarget.style.color = colors.inkLight;
                                e.currentTarget.style.borderBottomColor = 'transparent';
                            }
                        }}
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Auth buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Link href="/login" style={{
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: colors.ink,
                    padding: '0.5rem 1.1rem',
                    textDecoration: 'none',
                }}>
                    Login
                </Link>
                <Link href="/register" style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: colors.white,
                    padding: '0.55rem 1.3rem',
                    background: colors.red,
                    borderRadius: '5px',
                    display: 'inline-block',
                    textDecoration: 'none',
                }}>
                    Register
                </Link>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '2.5rem',
            padding: '5rem 5vw 4.5rem',
            maxWidth: '1280px',
            margin: '0 auto',
        }}>
            <div style={{ flex: '1 1 420px', animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both' }}>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                    background: colors.greenLight,
                    color: colors.green,
                    fontSize: '0.75rem', fontWeight: 600,
                    padding: '0.35rem 0.85rem', borderRadius: '50px',
                    marginBottom: '1.5rem',
                }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.green, animation: 'pulse 1.8s ease-in-out infinite' }} />
                    DOH Licensed &amp; PhilHealth Accredited
                </div>

                <h1 style={{
                    fontFamily: fonts.display,
                    fontSize: 'clamp(2rem, 4.2vw, 3rem)',
                    fontWeight: 600,
                    lineHeight: 1.15,
                    color: colors.red,
                    margin: '0 0 1.1rem',
                    maxWidth: '520px',
                }}>
                    Trusted Clinical Excellence, AI-Powered Care.
                </h1>

                <p style={{
                    fontSize: '0.97rem',
                    lineHeight: 1.7,
                    color: colors.inkLight,
                    maxWidth: '460px',
                    margin: '0 0 2rem',
                }}>
                    Telecare combines the precision of high-tech diagnostics with the accessibility of telemedicine. From general consultations to specialist care, we're here for you 24/7.
                </p>

                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                    <Link href="/register" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: colors.green, color: colors.white,
                        fontWeight: 600, fontSize: '0.95rem',
                        padding: '0.8rem 1.6rem', borderRadius: '6px',
                        textDecoration: 'none',
                    }}>
                        <i className="ti ti-calendar-plus" aria-hidden="true" />
                        Book Online Consultation
                    </Link>
                    <a href="#services" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        border: `1.5px solid ${colors.border}`,
                        color: colors.ink, fontWeight: 500, fontSize: '0.95rem',
                        padding: '0.8rem 1.5rem', borderRadius: '6px',
                        background: colors.white,
                        textDecoration: 'none',
                    }}>
                        View Our Services
                    </a>
                </div>
            </div>

            <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'flex-end', animation: 'fadeUp 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) both' }}>
                <AIStatusCard />
            </div>
        </section>
    );
}

function AIStatusCard() {
    return (
        <div style={{
            background: colors.white,
            border: `1px solid ${colors.border}`,
            borderRadius: '14px',
            padding: '1.5rem',
            width: '100%',
            maxWidth: '340px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="ti ti-brain" style={{ color: colors.teal, fontSize: '1rem' }} />
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: colors.ink }}>Tele-Care AI Active</span>
                </div>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.green, animation: 'pulse 1.8s ease-in-out infinite', display: 'block' }} />
            </div>
            <p style={{ fontSize: '0.78rem', color: colors.inkMuted, lineHeight: 1.5, margin: '0 0 0.6rem' }}>
                Real-time Clinical Analysis
            </p>
            <p style={{ fontSize: '0.82rem', color: colors.inkLight, lineHeight: 1.55, margin: 0 }}>
                Your AI-powered clinical companion for real-time diagnostics and smart consultation summaries.
            </p>

            <div style={{ marginTop: '1.25rem', borderTop: `1px solid ${colors.border}`, paddingTop: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {[
                    { icon: 'ti-report-medical', label: 'Smart AI Summaries', color: colors.red },
                    { icon: 'ti-shield-lock', label: 'Secure Digital Records', color: colors.green },
                    { icon: 'ti-scan', label: 'OCR Lab Analysis', color: colors.red },
                    { icon: 'ti-activity', label: 'Real-time Vitals Tracking', color: colors.green },
                ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <i className={`ti ${item.icon}`} style={{ color: item.color, fontSize: '0.9rem' }} />
                        <span style={{ fontSize: '0.8rem', color: colors.inkLight, fontWeight: 500 }}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Services() {
    const items = [
        { icon: 'ti-video', title: 'Video teleconsultation', body: 'Face-to-face consultations with licensed doctors over secure, high-quality video — from any device.' },
        { icon: 'ti-calendar', title: 'Smart appointment booking', body: 'Calendar-based scheduling that shows real doctor availability and prevents double bookings.' },
        { icon: 'ti-shield-check', title: 'Doctor + staff confirmation', body: 'Every booking is reviewed by your doctor and our care team before payment — no surprise sessions.' },
        { icon: 'ti-credit-card', title: 'Secure payments', body: 'Pay your consultation fee online. Your meeting link only appears once payment is confirmed.' },
        { icon: 'ti-file-text', title: 'Prescription & lab scanning', body: 'Upload a photo of your prescription or lab result and have the text extracted automatically.' },
    ];

    return (
        <section id="services" style={{ padding: '5rem 5vw', background: colors.white }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h2 style={{
                            fontFamily: fonts.display,
                            fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
                            color: colors.red,
                            margin: '0 0 0.5rem',
                            borderLeft: `4px solid ${colors.red}`,
                            paddingLeft: '0.85rem',
                        }}>
                            Comprehensive Medical Services
                        </h2>
                        <p style={{ fontSize: '0.92rem', color: colors.inkLight, margin: 0, paddingLeft: '1.1rem', maxWidth: '520px' }}>
                            Providing a wide range of specialized treatments and diagnostic support with clinical precision.
                        </p>
                    </div>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        fontSize: '0.75rem', fontWeight: 600, color: colors.green,
                        background: colors.greenLight, padding: '0.4rem 0.9rem', borderRadius: '50px',
                        alignSelf: 'flex-start',
                    }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.green }} />
                        24/7 Availability
                    </span>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {items.map((s) => (
                        <ServiceCard key={s.title} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ icon, title, body }) {
    return (
        <div
            style={{
                border: `1px solid ${colors.border}`,
                borderRadius: '10px',
                padding: '1.6rem',
                background: colors.white,
                transition: 'box-shadow 0.25s, transform 0.25s, border-color 0.25s',
                cursor: 'default',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(192,57,43,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = colors.red;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = colors.border;
            }}
        >
            <div style={{
                width: '38px', height: '38px', borderRadius: '8px',
                background: colors.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem', color: colors.red, fontSize: '1.15rem',
            }}>
                <i className={`ti ${icon}`} aria-hidden="true" />
            </div>
            <h3 style={{ fontFamily: fonts.display, fontSize: '1rem', color: colors.ink, margin: '0 0 0.5rem', fontWeight: 600 }}>
                {title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: colors.inkLight, lineHeight: 1.6, margin: 0 }}>
                {body}
            </p>
        </div>
    );
}

function TeleCareAI() {
    return (
        <section id="telecare-ai" style={{
            padding: '0 5vw 5rem',
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexWrap: 'wrap',
                minHeight: '380px',
            }}>
                <div style={{
                    flex: '1 1 360px',
                    background: colors.teal,
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <p style={{
                        fontFamily: fonts.mono,
                        fontSize: '0.72rem',
                        color: 'rgba(255,255,255,0.65)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.07em',
                        margin: '0 0 0.85rem',
                    }}>
                        Next-Gen Telemedicine
                    </p>
                    <h2 style={{
                        fontFamily: fonts.display,
                        fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                        color: colors.white,
                        margin: '0 0 1rem',
                        lineHeight: 1.2,
                    }}>
                        Tele-Care AI: Your Virtual Health Companion
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: '0 0 1.75rem', maxWidth: '400px' }}>
                        Our platform isn't just a video call — it's a smart medical workspace designed for precision and security.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                        {[
                            { icon: 'ti-report-medical', label: 'Smart AI Summaries', body: 'Instantly receive detailed SOAP notes and action plans after every consultation.' },
                            { icon: 'ti-shield-lock', label: 'Secure Digital Records', body: 'All your lab results and consultation history are protected with enterprise-grade encryption.' },
                            { icon: 'ti-scan', label: 'OCR Lab Analysis', body: 'Upload physical records; our AI digitizes them into searchable trend data automatically.' },
                            { icon: 'ti-activity', label: 'Real-time Vitals', body: 'Integrated vitals monitoring during the call for a more thorough clinical assessment.' },
                        ].map((item) => (
                            <div key={item.label}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                                    <i className={`ti ${item.icon}`} style={{ color: colors.red, fontSize: '0.9rem' }} />
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: colors.white }}>{item.label}</span>
                                </div>
                                <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, margin: 0 }}>{item.body}</p>
                            </div>
                        ))}
                    </div>

                    <Link href="/register" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: colors.red, color: colors.white,
                        fontWeight: 600, fontSize: '0.9rem',
                        padding: '0.8rem 1.6rem', borderRadius: '6px',
                        alignSelf: 'flex-start',
                        textDecoration: 'none',
                    }}>
                        Start Consultation Now
                        <i className="ti ti-arrow-right" aria-hidden="true" />
                    </Link>
                </div>

                <div style={{
                    flex: '1 1 300px',
                    background: 'linear-gradient(135deg, #0a5252, #0D6B6B)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5rem',
                    minHeight: '280px',
                }}>
                    <DashboardMockup />
                </div>
            </div>
        </section>
    );
}

function DashboardMockup() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '12px',
            padding: '1.25rem',
            width: '100%',
            maxWidth: '280px',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Patient Dashboard</span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.green, display: 'block' }} />
            </div>
            {[
                { label: 'Upcoming Appointment', value: 'Today, 2:30 PM', color: colors.green },
                { label: 'Status', value: 'Confirmed & Paid', color: colors.green },
                { label: 'Doctor', value: 'Dr. J. Reyes, GP', color: 'rgba(255,255,255,0.7)' },
                { label: 'Consultation type', value: 'Video Call', color: 'rgba(255,255,255,0.7)' },
            ].map((row) => (
                <div key={row.label} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>{row.label}</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: row.color }}>{row.value}</span>
                </div>
            ))}
            <div style={{
                marginTop: '1rem',
                background: colors.green,
                borderRadius: '6px',
                padding: '0.55rem',
                textAlign: 'center',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: colors.white,
            }}>
                Join Video Call
            </div>
        </div>
    );
}

function PhysicalClinic() {
    return (
        <section id="visit" style={{
            padding: '5rem 5vw',
            background: colors.bg,
            borderTop: `1px solid ${colors.border}`,
        }}>
            <div style={{
                maxWidth: '1280px', margin: '0 auto',
                display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center',
            }}>
                <div style={{ flex: '1 1 380px' }}>
                    <h2 style={{
                        fontFamily: fonts.display,
                        fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
                        color: colors.red,
                        margin: '0 0 0.5rem',
                        borderLeft: `4px solid ${colors.red}`,
                        paddingLeft: '0.85rem',
                    }}>
                        Visit Our Physical Clinic
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: colors.inkLight, margin: '0 0 2rem', paddingLeft: '1.1rem', lineHeight: 1.65 }}>
                        Our main facility is fully equipped with advanced medical equipment and staffed by expert medical professionals 24 hours a day.
                    </p>

                    {[
                        { icon: 'ti-map-pin', label: 'LOCATION', value: 'North Caloocan City, Metro Manila', sub: 'Conveniently accessible via main transport routes.' },
                        { icon: 'ti-clock', label: 'OPERATING HOURS', value: '24 Hours / 7 Days a Week', sub: 'Emergency and routine services always available.' },
                        { icon: 'ti-phone', label: 'HOTLINE', value: '0966-303-8227', sub: null },
                    ].map((item) => (
                        <div key={item.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '8px',
                                background: colors.redLight,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: colors.red, fontSize: '1rem', flexShrink: 0,
                            }}>
                                <i className={`ti ${item.icon}`} aria-hidden="true" />
                            </div>
                            <div>
                                <p style={{ fontFamily: fonts.mono, fontSize: '0.68rem', color: colors.inkMuted, margin: '0 0 0.2rem', letterSpacing: '0.05em' }}>
                                    {item.label}
                                </p>
                                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: colors.ink, margin: 0 }}>{item.value}</p>
                                {item.sub && <p style={{ fontSize: '0.78rem', color: colors.inkMuted, margin: '0.2rem 0 0' }}>{item.sub}</p>}
                            </div>
                        </div>
                    ))}

                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        border: `1.5px solid ${colors.red}`,
                        color: colors.red, fontWeight: 600, fontSize: '0.88rem',
                        padding: '0.7rem 1.4rem', borderRadius: '6px',
                        background: colors.white,
                        textDecoration: 'none',
                    }}>
                        <i className="ti ti-map-2" aria-hidden="true" />
                        Get Directions on Maps
                    </a>
                </div>

                <div style={{
                    flex: '1 1 340px',
                    background: 'linear-gradient(135deg, #0a2a3a, #0D4060)',
                    borderRadius: '14px',
                    minHeight: '320px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5rem',
                }}>
                    <ClinicMockup />
                </div>
            </div>
        </section>
    );
}

function ClinicMockup() {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                margin: '0 auto 1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                <i className="ti ti-building-hospital" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.7)' }} />
            </div>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 0.4rem' }}>
                Telecare Medical Center
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                North Caloocan City, Metro Manila
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['General Consultation', 'Diagnostic Imaging', 'Laboratory Services'].map((s) => (
                    <div key={s} style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '6px', padding: '0.55rem 1rem',
                        fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)',
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                    }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: colors.green }} />
                        {s}
                    </div>
                ))}
            </div>
        </div>
    );
}

function CTABand() {
    return (
        <section style={{
            background: colors.red,
            padding: '4.5rem 5vw',
            textAlign: 'center',
        }}>
            <h2 style={{
                fontFamily: fonts.display,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                color: colors.white,
                margin: '0 0 0.75rem',
            }}>
                Accessible Care Whenever You Need It
            </h2>
            <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.8)', margin: '0 auto 2.2rem', maxWidth: '520px' }}>
                Join thousands of patients and clinicians already benefiting from AI-enhanced medical precision and seamless consultations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/register" style={{
                    background: colors.green, color: colors.white,
                    fontWeight: 600, fontSize: '0.97rem',
                    padding: '0.85rem 2rem', borderRadius: '6px',
                    display: 'inline-block',
                    textDecoration: 'none',
                }}>
                    Register Now
                </Link>
                <a href="#services" style={{
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    color: colors.white, fontWeight: 600, fontSize: '0.97rem',
                    padding: '0.85rem 2rem', borderRadius: '6px',
                    display: 'inline-block', background: 'transparent',
                    textDecoration: 'none',
                }}>
                    Contact Support
                </a>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer style={{
            background: colors.ink,
            color: 'rgba(255,255,255,0.65)',
            padding: '3rem 5vw',
        }}>
            <div style={{
                maxWidth: '1280px', margin: '0 auto',
                display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between',
            }}>
                <div style={{ flex: '1 1 240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '0.85rem' }}>
                        <img
                            src="/images/logo.jpg"
                            alt="Telecare"
                            style={{
                                height: '36px', width: '36px', objectFit: 'contain',
                                filter: 'brightness(0) invert(1)',
                            }}
                        />
                        <div style={{
                            width: '1px', height: '28px',
                            background: 'rgba(255,255,255,0.15)',
                            margin: '0 0.75rem',
                        }} />
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.88rem', color: colors.white, lineHeight: 1.1, letterSpacing: '0.04em' }}>
                                TELECARE
                            </div>
                            <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.07em', marginTop: '1px' }}>
                                MEDICAL SYSTEMS
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.6, maxWidth: '240px', margin: 0 }}>
                        Telecare Medical Systems. Providing 24/7 Clinical Excellence, Diagnostics, and Telemedicine Care.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                    <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: colors.white, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 0.85rem' }}>
                            Services
                        </p>
                        {['Online Consultation', 'Laboratory Panels', 'Birthing Center', 'Diagnostic Imaging'].map((s) => (
                            <p key={s} style={{ fontSize: '0.83rem', margin: '0 0 0.5rem' }}>{s}</p>
                        ))}
                    </div>
                    <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: colors.white, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 0.85rem' }}>
                            Company
                        </p>
                        {['Our Clinic', 'Privacy Policy', 'Accreditations', 'Contact Us'].map((s) => (
                            <p key={s} style={{ fontSize: '0.83rem', margin: '0 0 0.5rem' }}>{s}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{
                maxWidth: '1280px', margin: '2.5rem auto 0',
                paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem',
            }}>
                <span style={{ fontSize: '0.78rem' }}>© 2026 Telecare Medical Systems. All rights reserved.</span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <i className="ti ti-world" style={{ fontSize: '1.1rem', cursor: 'pointer' }} />
                    <i className="ti ti-share" style={{ fontSize: '1.1rem', cursor: 'pointer' }} />
                </div>
            </div>
        </footer>
    );
}