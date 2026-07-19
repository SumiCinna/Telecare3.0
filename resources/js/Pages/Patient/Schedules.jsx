import { Link, router, usePage } from '@inertiajs/react';

const c = {
    red: '#B31217',
    redLight: '#F8EAE9',
    redBorder: '#E8C9C6',
    green: '#17803D',
    greenLight: '#EAF7EF',
    blue: '#DDE4F4',
    ink: '#111827',
    inkLight: '#5B6477',
    border: '#E8DAD4',
    bg: '#F7F7FC',
    white: '#FFFFFF',
    sidebar: '#F4F6FF',
}

function SelectField({ label, children }) {
    return (
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', minWidth: 0 }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: c.ink }}> {label} </span>
            {children}
        </label>
    );
}

function SpecialistCard({ name, specialty, price, rating, desc, badge, tone = 'green' }) {
    const accent = tone === 'green' ? c.green : c.red;
    const tint = tone === 'green' ? c.greenLight : c.redLight;

    return (
        <div style={{ border: `1px solid ${c.border}`, borderRadius: 8, overflow: 'hidden', background: c.white, display: 'flex', flexDirection: 'column', boxShadow: '0 8px 20px rgba(17,24,39,0.04)' }}>
            <div style={{ height: 170, background: 'linear-gradient(135deg, #74C7A2, #6CA5D8)', position: 'relative' }}>
                <div style={{ position: 'absolute', right: 10, top: 10, background: c.greenLight, color: c.green, fontSize: '0.72rem', fontWeight: 800, borderRadius: 8, padding: '0.25rem 0.45rem' }}>★ {rating}</div>
            </div>
            <div style={{ padding: '0.85rem 0.9rem 0.95rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', minHeight: 170 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div style={{ minWidth: 0 }}>
                        <div style={{ fontWeight: 700, color: c.ink, fontSize: '0.9rem' }}>{name}</div>
                        <div style={{ color: accent, fontSize: '0.78rem', fontWeight: 700 }}>{specialty}</div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '0.78rem', color: c.inkLight }}>
                        <div style={{ fontWeight: 700, color: c.ink }}> ${price} </div>
                        <div>PER SESSION</div>
                    </div>
                </div>
                <p style={{ margin: 0, fontSize: '0.78rem', color: c.inkLight, lineHeight: 1.4 }}>{desc}</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.35rem', color: c.inkLight, fontSize: '0.7rem', fontWeight: 700 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: tone === 'green' ? c.green : c.red }} />
                    {badge}
                </div>
                <button style={{ marginTop: '0.45rem', width: '100%', border: 'none', borderRadius: 3, background: c.red, color: c.white, padding: '0.75rem 0.85rem', fontWeight: 700 }}>Select Specialist</button>
            </div>
        </div>
    );
}

function SidebarItem({ active, icon, label }) {
    return (
        <Link href={label === 'Consultations' ? '/patient/dashboard' : label === 'Schedules' ? '/patient/schedules' : label === 'Care Team' ? '/patient/care-team' : label === 'Records' ? '/patient/records' : '/patient/insights'} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', borderRadius: '4px', textDecoration: 'none', color: active ? c.red : c.inkLight, fontSize: '0.86rem', fontWeight: active ? 700 : 500, background: active ? 'linear-gradient(90deg, rgba(179,18,23,0.10), rgba(179,18,23,0.04))' : 'transparent', boxShadow: active ? 'inset 3px 0 0 #B31217' : 'none' }}>
            <span style={{ width: 22, height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: active ? c.redLight : 'transparent' }}>{icon}</span>
            {label}
        </Link>
    );
}

