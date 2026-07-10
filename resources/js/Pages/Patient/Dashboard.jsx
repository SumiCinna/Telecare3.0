import { Link, router } from '@inertiajs/react';

const c = {
    red: '#B31217',
    redLight: '#F9E8E8',
    green: '#1F7A3D',
    greenLight: '#EAF7EF',
    ink: '#171A2B',
    inkLight: '#5C6478',
    inkMuted: '#8A93A6',
    border: '#E7D7D2',
    bg: '#F6F7FC',
    white: '#FFFFFF',
    sidebar: '#F3F5FF',
    soft: '#FFF8F7',
}

function Icon({ children, bg = 'transparent', color = c.red }) {
    return (
        <div style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: bg,
            color,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
        }}>
            {children}
        </div>
    );
}

function SidebarItem({ active, icon, label }) {
    return (
        <Link
            href={label === 'Consultations' ? '/patient/dashboard' : label === 'Schedules' ? '/patient/schedules' : label === 'Care Team' ? '/patient/care-team' : label === 'Records' ? '/patient/records' : '/patient/insights'}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '0.8rem 1rem',
                borderRadius: '4px',
                textDecoration: 'none',
                color: active ? c.red : c.inkLight,
                fontSize: '0.86rem',
                fontWeight: active ? 700 : 500,
                background: active ? 'linear-gradient(90deg, rgba(179,18,23,0.10), rgba(179,18,23,0.04))' : 'transparent',
                boxShadow: active ? 'inset 3px 0 0 #B31217' : 'none',
            }}
        >
            <Icon bg={active ? c.redLight : 'transparent'} color={active ? c.red : c.inkLight}>
                {icon}
            </Icon>
            <span>{label}</span>
        </Link>
    )
}

function StatPill({ color, label, value, icon }) {
    return (
        <div style={{
            border: `1px solid ${c.border}`,
            borderRadius: 14,
            background: c.white,
            padding: '1rem 1.1rem',
            boxShadow: '0 8px 24px rgba(23,26,43,0.04)',
            minWidth: 0,
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <Icon bg={color === c.red ? c.redLight : c.greenLight} color={color}>
                    {icon}
                </Icon>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: c.ink }}>{label}</span>
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color }}>
                {value}
            </div>
        </div>
    )
}

