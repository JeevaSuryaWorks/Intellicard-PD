import { QRCodeSVG } from 'qrcode.react';

const Template5 = ({ data, preview = false, showQR = false, qrValue }) => {
    const scale = preview ? 0.8 : 1;

    return (
        <div className="visiting-card" style={{
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            transform: `scale(${scale})`,
            transformOrigin: 'center'
        }}>
            <div style={{
                background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
                padding: '2rem 2.5rem',
                paddingBottom: '3rem'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h2 style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '0.5rem'
                        }}>
                            {data.name || 'Your Name'}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: '500'
                        }}>
                            {data.title || 'Your Title'}
                        </p>
                    </div>
                    {data.logoUrl ? (
                        <img
                            src={data.logoUrl}
                            alt="Logo"
                            style={{
                                width: '60px',
                                height: '60px',
                                objectFit: 'contain',
                                background: 'white',
                                padding: '0.5rem',
                                borderRadius: '8px'
                            }}
                        />
                    ) : (
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'white',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: '#0f2027'
                        }}>
                            {data.name?.charAt(0) || 'L'}
                        </div>
                    )}
                </div>
            </div>

            <div style={{
                padding: '2rem 2.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid #e0e0e0'
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.9rem'
                        }}>
                            ✉
                        </div>
                        <span style={{ color: '#1a1a2e', fontSize: '0.9rem', fontWeight: '500' }}>
                            {data.email || 'email@example.com'}
                        </span>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid #e0e0e0'
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.9rem'
                        }}>
                            ☎
                        </div>
                        <span style={{ color: '#1a1a2e', fontSize: '0.9rem', fontWeight: '500' }}>
                            {data.mobile || '+1 234 567 8900'}
                        </span>
                    </div>

                    {data.address && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '0.9rem'
                            }}>
                                📍
                            </div>
                            <span style={{ color: '#1a1a2e', fontSize: '0.85rem', fontWeight: '500' }}>
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
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    border: '1px solid #e0e0e0'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={80} level="H" includeMargin={false} />
                </div>
            )}
        </div>
    );
};

export default Template5;
