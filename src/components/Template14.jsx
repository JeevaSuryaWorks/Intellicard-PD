import { QRCodeSVG } from 'qrcode.react';

const Template14 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: 'linear-gradient(180deg, #120458 0%, #01012b 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2.5rem',
            boxShadow: '0 0 50px rgba(255, 0, 255, 0.2)',
            border: '2px solid rgba(255, 0, 255, 0.4)',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Retro Sun Gradient */}
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '180px',
                height: '180px',
                background: 'linear-gradient(0deg, #ff71ce 0%, #01cdfe 100%)',
                opacity: 0.2,
                borderRadius: '50%',
                filter: 'blur(40px)'
            }} />
            
            <div style={{ zIndex: 1 }}>
                <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#ff71ce', margin: 0, letterSpacing: '2px', textShadow: '0 0 10px rgba(255,113,206,0.6)' }}>
                        {data.name || 'SYNTH'}
                    </h2>
                    <p style={{ fontSize: '1rem', color: '#01cdfe', marginTop: '0.2rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', textShadow: '0 0 8px rgba(1,205,254,0.6)' }}>
                        {data.title || 'FUTURE DIRECTOR'}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '1rem', marginTop: '1rem' }}>
                    {data.logoUrl ? (
                        <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', border: '1px solid #ff71ce' }}>
                            <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 5px #ff71ce)' }} />
                        </div>
                    ) : (
                        <div style={{ width: '60px', height: '60px', color: '#ff71ce', fontSize: '3rem', opacity: 0.5 }}>⚡</div>
                    )}
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#fff', fontSize: '0.85rem', fontWeight: '500', opacity: 0.8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📟</span> {data.mobile || '+80s 000 000'}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📡</span> {data.email || 'dream@vapor.wave'}</div>
                    </div>
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '2.5rem',
                    top: '2.5rem',
                    background: 'white',
                    padding: '8px',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.4)'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={50} fgColor="#120458" />
                </div>
            )}
        </div>
    );
};

export default Template14;
