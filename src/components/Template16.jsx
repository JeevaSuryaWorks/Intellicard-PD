import { QRCodeSVG } from 'qrcode.react';

const Template16 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2.5rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Pattern Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 10% 20%, rgba(94, 234, 212, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 40%)',
                opacity: 0.5,
                zIndex: 0
            }} />

            <div style={{ zIndex: 1, display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    {data.logoUrl ? (
                        <div style={{ width: '90px', height: '90px', borderRadius: '18px', background: 'white', padding: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '2px solid rgba(94, 234, 212, 0.5)' }}>
                            <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    ) : (
                        <div style={{ width: '80px', height: '80px', borderRadius: '18px', background: 'linear-gradient(135deg, #5eead4, #8b5cf6)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
                            {data.name?.charAt(0) || 'M'}
                        </div>
                    )}
                </div>

                <div>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#f8fafc', margin: 0, letterSpacing: '-0.5px' }}>{data.name || 'Your Name'}</h2>
                    <p style={{ fontSize: '1rem', color: '#5eead4', marginTop: '0.2rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>{data.title || 'Creative Lead'}</p>
                    
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📧</span> {data.email || 'hello@midnight.com'}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📱</span> {data.mobile || '+1 500 000 000'}</div>
                    </div>
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '2rem',
                    background: 'white',
                    padding: '8px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                    border: '1px solid #5eead4'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={50} fgColor="#0f172a" />
                </div>
            )}
        </div>
    );
};

export default Template16;
