import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, deleteAccount, logout } from '../utils/storage';

const Settings = () => {
    const navigate = useNavigate();
    const user = getCurrentUser();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleDeleteAccount = () => {
        if (user) {
            deleteAccount(user.id);
            navigate('/register');
        }
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
                        <span>Account Center</span>
                    </div>
                    <button onClick={() => navigate('/design')} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                        ← Back to Design
                    </button>
                </div>
            </nav>

            <div className="page-wrapper" style={{ padding: '4rem 2rem' }}>
                <div className="card animate-scale-in" style={{ maxWidth: '600px', width: '100%', border: '1px solid var(--glass-border)' }}>
                    <div className="card-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Personal Settings</h2>
                        <p className="text-muted">Manage your professional identity and account security.</p>
                    </div>

                    <div className="card-body">
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--glass-border)',
                            marginBottom: '2rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    background: 'var(--primary-gradient)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                                }}>
                                    {user?.name?.charAt(0)}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{user?.name}</h3>
                                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Member since {new Date().getFullYear()}</p>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.5 }}>Email Address</span>
                                    <span style={{ fontSize: '1.1rem', color: 'white' }}>{user?.email}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.5 }}>Mobile Number</span>
                                    <span style={{ fontSize: '1.1rem', color: 'white' }}>{user?.mobile}</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '1rem' }}>
                                Logout Session
                            </button>
                            <button
                                onClick={() => setShowDeleteConfirm(true)}
                                className="btn btn-danger"
                                style={{ padding: '1rem' }}
                            >
                                Deactivate Account
                            </button>
                        </div>

                        {/* Modal Refinement */}
                        {showDeleteConfirm && (
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.85)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1000,
                                padding: '2rem'
                            }}>
                                <div className="card animate-scale-in" style={{ maxWidth: '450px', width: '100%', border: '1px solid rgba(255, 87, 87, 0.3)' }}>
                                    <div className="card-header" style={{ textAlign: 'left' }}>
                                        <h3 style={{ color: '#ff5757', fontSize: '1.5rem' }}>Irreversible Action</h3>
                                        <p className="text-muted">Deleting your account is permanent.</p>
                                    </div>
                                    <div className="card-body">
                                        <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
                                            All your saved templates, custom logos, and profile data will be purged from our servers instantly. This action cannot be undone.
                                        </p>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <button
                                                onClick={() => setShowDeleteConfirm(false)}
                                                className="btn btn-outline"
                                                style={{ flex: 1 }}
                                            >
                                                Keep My Account
                                            </button>
                                            <button
                                                onClick={handleDeleteAccount}
                                                className="btn btn-danger"
                                                style={{ flex: 1 }}
                                            >
                                                Yes, Delete Everything
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
