import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Bot, User, Sparkles, Clock, CheckCheck, ChevronDown } from 'lucide-react';
import Lottie from "lottie-react";
import chatbotAnimationData from '../../assets/chatbot-animation.json';

const Component1 = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1,
      text: "Hello! I'm your AI assistant from VPearl Solutions. How can I help you today? Feel free to ask about our services, expertise, or request a consultation.", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'read'
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [animationData, setAnimationData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVantaReady, setIsVantaReady] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const navigate = useNavigate();
  
  // Typing animation state for main title
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Bot response typing animation state
  const [currentTypingMessage, setCurrentTypingMessage] = useState({
    id: null,
    text: "",
    typedText: "",
    isTyping: false,
    isComplete: false,
    currentIndex: 0
  });
  
  // Suggested questions - Shortened for mobile
  const suggestedQuestions = [
    "What services do you offer?",
    "Tell me about AI solutions",
    "Custom software development?",
    "What industries do you serve?",
    "Digital transformation help?"
  ];

  // Static responses database
  const staticResponses = [
    {
      keywords: ['hello', 'hi', 'hey', 'greetings'],
      responses: [
        "Hello! 👋 I'm your AI assistant from VPearl Solutions. How can I help you today?",
        "Hi there! Welcome to VPearl Solutions. What can I assist you with today?",
        "Greetings! I'm here to help you learn about VPearl Solutions. What would you like to know?"
      ]
    },
    {
      keywords: ['services', 'offer', 'provide', 'what do you do'],
      responses: [
        "**VPearl Solutions offers comprehensive AI and software engineering services:**\n\n• **AI/ML Solutions**: Custom AI models, predictive analytics, NLP, computer vision\n• **Custom Software**: Web & mobile apps, enterprise solutions, cloud-native development\n• **Data Engineering**: Data pipelines, analytics dashboards, business intelligence\n• **DevOps & Cloud**: AWS, Azure, GCP deployment, CI/CD, containerization\n• **Consulting**: Digital transformation, tech stack evaluation, implementation strategy\n\nWe provide end-to-end solutions from ideation to deployment and maintenance.",
        "Our **core services** include:\n\n**🤖 AI & Machine Learning**\n- Custom AI model development\n- Predictive analytics solutions\n- Natural Language Processing\n- Computer Vision applications\n\n**💻 Software Development**\n- Full-stack web applications\n- Mobile apps (iOS/Android)\n- Enterprise software\n- API development & integration\n\n**☁️ Cloud & DevOps**\n- Cloud migration & optimization\n- Infrastructure as Code\n- CI/CD pipeline setup\n- Kubernetes orchestration\n\n**📊 Data Solutions**\n- Data warehousing\n- Real-time analytics\n- Business intelligence dashboards\n- ETL pipeline development",
        "We specialize in **AI-powered software solutions** across multiple domains:\n\n• **Enterprise AI**: Automating business processes with intelligent systems\n• **SaaS Platforms**: Building scalable subscription-based software\n• **E-commerce Solutions**: AI-driven personalization & recommendation engines\n• **Healthcare Tech**: HIPAA-compliant medical software & analytics\n• **Financial Technology**: Secure fintech applications & fraud detection systems\n• **IoT Integration**: Connecting physical devices with intelligent software"
      ]
    },
    {
      keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml'],
      responses: [
        "**Our AI Expertise:**\n\nWe develop cutting-edge **Artificial Intelligence solutions** that transform businesses:\n\n• **Natural Language Processing**: Chatbots, sentiment analysis, document processing\n• **Computer Vision**: Image recognition, object detection, video analytics\n• **Predictive Analytics**: Forecasting, anomaly detection, pattern recognition\n• **Recommendation Systems**: Personalized content & product recommendations\n• **Generative AI**: Content creation, code generation, creative applications\n\nWe use frameworks like **TensorFlow, PyTorch, Scikit-learn** and deploy models using **MLOps practices**.",
        "**AI Development Process:**\n\n1. **Discovery**: Understanding business problems & data availability\n2. **Prototyping**: Rapid MVP development with real-world data\n3. **Training**: Iterative model training with validation\n4. **Deployment**: Production-ready AI models with monitoring\n5. **Maintenance**: Continuous improvement & retraining\n\n**Success Stories:**\n✓ Reduced customer service costs by 40% with AI chatbots\n✓ Improved sales predictions accuracy by 35%\n✓ Automated document processing saving 20+ hours weekly\n✓ Real-time fraud detection with 99.8% accuracy",
        "**Why choose our AI solutions?**\n\n• **Custom AI Models**: Tailored to your specific business needs\n• **Ethical AI**: Fair, transparent, and explainable algorithms\n• **Scalable Infrastructure**: Cloud-optimized AI deployment\n• **Continuous Learning**: Models that improve over time\n• **Integration Ready**: Seamless API integration with existing systems\n\nWe've delivered AI solutions for **retail, healthcare, finance, manufacturing, and logistics** industries."
      ]
    },
    {
      keywords: ['software development', 'custom software', 'web development', 'mobile app'],
      responses: [
        "**Custom Software Development Services:**\n\nWe build **scalable, robust software solutions** using modern technologies:\n\n**Frontend Development**\n• React, Vue.js, Angular\n• React Native, Flutter for mobile\n• Progressive Web Apps (PWA)\n\n**Backend Development**\n• Node.js, Python (Django/Flask)\n• Java Spring, .NET Core\n• GraphQL & REST APIs\n\n**Database & Storage**\n• PostgreSQL, MySQL, MongoDB\n• Redis, Elasticsearch\n• AWS S3, Cloud Storage\n\n**Development Methodologies**\n• Agile & Scrum\n• Test-Driven Development (TDD)\n• Continuous Integration/Deployment",
        "**Our Development Process:**\n\n1. **Requirements Analysis**: Detailed specification & planning\n2. **UI/UX Design**: User-centered design & prototyping\n3. **Development**: Agile sprints with regular demos\n4. **Testing**: Automated & manual testing\n5. **Deployment**: Smooth launch & knowledge transfer\n6. **Support**: Ongoing maintenance & updates\n\n**Tech Stack Highlights:**\n✓ **Frontend**: React.js, TypeScript, Tailwind CSS\n✓ **Backend**: Node.js, Python, Java\n✓ **Mobile**: React Native, Flutter\n✓ **DevOps**: Docker, Kubernetes, AWS, Azure\n✓ **Testing**: Jest, Cypress, Selenium",
        "**Enterprise Software Solutions:**\n\n• **CRM Systems**: Custom customer relationship management\n• **ERP Solutions**: Integrated business process management\n• **Workflow Automation**: Streamlining business operations\n• **Reporting & Analytics**: Real-time business intelligence\n• **Integration Services**: Connecting legacy & modern systems\n\nWe follow **security best practices** including OWASP standards, data encryption, and compliance with **GDPR, HIPAA, PCI-DSS** where applicable."
      ]
    },
    {
      keywords: ['industries', 'sectors', 'clients', 'who do you work with'],
      responses: [
        "**Industries We Serve:**\n\n• **Healthcare & Life Sciences**: EHR systems, telemedicine, medical imaging AI\n• **Financial Services**: Fintech apps, trading platforms, risk analysis\n• **Retail & E-commerce**: Personalization engines, inventory management\n• **Manufacturing**: Predictive maintenance, supply chain optimization\n• **Education**: E-learning platforms, educational AI tools\n• **Real Estate**: Property management, virtual tours, market analysis\n• **Logistics**: Route optimization, fleet management, tracking systems\n• **Media & Entertainment**: Content platforms, recommendation systems",
        "**Client Success Stories:**\n\n🏥 **Healthcare Client**: Developed an AI-powered diagnostic assistant that reduced diagnosis time by 60%\n💳 **Fintech Startup**: Built a secure payment platform handling 50,000+ transactions daily\n🛒 **E-commerce Brand**: Implemented personalization engine increasing conversions by 35%\n🏭 **Manufacturing Company**: Created predictive maintenance system reducing downtime by 45%\n📚 **EdTech Platform**: Developed adaptive learning system improving student outcomes by 28%",
        "**Global Reach:**\n\nWe serve clients across multiple regions:\n\n🇺🇸 **United States**: Tech startups to Fortune 500 companies\n🇦🇺 **Australia**: Growing tech sector & enterprise clients\n🇦🇪 **Middle East**: Digital transformation initiatives\n🇬🇧 **United Kingdom**: Fintech & healthcare innovations\n🇪🇺 **Europe**: Across multiple countries & industries\n\nOur team has experience working with **regulatory requirements** specific to each region."
      ]
    },
    {
      keywords: ['digital transformation', 'transformation', 'modernization', 'legacy'],
      responses: [
        "**Digital Transformation Services:**\n\nWe help businesses modernize their technology stack and processes:\n\n1. **Assessment**: Current state analysis & gap identification\n2. **Strategy**: Roadmap creation with clear milestones\n3. **Implementation**: Phased rollout with minimal disruption\n4. **Training**: Empowering teams with new tools & processes\n5. **Optimization**: Continuous improvement & scaling\n\n**Key Areas:**\n• Legacy system modernization\n• Cloud migration & optimization\n• Process automation\n• Data-driven decision making\n• Customer experience enhancement",
        "**Legacy System Modernization:**\n\nWe specialize in transforming **outdated systems** into modern, scalable solutions:\n\n✅ **Monolith to Microservices**: Breaking down legacy monoliths\n✅ **On-premise to Cloud**: Secure migration to cloud platforms\n✅ **Manual to Automated**: Replacing repetitive manual processes\n✅ **Siloed to Integrated**: Connecting disparate systems\n✅ **Reactive to Predictive**: Moving from reporting to forecasting\n\n**Benefits Achieved:**\n• 50-70% reduction in maintenance costs\n• 3-5x faster deployment cycles\n• Improved system reliability & security\n• Enhanced scalability & performance",
        "**Our Transformation Framework:**\n\n📋 **Discovery Phase**\n- Technology audit\n- Process mapping\n- Stakeholder interviews\n\n🎯 **Planning Phase**\n- ROI analysis\n- Risk assessment\n- Change management strategy\n\n🚀 **Execution Phase**\n- Agile implementation\n- Continuous feedback loops\n- Quality assurance\n\n📈 **Optimization Phase**\n- Performance monitoring\n- User adoption tracking\n- Iterative improvements\n\nWe've helped organizations achieve **40-60% efficiency gains** through digital transformation."
      ]
    },
    {
      keywords: ['pricing', 'cost', 'price', 'how much', 'rates'],
      responses: [
        "**Pricing Models:**\n\nWe offer flexible engagement models to suit different needs:\n\n• **Project-based**: Fixed price for well-defined projects\n• **Time & Material**: Hourly rates for ongoing development\n• **Dedicated Team**: Monthly fee for dedicated developers\n• **Retainer Model**: Ongoing support & maintenance\n\n**Factors affecting cost:**\n- Project complexity & scope\n- Technology stack requirements\n- Timeline & urgency\n- Integration needs\n- Support & maintenance level\n\nFor a **customized quote**, please contact us with your project details.",
        "**Transparent Pricing Approach:**\n\nWe believe in **clear, upfront pricing** with no hidden costs:\n\n💼 **Discovery Phase**: Often starts with a paid discovery workshop\n📋 **Detailed Proposal**: Comprehensive scope & pricing breakdown\n📊 **Regular Reporting**: Transparent time tracking & progress updates\n💰 **Flexible Payments**: Milestone-based or monthly billing\n\n**Typical Project Ranges:**\n• MVP Development: $15,000 - $50,000\n• Enterprise Solutions: $50,000 - $200,000+\n• AI/ML Projects: $25,000 - $100,000+\n\nContact us for a **free consultation** and detailed estimate.",
        "**Value-Based Pricing:**\n\nWe focus on delivering **maximum ROI** rather than just hours billed:\n\n✅ **Efficiency Focus**: Automating repetitive tasks\n✅ **Scalability Built-in**: Future-proof architecture\n✅ **Quality Assurance**: Comprehensive testing\n✅ **Ongoing Support**: Post-launch maintenance\n\n**Why Choose Us:**\n• 95% on-time delivery record\n• Average client satisfaction score: 4.9/5\n• 70% repeat business rate\n• Industry-leading code quality standards\n\nRequest a **custom quote** tailored to your specific needs."
      ]
    },
    {
      keywords: ['contact', 'get in touch', 'email', 'phone', 'location'],
      responses: [
        "**Contact Information:**\n\n📧 **Email**: contact@vpearlsolutions.com\n📞 **Phone**: +1 (555) 123-4567\n📍 **Locations**: US, Australia, Middle East, UK\n🌐 **Website**: www.vpearlsolutions.com\n\n**Office Hours (EST):**\nMonday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed\n\n**Best Ways to Reach Us:**\n1. **Contact Form** on our website\n2. **Schedule a call** through Calendly\n3. **Email** for detailed inquiries\n4. **Live Chat** during business hours",
        "**Connect With Us:**\n\n💼 **LinkedIn**: linkedin.com/company/vpearl-solutions\n🐦 **Twitter**: twitter.com/vpearlsolutions\n📸 **Instagram**: instagram.com/vpearlsolutions\n▶️ **YouTube**: youtube.com/@vpearlsolutions\n\n**Response Times:**\n• Email: Within 24 business hours\n• Phone: Immediate during business hours\n• Contact Form: Within 12 hours\n• Emergency Support: 2-hour response time\n\n**Meeting Scheduling:**\nWe offer **free 30-minute consultations** to discuss your project needs.",
        "**Global Presence:**\n\n🌎 **Headquarters**: United States\n🇦🇺 **Australia Office**: Sydney/Melbourne\n🇦🇪 **Middle East Office**: Dubai\n🇬🇧 **UK Office**: London\n\n**Contact Methods:**\n• **Video Calls**: Zoom, Google Meet, Teams\n• **In-Person Meetings**: Available in major cities\n• **Virtual Workshops**: Interactive planning sessions\n• **Onsite Visits**: For enterprise clients\n\nFor immediate assistance, use our **live chat** or call our main number."
      ]
    },
    {
      keywords: ['portfolio', 'projects', 'case studies', 'work examples'],
      responses: [
        "**Featured Projects:**\n\n🏥 **Medical Diagnostic AI**\n• Developed AI system for early disease detection\n• 92% accuracy in preliminary diagnosis\n• Reduced diagnosis time by 65%\n\n💳 **Fintech Payment Platform**\n• Built secure transaction processing system\n• Handles 100,000+ daily transactions\n• 99.99% uptime SLA\n\n🛒 **E-commerce Personalization Engine**\n• Implemented ML-based recommendations\n• Increased average order value by 42%\n• Improved customer retention by 28%\n\n🏭 **Manufacturing Predictive Maintenance**\n• IoT sensors + AI analytics platform\n• Reduced equipment downtime by 55%\n• Saved $2M+ annually in maintenance",
        "**Case Study Highlights:**\n\n📊 **Business Intelligence Platform**\n• Client: Large retail chain\n• Challenge: Fragmented data across 50+ stores\n• Solution: Unified analytics dashboard with real-time insights\n• Result: 30% improvement in inventory turnover\n\n🤖 **Customer Service Chatbot**\n• Client: Telecom company\n• Challenge: High call center volume\n• Solution: AI chatbot handling 80% of common queries\n• Result: Reduced support costs by 45%\n\n☁️ **Cloud Migration**\n• Client: Financial services firm\n• Challenge: Legacy on-premise systems\n• Solution: Seamless migration to AWS\n• Result: 60% reduction in infrastructure costs",
        "**Industry Solutions Portfolio:**\n\n**Healthcare**\n• Telemedicine platforms\n• Patient management systems\n• Medical imaging analytics\n• Clinical trial data management\n\n**Financial Services**\n• Trading algorithms\n• Risk assessment tools\n• Regulatory compliance systems\n• Fraud detection engines\n\n**Retail & E-commerce**\n• Omnichannel platforms\n• Inventory optimization\n• Customer loyalty programs\n• Dynamic pricing engines\n\n**Request detailed case studies** for specific industries."
      ]
    },
    {
      keywords: ['team', 'expertise', 'developers', 'engineers', 'experience'],
      responses: [
        "**Our Team Expertise:**\n\n👨‍💻 **Technical Team**:\n• 50+ engineers & developers\n• Average 8+ years experience\n• Specialized in AI/ML, cloud, full-stack\n• Certified in AWS, Azure, Google Cloud\n\n🎯 **Leadership**:\n• 15+ years industry experience\n• Background in Fortune 500 & startups\n• PhDs in Computer Science & AI\n• Published researchers in ML\n\n🌐 **Global Team**:\n• Multiple time zones coverage\n• 24/7 development capability\n• Localized expertise for each region\n• Multilingual team members",
        "**Technical Specializations:**\n\n🤖 **AI/ML Experts**:\n• 15+ data scientists & ML engineers\n• Specialties: NLP, CV, predictive analytics\n• Experience with TensorFlow, PyTorch, scikit-learn\n• Published 20+ research papers\n\n💻 **Software Engineers**:\n• 30+ full-stack developers\n• Expertise in 10+ programming languages\n• Modern frameworks: React, Node.js, Python\n• Microservices & cloud-native architecture\n\n☁️ **DevOps & Cloud**:\n• Certified AWS/Azure/GCP architects\n• Kubernetes & Docker experts\n• Infrastructure as Code specialists\n• Security & compliance focused",
        "**Why Our Team Stands Out:**\n\n✅ **Continuous Learning**:\n• Weekly tech workshops\n• Conference attendance\n• Certification programs\n• Open source contributions\n\n✅ **Quality Focus**:\n• Code review culture\n• Comprehensive testing\n• Security-first approach\n• Performance optimization\n\n✅ **Collaborative Approach**:\n• Agile methodologies\n• Transparent communication\n• Client involvement in sprints\n• Regular progress demos\n\nOur team has delivered **200+ successful projects** across various industries."
      ]
    },
    {
      keywords: ['process', 'methodology', 'approach', 'how do you work'],
      responses: [
        "**Our Development Process:**\n\n1️⃣ **Discovery & Planning**\n• Requirements gathering\n• Technical feasibility study\n• Project roadmap creation\n• Milestone definition\n\n2️⃣ **Design & Prototyping**\n• UI/UX design\n• Architecture planning\n• Technical specification\n• Prototype development\n\n3️⃣ **Development & Testing**\n• Agile sprints (2-3 weeks)\n• Daily standups & progress tracking\n• Continuous integration\n• Comprehensive testing\n\n4️⃣ **Deployment & Launch**\n• Staging environment testing\n• Production deployment\n• Performance optimization\n• Knowledge transfer\n\n5️⃣ **Support & Maintenance**\n• Ongoing support\n• Regular updates\n• Performance monitoring\n• Scalability planning",
        "**Agile Methodology:**\n\n📅 **Sprint Planning**:\n• 2-week sprints\n• Clear deliverables\n• Priority-based backlog\n\n👥 **Daily Standups**:\n• 15-minute syncs\n• Progress updates\n• Blockers identification\n\n🔄 **Sprint Reviews**:\n• Client demonstrations\n• Feedback collection\n• Adjustments planning\n\n📊 **Retrospectives**:\n• Process improvement\n• Lessons learned\n• Best practices sharing\n\n**Communication:**\n• Slack/Teams for daily communication\n• Weekly status reports\n• Monthly business reviews\n• Real-time progress dashboards",
        "**Quality Assurance Process:**\n\n🧪 **Testing Strategy**:\n• Unit testing (Jest, pytest)\n• Integration testing\n• End-to-end testing (Cypress)\n• Performance testing\n• Security testing\n\n🔒 **Security Measures**:\n• OWASP compliance\n• Regular security audits\n• Penetration testing\n• Data encryption\n• Access controls\n\n📈 **Performance Metrics**:\n• Load testing\n• Response time monitoring\n• Error rate tracking\n• Uptime monitoring\n\nWe maintain **99.9% code coverage** and **zero critical bugs** at launch."
      ]
    }
  ];

  // Use refs
  const vantaRef = useRef(null);
  const vantaInitializedRef = useRef(false);
  const containerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const inputRef = useRef(null);
  const initAttemptsRef = useRef(0);
  const maxInitAttempts = 3;
  const chatContainerRef = useRef(null);

  // Full text for typing animation
  const fullText = "AI & Software Engineering Consultants. We design, develop, and deploy AI-based software and applications. Delivering excellence across the US, Australia, Middle East, and the UK.";

  // API Configuration
  const API_URL = "http://127.0.0.1:8080/customer/query";

  // Helper functions
  const loadScript = useCallback((src) => {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        if (window.THREE && src.includes('three.js') || window.VANTA && src.includes('vanta')) {
          resolve();
          return;
        }
        
        existingScript.addEventListener('load', () => {
          setTimeout(resolve, 100);
        });
        return;
      }
      
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        setTimeout(resolve, 100);
      };
      
      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        reject(new Error(`Failed to load script: ${src}`));
      };
      
      document.head.appendChild(script);
    });
  }, []);

  // Helper function to find matching static response
  const findStaticResponse = (query) => {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Find the best matching category based on keyword frequency
    const matches = staticResponses.map(category => {
      const keywordMatches = category.keywords.filter(keyword => 
        normalizedQuery.includes(keyword)
      ).length;
      
      return {
        ...category,
        matchCount: keywordMatches,
        matchScore: keywordMatches / category.keywords.length
      };
    }).filter(category => category.matchCount > 0)
      .sort((a, b) => b.matchScore - a.matchScore);
    
    // Return a random response from the best matching category
    if (matches.length > 0) {
      const bestMatch = matches[0];
      const randomIndex = Math.floor(Math.random() * bestMatch.responses.length);
      return bestMatch.responses[randomIndex];
    }
    
    return null;
  };

  const initVanta = useCallback(() => {
    if (initAttemptsRef.current >= maxInitAttempts) {
      console.warn('Max Vanta initialization attempts reached');
      return;
    }

    if (!containerRef.current || !window.VANTA || !window.VANTA.GLOBE) {
      console.warn('Vanta.js or container not ready, will retry...');
      
      if (initAttemptsRef.current < maxInitAttempts) {
        initAttemptsRef.current += 1;
        setTimeout(initVanta, 500);
      }
      return;
    }

    if (vantaInitializedRef.current) {
      return;
    }

    try {
      cleanupVanta();
      
      vantaRef.current = window.VANTA.GLOBE({
        el: containerRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0a0a0a,
        color: 0xff6b9d,
        color2: 0xffffff,
        size: 0.8
      });
      
      vantaInitializedRef.current = true;
      setIsVantaReady(true);
      
      console.log('Vanta.js initialized successfully');
      
      setTimeout(() => {
        if (vantaRef.current && typeof vantaRef.current.resize === 'function') {
          try {
            vantaRef.current.resize();
          } catch (error) {
            console.error('Error resizing Vanta:', error);
          }
        }
      }, 300);
      
    } catch (error) {
      console.error('Failed to initialize Vanta.js:', error);
      vantaInitializedRef.current = false;
      setIsVantaReady(false);
      
      if (initAttemptsRef.current < maxInitAttempts) {
        initAttemptsRef.current += 1;
        setTimeout(initVanta, 1000);
      }
    }
  }, []);

  const cleanupVanta = useCallback(() => {
    if (vantaRef.current && typeof vantaRef.current.destroy === 'function') {
      try {
        vantaRef.current.destroy();
      } catch (error) {
        console.error('Error cleaning up Vanta.js:', error);
      }
    }
    vantaRef.current = null;
    vantaInitializedRef.current = false;
  }, []);

  const loadVantaScripts = useCallback(async () => {
    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
      
      if (!window.THREE) {
        throw new Error('THREE.js not loaded');
      }
      
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js');
      
      if (!window.VANTA || !window.VANTA.GLOBE) {
        throw new Error('VANTA.js not loaded properly');
      }
      
      console.log('Vanta scripts loaded successfully');
      
      setTimeout(initVanta, 200);
      
    } catch (error) {
      console.error('Failed to load Vanta scripts:', error);
      
      if (initAttemptsRef.current < maxInitAttempts) {
        initAttemptsRef.current += 1;
        setTimeout(loadVantaScripts, 1000);
      }
    }
  }, [loadScript, initVanta]);

  // Keyboard visibility detection for mobile
  useEffect(() => {
    const handleResize = () => {
      const isKeyboardVisible = window.innerHeight < 500;
      setIsKeyboardVisible(isKeyboardVisible);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle virtual keyboard on mobile
  useEffect(() => {
    if (isMobile && isChatOpen && inputRef.current) {
      const handleFocus = () => {
        setTimeout(() => {
          scrollToBottom();
        }, 300);
      };

      inputRef.current.addEventListener('focus', handleFocus);
      return () => {
        inputRef.current?.removeEventListener('focus', handleFocus);
      };
    }
  }, [isMobile, isChatOpen]);

  useEffect(() => {
    // Load animation data
    setAnimationData(chatbotAnimationData);
    
    // Check if mobile on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Load Vanta scripts
    loadVantaScripts();
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      cleanupVanta();
      
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [cleanupVanta, loadVantaScripts]);

  // Handle resize events
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        checkMobile();
        if (vantaRef.current && typeof vantaRef.current.resize === 'function') {
          try {
            vantaRef.current.resize();
          } catch (error) {
            console.error('Error resizing Vanta on window resize:', error);
          }
        }
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
        if (isMobile) {
          scrollToBottom();
        }
      }, 300);
    }
  }, [isChatOpen, isMobile]);

  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    scrollToBottom();
  }, [messages, currentTypingMessage.typedText]);

  // Main title typing animation effect
  useEffect(() => {
    if (!isTyping) return;

    const typingSpeed = 30;
    const pauseAtPeriods = 300;

    if (currentIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, fullText[currentIndex] === '.' ? pauseAtPeriods : typingSpeed);

      return () => clearTimeout(timeoutId);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullText]);

  // Bot response typing animation effect
  useEffect(() => {
    if (!currentTypingMessage.isTyping || !currentTypingMessage.text) return;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    const typingSpeed = 20;
    
    typingIntervalRef.current = setInterval(() => {
      setCurrentTypingMessage(prev => {
        if (prev.currentIndex >= prev.text.length) {
          clearInterval(typingIntervalRef.current);
          
          setMessages(prevMessages => 
            prevMessages.map(msg => 
              msg.id === prev.id 
                ? { 
                    ...msg, 
                    text: prev.text,
                    isTyping: false, 
                    status: 'read',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }
                : msg
            )
          );
          
          return {
            ...prev,
            isTyping: false,
            isComplete: true,
            typedText: prev.text
          };
        }
        
        const nextChar = prev.text[prev.currentIndex];
        return {
          ...prev,
          typedText: prev.typedText + nextChar,
          currentIndex: prev.currentIndex + 1
        };
      });
    }, typingSpeed);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [currentTypingMessage.isTyping, currentTypingMessage.text]);

  const formatTextWithBold = (text) => {
    if (!text) return null;
    
    return text.split('\n').map((line, lineIndex) => {
      if (line.trim() === '') {
        return <div key={lineIndex} className="h-3"></div>;
      }
      
      const parts = line.split(/\*\*(.*?)\*\*/g);
      
      return (
        <div key={lineIndex} className="mb-1">
          {parts.map((part, index) => {
            if (index % 2 === 1) {
              return <strong key={index} className="font-bold text-gray-900">{part}</strong>;
            }
            return <span key={index}>{part}</span>;
          })}
        </div>
      );
    });
  };

  const removeBoldMarkers = (text) => {
    return text.replace(/\*\*/g, '');
  };

  const checkMobile = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
  };

  const handleExploreClick = () => {
    navigate('/contact'); 
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        if (isMobile) {
          scrollToBottom();
        }
      }, 300);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'end'
    });
  };

  const fetchBotResponse = async (query) => {
    try {
      setIsLoading(true);
      
      // First check for static response
      const staticResponse = findStaticResponse(query);
      if (staticResponse) {
        // Add a small delay to simulate thinking
        await new Promise(resolve => setTimeout(resolve, 800));
        return staticResponse;
      }
      
      // If no static response found, use API
      const payload = {
        query: query
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.statusCode === 200 && data.data && data.data.status) {
        return data.data.description || "I received your message but couldn't find a specific answer.";
      } else if (data.statusCode === 400) {
        return data.message || "Sorry, I'm having trouble understanding your question. Please try rephrasing it.";
      } else {
        return "I'm sorry, I couldn't process your request. Please try again.";
      }
      
    } catch (error) {
      console.error('Error fetching bot response:', error);
      
      if (error.message.includes('Failed to fetch')) {
        return "I'm having trouble connecting to the server. Please check your internet connection or try again later.";
      } else if (error.message.includes('HTTP error')) {
        return "There was a server error. Our team has been notified. Please try again in a moment.";
      } else {
        return "I apologize, but I'm experiencing some technical difficulties. Please try your question again.";
      }
      
    } finally {
      setIsLoading(false);
    }
  };

  const startTypingAnimation = (messageId, text) => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    
    const textForTyping = removeBoldMarkers(text);
    
    setCurrentTypingMessage({
      id: messageId,
      text: text,
      typedText: "",
      isTyping: true,
      isComplete: false,
      currentIndex: 0,
      originalText: text
    });
  };

  const handleSendMessage = async (customMessage = null) => {
    const messageToSend = customMessage || inputValue.trim();
    if (!messageToSend) return;
    
    // Add user message
    const userMessageId = Date.now();
    setMessages(prev => [...prev, { 
      id: userMessageId,
      text: messageToSend, 
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    }]);
    
    if (!customMessage) {
      setInputValue("");
    }
    
    // Add placeholder bot message for typing animation
    const botMessageId = Date.now() + 1;
    setMessages(prev => [...prev, { 
      id: botMessageId,
      text: "", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isTyping: true,
      status: 'sending'
    }]);
    
    // Fetch bot response
    try {
      const botResponse = await fetchBotResponse(messageToSend);
      startTypingAnimation(botMessageId, botResponse);
      
    } catch (error) {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMessageId 
            ? { 
                ...msg, 
                text: "Sorry, I encountered an error. Please try again.", 
                isTyping: false,
                status: 'read'
              }
            : msg
        )
      );
    }
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && !currentTypingMessage.isTyping) {
        handleSendMessage();
      }
    }
  };

  const renderMessage = (message) => {
    const isCurrentTypingMessage = currentTypingMessage.id === message.id && currentTypingMessage.isTyping;
    
    if (isCurrentTypingMessage) {
      return (
        <div className="space-y-2">
          <div className="flex items-center">
            <span>{currentTypingMessage.typedText}</span>
            <span className="ml-1 animate-pulse text-pink-600">|</span>
          </div>
        </div>
      );
    }
    
    return formatTextWithBold(message.text);
  };

  // Mobile-specific chat window styles
  const getChatWindowStyles = () => {
    if (!isMobile) {
      return 'w-[400px] h-[450px] bottom-6 right-6';
    }
    
    if (isKeyboardVisible) {
      return 'fixed inset-0 rounded-none';
    }
    
    return 'fixed inset-4 rounded-2xl';
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Vanta.js Globe Background */}
      <div 
        ref={containerRef}
        id="vanta-background"
        className="absolute inset-0 z-0"
        style={{ 
          width: '100%',
          height: '100%',
          opacity: isVantaReady ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      
      {/* Fallback background while Vanta loads */}
      {!isVantaReady && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-pink-900 z-0"></div>
      )}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen text-center text-white px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-3xl w-full">
          {/* Main Heading - Responsive */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white to-white text-transparent bg-clip-text rounded-xl shadow-lg">
              AI Development Done Right
            </span>
          </h1>
          
          {/* Subtitle with Typing Animation - Responsive */}
          <div className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8 px-2 md:px-0 leading-relaxed min-h-[60px] sm:min-h-[80px] md:min-h-[70px] flex items-center justify-center">
            <div className="typing-container relative text-center">
              <span className="text-pink-600 font-semibold">
                {typedText.split('.')[0]}
                {typedText.includes('.') && '.'}
              </span>
              
              {typedText.split('.').length > 1 && (
                <>
                  <span className="text-white">
                    {typedText.substring(typedText.indexOf('.') + 1)}
                  </span>
                  
                  {isTyping && (
                    <span className="ml-1 animate-pulse">|</span>
                  )}
                </>
              )}
              
              {!typedText.includes('.') && isTyping && (
                <span className="ml-1 animate-pulse">|</span>
              )}
              
              {!isTyping && (
                <span className="text-white">
                  {typedText.substring(typedText.indexOf('.') + 1)}
                </span>
              )}
            </div>
          </div>
          
          {/* CTA Button - Responsive */}
          <button
            onClick={handleExploreClick}
            className="bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-lg transition-all duration-300 text-sm md:text-base w-full max-w-xs sm:max-w-none sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 transform mx-auto block sm:inline-block"
          >
            Ready to Explore?
          </button>
        </div>
      </div>

      {/* Chatbot - Mobile Optimized */}
      <div className={`fixed z-50 transition-all duration-300 ${
        isMobile && !isChatOpen ? 'bottom-4 right-4' : 'bottom-6 right-6'
      }`}>
        {/* Chatbot Icon Button */}
        {!isChatOpen && (
          <button
            onClick={toggleChat}
            className="relative touch-manipulation active:scale-95"
            style={{ 
              width: isMobile ? '80px' : '120px', 
              height: isMobile ? '80px' : '120px' 
            }}
            aria-label="Open chat"
            disabled={isLoading || currentTypingMessage.isTyping}
          >
            {/* Icon */}
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-pink-600 to-pink-800 rounded-full shadow-xl">
                <Bot size={isMobile ? 32 : 40} className="text-white" />
              </div>
            )}                     
            {/* Mobile tooltip */}
            <div className={`absolute ${
              isMobile ? '-top-10 left-1/2 transform -translate-x-1/2' : '-top-12 right-0'
            } bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none`}>
              Chat with AI Assistant
              <div className={`absolute ${
                isMobile ? '-bottom-1 left-1/2 transform -translate-x-1/2 rotate-45' : '-bottom-1 right-6'
              } w-2 h-2 bg-gray-900`}></div>
            </div>
          </button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div 
            ref={chatContainerRef}
            className={`bg-white shadow-2xl flex flex-col overflow-hidden ${
              isMobile 
                ? getChatWindowStyles()
                : 'w-[400px] h-[450px] rounded-xl'
            }`}
          >
            {/* Chat Header - Mobile Optimized */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-4 rounded-t-xl flex justify-between items-center border-b border-pink-700">
              <div className="flex items-center gap-3">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} flex items-center justify-center bg-white/20 rounded-full`}>
                  <Bot size={isMobile ? 16 : 20} />
                </div>
                <div>
                  <h3 className={`font-bold ${isMobile ? 'text-sm' : 'text-base md:text-lg'}`}>
                    VPearl AI Assistant
                  </h3>
                  <p className={`${isMobile ? 'text-xs opacity-80' : 'text-sm opacity-90'}`}>
                    Ask me anything
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleChat}
                  className="hover:bg-pink-700 rounded-full p-2 transition-colors duration-200 active:scale-95 touch-manipulation"
                  aria-label="Minimize chat"
                  disabled={isLoading || currentTypingMessage.isTyping}
                >
                  <X size={isMobile ? 18 : 20} />
                </button>
              </div>
            </div>

            {/* Messages Area - Mobile Optimized */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100"
              style={{
                maxHeight: isMobile && isKeyboardVisible ? 'calc(100vh - 140px)' : 'auto'
              }}
            >
              {/* Messages */}
              {messages.map((message) => (
                <div key={message.id} className="animate-fadeIn">
                  <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] md:max-w-[80%] rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100'
                    }`}>                      
                      {/* Message content */}
                      <div className={`px-3 pb-2 pt-1 ${
                        isMobile ? 'text-sm' : 'text-sm md:text-base'
                      } whitespace-pre-wrap break-words ${
                        message.sender === 'user' ? 'text-white' : 'text-gray-700'
                      }`}>
                        {message.isTyping && !currentTypingMessage.isTyping ? (
                          <div className="flex items-center space-x-2 py-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <span className="text-pink-600 text-sm">Thinking...</span>
                          </div>
                        ) : (
                          renderMessage(message)
                        )}
                      </div>                     
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Suggested Questions - Mobile Optimized */}
              {!isLoading && !currentTypingMessage.isTyping && messages.length <= 2 && (
                <div className="mt-6">
                  <p className={`text-gray-500 mb-3 font-medium ${
                    isMobile ? 'text-xs' : 'text-xs'
                  }`}>Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className={`${
                          isMobile ? 'text-xs px-3 py-2' : 'text-xs px-3 py-2'
                        } bg-white hover:bg-gray-50 text-gray-700 rounded-full border border-gray-200 transition-all duration-200 hover:border-pink-300 hover:text-pink-700 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 active:scale-95 touch-manipulation`}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Mobile Optimized */}
            <div 
              className="border-t border-gray-200 bg-white"
              style={{
                paddingBottom: isMobile && isKeyboardVisible ? 'env(safe-area-inset-bottom)' : '0'
              }}
            >
              <div className="p-4">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      isLoading || currentTypingMessage.isTyping
                        ? "Please wait..." 
                        : "Type your message..."
                    }
                    className={`w-full px-4 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 ${
                      isLoading || currentTypingMessage.isTyping
                        ? 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed' 
                        : 'border-gray-300 text-gray-800 hover:border-pink-400'
                    } ${
                      isMobile ? 'py-3 text-sm' : 'py-3 text-sm md:text-base'
                    }`}
                    disabled={isLoading || currentTypingMessage.isTyping}
                    enterKeyHint="send"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg p-2 transition-all duration-200 active:scale-95 ${
                      isLoading || currentTypingMessage.isTyping || !inputValue.trim()
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white hover:shadow-md'
                    } touch-manipulation`}
                    aria-label="Send message"
                    disabled={isLoading || currentTypingMessage.isTyping || !inputValue.trim()}
                  >
                    <Send size={isMobile ? 16 : 18} />
                  </button>
                </div>
                
                {/* Mobile helper text */}
                {isMobile && !isKeyboardVisible && (
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Tap to type • Press Enter to send
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile overlay when chat is open */}
      {isMobile && isChatOpen && !isKeyboardVisible && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleChat}
        />
      )}
    </div>
  );
};

export default Component1;