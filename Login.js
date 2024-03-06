import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing again
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters long';
    }
    // Implement password strength validation if needed

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulate successful login
      // Redirect to homepage
      history.push('/');
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
    // Store remember me option in local storage or cookies
    // For simplicity, storing in local storage
    localStorage.setItem('rememberMe', !rememberMe);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username/Email</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMe}
            />
            Remember Me
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
