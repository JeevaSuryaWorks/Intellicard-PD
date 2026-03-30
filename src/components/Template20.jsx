import { QRCodeSVG } from 'qrcode.react';

const Template20 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: '#ffffff',
            display: 'flex',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            border: '1px solid #000',
            borderRadius: '12px'
        }}>
            {/* Split Side */}
            <div style={{
                flex: 1,
                background: '#000000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2.5rem',
                color: '#fff',
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
            }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', margin: 0, textTransform: 'uppercase', lineHeight: 1 }}>
                    {data.name || 'YOUR NAME'}
                </h2>
                <div style={{ width: '40px', height: '40px', background: '#fff', marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {data.logoUrl ? (
                        <img src={data.logoUrl} alt="Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    ) : (
                        <div style={{ fontSize: '1.5rem', color: '#000', fontWeight: 'bold' }}>{data.name?.charAt(0) || 'M'}</div>
                    )}
                </div>
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2.5rem',
                paddingLeft: '3rem',
                color: '#000'
            }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1.5rem', color: '#666' }}>
                    {data.title || 'CHIEF EXECUTIVE'}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', fontWeight: '700' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>E: {data.email || 'exec@monochrome.com'}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>T: {data.mobile || '+1 800 MONO'}</div>
                </div>

                {showQR && (
                    <div style={{
                        position: 'absolute',
                        right: '1.5rem',
                        bottom: '1.5rem',
                        background: '#000',
                        padding: '6px',
                        borderRadius: '0'
                    }}>
                        <QRCodeSVG value={qrValue || ''} size={45} fgColor="#fff" bgColor="#000" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Template20;
