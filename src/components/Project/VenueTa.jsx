import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../pages/Footer';
import { 
    ArrowLeft, 
    Calendar, 
    MapPin, 
    Users, 
    Clock, 
    CreditCard, 
    Bell, 
    CheckCircle, 
    BarChart,
    Shield,
    Zap,
    Cloud
} from 'lucide-react';
import images from '../../assets/images';

const VenueTa = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const keyFeatures = [
        {
            icon: <Calendar className="w-5 h-5" />,
            title: 'AI-Powered Venue Recommendations',
            description: 'Intelligent suggestions based on event type, budget, capacity, and preferences.',
            metrics: '95% Match Accuracy'
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: 'Real-Time Availability',
            description: 'Live calendar integration showing up-to-the-minute venue availability and instant booking.',
            metrics: 'Instant Confirmation'
        },
        {
            icon: <CreditCard className="w-5 h-5" />,
            title: 'Integrated Payment System',
            description: 'Secure payment processing with multiple payment options and automated invoicing.',
            metrics: 'Secure Transactions'
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: '360° Virtual Venue Tours',
            description: 'Immersive virtual tours allowing clients to explore venues from anywhere.',
            metrics: 'Interactive Experience'
        },
        {
            icon: <Bell className="w-5 h-5" />,
            title: 'Smart Notifications',
            description: 'Automated reminders, booking confirmations, and event day alerts.',
            metrics: 'Automated Updates'
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: 'Multi-User Collaboration',
            description: 'Team collaboration features for corporate events and wedding planning.',
            metrics: 'Team Coordination'
        }
    ];

    const businessImpact = [
        {
            icon: <Clock className="w-5 h-5" />,
            value: '70%',
            label: 'Time Saved',
            description: 'Reduced event planning time from weeks to days'
        },
        {
            icon: <BarChart className="w-5 h-5" />,
            value: '40%',
            label: 'Cost Reduction',
            description: 'Average savings on venue booking costs'
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            value: '98%',
            label: 'Booking Accuracy',
            description: 'Reduced booking errors and double-bookings'
        },
        {
            icon: <Users className="w-5 h-5" />,
            value: '5,000+',
            label: 'Active Users',
            description: 'Event organizers and venue providers'
        }
    ];

    const eventTypes = [
        {
            category: 'Corporate',
            examples: 'Conferences, Seminars, Product Launches, Team Building'
        },
        {
            category: 'Social',
            examples: 'Weddings, Birthday Parties, Anniversaries, Reunions'
        },
        {
            category: 'Educational',
            examples: 'Workshops, Training Sessions, Academic Events'
        },
        {
            category: 'Cultural',
            examples: 'Concerts, Exhibitions, Festivals, Art Shows'
        }
    ];

    const platformBenefits = [
        {
            for: 'Event Organizers',
            benefits: [
                'Single platform for venue discovery and booking',
                'Transparent pricing and availability',
                'Digital contract signing',
                'Budget management tools'
            ]
        },
        {
            for: 'Venue Providers',
            benefits: [
                'Increased venue visibility and bookings',
                'Automated scheduling and calendar management',
                'Revenue optimization through smart pricing',
                'Performance analytics dashboard'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link 
                            to="/" 
                            className="inline-flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm">Return to Home</span>
                        </Link>
                        <Link 
                            to="/contact"
                            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-5 rounded-md text-sm transition-all duration-200 hover:shadow-md"
                        >
                            Get Early Access
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-full text-xs font-medium">
                                <span>Launching Next Week</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-pink-600">VENUETA</span>
                                <br />
                                <span className="text-gray-800">AI-Powered Event Management Platform</span>
                            </h1>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Revolutionizing event planning with intelligent venue discovery, seamless booking, 
                                and comprehensive management tools. From corporate conferences to dream weddings, 
                                make every event unforgettable with our cutting-edge platform.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link 
                                    to="/contact"
                                    className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-200 hover:shadow-lg text-center"
                                >
                                    Join Waitlist
                                </Link>
                                <button className="bg-white text-gray-700 font-medium py-3 px-8 rounded-md border-2 border-gray-300 hover:border-pink-600 hover:text-pink-600 transition-colors">
                                    View Demo
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl opacity-20 blur-xl"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img 
                                    src={images.projects?.venueta || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} 
                                    alt="VENUETA Platform Interface" 
                                    className="w-full h-auto"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                                    <div className="text-white">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Calendar className="w-4 h-4" />
                                            <span className="font-semibold text-sm">Smart Event Management</span>
                                        </div>
                                        <p className="text-white/90 text-sm">AI-powered recommendations and real-time availability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Impact Metrics */}
            <section className="bg-white py-16 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Transforming Event Planning
                        </h2>
                        <p className="text-gray-600">
                            Measurable impact on efficiency and user satisfaction
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {businessImpact.map((impact, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-50 rounded-xl shadow-sm mb-3 mx-auto">
                                    <div className="text-pink-600">
                                        {impact.icon}
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{impact.value}</div>
                                <div className="font-medium text-gray-700 mb-1">{impact.label}</div>
                                <p className="text-sm text-gray-500">{impact.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Types Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            For Every Event Type
                        </h2>
                        <p className="text-gray-600">
                            Comprehensive solutions for all your event planning needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {eventTypes.map((event, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="bg-pink-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                    <Calendar className="w-5 h-5 text-pink-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{event.category}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{event.examples}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="bg-white py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Intelligent Features
                        </h2>
                        <p className="text-gray-600">
                            Powered by AI to deliver exceptional event planning experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {keyFeatures.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="bg-pink-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <div className="text-pink-600">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                                        <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-gray-50 rounded-md">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                            <span className="text-xs font-medium text-gray-700">{feature.metrics}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Benefits */}
            <section className="bg-white py-16 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Benefits for Everyone
                        </h2>
                        <p className="text-gray-600">
                            Creating value for both event organizers and venue providers
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {platformBenefits.map((platform, index) => (
                            <div 
                                key={index}
                                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-6">
                                    For <span className="text-pink-600">{platform.for}</span>
                                </h3>
                                <ul className="space-y-4">
                                    {platform.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default VenueTa;