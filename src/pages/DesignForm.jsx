import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, saveCardData, getCardData, logout } from '../utils/storage';

const DesignForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        logoUrl: '',
        address: '',
        mobile: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    const [logoPreview, setLogoPreview] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // ✅ Get user INSIDE effect — prevents new object reference on every render
        const user = getCurrentUser();
        if (!user) {
            navigate('/login');
            return;
        }
        setCurrentUser(user);

        const existingData = getCardData(user.id);
        if (existingData) {
            setFormData({
                name: existingData.name || '',
                title: existingData.title || '',
                logoUrl: existingData.logoUrl || '',
                address: existingData.address || '',
                mobile: existingData.mobile || '',
                email: existingData.email || ''
            });
            if (existingData.logoUrl) {
                setLogoPreview(existingData.logoUrl);
            }
        } else {
            // Pre-fill with user data
            setFormData(prev => ({
                ...prev,
                name: user.name || '',
                mobile: user.mobile || '',
                email: user.email || ''
            }));
        }
    }, []); // ✅ Empty array — runs once on mount only, no infinite loop

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.title.trim()) {
            newErrors.title = 'Title/Role is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        if (!validTypes.includes(file.type)) {
            setErrors(prev => ({ ...prev, logo: 'Please upload a valid image file (JPG, PNG, or GIF)' }));
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, logo: 'File size must be less than 2MB' }));
            return;
        }

        setErrors(prev => ({ ...prev, logo: '' }));

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            setFormData(prev => ({ ...prev, logoUrl: base64String }));
            setLogoPreview(base64String);
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveLogo = () => {
        setFormData(prev => ({ ...prev, logoUrl: '' }));
        setLogoPreview(null);
        const fileInput = document.getElementById('logo-upload');
        if (fileInput) fileInput.value = '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        saveCardData(currentUser.id, formData);
        navigate('/templates');
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="animate-fade-in" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <nav className="navbar">
                <div className="container navbar-content">
                    <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>✦</span>
                        <span>Intellicard</span>
                    </div>
                    <div className="navbar-nav">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginRight: '1rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: 'var(--primary-gradient)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                {currentUser?.name?.charAt(0)}
                            </div>
                            <span className="text-muted" style={{ fontSize: '0.9rem' }}>{currentUser?.name}</span>
                        </div>
                        <button onClick={() => navigate('/settings')} className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                            Settings
                        </button>
                        <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="page-wrapper" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <div className="card animate-scale-in" style={{ maxWidth: '800px', width: '100%', border: '1px solid var(--glass-border)' }}>
                    <div className="card-header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Personalize Your Identity</h2>
                        <p className="text-muted">Enter your professional details below. We'll use these to generate your elite visiting cards.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-input"
                                    placeholder="e.g. Alexander Pierce"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && <div className="form-error">⚠ {errors.name}</div>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Professional Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-input"
                                    placeholder="e.g. Chief Technology Officer"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.title && <div className="form-error">⚠ {errors.title}</div>}
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label className="form-label">Company Branding (Logo)</label>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                {logoPreview ? (
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-md)',
                                        padding: '1.5rem',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--primary)',
                                        boxShadow: '0 0 15px rgba(102, 126, 234, 0.1)'
                                    }}>
                                        <div style={{
                                            width: '100px',
                                            height: '100px',
                                            background: 'white',
                                            padding: '10px',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                                        }}>
                                            <img
                                                src={logoPreview}
                                                alt="Logo preview"
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '1rem' }}>Logo Ready</h4>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Your branding will be applied to all templates.</p>
                                        </div>
                                        <button type="button" onClick={handleRemoveLogo} className="btn btn-danger" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                                            Replace
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <input
                                            type="file"
                                            id="logo-upload"
                                            accept="image/jpeg,image/jpg,image/png,image/gif"
                                            onChange={handleFileChange}
                                            style={{ display: 'none' }}
                                        />
                                        <label
                                            htmlFor="logo-upload"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '2.5rem',
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                border: '2px dashed var(--glass-border)',
                                                borderRadius: 'var(--radius-md)',
                                                cursor: 'pointer',
                                                transition: 'var(--transition-smooth)',
                                                minHeight: '150px',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = 'var(--primary)';
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <div style={{ 
                                                fontSize: '2.5rem', 
                                                marginBottom: '0.75rem',
                                                opacity: 0.8
                                            }}>🏙</div>
                                            <p style={{ color: 'var(--text-primary)', marginBottom: '0.25rem', fontWeight: '700' }}>Drop your brand logo here</p>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>High resolution PNG or JPG (max 2MB)</p>
                                        </label>
                                    </div>
                                )}
                            </div>
                            {errors.logo && <div className="form-error">⚠ {errors.logo}</div>}
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label className="form-label">Headquarters Address</label>
                            <input
                                type="text"
                                name="address"
                                className="form-input"
                                placeholder="e.g. One Apple Park Way, Cupertino, CA"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <div className="form-group">
                                <label className="form-label">Primary Mobile</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    className="form-input"
                                    placeholder="+1 (000) 000-0000"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.mobile && <div className="form-error">⚠ {errors.mobile}</div>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="office@yourcompany.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <div className="form-error">⚠ {errors.email}</div>}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" style={{ height: '3.5rem', fontSize: '1.1rem' }}>
                            Select Card Template →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DesignForm;