import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../Footer';
import Button from '../../components/Button';

const CandidateRegistrationForm = () => {
  const location = useLocation();
  const job_id = location.state?.jobId || 1;
  const title = location.state?.title || 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "Male",
    email: "",
    country_code: "+91",
    phone_number: "",
    date_of_birth: "",
    current_location: "",
    preferred_location: ["Chennai"],
    skills: [],
    privacy_policy: false,
    work_experience_years: "",
    work_experience_months: "",
    current_salary_currency: "INR",
    current_salary_amount: "",
    expected_salary_currency: "INR",
    expected_salary_amount: "",
    availability_to_join: "",
    experience_details: [
      {
        company_name: "",
        role: "",
        duration: "",
        responsibilities: ""
      }
    ],
    educationDetails: [
      {
        degree: "",
        university: "",
        year_of_passing: ""
      }
    ],
    filename: "",
    resumeBase64: "",
    resume_name: "",
    job_id: parseInt(job_id, 10)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true
    });
  };

  const handleArrayInputChange = (e, index, field, subfield = null) => {
    const newArray = [...formData[field]];

    if (subfield) {
      newArray[index] = {
        ...newArray[index],
        [subfield]: e.target.value
      };
    } else {
      newArray[index] = e.target.value;
    }

    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  const addListItem = (field) => {
    if (field === 'preferred_location' || field === 'skills') {
      setFormData({
        ...formData,
        [field]: [...formData[field], ""]
      });
    } else if (field === 'experience_details') {
      setFormData({
        ...formData,
        experience_details: [
          ...formData.experience_details,
          { company_name: "", role: "", duration: "", responsibilities: "" }
        ]
      });
    } else if (field === 'educationDetails') {
      setFormData({
        ...formData,
        educationDetails: [
          ...formData.educationDetails,
          { degree: "", university: "", year_of_passing: "" }
        ]
      });
    }
  };

  const removeListItem = (field, index) => {
    const newArray = [...formData[field]];
    newArray.splice(index, 1);
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({
          ...formData,
          resumeBase64: event.target.result.split(',')[1],
          resume_name: file.name
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mark all fields as touched for validation
    const allFields = {};
    Object.keys(formData).forEach(key => {
      allFields[key] = true;
    });
    setTouched(allFields);
    setIsSubmitting(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch('http://97.74.87.167/api/careers/candidateRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.data.status) {
          setMessage("Registration successful!");
          window.scrollTo(0, 0);
          
          // Reset form data to initial state after successful submission
          setFormData({
            first_name: "",
            middle_name: "",
            last_name: "",
            gender: "Male",
            email: "",
            country_code: "+91",
            phone_number: "",
            date_of_birth: "",
            current_location: "",
            preferred_location: ["Chennai"],
            skills: [],
            privacy_policy: false,
            work_experience_years: "",
            work_experience_months: "",
            current_salary_currency: "INR",
            current_salary_amount: "",
            expected_salary_currency: "INR",
            expected_salary_amount: "",
            availability_to_join: "",
            experience_details: [
              {
                company_name: "",
                role: "",
                duration: "",
                responsibilities: ""
              }
            ],
            educationDetails: [
              {
                degree: "",
                university: "",
                year_of_passing: ""
              }
            ],
            filename: "",
            resumeBase64: "",
            resume_name: "",
            job_id: parseInt(job_id, 10)
          });
          
          // Reset touched state as well
          setTouched({});
          
        } else {
          setError(data.data.message);
        }
        console.log('Success:', data);
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      setError("Failed to register. Please try again later.");
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  // Input field styling with validation
  const getInputClass = (fieldName) => {
    const baseClass = "w-full p-2 border rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300";

    if (!touched[fieldName]) return `${baseClass} border-gray-300`;

    if (!formData[fieldName] ||
      (Array.isArray(formData[fieldName]) && formData[fieldName].length === 0) ||
      formData[fieldName] === "") {
      return `${baseClass} border-pink-500 bg-pink-50`;
    }

    return `${baseClass} border-green-500 bg-green-50`;
  };

  // Specific validation for nested objects
  const getNestedInputClass = (field, index, subfield) => {
    const baseClass = "w-full p-2 border rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300";

    if (!touched[`${field}_${index}_${subfield}`]) return `${baseClass} border-gray-300`;

    if (!formData[field][index][subfield]) {
      return `${baseClass} border-pink-500 bg-pink-50`;
    }

    return `${baseClass} border-green-500 bg-green-50`;
  };

  const handleNestedBlur = (field, index, subfield) => {
    setTouched({
      ...touched,
      [`${field}_${index}_${subfield}`]: true
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen mt-20 bg-gray-50">
        {message && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-center max-w-4xl mx-auto mt-4 shadow-md border border-green-200 animate-fadeIn">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="font-medium">{message}</span>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-pink-100 text-pink-700 rounded-lg text-center max-w-4xl mx-auto mt-4 shadow-md border border-pink-200 animate-fadeIn">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-medium">{error}</span>
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto w-full px-4 py-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-pink-600 cinzel-body">REGISTRATION FORM {title.toUpperCase()}</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Personal Information */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-4 cinzel-body text-pink-600 border-b pb-2">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    First Name<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('first_name')}
                    placeholder='Enter Your First Name'
                    title='Enter Your First Name'
                    className={getInputClass('first_name')}
                    required
                  />
                  {touched.first_name && !formData.first_name && (
                    <p className="text-pink-500 text-xs mt-1">First name is required</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">Middle Name</label>
                  <input
                    type="text"
                    name="middle_name"
                    placeholder='Enter Your Middle Name'
                    title='Enter Your Middle Name'
                    value={formData.middle_name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Last Name<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder='Enter Your Last Name'
                    title='Enter Your Last Name'
                    value={formData.last_name}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('last_name')}
                    className={getInputClass('last_name')}
                    required
                  />
                  {touched.last_name && !formData.last_name && (
                    <p className="text-pink-500 text-xs mt-1">Last name is required</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Gender<span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('gender')}
                    className={getInputClass('gender')}
                    title='Select Your Gender'
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Date of Birth<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('date_of_birth')}
                    className={getInputClass('date_of_birth')}
                    title="Select Your Date of Birth"
                    required
                  />
                  {touched.date_of_birth && !formData.date_of_birth && (
                    <p className="text-pink-500 text-xs mt-1">Date of birth is required</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-4 cinzel-body text-pink-600 border-b pb-2">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Email<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder='Enter Your Email'
                    title='Enter Your Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('email')}
                    className={getInputClass('email')}
                    required
                  />
                  {touched.email && !formData.email && (
                    <p className="text-pink-500 text-xs mt-1">Email is required</p>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block mb-1 cinzel-body font-medium text-gray-700">
                      Code<span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country_code"
                      placeholder='+91'
                      title='Enter Your Country Code'
                      value={formData.country_code}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('country_code')}
                      className={getInputClass('country_code')}
                      required
                    />
                    {touched.country_code && !formData.country_code && (
                      <p className="text-pink-500 text-xs mt-1">Country code is required</p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-1 cinzel-body font-medium text-gray-700">
                      Phone Number<span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      placeholder='Enter Your Phone Number'
                      title='Enter Your Phone Number'
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('phone_number')}
                      className={getInputClass('phone_number')}
                      required
                    />
                    {touched.phone_number && !formData.phone_number && (
                      <p className="text-pink-500 text-xs mt-1">Phone number is required</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Current Location<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="current_location"
                    placeholder='Enter Your Current Location'
                    title='Enter Your Current Location'
                    value={formData.current_location}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('current_location')}
                    className={getInputClass('current_location')}
                    required
                  />
                  {touched.current_location && !formData.current_location && (
                    <p className="text-pink-500 text-xs mt-1">Current location is required</p>
                  )}
                </div>
              </div>
            </div>

            {/* Preferred Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2 cinzel-body text-pink-600 border-b pb-2">
                Preferred Locations<span className="text-pink-600">*</span>
              </h2>
              {formData.preferred_location.map((location, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={location}
                    placeholder='Enter Your Preferred Location'
                    title='Enter Your Preferred Location'
                    onChange={(e) => handleArrayInputChange(e, index, 'preferred_location')}
                    onBlur={() => handleBlur('preferred_location')}
                    className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                    disabled
                  />
                  {index > 0 && (
                    <button
                    disable
                      type="button"
                      onClick={() => removeListItem('preferred_location', index)}
                    >
                     <Button>Remove</Button>
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem('preferred_location')}>
                <Button> + Add Location</Button>
              </button>
              {touched.preferred_location && formData.preferred_location.length === 0 && (
                <p className="text-pink-500 text-xs mt-1">At least one preferred location is required</p>
              )}
            </div>

            {/* Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2 cinzel-body text-pink-600 border-b pb-2">
                Skills<span className="text-pink-500">*</span>
              </h2>
              {formData.skills.length === 0 && (
                <p className="text-gray-500 mb-2 italic">Add at least one skill</p>
              )}
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={skill}
                    placeholder='Enter Your Skill eg: HTML'
                    title='Enter Your Skill'
                    onChange={(e) => handleArrayInputChange(e, index, 'skills')}
                    onBlur={() => handleBlur('skills')}
                    className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem('skills', index)}>
                    <Button>Remove</Button>
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem('skills')}>
                <Button>+ Add Skill</Button>
              </button>
              {touched.skills && formData.skills.length === 0 && (
                <p className="text-pink-500 text-xs mt-1">At least one skill is required</p>
              )}
            </div>

            {/* Work Experience */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-4 cinzel-body text-pink-600 border-b pb-2">Work Experience</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Years<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder='Enter total years of work experience'
                    title='Enter total years of work experience in year eg : 5 years'
                    name="work_experience_years"
                    value={formData.work_experience_years}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('work_experience_years')}
                    className={getInputClass('work_experience_years')}
                    required
                  />
                  {touched.work_experience_years && !formData.work_experience_years && (
                    <p className="text-pink-500 text-xs mt-1">Years of experience is required</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Months<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder='Enter months of work experience'
                    name="work_experience_months"
                    value={formData.work_experience_months}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('work_experience_months')}
                    className={getInputClass('work_experience_months')}
                    required
                  />
                  {touched.work_experience_months && !formData.work_experience_months && (
                    <p className="text-pink-500 text-xs mt-1">Months of experience is required</p>
                  )}
                </div>
              </div>

              <h3 className="font-medium mb-2 cinzel-body text-pink-600">Experience Details<span className="text-pink-500">*</span></h3>
              {formData.experience_details.map((exp, index) => (
                <div key={index} className="p-4 mb-4 rounded-lg bg-pink-50 border border-pink-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block mb-1 cinzel-body font-medium text-gray-700">
                        Company Name<span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder='Enter company name'
                        title='Enter company name'
                        value={exp.company_name}
                        onChange={(e) => handleArrayInputChange(e, index, 'experience_details', 'company_name')}
                        onBlur={() => handleNestedBlur('experience_details', index, 'company_name')}
                        className={getNestedInputClass('experience_details', index, 'company_name')}
                        required
                      />
                      {touched[`experience_details_${index}_company_name`] && !exp.company_name && (
                        <p className="text-pink-500 text-xs mt-1">Company name is required</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1 cinzel-body font-medium text-gray-700">
                        Role<span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder='Enter role name'
                        title='Enter role name'
                        value={exp.role}
                        onChange={(e) => handleArrayInputChange(e, index, 'experience_details', 'role')}
                        onBlur={() => handleNestedBlur('experience_details', index, 'role')}
                        className={getNestedInputClass('experience_details', index, 'role')}
                        required
                      />
                      {touched[`experience_details_${index}_role`] && !exp.role && (
                        <p className="text-pink-500 text-xs mt-1">Role is required</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1 cinzel-body font-medium text-gray-700">
                        Duration<span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder='e.g., 3 Years 6 months'
                        title='Enter duration of work experience'
                        value={exp.duration}
                        onChange={(e) => handleArrayInputChange(e, index, 'experience_details', 'duration')}
                        onBlur={() => handleNestedBlur('experience_details', index, 'duration')}
                        className={getNestedInputClass('experience_details', index, 'duration')}
                        required
                      />
                      {touched[`experience_details_${index}_duration`] && !exp.duration && (
                        <p className="text-pink-500 text-xs mt-1">Duration is required</p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-1 cinzel-body font-medium text-gray-700">
                        Responsibilities<span className="text-pink-500">*</span>
                      </label>
                      <textarea
                        value={exp.responsibilities}
                        placeholder='Enter your responsibilities in the company'
                        title='Enter your responsibilities in the company'
                        onChange={(e) => handleArrayInputChange(e, index, 'experience_details', 'responsibilities')}
                        onBlur={() => handleNestedBlur('experience_details', index, 'responsibilities')}
                        className={getNestedInputClass('experience_details', index, 'responsibilities')}
                        rows="3"
                        required
                      ></textarea>
                      {touched[`experience_details_${index}_responsibilities`] && !exp.responsibilities && (
                        <p className="text-pink-500 text-xs mt-1">Responsibilities are required</p>
                      )}
                    </div>
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeListItem('experience_details', index)} className='mt-1'>
                      <Button>Remove Experience</Button>
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem('experience_details')}>
                <Button>+ Add Experience</Button>
              </button>
            </div>


            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2 cinzel-body text-pink-600 border-b pb-2">
                Education<span className="text-pink-500">*</span>
              </h2>
              {formData.educationDetails.map((edu, index) => (
                <div key={index} className="p-4 mb-4 rounded-lg bg-pink-50 border border-pink-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block mb-1 cinzel-body font-medium text-gray-700">
                        Degree<span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder='e.g., B.Tech, M.Tech, B.E'
                        title='Enter your degree'
                        value={edu.degree}
                        onChange={(e) => handleArrayInputChange(e, index, 'educationDetails', 'degree')}
                        onBlur={() => handleNestedBlur('educationDetails', index, 'degree')}
                        className={getNestedInputClass('educationDetails', index, 'degree')}
                        required
                      />
                      {touched[`educationDetails_${index}_degree`] && !edu.degree && (
                        <p className="text-pink-500 text-xs mt-1">Degree is required</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1 cinzel-body font-medium text-gray-700">
                        University<span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder='Enter your university name'
                        title='Enter your university name'
                        value={edu.university}
                        onChange={(e) => handleArrayInputChange(e, index, 'educationDetails', 'university')}
                        onBlur={() => handleNestedBlur('educationDetails', index, 'university')}
                        className={getNestedInputClass('educationDetails', index, 'university')}
                        required
                      />
                      {touched[`educationDetails_${index}_university`] && !edu.university && (
                        <p className="text-pink-500 text-xs mt-1">University is required</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1 cinzel-body font-medium text-gray-700">
                        Year of Passing<span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder='Enter your year of passing'
                        title='Enter your year of passing'
                        value={edu.year_of_passing}
                        onChange={(e) => handleArrayInputChange(e, index, 'educationDetails', 'year_of_passing')}
                        onBlur={() => handleNestedBlur('educationDetails', index, 'year_of_passing')}
                        className={getNestedInputClass('educationDetails', index, 'year_of_passing')}
                        required
                      />
                      {touched[`educationDetails_${index}_year_of_passing`] && !edu.year_of_passing && (
                        <p className="text-pink-500 text-xs mt-1">Year of passing is required</p>
                      )}
                    </div>
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeListItem('educationDetails', index)}
                      className='mt-2'>
                      <Button>Remove Education</Button>
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem('educationDetails')}>
                <Button>Add Education</Button>
              </button>
            </div>

            {/* Salary & Availability */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-4 cinzel-body text-pink-600 border-b pb-2">Salary & Availability</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Current Salary Currency<span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="current_salary_currency"
                    value={formData.current_salary_currency}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('current_salary_currency')}
                    className={getInputClass('current_salary_currency')}
                    required
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                    <option value="CAD">CAD</option>
                    <option value="AUD">AUD</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Current Salary Amount<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="current_salary_amount"
                    placeholder='Enter salary amount'
                    value={formData.current_salary_amount}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('current_salary_amount')}
                    className={getInputClass('current_salary_amount')}
                    min="0"
                    required
                  />
                  {touched.current_salary_amount && !formData.current_salary_amount && (
                    <p className="text-pink-500 text-xs mt-1">Current salary amount is required</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Expected Salary Currency<span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="expected_salary_currency"
                    value={formData.expected_salary_currency}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('expected_salary_currency')}
                    className={getInputClass('expected_salary_currency')}
                    required
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                    <option value="CAD">CAD</option>
                    <option value="AUD">AUD</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Expected Salary Amount<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="expected_salary_amount"
                    placeholder='Enter salary amount'
                    title='Enter salary amount'
                    value={formData.expected_salary_amount}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('expected_salary_amount')}
                    className={getInputClass('expected_salary_amount')}
                    min="0"
                    required
                  />
                  {touched.expected_salary_amount && !formData.expected_salary_amount && (
                    <p className="text-pink-500 text-xs mt-1">Expected salary amount is required</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 cinzel-body font-medium text-gray-700">
                    Availability to Join<span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="availability_to_join"
                    value={formData.availability_to_join}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('availability_to_join')}
                    className={getInputClass('availability_to_join')}
                    placeholder="e.g., 45 days, 2 months"
                    title='e.g., 45 days'
                    required
                  />
                  {touched.availability_to_join && !formData.availability_to_join && (
                    <p className="text-pink-500 text-xs mt-1">Availability to join is required</p>
                  )}
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-4 cinzel-body text-pink-600 border-b pb-2">
                Resume<span className="text-pink-500">*</span>
              </h2>
              <div className="mb-4">
                <label className="block mb-1 cinzel-body font-medium text-gray-700">
                  Upload Resume (PDF, DOC, DOCX)<span className="text-pink-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    onBlur={() => handleBlur('resumeBase64')}
                    className={`block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4 cinzel-body
                      file:rounded file:border-0
                      file:text-sm file:font-semibold
                      file:bg-pink-100 file:text-pink-700
                      hover:file:bg-pink-200 ${!formData.resumeBase64 && touched.resumeBase64 ? 'border border-pink-500 rounded' : ''}`}
                    required={!formData.resumeBase64}
                  />
                </div>
                {formData.resume_name && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-md flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-sm text-gray-700 cinzel-body">
                      Selected file: <span className="font-medium">{formData.resume_name}</span>
                    </p>
                  </div>
                )}
                {touched.resumeBase64 && !formData.resumeBase64 && (
                  <p className="text-pink-500 text-xs mt-1">Resume is required</p>
                )}
              </div>
            </div>

            {/* Terms and Privacy */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="privacy_policy"
                  checked={formData.privacy_policy}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('privacy_policy')}
                  className={`h-5 w-5 rounded border-gray-300 text-pink-600 focus:ring-pink-500 ${!formData.privacy_policy && touched.privacy_policy ? 'border-pink-500' : ''}`}
                  required
                />
                <label className='cinzel-body text-gray-700'>
                  I agree to the privacy policy and terms of service<span className="text-pink-500">*</span>
                </label>
              </div>
              {touched.privacy_policy && !formData.privacy_policy && (
                <p className="text-pink-500 text-xs mt-1 ml-7">You must agree to the privacy policy</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 cinzel-body text-white shadow-md
                  ${isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-600 to-pink-600 hover:from-pink-700 hover:to-pink-700 hover:shadow-lg'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ marginTop: '60px' }}><Footer /></div>

      {/* Add some CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .cinzel-body {
          font-family: 'Cinzel', serif;
        }
      `}</style>
    </>
  );
};

export default CandidateRegistrationForm;

