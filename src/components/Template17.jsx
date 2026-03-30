import { QRCodeSVG } from 'qrcode.react';

const Template17 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2.5rem',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            border: '2px solid rgba(255,255,255,0.1)',
            borderRadius: '30px',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(30px)'
        }}>
            {/* Soft Glowing Orbs */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '20%',
                width: '120px',
                height: '120px',
                background: 'linear-gradient(45deg, #00d2ff, #3a7bd5)',
                opacity: 0.15,
                borderRadius: '50%',
                filter: 'blur(40px)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '20%',
                width: '120px',
                height: '120px',
                background: 'linear-gradient(45deg, #f2994a, #f2c94c)',
                opacity: 0.1,
                borderRadius: '50%',
                filter: 'blur(40px)'
            }} />

            <div style={{ zIndex: 1, textAlign: 'center' }}>
                {data.logoUrl ? (
                    <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                ) : (
                    <div style={{ color: 'white', fontSize: '3rem', opacity: 0.3, marginBottom: '1rem' }}>✦</div>
                )}
                
                <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'white', margin: 0, letterSpacing: '4px', textTransform: 'uppercase' }}>{data.name || 'Your Name'}</h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem', fontWeight: '500', fontStyle: 'italic' }}>{data.title || 'Creative Visionary'}</p>
                
                <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '2.5rem', color: 'white', fontSize: '0.9rem', fontWeight: '600', opacity: 0.7 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{data.email || 'vision@crystal.com'}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{data.mobile || '+1 800 CRYSTAL'}</div>
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '1.5rem',
                    bottom: '1.5rem',
                    background: 'rgba(255,255,255,0.15)',
                    padding: '8px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={45} fgColor="#fff" bgColor="transparent" />
                </div>
            )}
        </div>
    );
};

export default Template17;
