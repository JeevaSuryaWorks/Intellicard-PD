import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import confetti from 'canvas-confetti';
import { getCurrentUser, getCardData } from '../utils/storage';
import Template1 from '../components/Template1';
import Template2 from '../components/Template2';
import Template3 from '../components/Template3';
import Template4 from '../components/Template4';
import Template5 from '../components/Template5';
import Template6 from '../components/Template6';
import Template7 from '../components/Template7';
import Template8 from '../components/Template8';
import Template9 from '../components/Template9';
import Template10 from '../components/Template10';
import Template11 from '../components/Template11';
import Template12 from '../components/Template12';
import Template13 from '../components/Template13';
import Template14 from '../components/Template14';
import Template15 from '../components/Template15';
import Template16 from '../components/Template16';
import Template17 from '../components/Template17';
import Template18 from '../components/Template18';
import Template19 from '../components/Template19';
import Template20 from '../components/Template20';

const templateComponents = {
    1: Template1,
    2: Template2,
    3: Template3,
    4: Template4,
    5: Template5,
    6: Template6,
    7: Template7,
    8: Template8,
    9: Template9,
    10: Template10,
    11: Template11,
    12: Template12,
    13: Template13,
    14: Template14,
    15: Template15,
    16: Template16,
    17: Template17,
    18: Template18,
    19: Template19,
    20: Template20
};

