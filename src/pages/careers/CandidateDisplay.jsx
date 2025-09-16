import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';
import { FaMailBulk, FaPhoneAlt, FaPlaceOfWorship, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { SiHiveBlockchain } from "react-icons/si"; // Logo icon

const CandidateDisplay = () => {
  const location = useLocation();
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roleFilter, setRoleFilter] = useState('');
  const [expandedCards, setExpandedCards] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem('hremail');
    const userId = location.state?.userId;
    if (!userDetails || !userId) {
      navigate("/unauthorized");
      return;
    }

    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const formData = { "userId": userId }
        const response = await fetch('http://97.74.87.167/api/careers/getCandidateDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          navigate("/unauthorized")
        }

        const result = await response.json();
        if (result.data && result.data.data) {
          setCandidates(result.data.data);
        } else {
          navigate("/unauthorized")
        }
        setError(null);
      } catch (err) {
        setError(err.message);
        navigate("/unauthorized")
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const uniqueRoles = candidates.length > 0
    ? [...new Set(candidates.map(candidate => candidate.roles))]
    : [];

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredCandidates = candidates.filter(candidate =>
    roleFilter === '' || candidate.roles === roleFilter
  );

  const downloadResume = (base64Data, candidateName) => {
    try {
      let fileName = `${candidateName.replace(/\s+/g, '_')}_Resume.pdf`;
      let cleanBase64 = base64Data;
      if (cleanBase64.includes(';base64,')) {
        cleanBase64 = cleanBase64.split(';base64,')[1];
      }
      cleanBase64 = cleanBase64.replace(/\s/g, '');
      if (!cleanBase64 || cleanBase64.trim() === '') {
        throw new Error('Empty base64 data');
      }
      try {
        const byteCharacters = atob(cleanBase64);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
          const slice = byteCharacters.slice(offset, offset + 512);
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
        let fileType = 'application/pdf';
        const firstBytes = byteArrays[0].slice(0, 4);
        if (byteCharacters.startsWith('%PDF')) {
          fileType = 'application/pdf';
        }
        else if (firstBytes[0] === 80 && firstBytes[1] === 75) {
          fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          fileName = fileName.replace('.pdf', '.docx');
        }
        const blob = new Blob(byteArrays, { type: fileType });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (atobError) {
        console.error('atob error:', atobError);
        alert('There was an error processing the resume data. Please contact support.');
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('There was an error downloading the resume. The resume data may be invalid or corrupted.');
    }
  };
  

  return (
    <>
      {/* Keep the original navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo with Animation */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <SiHiveBlockchain size={28} className="text-pink-600" />
              <span className="text-xl font-semibold text-black ml-2 tracking-wide">
                <span className="text-3xl">V</span>Pearl<span className="text-3xl">S</span>olutions
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center px-5 py-2 border-2 border-pink-500 text-sm font-medium rounded-full text-pink-600 bg-white hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaArrowLeft className="mr-2" /> Return to Home
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 py-3 space-y-1 sm:px-3">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center px-3 py-2 text-base font-medium text-pink-600 hover:bg-pink-50 rounded-md"
            >
              <FaArrowLeft className="mr-2" /> Return to Home
            </button>
          </div>
        </div>
      </nav>

    {/* New design for the main content */}
    <div className="bg-gray-50 min-h-screen pt-36 sm:pt-32 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-lg overflow-hidden mb-6">
            <div className="relative px-6 py-12 sm:px-12 sm:py-16">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 cinzel-heading">
                 Management Candidate Profiles
                </h1>
                <p className="text-lg text-pink-100 max-w-2xl mx-auto cinzel-body">
                <i>Review and manage candidate applications for various roles in your organization.</i>
                </p>
              </div>
            </div>
          </div>

        {/* Role Filter */}
        {!loading && !error && candidates.length > 0 && (
          <div className="max-w-7xl mx-auto mb-8">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Filter Candidates
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative flex-grow max-w-xs">
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-lg shadow-sm appearance-none bg-white"
                  >
                    <option value="">All Roles</option>
                    {uniqueRoles.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {roleFilter && (
                  <button
                    onClick={() => setRoleFilter('')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
                  >
                    Clear Filter
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
                <div className="ml-auto text-sm text-gray-500">
                  {filteredCandidates.length} {filteredCandidates.length === 1 ? 'candidate' : 'candidates'} found
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="max-w-7xl mx-auto flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-600"></div>
              <p className="mt-4 text-gray-600">Loading candidate profiles...</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="max-w-7xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800">Error Loading Candidates</h3>
                  <p className="mt-2 text-red-700">
                    {error}
                  </p>
                  <p className="mt-3">
                    <button
                      onClick={() => window.location.reload()}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                    >
                      Try Again
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No candidates state - Combined for both empty candidates and empty filtered candidates */}
        {!loading && !error && (candidates.length === 0 || filteredCandidates.length === 0) && (
          <div className="max-w-7xl mx-auto">
            <div className="text-center p-12 bg-white rounded-xl shadow-sm border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No Candidates Found</h3>
              <p className="mt-2 text-gray-500">There are currently no candidate profiles available.</p>
              {roleFilter && (
                <button
                  onClick={() => setRoleFilter('')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        )}

        {/* Candidate Cards - New Design */}
        {!loading && !error && filteredCandidates.length > 0 && (
          <div className="max-w-7xl mx-auto space-y-6">
            {filteredCandidates.map((candidate) => (
              <div
                key={candidate.candidate_id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-pink-100 to-white p-5 border-b border-gray-100">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                      <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl">
                        {candidate.first_name.charAt(0)}{candidate.last_name.charAt(0)}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-black">
                          {candidate.first_name} {candidate.middle_name} {candidate.last_name}
                        </h2>
                        <p className="text-gray-500 text-sm">{candidate.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="px-4 py-1.5 bg-pink-600 text-white rounded-full text-sm font-medium">
                        {candidate.roles}
                      </span>
                      <button
                        onClick={() => downloadResume(
                          candidate.resumebase64,
                          `${candidate.first_name}_${candidate.last_name}`
                        )}
                        className="p-2 text-pink-600 hover:text-pink-800 hover:bg-pink-50 rounded-full transition-colors flex items-center"
                        title="Download Resume"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => toggleCard(candidate.candidate_id)}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors"
                      >
                        {expandedCards[candidate.candidate_id] ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Summary - Always visible */}
                <div className="p-5 border-b border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mr-3">
                        <FaPhoneAlt size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="font-medium">{candidate.country_code} {candidate.phone_number}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 mr-3">
                        <FaPlaceOfWorship size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-medium">{candidate.current_location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="font-medium">{candidate.work_experience_years} years, {candidate.work_experience_months} months</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable details section */}
                {expandedCards[candidate.candidate_id] && (
                  <div className="p-5 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left column */}
                      <div>
                        {/* Skills */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                            </svg>
                            Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {candidate.candidate_skills.map((skill, index) => (
                              <span key={index} className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                            Work Experience
                          </h3>
                          {candidate.experience_details.map((exp, index) => (
                            <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg border-l-4 border-pink-400">
                              <div className="flex justify-between items-start">
                                <h4 className="font-semibold text-gray-800">{exp.role}</h4>
                                <span className="text-sm text-gray-500">{exp.duration}</span>
                              </div>
                              <p className="text-gray-600 mt-1">{exp.company_name}</p>
                              <p className="text-sm text-gray-600 mt-2 text-justify">{exp.responsibilities}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right column */}
                      <div>
                        {/* Education */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            Education
                          </h3>
                          {candidate.educationDetails.map((edu, index) => (
                            <div key={index} className="mb-3 bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                              <p className="text-gray-600">{edu.university}</p>
                              <p className="text-sm text-gray-500 mt-1">Graduated: {edu.year_of_passing}</p>
                            </div>
                          ))}
                        </div>

                        {/* Salary Expectations */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                            Salary Expectations
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <p className="text-sm text-gray-500">Current Salary</p>
                              <p className="font-medium text-gray-800">
                                {candidate.current_salary_amount} {candidate.current_salary_currency}
                              </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                              <p className="text-sm text-gray-500">Expected Salary</p>
                              <p className="font-medium text-gray-800">
                                {candidate.expected_salary_amount} {candidate.expected_salary_currency}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Availability & Preferences */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            Availability & Preferences
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg mb-3">
                            <p className="text-sm text-gray-500">Available to Join</p>
                            <p className="font-medium text-gray-800">{candidate.availability_to_join}</p>
                          </div>
                          <p className="font-medium text-gray-700 mb-2">Preferred Locations:</p>
                          <div className="flex flex-wrap gap-2">
                            {candidate.preferred_location.map((loc, index) => (
                              <span key={index} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
                                {loc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions Section */}
                    <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end space-x-4">
                      <button
                        onClick={() => downloadResume(
                          candidate.resumebase64,
                          `${candidate.first_name}_${candidate.last_name}`
                        )}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </button>
                      <a
                        href={`mailto:${candidate.email}`}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <FaMailBulk className="mr-2 h-4 w-4" /> 
                        Contact via Email
                      </a>
                      <a
                        href={`tel:${candidate.country_code}${candidate.phone_number}`}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <FaPhoneAlt className="mr-2 h-4 w-4" />
                        Call Candidate
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CandidateDisplay;

