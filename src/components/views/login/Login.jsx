// src/components/views/Login/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";


import AuthLink from "../../AuthLink";
import FormInput from "../../Input Felds/FormInput";
import Button from "../../Login Button/Button";
import RoleSelect from "../../Role Select/RoleSelect";
import { auth } from "../../../../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim() || !password.trim()) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      // Firebase login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Login Successful! User:", user);
      alert(`Login successful as ${role}!`);

      // Redirect to dashboard after successful login
      navigate("dashboard");
    } catch (error) {
      console.error("Login Failed:", error.message);
      alert(`Login Failed: ${error.code}`);
    }
  };

  return (
    <div className="bg-gray-400 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-[400px] h-[500px]">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* <RoleSelect value={role} onChange={(e) => setRole(e.target.value)} /> */}

          <FormInput
            label="Password"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-center mb-4">
            <Button name="Login" type="submit" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <AuthLink text="I am new, Register Business" to="/signup" />
            <AuthLink text="Forgot Password?" to="/forgot-password" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
