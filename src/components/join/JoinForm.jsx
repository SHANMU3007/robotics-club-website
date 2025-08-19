import React, { useState } from 'react';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    studentId: '',
    major: '',
    year: '',
    experience: '',
    interests: [],
    motivation: '',
    availability: ''
  });

  const [errors, setErrors] = useState({});

  const containerStyle = {
    backgroundColor: '#1E1E1E',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid #4A90E2',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const formGroupStyle = {
    marginBottom: '1.5rem',
  };

  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
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

  const selectStyle = {
    ...inputStyle,
    backgroundColor: '#282828',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical',
  };

  const checkboxGroupStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '0.5rem',
    marginTop: '0.5rem',
  };

  const checkboxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#E0E0E0',
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

  const interests = [
    'Arduino Programming',
    'Robot Design',
    'Computer Vision',
    'Machine Learning',
    '3D Printing',
    'Electronics',
    'Programming',
    'Mechanical Design',
    'AI & Robotics',
    'Competitions'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];
  const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'interests') {
        const newInterests = checked 
          ? [...formData.interests, value]
          : formData.interests.filter(interest => interest !== value);
        setFormData(prev => ({ ...prev, interests: newInterests }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.studentId.trim()) newErrors.studentId = 'Student ID is required';
    if (!formData.major.trim()) newErrors.major = 'Major is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation is required';
    if (!formData.availability.trim()) newErrors.availability = 'Availability is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Application submitted:', formData);
      alert('Thank you for your application! We will review it and get back to you soon.');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', studentId: '',
        major: '', year: '', experience: '', interests: [], motivation: '', availability: ''
      });
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Join Our Robotics Club</h2>
      <p style={subtitleStyle}>
        Ready to dive into the world of robotics? Fill out this application to become a member!
      </p>
      
      <form onSubmit={handleSubmit}>
        <div style={rowStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.firstName && <div style={errorStyle}>{errors.firstName}</div>}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.lastName && <div style={errorStyle}>{errors.lastName}</div>}
          </div>
        </div>

        <div style={rowStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        <div style={rowStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="studentId">Student ID *</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.studentId && <div style={errorStyle}>{errors.studentId}</div>}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="major">Major *</label>
            <input
              type="text"
              id="major"
              name="major"
              value={formData.major}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.major && <div style={errorStyle}>{errors.major}</div>}
          </div>
        </div>

        <div style={rowStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="year">Year *</label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="">Select Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors.year && <div style={errorStyle}>{errors.year}</div>}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="experience">Experience Level *</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="">Select Level</option>
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            {errors.experience && <div style={errorStyle}>{errors.experience}</div>}
          </div>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Areas of Interest</label>
          <div style={checkboxGroupStyle}>
            {interests.map(interest => (
              <label key={interest} style={checkboxStyle}>
                <input
                  type="checkbox"
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleChange}
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="motivation">Why do you want to join? *</label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            style={textareaStyle}
            placeholder="Tell us about your motivation and what you hope to learn..."
          />
          {errors.motivation && <div style={errorStyle}>{errors.motivation}</div>}
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="availability">Availability *</label>
          <textarea
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            style={textareaStyle}
            placeholder="When are you available for club meetings and activities?"
          />
          {errors.availability && <div style={errorStyle}>{errors.availability}</div>}
        </div>

        <button type="submit" style={buttonStyle}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JoinForm;