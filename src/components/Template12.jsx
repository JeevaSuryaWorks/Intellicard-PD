import { QRCodeSVG } from 'qrcode.react';

const Template12 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: 'linear-gradient(135deg, #f0f4f8 0%, #e1e8ed 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2.5rem',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            border: '1px solid #d1d9e6',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Organic Blobs */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '120px',
                height: '120px',
                background: '#4ade80',
                opacity: 0.1,
                borderRadius: '50% 50% 70% 30% / 30% 60% 40% 70%',
                filter: 'blur(30px)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '180px',
                height: '180px',
                background: '#2dd4bf',
                opacity: 0.15,
                borderRadius: '40% 60% 30% 70% / 60% 30% 70% 40%',
                filter: 'blur(40px)'
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', zIndex: 1, background: 'rgba(255,255,255,0.4)', padding: '2rem', borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.6)' }}>
                {data.logoUrl ? (
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', padding: '10px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
                        <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                ) : (
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #4ade80, #2dd4bf)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
                        {data.name?.charAt(0) || 'O'}
                    </div>
                )}
                
                <div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#2d3748', margin: 0 }}>{data.name || 'Your Name'}</h2>
                    <p style={{ fontSize: '0.95rem', color: '#48bb78', marginTop: '0.25rem', fontWeight: '600' }}>{data.title || 'Creative Consultant'}</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem', color: '#718096', fontSize: '0.8rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>🌿</span> {data.mobile || '+1 800 FLOW 00'}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>🌸</span> {data.email || 'hello@organic.com'}</div>
                    </div>
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'white',
                    padding: '6px',
                    borderRadius: '50%',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={45} fgColor="#48bb78" />
                </div>
            )}
        </div>
    );
};

export default Template12;
