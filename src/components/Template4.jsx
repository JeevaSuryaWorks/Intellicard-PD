import { QRCodeSVG } from 'qrcode.react';

const Template4 = ({ data, preview = false, showQR = false, qrValue }) => {
    const scale = preview ? 0.8 : 1;

    return (
        <div className="visiting-card" style={{
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.5rem',
            position: 'relative',
            transform: `scale(${scale})`,
            transformOrigin: 'center'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: '2.5rem',
                width: '60px',
                height: '4px',
                background: '#667eea',
                borderRadius: '0 0 4px 4px'
            }} />

            <div>
                {data.logoUrl ? (
                    <img
                        src={data.logoUrl}
                        alt="Logo"
                        style={{
                            width: '50px',
                            height: '50px',
                            objectFit: 'contain',
                            marginBottom: '1rem'
                        }}
                    />
                ) : (
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: '#667eea',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '1rem'
                    }}>
                        {data.name?.charAt(0) || 'L'}
                    </div>
                )}
            </div>

            {/* Content */}
            <div>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#1a1a2e',
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.5px'
                }}>
                    {data.name || 'Your Name'}
                </h2>
                <p style={{
                    fontSize: '1rem',
                    color: '#667eea',
                    marginBottom: '2rem',
                    fontWeight: '500'
                }}>
                    {data.title || 'Your Title'}
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: '0.75rem',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#667eea'
                    }} />
                    <span style={{ color: '#1a1a2e', fontSize: '0.9rem' }}>{data.email || 'email@example.com'}</span>

                    <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#667eea'
                    }} />
                    <span style={{ color: '#1a1a2e', fontSize: '0.9rem' }}>{data.mobile || '+1 234 567 8900'}</span>

                    {data.address && (
                        <>
                            <div style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#667eea'
                            }} />
                            <span style={{ color: '#1a1a2e', fontSize: '0.85rem' }}>{data.address}</span>
                        </>
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

export default Template4;
