import { QRCodeSVG } from 'qrcode.react';

const Template1 = ({ data, preview = false, showQR = false, qrValue }) => {
    const scale = preview ? 0.8 : 1;

    return (
        <div className="visiting-card" style={{
            background: 'var(--bg-secondary)',
            display: 'flex',
            transform: `scale(${scale})`,
            transformOrigin: 'center',
            boxShadow: 'var(--glass-shadow)',
            border: '1px solid var(--glass-border)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Dynamic background element */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '60%',
                height: '140%',
                background: 'var(--primary-gradient)',
                transform: 'rotate(-5deg)',
                opacity: 0.15,
                zIndex: 0
            }} />

            <div style={{
                width: '32%',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(20px)',
                padding: '2rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: '1px solid var(--glass-border)',
                zIndex: 1
            }}>
                {data.logoUrl ? (
                    <div style={{
                        width: '90px',
                        height: '90px',
                        background: 'white',
                        padding: '10px',
                        borderRadius: '16px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                        marginBottom: '1rem',
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
                        width: '80px',
                        height: '80px',
                        background: 'var(--primary-gradient)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '1rem',
                        boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
                    }}>
                        {data.name?.charAt(0) || 'L'}
                    </div>
                )}
                <div style={{
                    height: '2px',
                    width: '30px',
                    background: 'var(--primary)',
                    borderRadius: '2px',
                    marginTop: '0.5rem'
                }} />
            </div>

            <div style={{
                flex: 1,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                zIndex: 1,
                position: 'relative'
            }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{
                        fontSize: '2.2rem',
                        fontWeight: '800',
                        color: 'white',
                        margin: 0,
                        letterSpacing: '-0.5px',
                        lineHeight: 1
                    }}>
                        {data.name || 'Your Name'}
                    </h2>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--primary)',
                        marginTop: '0.5rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        {data.title || 'Executive Director'}
                    </p>
                </div>

                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    borderLeft: '3px solid var(--primary)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.2rem', opacity: 0.7 }}>✉</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{data.email || 'hello@example.com'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.2rem', opacity: 0.7 }}>✆</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{data.mobile || '+1 (555) 000-0000'}</span>
                    </div>
                    {data.address && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ fontSize: '1.2rem', opacity: 0.7 }}>⚲</span>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{data.address}</span>
                        </div>
                    )}
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    background: 'white',
                    padding: '10px',
                    borderRadius: '14px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={70} level="H" />
                </div>
            )}
            
            {/* Corner accent */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '40px',
                height: '40px',
                background: 'var(--primary-gradient)',
                clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
            }} />
        </div>
    );
};

export default Template1;
