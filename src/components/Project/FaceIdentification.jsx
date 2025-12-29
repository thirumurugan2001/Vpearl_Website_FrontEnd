import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../pages/Footer';
import { 
    ArrowLeft, 
    Camera, 
    AlertTriangle, 
    Zap, 
    Shield, 
    Bell,
    Cpu,
    CheckCircle,
    Users,
    MessageSquare,
    Clock,
    Database,
    Mic,
    Cloud
} from 'lucide-react';
import images from '../../assets/images';

const FaceIdentification = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const keyFeatures = [
        {
            icon: <Camera className="w-5 h-5" />,
            title: 'Real-Time Face Detection',
            description: 'Live face detection from webcam or CCTV cameras with high-speed processing.',
            metrics: 'Millisecond Response'
        },
        {
            icon: <Cpu className="w-5 h-5" />,
            title: 'AI Recognition Engine',
            description: 'Uses Dlib ResNet face embeddings (128-D vectors) with average embedding strategy.',
            metrics: '99.8% Accuracy'
        },
        {
            icon: <Mic className="w-5 h-5" />,
            title: 'Smart Voice Alerts',
            description: 'Greets recognized users and announces unknown persons with audio messages.',
            metrics: 'Instant Audio'
        },
        {
            icon: <Bell className="w-5 h-5" />,
            title: 'Instant Alert System',
            description: 'Sends instant alerts through n8n Webhooks to Telegram with captured images.',
            metrics: 'Real-Time Notifications'
        },
        {
            icon: <Database className="w-5 h-5" />,
            title: 'Evidence Storage',
            description: 'Automatically saves unknown face images locally with timestamps for audit.',
            metrics: 'Secure Storage'
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: 'Enterprise Security',
            description: 'Designed for secure premises with customizable recognition thresholds.',
            metrics: 'GDPR Compliant'
        }
    ];

    const systemPerformance = [
        {
            icon: <Zap className="w-5 h-5" />,
            value: 'Real-time',
            label: 'Processing',
            description: 'Instant face recognition'
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            value: '99.8%',
            label: 'Accuracy',
            description: 'High-precision identification'
        },
        {
            icon: <Clock className="w-5 h-5" />,
            value: '< 100ms',
            label: 'Response Time',
            description: 'Fast detection & alerts'
        },
        {
            icon: <Users className="w-5 h-5" />,
            value: '24/7',
            label: 'Monitoring',
            description: 'Continuous surveillance'
        }
    ];

    const integrationFeatures = [
        {
            title: 'n8n Automation',
            description: 'Webhook-based event handling for seamless workflow automation',
            features: ['Event triggers', 'Base64 image transfer', 'Multi-platform routing']
        },
        {
            title: 'Telegram Integration',
            description: 'Direct delivery of alerts with captured images to Telegram',
            features: ['Instant notifications', 'Image preview', 'Group alerts']
        },
        {
            title: 'Evidence Management',
            description: 'Comprehensive storage and retrieval of security events',
            features: ['Timestamped logs', 'Image archives', 'Audit trails']
        },
        {
            title: 'Multi-Channel Alerts',
            description: 'Extensible to other notification platforms',
            features: ['Email alerts', 'Slack integration', 'Cloud storage']
        }
    ];

    const technologyStack = [
        {
            category: 'Core AI',
            technologies: ['Dlib ResNet', '128-D Embeddings', 'OpenCV', 'Deep Learning']
        },
        {
            category: 'Processing',
            technologies: ['Python', 'NumPy', 'Face Recognition', 'Computer Vision']
        },
        {
            category: 'Integration',
            technologies: ['n8n Workflows', 'Telegram API', 'Webhooks', 'REST APIs']
        },
        {
            category: 'Infrastructure',
            technologies: ['Local Storage', 'Cloud Backup', 'Real-time Processing', 'Security Protocols']
        } 
    ];

    const alertExamples = [
        {
            type: 'RECOGNIZED',
            person: 'John Doe (Employee)',
            time: '14:30:45',
            action: 'Voice greeting: "Welcome John"',
            status: 'success'
        },
        {
            type: 'UNKNOWN',
            person: 'Unknown Person Detected',
            time: '14:32:10',
            action: 'Alert sent to Telegram + Image captured',
            status: 'alert'
        },
        {
            type: 'COOLDOWN',
            person: 'System Status',
            time: '14:32:15',
            action: 'Cooldown activated - preventing repetitive alerts',
            status: 'info'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
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
                            <div className="inline-flex items-center space-x-2 bg-pink-50 text-pink-700 px-3 py-1.5 rounded-full text-xs font-medium border border-pink-100">
                                <Cpu className="w-3.5 h-3.5" />
                                <span>AI-Powered Security System</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-pink-600">Real-Time Face Identification</span>
                                <br />
                                <span className="text-gray-800">with Instant Alerts</span>
                            </h1>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our AI-powered Face Recognition System delivers real-time identification and instant alerts 
                                for unknown individuals. Built using advanced computer vision and deep learning techniques, 
                                designed for offices and secure premises with seamless automation integration.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl opacity-50 blur-xl"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img 
                                    src={images.projects?.faceId || images.projects?.land || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} 
                                    alt="Face Identification System Interface" 
                                    className="w-full h-auto"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <div className="text-white">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Shield className="w-4 h-4" />
                                            <span className="font-semibold text-sm">Secure Premises Monitoring</span>
                                        </div>
                                        <p className="text-white/90 text-sm">Real-time detection with instant notifications</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-time Alert Examples */}
            <section className="bg-white py-16 border-y border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Real-Time Alert System
                        </h2>
                        <p className="text-gray-600">
                            Instant notifications and actions based on face detection events
                        </p>
                    </div>

                    <div className="space-y-4">
                        {alertExamples.map((alert, index) => (
                            <div 
                                key={index} 
                                className={`bg-white rounded-xl p-5 border ${
                                    alert.status === 'alert' 
                                        ? 'border-red-200 bg-red-50 hover:border-red-300' 
                                        : alert.status === 'success'
                                        ? 'border-green-200 bg-green-50 hover:border-green-300'
                                        : 'border-blue-200 bg-blue-50 hover:border-blue-300'
                                } hover:shadow-sm transition-all duration-200`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div className={`p-2 rounded-lg ${
                                            alert.status === 'alert' 
                                                ? 'bg-red-100 text-red-600' 
                                                : alert.status === 'success'
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-blue-100 text-blue-600'
                                        }`}>
                                            {alert.status === 'alert' ? (
                                                <AlertTriangle className="w-5 h-5" />
                                            ) : alert.status === 'success' ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : (
                                                <Clock className="w-5 h-5" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <span className="font-semibold text-gray-900">{alert.type}</span>
                                                <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-md border">
                                                    {alert.time}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 font-medium mb-1">{alert.person}</p>
                                            <p className="text-sm text-gray-600">{alert.action}</p>
                                        </div>
                                    </div>
                                    {alert.status === 'alert' && (
                                        <div className="flex items-center space-x-1 text-red-600">
                                            <Bell className="w-4 h-4 animate-pulse" />
                                            <span className="text-xs font-medium">ALERT SENT</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* System Performance Metrics */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            High-Performance Security
                        </h2>
                        <p className="text-gray-600">
                            Engineered for reliability and speed in critical security applications
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {systemPerformance.map((metric, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-50 rounded-xl shadow-sm mb-3 mx-auto">
                                    <div className="text-pink-600">
                                        {metric.icon}
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                                <div className="font-medium text-gray-700 mb-1">{metric.label}</div>
                                <p className="text-sm text-gray-500">{metric.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="bg-gray-50 py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Advanced Security Features
                        </h2>
                        <p className="text-gray-600">
                            Comprehensive face recognition and alert system capabilities
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {keyFeatures.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-sm transition-all duration-200"
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
                                        <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 rounded-md">
                                            <CheckCircle className="w-3.5 h-3.5 text-pink-600" />
                                            <span className="text-xs font-medium text-gray-700">{feature.metrics}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration & Automation */}
            <section className="bg-white py-16 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Seamless Integration
                        </h2>
                        <p className="text-gray-600">
                            Advanced automation and notification system integration
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {integrationFeatures.map((integration, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="bg-pink-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                    <Cloud className="w-5 h-5 text-pink-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{integration.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{integration.description}</p>
                                <div className="space-y-2">
                                    {integration.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center space-x-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-pink-600" />
                                            <span className="text-xs text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Technology Stack
                        </h2>
                        <p className="text-gray-600">
                            Built with cutting-edge AI and computer vision technologies
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technologyStack.map((tech, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-sm transition-all duration-200"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">{tech.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.technologies.map((item, tIndex) => (
                                        <span 
                                            key={tIndex}
                                            className="px-3 py-1.5 bg-pink-50 text-pink-700 text-xs font-medium rounded-md border border-pink-100"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default FaceIdentification;