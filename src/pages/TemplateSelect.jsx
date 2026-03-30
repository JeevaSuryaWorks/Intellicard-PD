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

const templates = [
    { id: 1, name: 'Professional', component: Template1 },
    { id: 2, name: 'Modern',       component: Template2 },
    { id: 3, name: 'Creative',     component: Template3 },
    { id: 4, name: 'Minimalist',   component: Template4 },
    { id: 5, name: 'Corporate',    component: Template5 },
    { id: 6, name: 'Elegant',      component: Template6 },
    { id: 7, name: 'Bold',         component: Template7 },
    { id: 8, name: 'Spectrum',    component: Template8 },
    { id: 9, name: 'Nordic',      component: Template9 },
    { id: 10, name: 'Luxury',     component: Template10 },
    { id: 11, name: 'Cyber',      component: Template11 },
    { id: 12, name: 'Botanical',  component: Template12 },
    { id: 13, name: 'Industrial', component: Template13 },
    { id: 14, name: 'Synthwave',  component: Template14 },
    { id: 15, name: 'Modernist',  component: Template15 },
    { id: 16, name: 'Midnight',   component: Template16 },
    { id: 17, name: 'Crystal',    component: Template17 },
    { id: 18, name: 'Editorial',  component: Template18 },
    { id: 19, name: 'Pop Vivid',  component: Template19 },
    { id: 20, name: 'Monochrome', component: Template20 }
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

            <div className="page-wrapper animate-fade-in" style={{ padding: '6rem 2rem' }}>
                <div style={{ 
                    textAlign: 'center', 
                    marginBottom: '4rem', 
                    width: '100%', 
                    maxWidth: '800px' 
                }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.2rem' }}>Identity Canvas Selection</h1>
                    <p className="text-muted" style={{ fontSize: '1.1rem', margin: '0 auto', opacity: 0.8 }}>
                        Our AI-curated collection of professional designs, hand-crafted for high-impact visual communication.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '3rem', width: '100%' }}>
                    {templates.map((template) => {
                        const TemplateComponent = template.component;
                        const isSelected = selectedTemplate === template.id;
                        return (
                            <div key={template.id} style={{ display: 'flex', flexDirection: 'column' }}>
                                <div 
                                    onClick={() => handleTemplateSelect(template.id)}
                                    className={`card animate-scale-in ${isSelected ? 'selected' : ''}`}
                                    style={{ 
                                        cursor: 'pointer',
                                        padding: '0', /* No padding to keep the preview container sleek */
                                        border: isSelected ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                                        transition: 'var(--transition-smooth)',
                                        background: isSelected ? 'rgba(102, 126, 234, 0.05)' : 'var(--glass-bg)',
                                        boxShadow: isSelected ? '0 0 30px rgba(102, 126, 234, 0.2)' : 'var(--glass-shadow)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Responsive Scale Container */}
                                    <div className="card-preview-container">
                                        <div className="card-preview-scale">
                                            <TemplateComponent 
                                                data={cardData || {}} 
                                                preview={true}
                                            />
                                        </div>
                                    </div>

                                    {/* Action Bar */}
                                    <div style={{
                                        padding: '1.25rem 1.5rem',
                                        borderTop: '1px solid var(--glass-border)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: isSelected ? 'rgba(102, 126, 234, 0.08)' : 'rgba(0,0,0,0.3)',
                                        zIndex: 1,
                                        position: 'relative'
                                    }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{template.name}</h3>
                                            <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: 0 }}>Design {template.id}</p>
                                        </div>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            border: '2px solid var(--primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: isSelected ? 'var(--primary)' : 'transparent',
                                            transition: 'background 0.3s ease'
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