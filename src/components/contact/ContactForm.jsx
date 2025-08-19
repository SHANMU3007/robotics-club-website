import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const containerStyle = {
    backgroundColor: '#1E1E1E',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid #4A90E2',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#B0B0B0',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #4A90E2',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s ease',
    backgroundColor: '#282828',
    color: '#E0E0E0',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#4A90E2',
    color: '#FFFFFF',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    width: '100%',
  };

  const errorStyle = {
    color: '#EF4444',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Send us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Your full name"
          />
          {errors.name && <div style={errorStyle}>{errors.name}</div>}
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="your.email@example.com"
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={inputStyle}
            placeholder="What is this about?"
          />
          {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            placeholder="Tell us more about your inquiry..."
          />
          {errors.message && <div style={errorStyle}>{errors.message}</div>}
        </div>

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;