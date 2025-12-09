import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../../pages/Footer';
import { 
    ArrowLeft, 
    Globe, 
    FileText, 
    Zap, 
    Shield, 
    Layers, 
    Cpu, 
    CheckCircle, 
    Users, 
    Target, 
    BarChart, 
    Cloud 
} from 'lucide-react';
import images from '../../assets/images';

const Langtech = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const keyFeatures = [
        {
            icon: <FileText className="w-5 h-5" />,
            title: 'Multi-Format Document Processing',
            description: 'Seamless translation of Excel, Word, PDF, and text files with preserved formatting and structure.',
            metrics: '99.8% Format Accuracy'
        },
        {
            icon: <Globe className="w-5 h-5" />,
            title: 'AI-Powered Multilingual Translation',
            description: 'Accurate translation across 100+ languages using contextual AI models trained on domain-specific terminology.',
            metrics: '95% Translation Accuracy'
        },
        {
            icon: <Cpu className="w-5 h-5" />,
            title: 'Advanced OCR Technology',
            description: 'High-precision text extraction from scanned documents and images with intelligent character recognition.',
            metrics: '98.5% OCR Accuracy'
        },
        {
            icon: <Layers className="w-5 h-5" />,
            title: 'Multi-Model AI Integration',
            description: 'Dynamic selection between OpenAI GPT, Google Gemini, and LLaMA models for optimal translation quality.',
            metrics: '3 AI Models'
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: 'Real-time Processing Engine',
            description: 'Sub-second translation processing with scalable infrastructure handling thousands of concurrent requests.',
            metrics: '<1s Processing Time'
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: 'Enterprise-Grade Security',
            description: 'End-to-end encryption, GDPR compliance, and SOC 2 certified infrastructure for maximum data protection.',
            metrics: 'Enterprise Security'
        }
    ];

    const businessImpact = [
        {
            icon: <BarChart className="w-5 h-5" />,
            value: '10x',
            label: 'Faster Processing',
            description: 'Reduced document processing time from hours to seconds'
        },
        {
            icon: <Users className="w-5 h-5" />,
            value: '10,000+',
            label: 'Active Users',
            description: 'Serving enterprises across 50+ countries'
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            value: '99.9%',
            label: 'Uptime SLA',
            description: 'Enterprise-grade reliability and availability'
        },
        {
            icon: <Target className="w-5 h-5" />,
            value: '95%',
            label: 'Accuracy Rate',
            description: 'Industry-leading translation accuracy'
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
                            <div className="inline-flex items-center space-x-2 bg-pink-600 text-white px-4 py-4 rounded-full text-xs font-medium border border-pink-100">
                                <span>Enterprise AI Platform</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-pink-600">LangTech</span>
                                <br />
                                <span className="text-gray-800">Intelligent Translation Platform</span>
                            </h1>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                A comprehensive Platform-as-a-Service solution for enterprise-grade document translation. 
                                Combining advanced OCR with multiple AI models to deliver unparalleled accuracy, speed, 
                                and scalability for global business communication.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl opacity-50 blur-xl"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img 
                                    src={images.projects.langtech} 
                                    alt="LangTech Enterprise Dashboard" 
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <Cloud className="w-4 h-4 text-white" />
                                            <span className="text-white font-medium text-sm">Cloud-Native Architecture</span>
                                        </div>
                                        <p className="text-white/90 text-xs">Real-time translation analytics dashboard</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Impact Metrics */}
            <section className="bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {businessImpact.map((impact, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm mb-3 mx-auto">
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

            {/* Core Features */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Enterprise-Grade Capabilities
                        </h2>
                        <p className="text-gray-600">
                            Comprehensive features designed for mission-critical translation needs
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

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <div className="max-w-md mx-auto space-y-4">
                            <p className="text-gray-600">
                                Ready to transform your document processing workflow?
                            </p>
                            <Link 
                                to="/contact"
                                className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Langtech;