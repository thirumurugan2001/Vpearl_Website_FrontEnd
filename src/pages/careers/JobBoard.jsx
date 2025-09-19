import React, { useState, useEffect } from 'react';
import { Search, Briefcase, MapPin, Clock, Filter, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Footer';
import Button from '../../components/Button';
import apiRoutes from '../../apirouter';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    department: '',
    jobType: '',
    location: ''
  });
  const [activeJobId, setActiveJobId] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchJobs = async () => {
      try {        
        await new Promise(resolve => setTimeout(resolve, 800));        
        const response = await fetch(apiRoutes.jobDetails);        
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.data.jobDetails && data.data.jobDetails.length > 0) {
          setJobs(data.data.jobDetails);
          setActiveJobId(data.data.jobDetails[0].id);
        } else {
          setJobs([]);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch job listings. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchJobs();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const filteredJobs = jobs.filter(job => {
    return (
      (filters.department === '' || job.department === filters.department) &&
      (filters.jobType === '' || job.job_type === filters.jobType) &&
      (filters.location === '' || job.location === filters.location)
    );
  });

  const departments = [...new Set(jobs.map(job => job.department))];
  const jobTypes = [...new Set(jobs.map(job => job.job_type))];
  const locations = [...new Set(jobs.map(job => job.location))];

  const getActiveJob = () => {
    return jobs.find(job => job.id === activeJobId) || null;
  };
  
  const activeJob = getActiveJob();

  // Function to navigate to the registration form with the job ID
  const handleApply = (jobId, title) => {
    navigate("/candidateRegistrationForm", { state: { jobId: jobId, title: title } });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-50 min-h-screen mt-17">
        <main className="container mx-auto px-4 py-6 flex flex-col gap-6">
          
          {/* Hero Section - Improved styling */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-lg overflow-hidden mb-6">
            <div className="relative px-6 py-12 sm:px-12 sm:py-16">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 cinzel-heading">
                  Step into success with career opportunities
                </h1>
                <p className="text-lg text-pink-100 max-w-2xl mx-auto cinzel-body">
                  Ready for your next opportunity? Check out our top job listings now!
                </p>
              </div>
            </div>
          </div>
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800 cinzel-heading">Error Loading Jobs</h3>
                  <p className="mt-2 text-red-700 cinzel-body">{error}</p>
                  <p className="mt-3">
                    <button
                      onClick={() => window.location.reload()}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 cinzel-body"
                    >
                      Try Again
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Content when not loading and no error */}
          {!loading && !error && (
            <>
              {/* Filters Section */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Filter size={18} className="text-gray-500 mr-2" />
                  <h2 className="text-lg font-medium cinzel-heading">Filters</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 cinzel-heading">Department</label>
                    <select 
                      className="w-full p-2 border rounded-md cinzel-body"
                      value={filters.department}
                      onChange={(e) => handleFilterChange('department', e.target.value)}
                    >
                      <option value="">All Departments</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 cinzel-heading">Job Type</label>
                    <select 
                      className="w-full p-2 border rounded-md cinzel-body"
                      value={filters.jobType}
                      onChange={(e) => handleFilterChange('jobType', e.target.value)}
                    >
                      <option value="">All Types</option>
                      {jobTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 cinzel-heading">Location</label>
                    <select 
                      className="w-full p-2 border rounded-md cinzel-body"
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                    >
                      <option value="">All Locations</option>
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setFilters({ department: '', jobType: '', location: '' })}
                  >
                    <Button>Clear Filters</Button>
                  </button>
                </div>
              </div>
              
              {/* Available Positions Section */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="text-lg font-extralight cinzel-heading">Available Positions ({filteredJobs.length})</h2>
                </div>
                
                {/* No Jobs State */}
                {jobs.length === 0 ? (
                  <div className="text-center p-12 bg-white rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 cinzel-heading">No Jobs Available</h3>
                    <p className="mt-2 text-gray-500 cinzel-body">There are currently no job listings available.</p>
                  </div>
                ) : filteredJobs.length === 0 ? (
                  <div className="text-center p-12 bg-white rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 cinzel-heading">No Jobs Match Your Filters</h3>
                    <p className="mt-2 text-gray-500 cinzel-body">Try adjusting your filter criteria to see more results.</p>
                    <button
                      onClick={() => setFilters({ department: '', jobType: '', location: '' })}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 cinzel-body"
                    >
                      Clear All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {filteredJobs.map(job => (
                      <div 
                        key={job.id}
                        className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${activeJobId === job.id ? 'bg-blue-50 border-blue-500' : ''}`}
                        onClick={() => setActiveJobId(job.id)}
                      >
                        <h3 className="font-medium text-lg mb-2 cinzel-heading">{job.title}</h3>
                        <div className="flex items-center mb-2 text-sm text-gray-600">
                          <Briefcase size={14} className="mr-1 cinzel-body" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center mb-2 text-sm text-gray-600">
                          <MapPin size={14} className="mr-1 cinzel-body" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center mb-2 text-sm text-gray-600">
                          <Clock size={14} className="mr-1 cinzel-body" />
                          <span>{job.job_type}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 cinzel-body">
                          Posted on {new Date(job.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Job Details Section */}
              {activeJob && filteredJobs.length > 0 && (
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="border-b pb-4 mb-4">
                    <h2 className="text-2xl font-extrabold cinzel-heading">{activeJob.title}</h2>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 cinzel-body">
                        <Briefcase size={14} className="mr-1" /> {activeJob.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 cinzel-body">
                        <Clock size={14} className="mr-1" /> {activeJob.job_type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 cinzel-body">
                        <MapPin size={14} className="mr-1" /> {activeJob.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 cinzel-body">
                        {activeJob.experience}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-extrabold mb-2 cinzel-heading">Description</h3>
                      <p className="text-gray-600 cinzel-body">{activeJob.description}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold mb-2 cinzel-heading">Responsibilities</h3>
                      <p className="text-gray-600 cinzel-body">{activeJob.responsibilities}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold mb-2 cinzel-heading">Qualifications</h3>
                      <p className="text-gray-600 cinzel-body">{activeJob.qualifications}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold mb-2 cinzel-heading">Skills</h3>
                      <p className="text-gray-600 cinzel-body">{activeJob.skills}</p>
                    </div>
                    <div className="pt-4">
                      <button onClick={() => handleApply(activeJob.id, activeJob.title)}>
                        <Button>Apply Now</Button>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
      <div style={{ marginTop: '60px' }}><Footer /></div>
    </>
  );
};

export default JobBoard;
