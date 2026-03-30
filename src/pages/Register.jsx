import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../utils/storage';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
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
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
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
            await registerUser(formData);
            // Show success message briefly
            setTimeout(() => {
                navigate('/login', { state: { message: 'Registration successful! Please login.' } });
            }, 500);
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
                top: '5%',
                right: '5%',
                width: '400px',
                height: '400px',
                background: 'var(--secondary)',
                filter: 'blur(180px)',
                opacity: '0.1',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '5%',
                left: '5%',
                width: '400px',
                height: '400px',
                background: 'var(--primary)',
                filter: 'blur(180px)',
                opacity: '0.1',
                zIndex: -1
            }} />

            <div className="card animate-scale-in" style={{ maxWidth: '500px', width: '100%', position: 'relative', zIndex: 1 }}>
                <div className="card-header">
                    <div style={{ 
                        fontSize: '3rem', 
                        marginBottom: '1rem',
                        background: 'var(--primary-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>✦</div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Get Started</h1>
                    <p className="text-muted">Create your premium visiting card today</p>
                </div>

                <form onSubmit={handleSubmit} className="card-body">
                    {errors.submit && (
                        <div className="alert alert-danger animate-fade-in">
                            <span>⚠</span> {errors.submit}
                        </div>
                    )}

                    <div className="grid grid-2" style={{ gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <div className="form-error">⚠ {errors.name}</div>}
                        </div>

                        <div className="form-group" style={{ marginBottom: 0 }}>
                            <label className="form-label">Mobile</label>
                            <input
                                type="tel"
                                name="mobile"
                                className="form-input"
                                placeholder="1234567890"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                            {errors.mobile && <div className="form-error">⚠ {errors.mobile}</div>}
                        </div>
                    </div>

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

                    <div className="grid grid-2" style={{ gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                        <div className="form-group" style={{ marginBottom: 0 }}>
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

                        <div className="form-group" style={{ marginBottom: 0 }}>
                            <label className="form-label">Confirm</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-input"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            {errors.confirmPassword && <div className="form-error">⚠ {errors.confirmPassword}</div>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block mt-2"
                        disabled={isLoading}
                    >
                        <span>{isLoading ? 'Creating Account...' : 'Initialize Profile'}</span>
                    </button>

                    <div className="text-center mt-3">
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                            Already have an account?{' '}
                            <Link to="/login" style={{ 
                                color: 'var(--primary)', 
                                textDecoration: 'none', 
                                fontWeight: 700,
                                borderBottom: '2px solid transparent',
                                transition: 'var(--transition-smooth)'
                            }}
                            onMouseOver={(e) => e.target.style.borderBottomColor = 'var(--primary)'}
                            onMouseOut={(e) => e.target.style.borderBottomColor = 'transparent'}
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