export default function Schedules({ specialties = [], specialists = [] }) {
    const { auth } = usePage().props;
    const isSchedules = true;

    return (
        <div style={{ minHeight: '100vh', background: c.bg, display: 'grid', gridTemplateColumns: '240px 1fr', fontFamily: "Inter, Segoe UI, sans-serif", color: c.ink }}>
            <aside style={{ background: c.sidebar, borderRight: `1px solid ${c.border}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '1rem 1rem 0.9rem', borderBottom: `1px solid ${c.border}` }}>
                    <div style={{ color: c.red, fontWeight: 900, fontSize: '1.15rem', letterSpacing: '0.02em' }}>TELE-CARE AI</div>
                    <div style={{ marginTop: '1rem', fontSize: '0.7rem', fontWeight: 700, color: c.inkLight }}>PATIENT PORTAL</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.35rem' }}>
                        {auth?.user?.avatar ? (
                            <img src={auth.user.avatar} alt="Profile" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', border: `1.5px solid ${c.border}` }} />
                        ) : (
                            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #8FB2D8, #F2C5B5)', border: '1.5px solid #D2D7E0' }} />
                        )}
                        <div>
                            <div style={{ color: c.red, fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.1 }}>{auth?.user?.name || 'Patient'}</div>
                            <div style={{ fontSize: '0.74rem', color: c.inkLight }}>Patient</div>
                        </div>
                    </div>
                </div>

                <nav style={{ padding: '1rem 0.6rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>▣</span>} label="Consultations" />
                    <SidebarItem active={isSchedules} icon={<span style={{ fontSize: '0.72rem' }}>🗓</span>} label="Schedules" />
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>👥</span>} label="Care Team" />
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>▤</span>} label="Records" />
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>▥</span>} label="Health Insights" />
                </nav>

                <div style={{ marginTop: 'auto', padding: '1rem' }}>
                    <button style={{ width: '100%', border: 'none', background: c.red, color: c.white, borderRadius: 2, padding: '0.85rem 1rem', fontWeight: 700 }}>＋ Start Consultation</button>
                    <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: '0.9rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem' }}>
                        <Link href="/patient/insights" style={{ color: c.inkLight, textDecoration: 'none' }}>Help Center</Link>
                        <button type="button" onClick={() => router.post('/logout', {}, { onSuccess: () => router.visit('/') })} style={{ border: 'none', background: 'transparent', color: c.inkLight, textAlign: 'left', padding: 0, cursor: 'pointer', fontSize: '0.82rem' }}>Sign Out</button>
                    </div>
                </div>
            </aside>

            <main style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <header style={{ height: 50, borderBottom: `1px solid ${c.border}`, background: c.white, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: c.inkLight, background: '#FAFBFF', border: `1px solid ${c.border}`, borderRadius: 8, padding: '0.4rem 0.6rem', width: '100%', maxWidth: 220 }}>
                            <span>⌕</span>
                            <input placeholder="Search specialists..." style={{ border: 'none', outline: 'none', background: 'transparent', width: '100%', fontSize: '0.8rem' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span>🔔</span><span>⚙</span>
                        {auth?.user?.avatar ? (
                            <img src={auth.user.avatar} alt="Profile" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover', border: '2px solid #D2D7E0' }} />
                        ) : (
                            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #f0b8b0, #6fb1d1)' }} />
                        )}
                    </div>
                </header>

                <div style={{ padding: '1rem 1rem 1.2rem', maxWidth: 1200 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                        <div>
                            <a href="/patient/dashboard" style={{ color: '#2f6f49', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700 }}>← Back to Dashboard</a>
                            <h1 style={{ margin: '0.45rem 0 0.25rem', fontSize: '2rem', lineHeight: 1.05 }}>Book an Appointment</h1>
                            <p style={{ margin: 0, color: c.inkLight }}>Step 1: Select a specialist from our network of world-class medical professionals.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', paddingTop: '0.3rem' }}>
                            {[1, 2, 3].map((step, index) => (
                                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: index === 0 ? c.red : '#D9DEEA', color: index === 0 ? c.white : c.inkLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 800 }}>{step}</div>
                                    {index < 2 && <div style={{ width: 34, height: 2, background: '#E8DAD4' }} />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <section style={{ marginTop: '1rem', border: `1px solid ${c.border}`, borderRadius: 6, background: c.white, overflow: 'hidden' }}>
                        <div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '0.8rem', alignItems: 'end' }}>
                            <SelectField label="Specialty"><select style={{ width: '100%', border: `1px solid ${c.redBorder}`, borderRadius: 3, padding: '0.55rem 0.65rem', fontSize: '0.82rem', color: c.inkLight }}><option>All Specialties</option></select></SelectField>
                            <SelectField label="Availability"><select style={{ width: '100%', border: `1px solid ${c.redBorder}`, borderRadius: 3, padding: '0.55rem 0.65rem', fontSize: '0.82rem', color: c.inkLight }}><option>Anytime</option></select></SelectField>
                            <SelectField label="Rating"><select style={{ width: '100%', border: `1px solid ${c.redBorder}`, borderRadius: 3, padding: '0.55rem 0.65rem', fontSize: '0.82rem', color: c.inkLight }}><option>All Ratings</option></select></SelectField>
                            <button style={{ height: 40, background: '#15803D', color: c.white, border: 'none', borderRadius: 2, fontWeight: 700 }}>Apply Filters</button>
                        </div>

                        <div style={{ borderTop: `1px solid ${c.border}`, padding: '0.9rem 1rem 1rem' }}>
                            <div style={{ fontSize: '0.72rem', color: c.inkLight, fontWeight: 800, marginBottom: '0.5rem' }}>COMMON SPECIALTIES</div>
                            <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap' }}>
                                {specialties.length === 0 ? (
                                    <span style={{ color: c.inkLight, fontSize: '0.85rem' }}>No specialties available.</span>
                                ) : (
                                    specialties.map((specialty, index) => (
                                        <button key={specialty} style={{ background: index === 0 ? '#8EE8A7' : '#E1E8FB', color: index === 0 ? '#216B3A' : '#4D5A7A', border: `1px solid ${index === 0 ? '#7FD491' : '#C3CFEF'}`, borderRadius: 9, padding: '0.45rem 0.75rem', fontSize: '0.8rem' }}>{specialty}</button>
                                    ))
                                )}
                            </div>

                            <div style={{ marginTop: '1rem', border: `1px solid ${c.border}`, borderRadius: 8, overflow: 'hidden' }}>
                                <div style={{ height: 164, background: 'linear-gradient(90deg, #f3f3f1 0%, #f3f3f1 72%, #d9edf8 72%, #6aa7d1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.1rem' }}>
                                    <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#222', lineHeight: 1.4 }}>
                                        <div>PAANAKAN</div>
                                        <div>OB-GYNE</div>
                                        <div>PEDIA</div>
                                        <div>PEDIA CARDIO</div>
                                        <div>INTERNAL MEDICINE</div>
                                        <div>FAMILY MEDICINE</div>
                                    </div>
                                    <div style={{ width: 86, height: 86, borderRadius: '50%', background: 'rgba(255,255,255,0.55)', border: '6px solid rgba(255,255,255,0.4)' }} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '1.2rem 0 0.75rem' }}>
                        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Available Specialists ({specialists.length})</h2>
                        <span style={{ fontSize: '0.8rem', color: c.inkLight }}>Sort by: <span style={{ color: c.red, fontWeight: 700 }}>Recommended</span></span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem' }}>
                        {specialists.length === 0 ? (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: c.inkLight, fontSize: '0.92rem' }}>
                                No specialists available.
                            </div>
                        ) : (
                            specialists.map((item) => (
                                <SpecialistCard key={item.id} {...item} />
                            ))
                        )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <button style={{ border: `1px solid ${c.redBorder}`, background: '#E8ECFA', borderRadius: 4, padding: '0.7rem 1.1rem', color: '#51607F', fontWeight: 600 }}>View More Specialists ▾</button>
                    </div>

                    <footer style={{ marginTop: '1rem', borderTop: `1px solid ${c.border}`, paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.6rem', fontSize: '0.78rem', color: c.inkLight }}>
                        <div>
                            <div style={{ color: c.red, fontWeight: 900 }}>TELE-CARE AI</div>
                            <div>© 2024 TELE-CARE AI. Clinical Precision Systems.</div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <span>Privacy Policy</span><span>Terms of Service</span><span>Support</span><span>Security</span>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}