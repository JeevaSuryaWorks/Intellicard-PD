import { QRCodeSVG } from 'qrcode.react';

const Template8 = ({ data, preview = false, showQR = false, qrValue }) => {
    return (
        <div className="visiting-card" style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Prism Accents */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(45deg, #ff0080, #7928ca)',
                filter: 'blur(60px)',
                opacity: 0.4
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-50px',
                left: '-50px',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(45deg, #00dfd8, #007cf0)',
                filter: 'blur(60px)',
                opacity: 0.4
            }} />

            <div style={{ zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    {data.logoUrl ? (
                        <div style={{
                            width: '70px',
                            height: '70px',
                            background: 'white',
                            padding: '8px',
                            borderRadius: '12px',
                            boxShadow: '0 8px 15px rgba(0,0,0,0.3)'
                        }}>
                            <img src={data.logoUrl} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    ) : (
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #7928ca, #ff0080)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            {data.name?.charAt(0) || 'P'}
                        </div>
                    )}
                    <div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', margin: 0, letterSpacing: '-0.5px' }}>{data.name || 'Your Name'}</h2>
                        <p style={{ fontSize: '0.9rem', color: '#00dfd8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.2rem' }}>{data.title || 'Creative Director'}</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid #7928ca' }}>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Email</p>
                        <p style={{ fontSize: '0.85rem', color: 'white', margin: 0 }}>{data.email || 'hello@prism.com'}</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid #00dfd8' }}>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Phone</p>
                        <p style={{ fontSize: '0.85rem', color: 'white', margin: 0 }}>{data.mobile || '+1 555 123 456'}</p>
                    </div>
                </div>
            </div>

            {showQR && (
                <div style={{
                    position: 'absolute',
                    right: '2rem',
                    bottom: '2rem',
                    background: 'white',
                    padding: '8px',
                    borderRadius: '10px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.4)'
                }}>
                    <QRCodeSVG value={qrValue || ''} size={50} />
                </div>
            )}
        </div>
    );
};

export default Template8;
