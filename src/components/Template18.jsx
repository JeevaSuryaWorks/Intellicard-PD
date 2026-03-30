import { QRCodeSVG } from 'qrcode.react';

const Template18 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '2px solid #1a1a1a',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ borderBottom: '10px solid #1a1a1a', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#1a1a1a', margin: 0, lineHeight: 0.8, letterSpacing: '-2px' }}>
                    {data.name || 'YOUR NAME'}
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {data.title || 'EDITOR IN CHIEF'}
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#1a1a1a', fontSize: '0.9rem', fontWeight: '600' }}>
                    <div>E: {data.email || 'press@editorial.com'}</div>
                    <div>T: {data.mobile || '+1 800 EDIT 00'}</div>
                </div>
                
                {data.logoUrl ? (
                    <div style={{ width: '50px', height: '50px', background: '#000', padding: '5px' }}>
                        <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'invert(1)' }} />
                    </div>
                ) : (
                    <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#1a1a1a' }}>ED.</div>
                )}
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '3rem',
                    top: '3rem',
                    padding: '8px',
                    border: '2px solid #1a1a1a'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={60} fgColor="#1a1a1a" />
                </div>
            )}
        </div>
    );
};

export default Template18;