/* ─── Inline styles (no external CSS dependency) ─────────────────────────── */
const styles = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: '#f0eeff',
    },
    navbar: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(15, 12, 41, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0.75rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    navBrand: {
        fontSize: '1.25rem',
        fontWeight: 700,
        letterSpacing: '0.04em',
        background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    navActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
    },
    btnGroup: {
        display: 'flex',
        border: '1px solid rgba(167,139,250,0.35)',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    btnGroupItem: (last) => ({
        background: 'rgba(255,255,255,0.06)',
        color: '#c4b5fd',
        border: 'none',
        borderRight: last ? 'none' : '1px solid rgba(167,139,250,0.25)',
        padding: '0.45rem 0.9rem',
        fontSize: '0.8rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background 0.18s',
        letterSpacing: '0.03em',
    }),
    btnOutline: {
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#e2e8f0',
        borderRadius: '8px',
        padding: '0.45rem 1rem',
        fontSize: '0.82rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'background 0.18s',
    },
    btnPrimary: {
        background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
        border: 'none',
        color: '#fff',
        borderRadius: '10px',
        padding: '0.45rem 1.1rem',
        fontSize: '0.82rem',
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 2px 12px rgba(124,58,237,0.35)',
        transition: 'opacity 0.18s',
    },
    container: {
        maxWidth: '960px',
        margin: '0 auto',
        padding: '2.5rem 1.5rem 4rem',
    },
    hero: {
        textAlign: 'center',
        marginBottom: '2.5rem',
    },
    heroTitle: {
        fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
        fontWeight: 800,
        margin: '0 0 0.5rem',
        background: 'linear-gradient(90deg, #e0c3fc, #8ec5fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    heroSub: {
        color: 'rgba(224,195,252,0.6)',
        fontSize: '0.95rem',
    },
    grid: {
        display: 'grid',
        gap: '1.75rem',
    },
    card: {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '18px',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    },
    cardTitle: {
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'rgba(224,195,252,0.7)',
        marginBottom: '1.5rem',
        textAlign: 'center',
    },
    /* Side-by-side QR row */
    qrRow: {
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    qrBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
    },
    qrLabel: {
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'rgba(224,195,252,0.55)',
    },
    qrWrapper: {
        background: '#fff',
        borderRadius: '14px',
        padding: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    },
    qrCaption: {
        fontSize: '0.78rem',
        color: 'rgba(224,195,252,0.5)',
        textAlign: 'center',
        maxWidth: '200px',
    },
    detailsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
    },
    detailItem: {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        padding: '0.85rem 1rem',
    },
    detailLabel: {
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'rgba(167,139,250,0.7)',
        marginBottom: '0.3rem',
    },
    detailValue: {
        fontSize: '0.92rem',
        fontWeight: 600,
        color: '#f0eeff',
        wordBreak: 'break-all',
    },
    footer: {
        textAlign: 'center',
        marginTop: '2.5rem',
    },
    bigPrimary: {
        background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
        border: 'none',
        color: '#fff',
        borderRadius: '12px',
        padding: '0.85rem 2.5rem',
        fontSize: '0.97rem',
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(124,58,237,0.45)',
        transition: 'transform 0.15s, box-shadow 0.15s',
        letterSpacing: '0.02em',
    },
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

/**
 * Build a vCard 3.0 string using CRLF line endings (RFC 2426).
 * This is the most-compatible format for both iOS and Android QR scanners.
 */
const buildVCard = (d) =>
    [
        'BEGIN:VCARD',
        'VERSION:3.0',
        d.name    ? `FN:${d.name}`           : null,
        d.name    ? `N:${d.name};;;;`         : null,
        d.title   ? `TITLE:${d.title}`        : null,
        d.company ? `ORG:${d.company}`        : null,
        d.mobile  ? `TEL;TYPE=CELL:${d.mobile}` : null,
        d.phone   ? `TEL;TYPE=WORK:${d.phone}`  : null,
        d.email   ? `EMAIL:${d.email}`        : null,
        d.website ? `URL:${d.website}`        : null,
        d.address ? `ADR;TYPE=WORK:;;${d.address};;;;` : null,
        'END:VCARD',
    ]
        .filter(Boolean)
        .join('\r\n');   // ← CRLF as required by RFC 2426 for maximum scanner compatibility

const downloadBlob = async (dataUrl, fileName, mimeType, ext) => {
    const blob = await (await fetch(dataUrl)).blob();
    if ('showSaveFilePicker' in window) {
        const handle = await window.showSaveFilePicker({
            suggestedName: fileName,
            types: [{ description: `${ext.toUpperCase()} File`, accept: { [mimeType]: [`.${ext}`] } }],
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
    } else {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
};

/* ─── Component ───────────────────────────────────────────────────────────── */

const FinalCard = () => {
    const navigate = useNavigate();
    const [cardData, setCardData] = useState(null);
    const cardRef = useRef(null);

    useEffect(() => {
        // ✅ Inside effect — no infinite loop
        const user = getCurrentUser();
        if (!user) {
            navigate('/login');
            return;
        }
        const data = getCardData(user.id);
        if (!data || !data.selectedTemplate) {
            navigate('/templates');
            return;
        }
        setCardData(data);

        // 🎉 Fire Celebration!
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        // One big initial burst
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#7c3aed', '#2563eb', '#ffffff']
        });
    }, []); // ✅ Runs once on mount only

    if (!cardData) {
        return (
            <div style={{ ...styles.page, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="spinner" />
            </div>
        );
    }

    const TemplateComponent = templateComponents[cardData.selectedTemplate];
    const vCardData = buildVCard(cardData);
    const cardName = cardData?.name || 'visiting-card';

    const getCardNode = () => cardRef.current?.querySelector('.visiting-card');

    const handleDownloadPng = async () => {
        const node = getCardNode();
        if (!node) return;
        try {
            const dataUrl = await toPng(node, { cacheBust: true, pixelRatio: 3, backgroundColor: '#ffffff' });
            await downloadBlob(dataUrl, `${cardName}.png`, 'image/png', 'png');
        } catch (e) { console.error(e); }
    };

    const handleDownloadJpg = async () => {
        const node = getCardNode();
        if (!node) return;
        try {
            const dataUrl = await toJpeg(node, { cacheBust: true, pixelRatio: 3, backgroundColor: '#ffffff', quality: 0.96 });
            await downloadBlob(dataUrl, `${cardName}.jpg`, 'image/jpeg', 'jpg');
        } catch (e) { console.error(e); }
    };

    const handleDownloadSvg = async () => {
        const node = getCardNode();
        if (!node) return;
        try {
            const dataUrl = await toSvg(node, { cacheBust: true, backgroundColor: '#ffffff' });
            await downloadBlob(dataUrl, `${cardName}.svg`, 'image/svg+xml', 'svg');
        } catch (e) { console.error(e); }
    };

    return (
        <div className="animate-fade-in" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container navbar-content">
                    <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>✦</span>
                        <span>Suite Ready</span>
                    </div>
                    <div className="navbar-nav">
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {['PNG', 'JPG', 'SVG'].map((fmt) => (
                                <button
                                    key={fmt}
                                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', fontWeight: 700 }}
                                    className="btn btn-outline"
                                    onClick={fmt === 'PNG' ? handleDownloadPng : fmt === 'JPG' ? handleDownloadJpg : handleDownloadSvg}
                                >
                                    ↓ {fmt}
                                </button>
                            ))}
                        </div>
                        <button style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}
                            className="btn btn-primary"
                            onClick={() => navigate('/design')}>
                            + New Card
                        </button>
                    </div>
                </div>
            </nav>

            <div className="page-wrapper" style={{ padding: '3rem 2rem' }}>
                <div style={{ maxWidth: '1000px', width: '100%' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉 Your Identity is Live</h1>
                        <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Your premium visiting card and contact suite have been generated. 
                            Download your files or scan the QR codes to test the instant contact save feature.
                        </p>
                    </div>

                    <div className="grid grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
                        
                        {/* Left: Card Preview Column */}
                        <div>
                            <div className="card-preview-container hero-mode animate-scale-in" style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    left: '20px',
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    opacity: 0.3,
                                    color: 'white'
                                }}>Identity Preview</div>

                                <div className="card-preview-scale" ref={cardRef}>
                                    <TemplateComponent data={cardData} showQR={true} qrValue={vCardData} />
                                </div>
                            </div>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                <button onClick={handleDownloadPng} className="btn btn-outline" style={{ fontSize: '0.8rem' }}>Save PNG</button>
                                <button onClick={handleDownloadJpg} className="btn btn-outline" style={{ fontSize: '0.8rem' }}>Save JPG</button>
                                <button onClick={handleDownloadSvg} className="btn btn-outline" style={{ fontSize: '0.8rem' }}>Save SVG</button>
                            </div>
                        </div>

                        {/* Right: QR Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="card animate-scale-in" style={{ padding: '2rem', transitionDelay: '0.1s' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Smart Contact QR</h3>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    <div style={{ 
                                        padding: '1rem', 
                                        background: 'white', 
                                        borderRadius: '20px',
                                        boxShadow: '0 0 30px rgba(102, 126, 234, 0.2)'
                                    }}>
                                        <QRCodeSVG value={vCardData} size={180} level="H" includeMargin={true} />
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.5' }}>
                                    Scan with any mobile camera to instantly add <strong>{cardData.name}</strong> to your phone's address book.
                                </p>
                            </div>

                            <div className="card animate-scale-in" style={{ padding: '2rem', transitionDelay: '0.2s' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Identity Details</h3>
                                <div style={{ gridTemplateColumns: '1fr', display: 'grid', gap: '1rem' }}>
                                    {[
                                        { label: 'Role', value: cardData.title },
                                        { label: 'Mobile', value: cardData.mobile },
                                        { label: 'Email', value: cardData.email },
                                        { label: 'Address', value: cardData.address }
                                    ].filter(f => f.value).map((item, idx) => (
                                        <div key={idx} style={{ 
                                            padding: '0.75rem 1rem', 
                                            background: 'rgba(255,255,255,0.02)', 
                                            borderRadius: '8px',
                                            borderLeft: '2px solid var(--primary)'
                                        }}>
                                            <span style={{ fontSize: '0.7rem', display: 'block', opacity: 0.5, textTransform: 'uppercase' }}>{item.label}</span>
                                            <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{item.value || 'N/A'}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <button 
                            onClick={() => navigate('/design')} 
                            className="btn btn-primary"
                            style={{ padding: '1.2rem 4rem', fontSize: '1.2rem', borderRadius: '50px' }}
                        >
                            Build Another Identity
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalCard;