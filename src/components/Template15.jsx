import { QRCodeSVG } from 'qrcode.react';

const Template15 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: '#ffffff',
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid #000',
            borderRadius: '0',
            position: 'relative'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '4px solid #cc0000', paddingBottom: '1.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', margin: 0, letterSpacing: '-1px' }}>
                        {data.name || 'HELVETICA'}
                    </h2>
                    <p style={{ fontSize: '1rem', color: '#cc0000', marginTop: '0.2rem', fontWeight: '700', textTransform: 'uppercase' }}>
                        {data.title || 'MODERNIST'}
                    </p>
                </div>
                {data.logoUrl ? (
                    <div style={{ width: '60px', height: '60px', border: '1px solid #000', padding: '5px' }}>
                        <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                ) : (
                    <div style={{ width: '40px', height: '40px', background: '#000', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>H</div>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem' }}>
                        <p style={{ fontSize: '0.65rem', fontWeight: '900', color: '#999', textTransform: 'uppercase' }}>Contact</p>
                        <p style={{ fontSize: '0.9rem', color: '#000', fontWeight: '700', margin: 0 }}>{data.mobile || '+41 000 000'}</p>
                    </div>
                    <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem' }}>
                        <p style={{ fontSize: '0.65rem', fontWeight: '900', color: '#999', textTransform: 'uppercase' }}>Email</p>
                        <p style={{ fontSize: '0.9rem', color: '#000', fontWeight: '700', margin: 0 }}>{data.email || 'design@swiss.ch'}</p>
                    </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    {showQR && (
                        <div style={{
                            padding: '10px',
                            border: '1px solid #000'
                        }}>
                            <QRCodeSVG value={qrValue || ''} size={70} fgColor="#000" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Template15;
