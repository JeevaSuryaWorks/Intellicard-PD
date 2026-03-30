import { QRCodeSVG } from 'qrcode.react';

const Template6 = ({ data, preview = false, showQR = false, qrValue }) => {
    const scale = preview ? 0.8 : 1;

    return (
        <div className="visiting-card" style={{
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            transform: `scale(${scale})`,
            transformOrigin: 'center'
        }}>
            <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                width: '40px',
                height: '40px',
                border: '2px solid #d4af37',
                borderRight: 'none',
                borderBottom: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                width: '40px',
                height: '40px',
                border: '2px solid #d4af37',
                borderLeft: 'none',
                borderTop: 'none'
            }} />

            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                {data.logoUrl ? (
                    <img
                        src={data.logoUrl}
                        alt="Logo"
                        style={{
                            width: '70px',
                            height: '70px',
                            objectFit: 'contain',
                            background: 'white',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            border: '2px solid #d4af37'
                        }}
                    />
                ) : (
                    <div style={{
                        width: '70px',
                        height: '70px',
                        background: '#d4af37',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#2c3e50',
                        border: '3px solid rgba(212, 175, 55, 0.3)',
                        boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
                    }}>
                        {data.name?.charAt(0) || 'L'}
                    </div>
                )}
            </div>

            <div style={{ textAlign: 'center' }}>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#d4af37',
                    marginBottom: '0.5rem',
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: '1px'
                }}>
                    {data.name || 'Your Name'}
                </h2>
                <div style={{
                    width: '60px',
                    height: '2px',
                    background: '#d4af37',
                    margin: '0 auto 1rem'
                }} />
                <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '2rem',
                    fontWeight: '500',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem'
                }}>
                    {data.title || 'Your Title'}
                </p>

                <div style={{
                    background: 'rgba(212, 175, 55, 0.1)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem'
                }}>
                    <div style={{ color: 'white', fontSize: '0.9rem' }}>
                        {data.email || 'email@example.com'}
                    </div>
                    <div style={{ color: 'white', fontSize: '0.9rem' }}>
                        {data.mobile || '+1 234 567 8900'}
                    </div>
                    {data.address && (
                        <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                            {data.address}
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

export default Template6;
