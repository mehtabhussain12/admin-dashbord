// src/components/views/Register/RegistrationForm.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


import FormInput from "../../Input Felds/FormInput";
import Button from "../../Login Button/Button";
import AuthLink from "../../AuthLink";
import { auth } from "../../../../config/firebase";

function RegistrationForm() {

  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    password: '' 
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();

  // ✅ 2. Consolidated change handler
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    // Clear previous error when user starts typing
    if (error) setError(null);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const { fullName, email, password } = formData;

    // Basic Validation Check
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError("Please fill out all fields.");
      return;
    }
    if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
    }

    setIsSubmitting(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Registration successful. User:", user);
      
      // ✅ Navigate only on success
      navigate("dashboard");

    } catch (firebaseError) {
      console.error("Registration failed:", firebaseError.message);
      
      // Provide user-friendly error messages
      let userFriendlyMessage = "Registration failed. Please check your credentials.";
      if (firebaseError.code === 'auth/email-already-in-use') {
          userFriendlyMessage = "This email address is already registered.";
      } else if (firebaseError.code === 'auth/invalid-email') {
          userFriendlyMessage = "The email address format is invalid.";
      }
      
      setError(userFriendlyMessage);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start pt-10">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">
          New Business Registration
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Add a new customer to the tracking system.
        </p>

        {/* Display general error message if one exists */}
        {error && (
            <div className="text-red-600 bg-red-100 p-3 rounded-md mb-4 text-center font-medium">
                {error}
            </div>
        )}

        {/* ✅ Form Wrapper */}
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Full Name"
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}     
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button 
            name={isSubmitting ? "Registering..." : "Register Business"} 
            type="submit" 
            disabled={isSubmitting}
          />
        </form>

        <AuthLink text="Already have an account?" to="/" />
      </div>
    </div>
  );
}

export default RegistrationForm;