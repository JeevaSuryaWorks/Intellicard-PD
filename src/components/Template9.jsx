import { QRCodeSVG } from 'qrcode.react';

const Template9 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.5rem',
            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            position: 'relative'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#1a1a1a', margin: 0 }}>{data.name || 'Your Name'}</h2>
                    <p style={{ fontSize: '1rem', color: '#666', marginTop: '0.4rem', fontWeight: '500' }}>{data.title || 'Architect'}</p>
                </div>
                {data.logoUrl ? (
                    <div style={{ width: '60px', height: '60px', background: '#f8f9fa', padding: '10px', borderRadius: '4px', border: '1px solid #eee' }}>
                        <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                ) : (
                    <div style={{ width: '40px', height: '40px', background: '#1a1a1a', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                        {data.name?.charAt(0) || 'N'}
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', gap: '2rem', borderTop: '2px solid #1a1a1a', paddingTop: '1.5rem' }}>
                <div>
                    <p style={{ fontSize: '0.65rem', color: '#999', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.3rem' }}>Contact</p>
                    <p style={{ fontSize: '0.9rem', color: '#333', margin: 0, fontWeight: '600' }}>{data.mobile || '+1 500 000 000'}</p>
                </div>
                <div>
                    <p style={{ fontSize: '0.65rem', color: '#999', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.3rem' }}>Email</p>
                    <p style={{ fontSize: '0.9rem', color: '#333', margin: 0, fontWeight: '600' }}>{data.email || 'hello@nordic.com'}</p>
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '2.5rem',
                    bottom: '2rem',
                    background: 'white',
                    padding: '5px',
                    borderRadius: '4px',
                    border: '1px solid #eee'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={60} fgColor="#1a1a1a" />
                </div>
            )}
        </div>
    );
};

export default Template9;
