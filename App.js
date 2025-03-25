import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/registerPage';
import Dashboard from './components/dashboardPage';
import CalendarPage from './components/calendar'; // Ensured correct import
import Settings from './components/setting';

function App() {
  // Protected route component
  const ProtectedRoute = ({ children }) => {
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    
    return children;
  };
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* ✅ Ensuring Calendar works without affecting other elements */}
        <Route path="/calendar" element={<CalendarPage />} /> 
        
        <Route path="/settings" element={<Settings />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
