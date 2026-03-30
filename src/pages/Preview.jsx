import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, getCardData } from '../utils/storage';
import Template1 from '../components/Template1';
import Template2 from '../components/Template2';
import Template3 from '../components/Template3';
import Template4 from '../components/Template4';
import Template5 from '../components/Template5';
import Template6 from '../components/Template6';
import Template7 from '../components/Template7';

const templateComponents = {
    1: Template1,
    2: Template2,
    3: Template3,
    4: Template4,
    5: Template5,
    6: Template6,
    7: Template7
};

const Preview = () => {
    const navigate = useNavigate();
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        // ✅ Inside effect — no new object reference on every render
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
    }, []); // ✅ Runs once on mount only

    if (!cardData) {
        return (
            <div className="page-wrapper">
                <div className="spinner"></div>
            </div>
        );
    }

    const TemplateComponent = templateComponents[cardData.selectedTemplate];

    return (
        <div className="animate-fade-in" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <nav className="navbar">
                <div className="container navbar-content">
                    <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>✦</span>
                        <span>Design Preview</span>
                    </div>
                </div>
            </nav>

            <div className="page-wrapper" style={{ padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '900px', width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Final Review</h1>
                        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Take a moment to admire your new professional identity. 
                            Ensure all details are correct before generating your elite QR suite.
                        </p>
                    </div>

                    <div className="card animate-scale-in" style={{ 
                        padding: '4rem', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--glass-border)',
                        marginBottom: '3rem',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '20px',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            opacity: 0.4
                        }}>Digital Identity Card</div>
                        
                        <div className="visiting-card-container" style={{ 
                            transform: 'scale(1.1)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)' 
                        }}>
                            <TemplateComponent data={cardData} />
                        </div>
                    </div>

                    <div style={{ 
                        display: 'flex', 
                        gap: '1.5rem', 
                        justifyContent: 'center' 
                    }}>
                        <button 
                            onClick={() => navigate('/templates')} 
                            className="btn btn-secondary"
                            style={{ padding: '1rem 2rem' }}
                        >
                            ← Other Templates
                        </button>
                        <button 
                            onClick={() => navigate('/final')} 
                            className="btn btn-primary"
                            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
                        >
                            Confirm & Generate QR →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;