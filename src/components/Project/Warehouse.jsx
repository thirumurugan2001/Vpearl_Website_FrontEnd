import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../pages/Footer';
import { 
    ArrowLeft, 
    Database, 
    MessageSquare, 
    Zap, 
    Shield, 
    BarChart,
    Search,
    Brain,
    Cpu,
    CheckCircle,
    Users,
    FileText
} from 'lucide-react';
import images from '../../assets/images';

const DataWarehouse = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const keyFeatures = [
        {
            icon: <MessageSquare className="w-5 h-5" />,
            title: 'Natural Language Queries',
            description: 'Ask questions in plain English and get instant database insights without SQL knowledge.',
            metrics: 'No-Code Interface'
        },
        {
            icon: <Brain className="w-5 h-5" />,
            title: 'AI-Powered Analysis',
            description: 'Intelligent algorithms understand context and provide relevant data insights automatically.',
            metrics: 'Context-Aware'
        },
        {
            icon: <Database className="w-5 h-5" />,
            title: 'Multi-Source Integration',
            description: 'Connect and query across multiple databases, data lakes, and cloud storage platforms.',
            metrics: 'Unified Access'
        },
        {
            icon: <BarChart className="w-5 h-5" />,
            title: 'Automated Reporting',
            description: 'Generate comprehensive reports and visualizations with simple conversational commands.',
            metrics: 'Auto-Visualization'
        },
        {
            icon: <Search className="w-5 h-5" />,
            title: 'Smart Data Discovery',
            description: 'AI-driven data exploration to uncover hidden patterns and relationships in your datasets.',
            metrics: 'Pattern Recognition'
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: 'Enterprise Security',
            description: 'Role-based access control, data encryption, and compliance with industry security standards.',
            metrics: 'GDPR Compliant'
        }
    ];

    const businessImpact = [
        {
            icon: <Zap className="w-5 h-5" />,
            value: '85%',
            label: 'Time Saved',
            description: 'Reduced data query and analysis time'
        },
        {
            icon: <Users className="w-5 h-5" />,
            value: '100x',
            label: 'Accessibility',
            description: 'More team members can work with data'
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            value: '99%',
            label: 'Accuracy',
            description: 'Reduced human error in data analysis'
        },
        {
            icon: <Cpu className="w-5 h-5" />,
            value: 'Real-time',
            label: 'Processing',
            description: 'Instant insights from live data'
        }
    ];

    const useCases = [
        {
            sector: 'Business Intelligence',
            description: 'Get instant answers to business questions without waiting for data team support'
        },
        {
            sector: 'Data Analytics',
            description: 'Perform complex data analysis with simple conversational commands'
        },
        {
            sector: 'Executive Reporting',
            description: 'Generate executive dashboards and reports using natural language'
        },
        {
            sector: 'Data Governance',
            description: 'Monitor data quality and compliance through conversational interfaces'
        }
    ];

    const conversationExamples = [
        {
            question: "What were our top 5 products by revenue last quarter?",
            response: "Generating revenue analysis report for Q3 2024..."
        },
        {
            question: "Show me customer churn trends over the past 6 months",
            response: "Analyzing customer retention patterns and identifying churn factors..."
        },
        {
            question: "Compare sales performance across all regions",
            response: "Creating regional sales comparison dashboard with key metrics..."
        }
    ];

    const supportedDatabases = [
        'PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake', 'BigQuery', 
        'Redshift', 'SQL Server', 'Oracle', 'Cassandra', 'Redis'
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
                                <Brain className="w-3.5 h-3.5" />
                                <span>AI-Powered Data Platform</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-pink-600">AI Data Warehouse</span>
                                <br />
                                <span className="text-gray-800">Conversational Data Intelligence Platform</span>
                            </h1>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Transform how your team interacts with data. Ask questions in natural language, 
                                and let our AI handle the complex database operations, analysis, and visualization. 
                                No SQL required, no technical barriers—just instant insights.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl opacity-50 blur-xl"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img 
                                    src={images.projects?.wareHouse || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} 
                                    alt="AI Data Warehouse Interface" 
                                    className="w-full h-auto"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <div className="text-white">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <MessageSquare className="w-4 h-4" />
                                            <span className="font-semibold text-sm">Conversational Interface</span>
                                        </div>
                                        <p className="text-white/90 text-sm">Natural language queries with instant AI responses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversation Examples */}
            <section className="bg-white py-16 border-y border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Ask Questions, Get Answers
                        </h2>
                        <p className="text-gray-600">
                            Examples of how conversational AI transforms data interaction
                        </p>
                    </div>

                    <div className="space-y-6">
                        {conversationExamples.map((example, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-sm transition-all duration-200">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-pink-50 p-2 rounded-lg">
                                        <MessageSquare className="w-5 h-5 text-pink-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-3">
                                            <div className="text-sm text-gray-500 mb-1">User Question</div>
                                            <p className="text-gray-800 font-medium">"{example.question}"</p>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">AI Response</div>
                                            <div className="inline-flex items-center space-x-2 text-pink-600">
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></div>
                                                    <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                                    <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                                </div>
                                                <span className="font-medium">{example.response}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Impact Metrics */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Transformative Data Access
                        </h2>
                        <p className="text-gray-600">
                            Empowering teams with conversational data intelligence
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

            {/* Core Features */}
            <section className="bg-gray-50 py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Intelligent Features
                        </h2>
                        <p className="text-gray-600">
                            Advanced capabilities powered by artificial intelligence
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

            {/* Industry Applications */}
            <section className="bg-white py-16 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Industry Applications
                        </h2>
                        <p className="text-gray-600">
                            Versatile solutions for diverse business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((usecase, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="bg-pink-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                    <Database className="w-5 h-5 text-pink-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{usecase.sector}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{usecase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default DataWarehouse;