import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '', name: '', profilePicture: '' });
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    // Implement validation for other fields as needed

    if (!termsAccepted) {
      validationErrors.terms = 'Please accept the terms and conditions';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulate successful signup
      setSuccessMessage('Signup successful! Welcome, ' + formData.username + '!');
      // Simulate sending a welcome email notification (optional)
      setTimeout(() => {
        setSuccessMessage('');
        // Redirect to login screen after successful signup
        history.push('/login');
      }, 3000);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            I accept the terms and conditions
          </label>
          {errors.terms && <span className="error">{errors.terms}</span>}
        </div>
        <button type="submit">Signup</button>
      </form>
      {successMessage && <div className="success">{successMessage}</div>}
    </div>
  );
};

export default Signup;
