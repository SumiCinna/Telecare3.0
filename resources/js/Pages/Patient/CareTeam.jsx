import { Link, router, usePage } from '@inertiajs/react';

const c = {
    red: '#B31217',
    redLight: '#F9E8E8',
    green: '#1F7A3D',
    greenLight: '#EAF7EF',
    ink: '#171A2B',
    inkLight: '#5C6478',
    border: '#E7D7D2',
    bg: '#F6F7FC',
    white: '#FFFFFF',
    sidebar: '#F3F5FF',
}

function SidebarItem({ active, icon, label }) {
    return (
        <Link href={label === 'Consultations' ? '/patient/dashboard' : label === 'Schedules' ? '/patient/schedules' : label === 'Care Team' ? '/patient/care-team' : label === 'Records' ? '/patient/records' : '/patient/insights'} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', borderRadius: '4px', textDecoration: 'none', color: active ? c.red : c.inkLight, fontSize: '0.86rem', fontWeight: active ? 700 : 500, background: active ? 'linear-gradient(90deg, rgba(179,18,23,0.10), rgba(179,18,23,0.04))' : 'transparent', boxShadow: active ? 'inset 3px 0 0 #B31217' : 'none' }}>
            <span style={{ width: 22, height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: active ? c.redLight : 'transparent' }}>{icon}</span>
            {label}
        </Link>
    );
}

function TeamCard({ name, role, status, tone = 'green' }) {
    const accent = tone === 'green' ? c.green : c.red;
    const tint = tone === 'green' ? c.greenLight : c.redLight;
    return (
        <div style={{ border: `1px solid ${c.border}`, borderRadius: 10, background: c.white, padding: '1rem', boxShadow: '0 8px 20px rgba(17,24,39,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: 'linear-gradient(135deg, #8CB5D6, #E6B5B3)' }} />
                <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontWeight: 700, color: c.ink }}>{name}</div>
                    <div style={{ color: accent, fontSize: '0.82rem', fontWeight: 700 }}>{role}</div>
                </div>
                <span style={{ background: tint, color: accent, fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.45rem', borderRadius: 999 }}>{status}</span>
            </div>
        </div>
    );
}

export default function CareTeam({ team = [], notes = [] }) {
    const { auth } = usePage().props;
    const isCareTeam = true;

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
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>🗓</span>} label="Schedules" />
                    <SidebarItem active={isCareTeam} icon={<span style={{ fontSize: '0.72rem' }}>👥</span>} label="Care Team" />
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

            <main style={{ minWidth: 0, padding: '1rem 1rem 1.25rem' }}>
                <div style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                        <div>
                            <a href="/patient/dashboard" style={{ color: '#2f6f49', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700 }}>← Back to Dashboard</a>
                            <h1 style={{ margin: '0.45rem 0 0.25rem', fontSize: '2rem', lineHeight: 1.05 }}>Care Team</h1>
                            <p style={{ margin: 0, color: c.inkLight }}>Connect with your care coordinators and assigned clinicians.</p>
                        </div>
                        <button style={{ border: 'none', background: c.red, color: c.white, borderRadius: 10, padding: '0.95rem 1.25rem', fontWeight: 700 }}>Message Team</button>
                    </div>

                    <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem' }}>
                        {team.length === 0 ? (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: c.inkLight, fontSize: '0.92rem' }}>
                                No care team members assigned yet.
                            </div>
                        ) : (
                            team.map((member) => (
                                <TeamCard key={member.id} {...member} />
                            ))
                        )}
                    </div>

                    <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
                        <section style={{ background: c.white, border: `1px solid ${c.border}`, borderRadius: 12, padding: '1rem' }}>
                            <div style={{ fontWeight: 800, marginBottom: '0.75rem' }}>Team Notes</div>
                            {notes.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '1.5rem', color: c.inkLight, fontSize: '0.9rem' }}>
                                    No notes yet.
                                </div>
                            ) : (
                                notes.map((note) => (
                                    <div key={note.id} style={{ padding: '0.75rem 0', borderTop: `1px solid ${c.border}`, color: c.inkLight }}>{note.content}</div>
                                ))
                            )}
                        </section>

                        <section style={{ background: c.white, border: `1px solid ${c.border}`, borderRadius: 12, padding: '1rem' }}>
                            <div style={{ fontWeight: 800, marginBottom: '0.75rem' }}>Quick Contact</div>
                            <div style={{ display: 'grid', gap: '0.7rem' }}>
                                <button style={{ border: `1px solid ${c.border}`, background: c.white, padding: '0.8rem', borderRadius: 8 }}>Request Callback</button>
                                <button style={{ border: `1px solid ${c.border}`, background: c.white, padding: '0.8rem', borderRadius: 8 }}>Send Secure Message</button>
                                <button style={{ border: `1px solid ${c.border}`, background: c.white, padding: '0.8rem', borderRadius: 8 }}>Share Lab Result</button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}