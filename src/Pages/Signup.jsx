import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Trying to sign up with:", email, password, role);
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      console.log("User created:", user.uid);
  
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        role,
      });
  
      // Save to localStorage
      localStorage.setItem("userRole", role);
      localStorage.setItem("userId", user.uid);
  
      if (role === 'seller') {
        navigate('/dashboard/seller');
      } else {
        navigate('/dashboard/buyer');
      }
  
    } catch (error) {
      console.error("Signup error:", error.code, error.message);
  
      if (error.code === 'auth/email-already-in-use') {
        alert("This email is already registered. Try logging in instead.");
      } else if (error.code === 'auth/invalid-email') {
        alert("Please enter a valid email address.");
      } else if (error.code === 'auth/weak-password') {
        alert("Password should be at least 6 characters.");
      } else {
        alert("Signup failed: " + error.message);
      }
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[400px] space-y-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
  
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="isha"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
  
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="isha@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
  
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
  
          <div>
            <label className="block text-sm text-gray-600 mb-1">Role</label>
            <select
              className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
  
          <button
            type="submit"
            className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Sign Up
          </button>
        </form>
  
        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}



export default Signup;
