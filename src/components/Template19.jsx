import { QRCodeSVG } from 'qrcode.react';

const Template19 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: '#ffef00',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2.5rem',
            boxShadow: '15px 15px 0px #000',
            border: '8px solid #000',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#000', margin: 0, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: '-1px' }}>
                    {data.name || 'VIVID'}
                </h2>
                <div style={{ width: '100px', height: '10px', background: '#000', marginTop: '0.5rem' }} />
                <p style={{ fontSize: '1.2rem', color: '#000', marginTop: '1rem', fontWeight: '800', textTransform: 'uppercase' }}>
                    {data.title || 'POP DIRECTOR'}
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#000', fontSize: '1rem', fontWeight: '900' }}>
                    <div>E: {data.email || 'pop@vivid.com'}</div>
                    <div>T: {data.mobile || '+1 800 POP'}</div>
                </div>
                
                {data.logoUrl ? (
                    <div style={{ width: '70px', height: '70px', background: '#000', padding: '8px', border: '4px solid #fff' }}>
                        <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'invert(1)' }} />
                    </div>
                ) : (
                    <div style={{ fontSize: '4rem', fontWeight: '900', color: '#000' }}>!</div>
                )}
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '2rem',
                    padding: '10px',
                    border: '8px solid #000',
                    background: '#fff'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={60} fgColor="#000" />
                </div>
            )}
        </div>
    );
};

export default Template19;
