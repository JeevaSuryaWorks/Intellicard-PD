import { QRCodeSVG } from 'qrcode.react';

const Template7 = ({ data, preview = false, showQR = false, qrValue }) => {
    const scale = preview ? 0.8 : 1;

    return (
        <div className="visiting-card" style={{
            background: '#000000',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            transform: `scale(${scale})`,
            transformOrigin: 'center'
        }}>
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '150%',
                height: '200%',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                transform: 'rotate(15deg)',
                opacity: 0.15
            }} />

            <div style={{
                position: 'relative',
                zIndex: 1,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                <div>
                    {data.logoUrl ? (
                        <img
                            src={data.logoUrl}
                            alt="Logo"
                            style={{
                                width: '60px',
                                height: '60px',
                                objectFit: 'contain',
                                marginBottom: '1rem',
                                filter: 'brightness(0) invert(1)'
                            }}
                        />
                    ) : (
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            color: 'black',
                            marginBottom: '1rem',
                            boxShadow: '0 4px 16px rgba(250, 112, 154, 0.5)'
                        }}>
                            {data.name?.charAt(0) || 'L'}
                        </div>
                    )}
                </div>

                <div>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: 'white',
                        marginBottom: '0.5rem',
                        lineHeight: 1,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        {data.name || 'Your Name'}
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: '700',
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        {data.title || 'Your Title'}
                    </p>
                </div>

                <div style={{
                    borderTop: '2px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Email
                        </span>
                        <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>
                            {data.email || 'email@example.com'}
                        </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Phone
                        </span>
                        <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>
                            {data.mobile || '+1 234 567 8900'}
                        </span>
                    </div>
                    {data.address && (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '0.25rem'
                        }}>
                            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Address
                            </span>
                            <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '600', textAlign: 'right', maxWidth: '60%' }}>
                                {data.address}
                            </span>
                        </div>
                    )}
                </div>
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

export default Template7;
