import { QRCodeSVG } from 'qrcode.react';

const Template2 = ({ data, preview = false, showQR = false, qrValue }) => {
    const scale = preview ? 0.8 : 1;

    return (
        <div className="visiting-card" style={{
            background: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            transform: `scale(${scale})`,
            transformOrigin: 'center',
            boxShadow: 'var(--glass-shadow)',
            border: '1px solid var(--glass-border)'
        }}>
            {/* Animated glowing accent line */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'var(--accent-gradient)',
                boxShadow: '0 0 20px var(--accent)'
            }} />

            <div style={{ 
                position: 'relative', 
                zIndex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
            }}>
                <div>
                    {data.logoUrl ? (
                        <div style={{
                            width: '70px',
                            height: '70px',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '10px',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src={data.logoUrl}
                                alt="Logo"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    ) : (
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'var(--accent-gradient)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.8rem',
                            fontWeight: '900',
                            color: 'white',
                            boxShadow: '0 8px 20px rgba(245, 87, 108, 0.3)'
                        }}>
                            {data.name?.charAt(0) || 'L'}
                        </div>
                    )}
                </div>

                {showQR && (
                    <div style={{
                        background: 'white',
                        padding: '8px',
                        borderRadius: '12px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}>
                        <QRCodeSVG value={qrValue || ''} size={60} level="H" />
                    </div>
                )}
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    color: 'white',
                    marginBottom: '0.25rem',
                    letterSpacing: '-1px',
                    textTransform: 'uppercase'
                }}>
                    {data.name || 'Your Name'}
                </h2>
                <div style={{
                    display: 'inline-block',
                    padding: '0.25rem 1rem',
                    background: 'var(--accent)',
                    color: 'white',
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    borderRadius: '4px',
                    letterSpacing: '1px',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase'
                }}>
                    {data.title || 'Creative Specialist'}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '1.5rem'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</span>
                        <span style={{ fontSize: '0.9rem', color: 'white', fontWeight: '500' }}>{data.mobile || '+1 (000) 000-0000'}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</span>
                        <span style={{ fontSize: '0.9rem', color: 'white', fontWeight: '500' }}>{data.email || 'hello@world.com'}</span>
                    </div>
                </div>
            </div>

            {/* Decorative tech pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(var(--glass-border) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.1,
                pointerEvents: 'none'
            }} />
        </div>
    );
};

export default Template2;
