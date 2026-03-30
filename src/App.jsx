import { Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from './utils/storage';
import Register from './pages/Register';
import Login from './pages/Login';
import DesignForm from './pages/DesignForm';
import TemplateSelect from './pages/TemplateSelect';
import Preview from './pages/Preview';
import FinalCard from './pages/FinalCard';
import Settings from './pages/Settings';

// ─────────────────────────────────────────────
// ProtectedRoute
// Reads localStorage once per navigation event.
// If no user → redirect to /login.
// ─────────────────────────────────────────────
const ProtectedRoute = ({ children }) => {
  const user = getCurrentUser(); // safe: reads localStorage synchronously, no setState
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

// ─────────────────────────────────────────────
// PublicRoute
// If already logged in, redirect away from
// login/register back to /design.
// ─────────────────────────────────────────────
const PublicRoute = ({ children }) => {
  const user = getCurrentUser();
  if (user) return <Navigate to="/design" replace />;
  return children;
};

// ─────────────────────────────────────────────
// RootRedirect
// "/" → /design if logged in, else /login
// ─────────────────────────────────────────────
const RootRedirect = () => {
  const user = getCurrentUser();
  return <Navigate to={user ? '/design' : '/login'} replace />;
};

// ─────────────────────────────────────────────
// App
// No getCurrentUser() call here — keeps the
// component body free of per-render side effects
// that caused the infinite loop.
// ─────────────────────────────────────────────
function App() {
  return (
    <div className="app">
      <Routes>

        {/* Root */}
        <Route path="/" element={<RootRedirect />} />

        {/* Public — redirect to /design if already logged in */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* Protected — redirect to /login if not logged in */}
        <Route
          path="/design"
          element={
            <ProtectedRoute>
              <DesignForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/templates"
          element={
            <ProtectedRoute>
              <TemplateSelect />
            </ProtectedRoute>
          }
        />
        <Route
          path="/preview"
          element={
            <ProtectedRoute>
              <Preview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/final"
          element={
            <ProtectedRoute>
              <FinalCard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Fallback — any unknown route → root redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </div>
  );
}

export default App;