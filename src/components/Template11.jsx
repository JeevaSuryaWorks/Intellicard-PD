import { QRCodeSVG } from 'qrcode.react';

const Template11 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2.5rem',
            boxShadow: '0 0 40px rgba(0, 255, 65, 0.15)',
            border: '2px solid #00ff41',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'monospace'
        }}>
            {/* Grid Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                pointerEvents: 'none'
            }} />

            <div style={{ zIndex: 1 }}>
                <div style={{ marginBottom: '1.5rem', borderLeft: '4px solid #00ff41', paddingLeft: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.7rem', fontWeight: 'bold', color: '#00ff41', margin: 0, textTransform: 'uppercase' }}>
                        {`> ${data.name || 'ANON_USER'}`}
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: '#00cc33', marginTop: '0.4rem', opacity: 0.8 }}>
                        {`SYSTEM_${(data.title || 'DEVELOPER').toUpperCase()}`}
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#00ff41', fontSize: '0.85rem' }}>
                        <span style={{ opacity: 0.6 }}>[ADDR]:</span>
                        <span>{data.address || '127.0.0.1'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#00ff41', fontSize: '0.85rem' }}>
                        <span style={{ opacity: 0.6 }}>[MAIL]:</span>
                        <span>{data.email || 'root@system.io'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#00ff41', fontSize: '0.85rem' }}>
                        <span style={{ opacity: 0.6 }}>[TEL]:</span>
                        <span>{data.mobile || '+1 404 000 000'}</span>
                    </div>
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '2.5rem',
                    top: '2.5rem',
                    background: '#00ff41',
                    padding: '8px',
                    borderRadius: '0',
                    boxShadow: '0 0 20px rgba(0, 255, 65, 0.4)'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={60} fgColor="#0a0a0a" bgColor="#00ff41" />
                </div>
            )}
            
            {/* Status bar */}
            <div style={{ position: 'absolute', bottom: '10px', right: '15px', fontSize: '0.7rem', color: '#00ff41', opacity: 0.5 }}>
                SECURED_IDENTITY_V2.0 // EST_2026
            </div>
        </div>
    );
};

export default Template11;
