import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import projects from './json';

const MajorProjects = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const handleExploreClick = (projectId) => {
        if (projectId === 1) { 
            navigate('/projects/langtech');
        }
        if (projectId === 2) {
            navigate('/projects/venueta');
        }
        if (projectId === 3) {
            navigate('/projects/geofencing');
        }
        if (projectId === 4) {
            navigate('/projects/warehouse');
        }
        if (projectId === 5) {
            navigate('/projects/faceidentification');
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5; 
        let animationFrame;

        const scroll = () => {
            scrollPosition += scrollSpeed;
            
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            
            scrollContainer.scrollLeft = scrollPosition;
            animationFrame = requestAnimationFrame(scroll);
        };

        animationFrame = requestAnimationFrame(scroll);

        // Pause on hover
        const handleMouseEnter = () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
        
        const handleMouseLeave = () => {
            animationFrame = requestAnimationFrame(scroll);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
                scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-6">
                    Major Projects
                    <span className="block w-12 h-0.5 bg-pink-600 mx-auto mt-1"></span>
                </h2>

                {/* Auto-sliding Carousel Container */}
                <div className="relative overflow-hidden bg-white">
                    {/* Gradient fade effect on sides */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
                    
                    {/* Auto-scrolling content */}
                    <div 
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-hidden py-3 px-3"
                        style={{ 
                            scrollBehavior: 'auto',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
                            maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)'
                        }}
                    >
                        {/* First set of projects */}
                        {projects.map((project) => (
                            <div 
                                key={`first-${project.id}`} 
                                className="bg-white rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden flex-shrink-0 w-64 border border-gray-100"
                            >
                                <div className="p-4">
                                    <div className="relative overflow-hidden rounded-md">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                                <div className="p-4 text-center border-t border-gray-50">
                                    <h3 className="text-base font-bold text-gray-900 mb-1">{project.title}</h3>
                                    <p className="text-xs text-gray-600 mb-3">{project.type}</p>
                                    <button 
                                        onClick={() => handleExploreClick(project.id)}
                                        className="text-pink-600 font-semibold hover:text-pink-700 inline-flex items-center gap-1.5 mt-1 px-4 py-1.5 rounded-lg hover:bg-pink-50 transition-all duration-300 text-sm"
                                    >
                                        Explore
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                        
                        {/* Duplicate set for seamless loop */}
                        {projects.map((project) => (
                            <div 
                                key={`second-${project.id}`} 
                                className="bg-white rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden flex-shrink-0 w-64 border border-gray-100"
                            >
                                <div className="p-4">
                                    <div className="relative overflow-hidden rounded-md">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                                <div className="p-4 text-center border-t border-gray-50">
                                    <h3 className="text-base font-bold text-gray-900 mb-1">{project.title}</h3>
                                    <p className="text-xs text-gray-600 mb-3">{project.type}</p>
                                    <button 
                                        onClick={() => handleExploreClick(project.id)}
                                        className="text-pink-600 font-semibold hover:text-pink-700 inline-flex items-center gap-1.5 mt-1 px-4 py-1.5 rounded-lg hover:bg-pink-50 transition-all duration-300 text-sm"
                                    >
                                        Explore
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MajorProjects;