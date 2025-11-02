// src/App.jsx
// ✅ Correct import library
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./provider/publicRoute/index.jsx";
import ProtectedRoute from "./provider/protectedRoute/index.jsx";
import RegistrationForm from "./components/views/signup/RegistrationForm.jsx";
import Login from "./components/views/Login/Login.jsx";
import Dashboard from "./components/views/dashboard/Dashboard.jsx";
import DashboardLayout from "./components/views/dashboard/layout/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />

      {/* Public Routes (Accessible when logged out) */}
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><RegistrationForm /></PublicRoute>} />
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />


      </Route>
    </Routes>
  );
}

export default App;