function ConsultationCard({ status, statusColor, statusBg, time, doctor, specialty, date, type, primaryLabel, secondaryLabel }) {
    return (
        <div style={{
            border: `1px solid ${c.border}`,
            borderRadius: 12,
            background: c.white,
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(23,26,43,0.05)',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                background: c.soft,
                borderBottom: `1px solid ${c.border}`,
                fontSize: '0.84rem',
            }}>
                <span style={{ color: statusColor, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: statusColor, display: 'inline-block' }} />
                    {status}
                </span>
                <span style={{ color: c.inkLight }}>{time}</span>
            </div>

            <div style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.95rem', alignItems: 'flex-start' }}>
                    <div style={{
                        width: 62,
                        height: 62,
                        borderRadius: 8,
                        background: 'linear-gradient(135deg, #C6D5EE, #8AA6C1)',
                        border: '1px solid #D7E0EA',
                        flexShrink: 0,
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 35% 28%, rgba(255,255,255,0.38), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.08))' }} />
                    </div>

                    <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '1.35rem', fontWeight: 700, color: c.ink, lineHeight: 1.1 }}>{doctor}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: c.green, marginTop: '0.2rem' }}>{specialty}</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.9rem', color: c.inkLight, fontSize: '0.84rem' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                                <span>📅</span>
                                {date}
                            </span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                                <span>💻</span>
                                {type}
                            </span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.7rem', marginTop: '1rem' }}>
                    <button style={{
                        flex: 1,
                        border: 'none',
                        background: c.red,
                        color: c.white,
                        borderRadius: 4,
                        padding: '0.8rem 1rem',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.45rem',
                    }}>
                        {primaryLabel}
                    </button>
                    <button style={{
                        width: 112,
                        border: `1px solid ${c.border}`,
                        background: c.white,
                        color: c.inkLight,
                        borderRadius: 4,
                        padding: '0.8rem 1rem',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                    }}>
                        {secondaryLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Dashboard() {
    return (
        <div style={{ minHeight: '100vh', background: c.bg, color: c.ink, display: 'grid', gridTemplateColumns: '240px 1fr', fontFamily: "Inter, Segoe UI, sans-serif" }}>
            <aside style={{ background: c.sidebar, borderRight: `1px solid ${c.border}`, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <div style={{ padding: '1rem 1rem 0.9rem', borderBottom: `1px solid ${c.border}` }}>
                    <div style={{ color: c.red, fontWeight: 900, fontSize: '1.15rem', letterSpacing: '0.02em' }}>TELE-CARE AI</div>
                </div>

                <div style={{ padding: '0.75rem 1rem 1rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: c.ink, lineHeight: 1.3 }}>Patient Portal</div>
                    <div style={{ fontSize: '0.8rem', color: c.inkLight }}>John Doe</div>
                </div>

                <nav style={{ padding: '0 0.65rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <SidebarItem active icon={<span style={{ fontSize: '0.72rem' }}>▣</span>} label="Consultations" />
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>🗓</span>} label="Schedules" />
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>👥</span>} label="Care Team" />
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>▤</span>} label="Records" />
                    <SidebarItem icon={<span style={{ fontSize: '0.72rem' }}>▥</span>} label="Health Insights" />
                </nav>

                <div style={{ marginTop: 'auto', padding: '1rem' }}>
                    <button style={{
                        width: '100%',
                        border: 'none',
                        background: c.red,
                        color: c.white,
                        fontWeight: 700,
                        borderRadius: 2,
                        padding: '0.85rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem',
                    }}>
                        <span>＋</span> New Appt
                    </button>

                    <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        <Link href="/patient/insights" style={{ color: c.inkLight, textDecoration: 'none', fontSize: '0.82rem' }}>Help Center</Link>
                        <button
                            type="button"
                            onClick={() => router.post('/logout', {}, { onSuccess: () => router.visit('/') })}
                            style={{
                                border: 'none',
                                background: 'transparent',
                                color: c.inkLight,
                                textDecoration: 'none',
                                fontSize: '0.82rem',
                                textAlign: 'left',
                                padding: 0,
                                cursor: 'pointer',
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            <main style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <header style={{ height: 60, borderBottom: `1px solid ${c.border}`, background: c.white, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.2rem 0 1rem', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flex: 1, minWidth: 0 }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${c.red}`, color: c.red, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', flexShrink: 0 }}>☰</div>
                        <div style={{ flex: 1, maxWidth: 390, position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Search consultations..."
                                style={{
                                    width: '100%',
                                    padding: '0.8rem 1rem 0.8rem 2.55rem',
                                    border: `1px solid ${c.border}`,
                                    borderRadius: 10,
                                    background: '#FAFBFF',
                                    fontSize: '0.88rem',
                                    outline: 'none',
                                }}
                            />
                            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: c.inkMuted }}>⌕</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: c.inkLight, flexShrink: 0 }}>
                        <span style={{ fontSize: '1rem' }}>🔔</span>
                        <span style={{ fontSize: '1rem' }}>⚙</span>
                        <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #8FB2D8, #F2C5B5)', border: '2px solid #D2D7E0' }} />
                    </div>
                </header>

                <div style={{ padding: '1.25rem 1.25rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ minWidth: 0 }}>
                            <h1 style={{ margin: 0, fontSize: '2rem', lineHeight: 1.1, color: c.ink }}>My Consultations</h1>
                            <p style={{ margin: '0.55rem 0 0', maxWidth: 640, color: c.inkLight, lineHeight: 1.5, fontSize: '0.92rem' }}>
                                Manage your upcoming appointments, review past clinical summaries, and connect with your specialist care team.
                            </p>
                        </div>

                        <button style={{
                            border: 'none',
                            background: c.red,
                            color: c.white,
                            borderRadius: 10,
                            padding: '0.95rem 1.25rem',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.55rem',
                            boxShadow: '0 10px 20px rgba(179,18,23,0.18)',
                        }}>
                            <span>▣</span>
                            Book New Consultation
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', borderBottom: `1px solid ${c.border}`, paddingBottom: '0.55rem', flexWrap: 'wrap' }}>
                        <span style={{ color: c.red, fontWeight: 700, paddingBottom: '0.4rem', borderBottom: `2px solid ${c.red}` }}>Active &amp; Upcoming</span>
                        <span style={{ color: c.inkLight }}>Completed</span>
                        <span style={{ color: c.inkLight }}>Cancelled</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }}>
                        <ConsultationCard
                            status="In Progress"
                            statusColor={c.red}
                            statusBg={c.redLight}
                            time="Started 5 mins ago"
                            doctor="Dr. Elena Rodriguez"
                            specialty="Senior Pediatrician"
                            date="Today, 10:30 AM"
                            type="Video Call"
                            primaryLabel="Join Meeting"
                            secondaryLabel="Reschedule"
                        />
                        <ConsultationCard
                            status="Scheduled"
                            statusColor={c.green}
                            statusBg={c.greenLight}
                            time="In 3 days"
                            doctor="Dr. James Richardson"
                            specialty="Interventional Cardiology"
                            date="Oct 24, 2:15 PM"
                            type="In-Person (Room 402)"
                            primaryLabel="View Preparation"
                            secondaryLabel="Reschedule"
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '0.9rem' }}>
                        <StatPill color={c.red} label="Upcoming" value="04" icon={<span style={{ fontSize: '0.72rem' }}>📅</span>} />
                        <StatPill color={c.green} label="Completed" value="18" icon={<span style={{ fontSize: '0.72rem' }}>✓</span>} />
                        <StatPill color={c.red} label="Notes Ready" value="07" icon={<span style={{ fontSize: '0.72rem' }}>▤</span>} />
                        <StatPill color={c.green} label="Care Team" value="06" icon={<span style={{ fontSize: '0.72rem' }}>👥</span>} />
                    </div>

                    <section style={{ marginTop: '0.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.85rem' }}>
                            <h2 style={{ margin: 0, fontSize: '1.55rem', color: c.ink }}>Recent History</h2>
                            <a href="#" style={{ color: c.red, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>View All Records</a>
                        </div>

                        <div style={{ background: c.white, border: `1px solid ${c.border}`, borderRadius: 12, overflow: 'hidden' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.2fr 1fr 0.8fr 0.7fr', gap: '0.75rem', padding: '0.9rem 1rem', background: '#F3F6FF', color: c.ink, fontSize: '0.84rem', fontWeight: 700, borderBottom: `1px solid ${c.border}` }}>
                                <div>Date</div>
                                <div>Clinician</div>
                                <div>Type</div>
                                <div>Status</div>
                                <div>Actions</div>
                            </div>

                            {[
                                ['Oct 12, 2024', 'Dr. Sarah Chen', 'Routine Checkup', 'Completed'],
                                ['Sept 28, 2024', 'Dr. Marcus Thorne', 'Consultation', 'Completed'],
                            ].map((row) => (
                                <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.2fr 1fr 0.8fr 0.7fr', gap: '0.75rem', padding: '0.95rem 1rem', fontSize: '0.86rem', borderBottom: `1px solid ${c.border}`, alignItems: 'center' }}>
                                    <div>{row[0]}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontWeight: 600 }}>
                                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #89A9C8, #D4E3F5)' }} />
                                        {row[1]}
                                    </div>
                                    <div>{row[2]}</div>
                                    <div><span style={{ background: c.greenLight, color: c.green, padding: '0.22rem 0.5rem', borderRadius: 3, fontSize: '0.75rem', fontWeight: 700 }}>{row[3]}</span></div>
                                    <a href="#" style={{ color: c.red, textDecoration: 'none', fontWeight: 700, justifySelf: 'start' }}>View Notes</a>
                                </div>
                            ))}
                        </div>
                    </section>

                    <footer style={{ marginTop: 'auto', borderTop: `1px solid ${c.border}`, paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', color: c.inkLight, fontSize: '0.82rem' }}>
                        <div>
                            <div style={{ color: c.red, fontWeight: 900, letterSpacing: '0.02em' }}>TELE-CARE AI</div>
                            <div>© 2024 TELE-CARE AI. Clinical Precision Systems.</div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                            <a href="#" style={{ color: c.inkLight, textDecoration: 'none' }}>Privacy Policy</a>
                            <a href="#" style={{ color: c.inkLight, textDecoration: 'none' }}>Terms of Service</a>
                            <a href="#" style={{ color: c.inkLight, textDecoration: 'none' }}>Support</a>
                            <a href="#" style={{ color: c.inkLight, textDecoration: 'none' }}>Security</a>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    )
}