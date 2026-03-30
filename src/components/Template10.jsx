import { QRCodeSVG } from 'qrcode.react';

const Template10 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: 'linear-gradient(135deg, #0f0f1a 0%, #1e1e2f 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3rem',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            border: '2px solid #c5a059',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Gold Leaf Accents */}
            <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #c5a059 0%, #ecd4a4 100%)',
                opacity: 0.2,
                borderRadius: '50%',
                filter: 'blur(30px)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #c5a059 0%, #ecd4a4 100%)',
                opacity: 0.2,
                borderRadius: '50%',
                filter: 'blur(30px)'
            }} />

            <div style={{ zIndex: 1, textAlign: 'center' }}>
                {data.logoUrl ? (
                    <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', background: 'white', padding: '6px', borderRadius: '50%', boxShadow: '0 0 20px rgba(197, 160, 89, 0.4)' }}>
                        <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                ) : (
                    <div style={{ color: '#c5a059', fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.8 }}>⚜</div>
                )}
                
                <h2 style={{ fontSize: '2.4rem', fontWeight: '700', color: '#ecd4a4', margin: 0, textTransform: 'uppercase', letterSpacing: '4px', fontFamily: 'serif' }}>{data.name || 'Your Name'}</h2>
                <div style={{ width: '40px', height: '2px', background: '#c5a059', margin: '0.75rem auto' }} />
                <p style={{ fontSize: '1rem', color: '#c5a059', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '2px' }}>{data.title || 'Managing Director'}</p>
                
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', color: '#ecd4a4', fontSize: '0.85rem', opacity: 0.8 }}>
                    <span>{data.email || 'exec@elite.com'}</span>
                    <span>{data.mobile || '+1 800 ELITE 00'}</span>
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '1.5rem',
                    bottom: '1.5rem',
                    background: '#ecd4a4',
                    padding: '8px',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={45} fgColor="#0f0f1a" />
                </div>
            )}
        </div>
    );
};

export default Template10;
