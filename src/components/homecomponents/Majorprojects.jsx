import React from 'react';

import projects from './json';

const MajorProjects = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
                    Major Projects
                    <span className="block w-16 h-0.5 bg-pink-600 mx-auto mt-1"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">
                            <div className="p-4">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-[90%] h-70 object-cover rounded-lg mx-auto" 
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{project.type}</p>
                                <a href="#" className="text-pink-700 font-semibold hover:text-blue-800 inline-flex items-center gap-1 mt-4">
                                    Explore More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MajorProjects;
