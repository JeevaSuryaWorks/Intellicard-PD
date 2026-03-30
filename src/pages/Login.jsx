import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { loginUser } from '../utils/storage';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const successMessage = location.state?.message;

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear errors when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        if (errors.submit) {
            setErrors(prev => ({
                ...prev,
                submit: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            loginUser(formData.email, formData.password);
            navigate('/design');
        } catch (error) {
            setErrors({ submit: error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-wrapper animate-fade-in" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Decorative background blobs */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                opacity: '0.15',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent)',
                filter: 'blur(150px)',
                opacity: '0.15',
                zIndex: -1
            }} />

            <div className="card animate-scale-in" style={{ maxWidth: '450px', width: '100%', position: 'relative', zIndex: 1 }}>
                <div className="card-header">
                    <div style={{ 
                        fontSize: '3rem', 
                        marginBottom: '1rem',
                        background: 'var(--primary-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>✦</div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome Back</h1>
                    <p className="text-muted">Sign in to your premium dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="card-body">
                    {successMessage && (
                        <div className="alert alert-success animate-fade-in">
                            <span>✓</span> {successMessage}
                        </div>
                    )}
                    
                    {errors.submit && (
                        <div className="alert alert-danger animate-fade-in">
                            <span>⚠</span> {errors.submit}
                        </div>
                    )}

                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <div className="form-error">⚠ {errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {errors.password && <div className="form-error">⚠ {errors.password}</div>}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block mt-2"
                        disabled={isLoading}
                    >
                        <span>{isLoading ? 'Authenticating...' : 'Sign In'}</span>
                    </button>

                    <div className="text-center mt-3">
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                            New here?{' '}
                            <Link to="/register" style={{ 
                                color: 'var(--primary)', 
                                textDecoration: 'none', 
                                fontWeight: 700,
                                borderBottom: '2px solid transparent',
                                transition: 'var(--transition-smooth)'
                            }}
                            onMouseOver={(e) => e.target.style.borderBottomColor = 'var(--primary)'}
                            onMouseOut={(e) => e.target.style.borderBottomColor = 'transparent'}
                            >
                                Create an account
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;