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

export default function Section({ title, subtitle }) {
    const { auth } = usePage().props;
    const isRecords = title === 'Records';
    const isInsights = title === 'Health Insights';

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
                            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #8CB5D8, #F2C5B5)', border: '1.5px solid #D2D7E0' }} />
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
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>👥</span>} label="Care Team" />
                    <SidebarItem active={isRecords} icon={<span style={{ fontSize: '0.72rem' }}>▤</span>} label="Records" />
                    <SidebarItem active={isInsights} icon={<span style={{ fontSize: '0.72rem' }}>▥</span>} label="Health Insights" />
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
                            <h1 style={{ margin: '0.45rem 0 0.25rem', fontSize: '2rem', lineHeight: 1.05 }}>{title}</h1>
                            <p style={{ margin: 0, color: c.inkLight }}>{subtitle}</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', background: c.white, border: `1px solid ${c.border}`, borderRadius: 12, padding: '2rem', textAlign: 'center', color: c.inkLight }}>
                        {isRecords ? 'No records available yet.' : 'No insights available yet.'}
                    </div>
                </div>
            </main>
        </div>
    );
}
