import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, getCardData, updateCardTemplate } from '../utils/storage';
import Template1 from '../components/Template1';
import Template2 from '../components/Template2';
import Template3 from '../components/Template3';
import Template4 from '../components/Template4';
import Template5 from '../components/Template5';
import Template6 from '../components/Template6';
import Template7 from '../components/Template7';

const templates = [
    { id: 1, name: 'Professional', component: Template1 },
    { id: 2, name: 'Modern',       component: Template2 },
    { id: 3, name: 'Creative',     component: Template3 },
    { id: 4, name: 'Minimalist',   component: Template4 },
    { id: 5, name: 'Corporate',    component: Template5 },
    { id: 6, name: 'Elegant',      component: Template6 },
    { id: 7, name: 'Bold',         component: Template7 }
];

const TemplateSelect = () => {
    const navigate = useNavigate();
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [cardData, setCardData] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // ✅ Get user INSIDE effect — prevents new object reference on every render
        const user = getCurrentUser();
        if (!user) {
            navigate('/login');
            return;
        }
        setCurrentUser(user);

        const data = getCardData(user.id);
        if (!data) {
            navigate('/design');
            return;
        }
        setCardData(data);
        if (data.selectedTemplate) {
            setSelectedTemplate(data.selectedTemplate);
        }
    }, []); // ✅ Empty array — runs once on mount only

    const handleTemplateSelect = (templateId) => {
        setSelectedTemplate(templateId);
    };

    const handlePreview = () => {
        if (!selectedTemplate) {
            alert('Please select a template');
            return;
        }
        updateCardTemplate(currentUser.id, selectedTemplate);
        navigate('/preview');
    };

    return (
        <div className="animate-fade-in" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <nav className="navbar">
                <div className="container navbar-content">
                    <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>✦</span>
                        <span>Identity Selection</span>
                    </div>
                </div>
            </nav>

            <div className="page-wrapper" style={{ padding: '4rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Choose Your Canvas</h1>
                    <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Select from our curated collection of professional templates. 
                        Each design is hand-crafted for high-impact visual communication.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '2.5rem' }}>
                    {templates.map((template) => {
                        const TemplateComponent = template.component;
                        const isSelected = selectedTemplate === template.id;
                        return (
                            <div key={template.id} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div 
                                    onClick={() => handleTemplateSelect(template.id)}
                                    className={`card animate-scale-in ${isSelected ? 'selected' : ''}`}
                                    style={{ 
                                        cursor: 'pointer',
                                        padding: '0.5rem',
                                        border: isSelected ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                                        transition: 'var(--transition-smooth)',
                                        background: isSelected ? 'rgba(102, 126, 234, 0.05)' : 'var(--glass-bg)',
                                        boxShadow: isSelected ? '0 0 30px rgba(102, 126, 234, 0.2)' : 'var(--glass-shadow)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isSelected) {
                                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isSelected) {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        }
                                    }}
                                >
                                    <div style={{ 
                                        transform: 'scale(0.85)', 
                                        paddingLeft: '1.5rem',
                                        paddingTop: '1rem',
                                        pointerEvents: 'none',
                                        marginBottom: '-40px'
                                    }}>
                                        <TemplateComponent 
                                            data={cardData || {}} 
                                            preview={true}
                                        />
                                    </div>
                                    <div style={{
                                        padding: '1.5rem',
                                        borderTop: '1px solid var(--glass-border)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'rgba(0,0,0,0.2)',
                                        zIndex: 1,
                                        position: 'relative'
                                    }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{template.name}</h3>
                                            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Design #{template.id}</p>
                                        </div>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            border: '2px solid var(--primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: isSelected ? 'var(--primary)' : 'transparent'
                                        }}>
                                            {isSelected && <span style={{ color: 'white', fontSize: '0.8rem' }}>✓</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div style={{ 
                    marginTop: '4rem', 
                    display: 'flex', 
                    justifyContent: 'center',
                    gap: '1.5rem' 
                }}>
                    <button 
                        onClick={() => navigate('/design')} 
                        className="btn btn-secondary"
                        style={{ padding: '1rem 2rem' }}
                    >
                        ← Edit Details
                    </button>
                    <button 
                        onClick={handlePreview} 
                        className="btn btn-primary"
                        disabled={!selectedTemplate}
                        style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
                    >
                        Preview Selected Identity →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelect;