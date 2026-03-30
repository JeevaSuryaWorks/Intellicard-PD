import { QRCodeSVG } from 'qrcode.react';

const Template13 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: '#f0f0f0',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '2.5rem',
            boxShadow: '10px 10px 0px #000',
            border: '4px solid #000',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '4px solid #000', paddingRight: '1.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', margin: 0, textTransform: 'uppercase', lineHeight: 0.9 }}>
                        {data.name || 'ANON'}
                    </h2>
                    <div style={{ background: '#ff6b00', color: 'white', display: 'inline-block', padding: '0.2rem 0.5rem', marginTop: '0.75rem', fontWeight: 'bold', fontSize: '0.8rem' }}>
                        {data.title || 'ARCHITECT'}
                    </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#000', fontWeight: '700', fontSize: '0.85rem' }}>
                    <div>T: {data.mobile || '+0 000 000'}</div>
                    <div>E: {data.email || 'raw@system.com'}</div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '1.5rem', background: '#000', color: 'white', margin: '-2.5rem -2.5rem -2.5rem 0' }}>
                {data.logoUrl ? (
                    <div style={{ width: '100px', height: '100px', background: '#fff', padding: '10px', border: '4px solid #ff6b00' }}>
                        <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                ) : (
                    <div style={{ fontSize: '4rem', fontWeight: '900', color: '#ff6b00' }}>{data.name?.charAt(0) || 'R'}</div>
                )}
                
                {showQR && (
                    <div style={{
                        marginTop: '2rem',
                        background: 'white',
                        padding: '10px',
                        border: '4px solid #ff6b00'
                    }}>
                        <QRCodeSVG value={qrValue || ''} size={60} fgColor="#000" />
                    </div>
                )}
            </div>
            
            {/* Background accent */}
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', background: '#ff6b00', opacity: 0.3, transform: 'rotate(45deg)', zIndex: -1 }} />
        </div>
    );
};

export default Template13;
