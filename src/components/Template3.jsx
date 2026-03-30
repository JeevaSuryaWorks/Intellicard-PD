import { QRCodeSVG } from 'qrcode.react';

const Template3 = ({ data, preview = false, showQR = false, qrValue }) => {
    const scale = preview ? 0.8 : 1;

    return (
        <div className="visiting-card" style={{
            background: '#0f0f23',
            display: 'flex',
            position: 'relative',
            overflow: 'hidden',
            transform: `scale(${scale})`,
            transformOrigin: 'center'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '8px',
                background: 'linear-gradient(90deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)'
            }} />

            <div style={{
                width: '60%',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h2 style={{
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                    lineHeight: 1.2
                }}>
                    {data.name || 'Your Name'}
                </h2>
                <p style={{
                    fontSize: '1rem',
                    color: '#b8b8d1',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: '600'
                }}>
                    {data.title || 'Your Title'}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.9rem'
                        }}>
                            📧
                        </div>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>{data.email || 'email@example.com'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.9rem'
                        }}>
                            📱
                        </div>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>{data.mobile || '+1 234 567 8900'}</span>
                    </div>
                </div>
            </div>

            <div style={{
                width: '40%',
                background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 1rem'
            }}>
                {data.logoUrl ? (
                    <img
                        src={data.logoUrl}
                        alt="Logo"
                        style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain',
                            marginBottom: '1rem'
                        }}
                    />
                ) : (
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '1rem',
                        boxShadow: '0 8px 24px rgba(240, 147, 251, 0.4)'
                    }}>
                        {data.name?.charAt(0) || 'L'}
                    </div>
                )}
                {data.address && (
                    <p style={{
                        color: '#b8b8d1',
                        fontSize: '0.8rem',
                        textAlign: 'center',
                        lineHeight: 1.4
                    }}>
                        📍 {data.address}
                    </p>
                )}
            </div>
            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '12px',
                    bottom: '12px',
                    background: 'white',
                    padding: '8px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={80} level="H" includeMargin={false} />
                </div>
            )}
        </div>
    );
};

export default Template3;
