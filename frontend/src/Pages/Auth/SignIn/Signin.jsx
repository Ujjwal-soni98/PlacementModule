import React, { useState } from 'react';
import { studentLogin } from '../../../api/Student/Student.api';
import { companyLogin } from '../../../api/Company/Company.api';
import { adminLogin } from '../../../api/Admin/Admin.api';

const SignIn = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (role === 'student') {
        response = await studentLogin(email, password);
      } else if (role === 'company') {
        response = await companyLogin(email, password);
      } else if (role === 'admin') {
        response = await adminLogin(email, password);
      }
      console.log('Login successful:', response);
      // Handle successful login (e.g., redirect to a dashboard)
    } catch (error) {
      setError(error.message || 'An error occurred during login');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              id="role"
              value={role}
              onChange={handleRoleChange}
              className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            >
              <option value="student">Student</option>
              <option value="admin">Admin/Hod</option>
              <option value="company">Company</option>
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm">{error}</div>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
