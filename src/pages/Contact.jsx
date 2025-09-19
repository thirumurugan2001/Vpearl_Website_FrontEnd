import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "./Footer"
import HeroSection2 from '../components/ContactHerosection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from '../assets/images';
import apirouter from '../apirouter';

function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
        acceptRecurring: false
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);        
        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                contact: formData.contact,
                message: formData.message,
                acceptRecurring: formData.acceptRecurring
            };
            const response = await fetch(apirouter.userDetails, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });    
            
            if (response.ok) {
                const data = await response.json();
                console.log("Response status:", data.data.status);
                
                if (data.data && data.data.status) {
                    toast.success('Message sent successfully! We will get back to you soon.');
                    setFormData({
                        name: "",
                        email: "",
                        contact: "",
                        message: "",
                        acceptRecurring: false
                    });
                } else {
                    toast.error('Unable to send message. Please try again later.');
                }
            } else {
                toast.error('Failed to submit message. Please try again.');
            }
        } catch (error) {
            toast.error('Network error. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Navbar />
            <HeroSection2
                title="Let's Work Together"
                buttonText="We are just a click away!"
            />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
                <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 p-8 bg-gray-50">
                        <h2 className="text-2xl font-bold mb-6">Contact us</h2>

                        <div className="mb-4">
                            <p className="font-semibold">Bhuvana Krithika</p>
                            <p className="text-sm text-gray-600">bhuvaneswari.rm@vpearlsolutions.com</p>
                            <p className="text-sm text-pink-500">+91 90475 60053</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">Devi</p>
                            <p className="text-sm text-gray-600">financeadmin@vpearlsolutions.com</p>
                            <p className="text-sm text-pink-500">+91 80562 06522</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">For career related queries:</p>
                            <p className="text-sm text-gray-600">
                                <span className="block mt-2">
                                    Email:{" "}
                                    <a
                                        href="mailto:businessdevelopment@vpearlsolutions.com"
                                        className="text-pink-600 hover:underline"
                                    >
                                        businessdevelopment@vpearlsolutions.com
                                    </a>
                                </span>
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold">Mail us at:</p>
                            <p className="text-gray-400">
                                No:81, Arthiarcade,
                                Mylapore, Chennai - 600004.<br />
                                <span className="block mt-2">
                                    Email:{" "}
                                    <a
                                        href="mailto:businessdevelopment@vpearlsolutions.com"
                                        className="text-pink-600 hover:underline"
                                    >
                                        businessdevelopment@vpearlsolutions.com
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 p-8">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full border-gray-300 rounded-md p-3 mb-4 bg-gray-100 focus:outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full border-gray-300 rounded-md p-3 mb-4 bg-gray-100 focus:outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="Contact"
                                className="w-full border-gray-300 rounded-md p-3 mb-4 bg-gray-100 focus:outline-none"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full border-gray-300 rounded-md p-3 mb-4 bg-gray-100 focus:outline-none h-32"
                            ></textarea>
                            <div className="flex items-center mb-4">
                                <input 
                                    type="checkbox" 
                                    name="acceptRecurring"
                                    checked={formData.acceptRecurring}
                                    onChange={handleChange}
                                    className="mr-2" 
                                />
                                <p className="text-sm text-gray-600">
                                    By checking this box you agree to receive recurring messages from Illuminei Industries Inc...
                                </p>
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="group relative w-full flex justify-center py-3 px-4 
                                    border border-transparent text-sm font-medium rounded-lg 
                                    text-white bg-gradient-to-r from-pink-500 to-pink-700 
                                    hover:from-pink-600 hover:to-pink-800 
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 
                                    transition transform hover:scale-105 duration-300 ease-in-out
                                    disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending Message...' : 'Submit Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </>
    )
}
export default Contact
