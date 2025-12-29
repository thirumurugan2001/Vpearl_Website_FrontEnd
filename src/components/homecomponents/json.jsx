import images from "../../assets/images";

const Projects = [
    {
        id: 1,
        title: 'Langtech',
        type: 'AI and Machine Learning',
        description: 'Accurately and quickly converts any language and document type within a fraction of a second.',
        image: images.projects.langtech
    },
    {
        id: 2,
        title: 'Event Hall Booking App',
        type: 'Mobile App',
        description: 'A React Native-based mobile app for booking event halls with real-time availability.',
        image: images.projects.event
    },
    {
        id: 3,
        title: 'Land Safety Monitoring App',
        type: 'Satellite Imaging',
        description: 'A satellite-based app that monitors land safety and detects changes over time.',
        image: images.projects.land
    },
    {
        id: 4,
        title: 'AI Warehouses',
        type: 'Satellite Imaging',
        description: 'AI Data Warehouse Conversational Data Intelligence Platform',
        image: images.projects.wareHouse
    },
    {
        id: 5,
        title: 'AI Face Identification System',
        type: 'Computer Vision & AI',
        description: 'Real-Time Face Identification with Instant Alerts - AI-powered face recognition system for secure premises with Telegram notifications.',
        image: images.projects.faceId || images.projects.land, 
        longDescription: 'Our AI-powered Face Recognition System delivers real-time identification and instant alerts for unknown individuals. Built using advanced computer vision and deep learning techniques, the system is designed for offices and secure premises with seamless n8n & Telegram integration.'
    }
];

export default Projects;