import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../pages/Footer';
import { 
    ArrowLeft, 
    MapPin, 
    Satellite, 
    Shield, 
    Bell, 
    CheckCircle, 
    BarChart,
    Eye,
    Globe,
    Map,
    Zap,
    AlertTriangle,
    Layers
} from 'lucide-react';
import images from '../../assets/images';

const GeoFencing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const keyFeatures = [
        {
            icon: <Satellite className="w-5 h-5" />,
            title: 'Satellite Imagery Integration',
            description: 'Access to latest satellite imagery from multiple providers for accurate land monitoring.',
            metrics: 'High-Resolution Imaging'
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: 'Precision Boundary Mapping',
            description: 'Accurate geo-fencing using latitude and longitude coordinates for exact land demarcation.',
            metrics: 'Sub-Meter Accuracy'
        },
        {
            icon: <Bell className="w-5 h-5" />,
            title: 'Real-Time Change Detection',
            description: 'Automated alerts for any unauthorized changes or activities on monitored land.',
            metrics: 'Instant Notifications'
        },
        {
            icon: <Eye className="w-5 h-5" />,
            title: 'Remote Land Surveillance',
            description: '24/7 monitoring without physical visits, providing constant oversight of property.',
            metrics: '24/7 Monitoring'
        },
        {
            icon: <BarChart className="w-5 h-5" />,
            title: 'Historical Data Analysis',
            description: 'Track land changes over time with historical imagery and change reports.',
            metrics: 'Time-Series Analysis'
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: 'Legal Documentation Support',
            description: 'Generate evidence reports for legal purposes and boundary disputes.',
            metrics: 'Legal Compliance'
        }
    ];

    const businessImpact = [
        {
            icon: <Zap className="w-5 h-5" />,
            value: '90%',
            label: 'Time Reduction',
            description: 'Reduced physical site visits and manual monitoring'
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            value: '99%',
            label: 'Detection Accuracy',
            description: 'Precision in identifying unauthorized activities'
        },
        {
            icon: <AlertTriangle className="w-5 h-5" />,
            value: 'Early',
            label: 'Threat Detection',
            description: 'Proactive identification of potential issues'
        },
        {
            icon: <Layers className="w-5 h-5" />,
            value: '50+',
            label: 'Properties Managed',
            description: 'Scalable solution for multiple land holdings'
        }
    ];

    const useCases = [
        {
            sector: 'Agricultural Land',
            applications: 'Crop monitoring, irrigation oversight, unauthorized land use detection'
        },
        {
            sector: 'Real Estate',
            applications: 'Property boundary monitoring, construction compliance, land encroachment alerts'
        },
        {
            sector: 'Industrial',
            applications: 'Site security, environmental compliance, asset protection'
        },
        {
            sector: 'Government',
            applications: 'Public land monitoring, urban planning, disaster management'
        }
    ];
    
    const monitoringProcess = [
        {
            step: '1',
            title: 'Define Boundaries',
            description: 'Input latitude/longitude coordinates to create precise geo-fences'
        },
        {
            step: '2',
            title: 'Satellite Data Collection',
            description: 'Automated retrieval of latest satellite imagery'
        },
        {
            step: '3',
            title: 'Change Detection',
            description: 'AI-powered analysis comparing current and historical imagery'
        },
        {
            step: '4',
            title: 'Alert Generation',
            description: 'Instant notifications for detected changes or intrusions'
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
                            Request Demo
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium border border-green-200">
                                <Globe className="w-3.5 h-3.5" />
                                <span>Advanced Land Monitoring System</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-green-600">Geo-Fencing</span>
                                <br />
                                <span className="text-gray-800">Intelligent Land Monitoring Platform</span>
                            </h1>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                A sophisticated satellite-based monitoring system that enables landowners to remotely track, 
                                detect, and respond to changes on their properties using precise geo-fencing technology 
                                and real-time satellite imagery analysis.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl opacity-20 blur-xl"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img 
                                    src={images.projects?.geofencing || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} 
                                    alt="Geo-Fencing Monitoring Dashboard" 
                                    className="w-full h-auto"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                                    <div className="text-white">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Satellite className="w-4 h-4" />
                                            <span className="font-semibold text-sm">Satellite-Based Monitoring</span>
                                        </div>
                                        <p className="text-white/90 text-sm">Real-time land change detection and boundary monitoring</p>
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
                            Transformative Land Management
                        </h2>
                        <p className="text-gray-600">
                            Delivering measurable improvements in property monitoring and security
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {businessImpact.map((impact, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-xl shadow-sm mb-3 mx-auto">
                                    <div className="text-green-600">
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

            {/* Monitoring Process */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-gray-600">
                            Simple four-step process for comprehensive land monitoring
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {monitoringProcess.map((step, index) => (
                            <div 
                                key={index}
                                className="relative bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="absolute -top-3 -left-3 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 pt-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="bg-white py-16 lg:py-20 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Advanced Monitoring Capabilities
                        </h2>
                        <p className="text-gray-600">
                            Comprehensive features for precise land monitoring and protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {keyFeatures.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <div className="text-green-600">
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

            {/* Industry Applications */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Industry Applications
                        </h2>
                        <p className="text-gray-600">
                            Versatile solutions for various sectors and use cases
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((usecase, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="bg-green-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                    <Map className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{usecase.sector}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{usecase.applications}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default GeoFencing;