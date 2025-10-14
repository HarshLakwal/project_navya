"use client"
import Footers from '@/components/Footers';
import Header from '@/components/Headers';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const EventManagementServices = () => {
    const [activeCategory, setActiveCategory] = useState('corporate');
    const [activeWorkflow, setActiveWorkflow] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [showAbout, setShowAbout] = useState(false);
    const [open, setOpen] = useState(false);
    const swiperRef = useRef(null);

    // Service categories
    const serviceCategories = [
        {
            id: 'corporate',
            title: 'CORPORATE EVENTS',
            description: 'Professional event management for conferences, product launches, and corporate gatherings.',
            icon: '🏢'
        },
        {
            id: 'wedding',
            title: 'WEDDING EVENTS',
            description: 'Memorable and flawless wedding planning services to make your special day perfect.',
            icon: '💍'
        },
        {
            id: 'social',
            title: 'SOCIAL EVENTS',
            description: 'Exceptional planning for birthdays, anniversaries, and other social celebrations.',
            icon: '🎉'
        },
        {
            id: 'brand',
            title: 'BRAND ACTIVATION',
            description: 'Creative strategies to bring brands to life through engaging experiences.',
            icon: '🚀'
        },
        {
            id: 'artist',
            title: 'ARTIST MANAGEMENT',
            description: 'Comprehensive management services for artists and performers.',
            icon: '🎤'
        }
    ];

    // Workflow steps
    const workflowSteps = [
        {
            title: 'Meet-Up',
            description: 'We meet with you to understand your vision and requirements.',
            icon: '🤝'
        },
        {
            title: 'Ideation',
            description: 'Our creative team brainstorms ideas tailored to your event.',
            icon: '💡'
        },
        {
            title: 'Planning',
            description: 'We develop a comprehensive plan with timelines and resources.',
            icon: '📋'
        },
        {
            title: 'Budgeting',
            description: 'We create transparent budgets that maximize your investment.',
            icon: '💰'
        },
        {
            title: 'Execution',
            description: 'Our team brings the plan to life with attention to every detail.',
            icon: '🛠️'
        },
        {
            title: 'Event Day',
            description: 'We manage everything so you can enjoy your special day.',
            icon: '🎊'
        }
    ];

    // Gallery images by category (using placeholder images)
    const galleryImages = {
        corporate: [
            '/corporate/corporate1.webp',
            '/corporate/corporate2.webp',
            '/corporate/corporate4.jpg',
            '/corporate/corporate3.jpg'
        ],
        wedding: [
            '/weddings/wedding1.webp',
            '/weddings/wedding2.webp',
            '/weddings/wedding3.webp',
            '/weddings/wedding4.jpg'
        ],
        social: [
            '/social/social1.jpg',
            '/social/social2.jpg',
            '/social/social3.jpg',
            '/social/social4.jpg'
        ],
        brand: [
            '/brand_activation/brand1.jpg',
            '/brand_activation/brand2.webp',
            '/brand_activation/brand3.jpg',
            '/brand_activation/brand4.jpg',
        ],
        artist: [
            '/artist/artist1.jpg',
            '/artist/artist2.webp',
            '/artist/artist3.jpg',
            '/artist/artist4.webp',
        ]
    };

    // Auto-advance workflow steps
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWorkflow((prev) => (prev + 1) % workflowSteps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [workflowSteps.length]);

    const videos = [
        "/videos/wedding.mp4",
        "/videos/wedding2.mp4",
        "/videos/wedding3.mp4",
    ];
    
    // Function to pause all videos
    const pauseAllVideos = () => {
        const videoEls = document.querySelectorAll("video");
        videoEls.forEach((video) => {
            video.pause();
            video.currentTime = 0; // optional: reset to beginning
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-100">
            {/* Header */}
            <div className='fixed w-full z-50'>
                <Header />
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                    className="flex flex-col items-center"
                >
                    <div className="w-full text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondry bg-clip-text text-transparent mb-4 md:mb-6"
                        >
                            Exceptional Event Management Services
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg sm:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto"
                        >
                            We create memorable experiences through professional event planning,
                            coordination, and execution.
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setOpen(true)}
                                className="border-2 cursor-pointer border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-colors flex items-center"
                            >
                                Watch Showreel <i className="fas fa-play-circle ml-2"></i>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Custom Modal */}
                {open && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative bg-black rounded-2xl max-w-4xl w-full p-2 sm:p-4"
                        >
                            {/* Close button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    pauseAllVideos();
                                    setOpen(false);
                                }}
                                className="absolute -top-10 right-0 sm:top-3 sm:right-3 text-white text-2xl border-1 h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full cursor-pointer z-10 flex items-center justify-center"
                            >
                                ✕
                            </motion.button>

                            {/* Video Slider */}
                            <Swiper
                                navigation
                                modules={[Navigation]}
                                className="w-full h-[50vh] sm:h-[400px] md:h-[500px]"
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                onSlideChange={(swiper) => {
                                    pauseAllVideos();
                                    const activeVideo = swiper.slides[swiper.activeIndex].querySelector("video");
                                    if (activeVideo) activeVideo.play();
                                }}
                            >
                                {videos.map((video, idx) => (
                                    <SwiperSlide key={idx} className="flex justify-center items-center">
                                        <video
                                            controls
                                            className="w-full h-full object-contain bg-black rounded-xl"
                                        >
                                            <source src={video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </motion.div>
                )}
            </div>

            {/* About Us Section */}
            <section id="about" className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-10"
                    >
                        <div className="md:w-1/2">
                            <motion.h2 
                                variants={fadeIn}
                                className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6"
                            >
                                About NAVYA EVENT & ADVERTISING
                            </motion.h2>
                            <motion.div 
                                variants={staggerChildren}
                                className="text-gray-700 space-y-3 md:space-y-4"
                            >
                                <motion.p variants={fadeIn} className="text-base md:text-lg">
                                    Since 2021, <span className="font-semibold text-primary">NAVYA EVENT & ADVERTISING</span> has been delivering exceptional event planning services that transform visions into reality.
                                </motion.p>
                                <motion.p variants={fadeIn} className="text-sm md:text-base">
                                    We specialize in creating seamless, unforgettable experiences for all occasions. Our meticulous attention to detail ensures every event runs smoothly from conception to execution.
                                </motion.p>
                                <motion.p variants={fadeIn} className="text-sm md:text-base">
                                    As one of the region's premier event companies, we excel at crafting exclusive weddings, corporate functions, and social gatherings that leave lasting impressions.
                                </motion.p>
                                <motion.p variants={fadeIn} className="font-medium text-sm md:text-base">
                                    From your initial dreams and ideas to your special day, we provide comprehensive planning, innovative design, and dedicated support every step of the way.
                                </motion.p>
                            </motion.div>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowAbout(!showAbout)}
                                className="mt-4 md:mt-6 text-primary font-semibold flex items-center text-sm md:text-base"
                            >
                                {showAbout ? 'Show Less' : 'Learn More About Us'}
                                <i className={`fas fa-chevron-${showAbout ? 'up' : 'down'} ml-2`}></i>
                            </motion.button>

                            {showAbout && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-4 p-4 bg-gray-100 rounded-lg"
                                >
                                    <h3 className="font-bold text-base md:text-lg mb-2 text-gray-900">Why Choose Us?</h3>
                                    <ul className="list-disc pl-5 space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                                        <li>Over a decade of experience in event management</li>
                                        <li>Creative and innovative event solutions</li>
                                        <li>Personalized approach for each client</li>
                                        <li>Comprehensive services from planning to execution</li>
                                        <li>Attention to every detail for flawless events</li>
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="md:w-1/2 w-full mt-6 md:mt-0"
                        >
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-primary h-36 md:h-48 rounded-lg flex items-center justify-center text-white text-2xl md:text-4xl"
                                >
                                    <span>2021</span>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-secondry h-36 md:h-48 rounded-lg flex items-center justify-center text-white text-center px-2 md:px-4 text-sm md:text-base"
                                >
                                    500+ Successful Events
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-secondry h-36 md:h-48 rounded-lg flex items-center justify-center text-white text-center px-2 md:px-4 text-sm md:text-base"
                                >
                                    100+ Happy Clients
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-primary h-36 md:h-48 rounded-lg flex items-center justify-center text-white text-2xl md:text-4xl"
                                >
                                    <span>50+</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-2xl md:text-3xl font-bold text-center text-primary mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base"
                    >
                        We offer comprehensive event management services tailored to your specific needs.
                    </motion.p>

                    <motion.div 
                        variants={staggerChildren}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
                    >
                        {serviceCategories.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={scaleIn}
                                whileHover={{ y: -10 }}
                                className={`service-card rounded-xl p-4 md:p-6 text-center cursor-pointer transition-all duration-500 ease-in-out ${activeCategory === service.id
                                    ? 'bg-gradient-to-t from-primary to-[#822431] text-white shadow-xl transform -translate-y-1 md:-translate-y-2 scale-[1.02] md:scale-105'
                                    : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
                                    }`}
                                onClick={() => setActiveCategory(service.id)}
                            >
                                <div className="text-3xl md:text-4xl mb-3 md:mb-4 transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 transition-all duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-xs md:text-sm transition-all duration-500">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow" className="py-12 md:py-16 bg-gradient-to-br from-gray-200 to-gray-100">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4"
                    >
                        Our Workflow Process
                    </motion.h2>
                    <motion.p 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base"
                    >
                        Our proven process ensures every event is executed flawlessly from conception to completion.
                    </motion.p>

                    <div className="relative">
                        {/* Progress bar - hidden on mobile, shown on medium screens and up */}
                        <div className="absolute left-0 right-0 top-8 md:top-10 h-1 bg-gray-300 hidden md:block">
                            <motion.div 
                                initial={{ width: "0%" }}
                                animate={{ width: `${(activeWorkflow + 1) * (100 / workflowSteps.length)}%` }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="progress-bar h-1 bg-primary"
                            ></motion.div>
                        </div>

                        <motion.div 
                            variants={staggerChildren}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 relative"
                        >
                            {workflowSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    className={`workflow-step text-center cursor-pointer transition-all duration-700 ease-in-out ${activeWorkflow === index
                                        ? 'transform -translate-y-1 md:-translate-y-2'
                                        : 'opacity-80'
                                        }`}
                                    onClick={() => setActiveWorkflow(index)}
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        className={`w-14 h-14 md:w-20 md:h-20 mx-auto rounded-full flex items-center justify-center text-xl md:text-2xl mb-2 transition-all duration-700 ${activeWorkflow === index
                                            ? 'bg-gradient-to-r from-primary to-[#822431] text-white shadow-xl scale-110'
                                            : 'bg-white text-gray-600 shadow-md'
                                            }`}>
                                        {step.icon}
                                    </motion.div>
                                    <h3 className={`font-bold mb-1 md:mb-2 transition-all duration-700 text-sm md:text-base ${activeWorkflow === index ? 'text-primary' : 'text-gray-700'
                                        }`}>
                                        {step.title}
                                    </h3>
                                    <p className={`text-xs md:text-sm transition-all duration-700 ${activeWorkflow === index ? 'text-gray-800' : 'text-gray-600'
                                        }`}>
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Successful Events Section */}
            <section id="gallery" className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4"
                    >
                        Our Successful Events
                    </motion.h2>
                    <motion.p 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base"
                    >
                        Browse through our portfolio of successfully executed events across different categories.
                    </motion.p>

                    {/* Category Filter */}
                    <motion.div 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="flex flex-wrap justify-center mb-6 md:mb-8 gap-2"
                    >
                        {serviceCategories.map((category) => (
                            <motion.button
                                key={category.id}
                                variants={scaleIn}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-3 py-1 md:px-4 md:py-2 rounded-full font-medium transition-colors text-xs md:text-sm ${activeCategory === category.id
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.title}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Gallery Grid */}
                    <motion.div 
                        variants={staggerChildren}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                    >
                        {galleryImages[activeCategory].map((img, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -10 }}
                                className="gallery-item group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Image with overlay effect */}
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        src={img}
                                        alt={`${serviceCategories.find(s => s.id === activeCategory)?.title} event ${index + 1}`}
                                        className="w-full h-40 sm:h-48 object-cover"
                                    />
                                </div>

                                {/* Card content */}
                                <div className="p-3 md:p-4">
                                    <h3 className="font-bold text-gray-800 text-sm md:text-base">{serviceCategories.find(s => s.id === activeCategory)?.title} #{index + 1}</h3>
                                    <p className="text-xs md:text-sm text-gray-600">Successfully executed event</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Add Font Awesome for icons */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

                {/* Add custom styles for the gallery */}
                <style jsx>{`
                    .gallery-item {
                        transition: all 0.3s ease;
                    }
                    .gallery-item:hover {
                        transform: translateY(-5px);
                    }
                `}</style>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-[#822431] mb-4 text-white">
                <motion.div 
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="container mx-auto px-4 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Plan Your Next Event?</h2>
                    <p className="max-w-2xl mx-auto mb-6 md:mb-8 opacity-90 text-sm md:text-base">
                        Contact us today for a free consultation and let us bring your vision to life.
                    </p>
                    <motion.div 
                        variants={staggerChildren}
                        className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4"
                    >
                        <motion.button 
                            variants={scaleIn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-full font-medium shadow-md transition-colors text-sm md:text-base"
                        >
                            Request a Quote
                        </motion.button>
                        <motion.button 
                            variants={scaleIn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-colors text-sm md:text-base"
                        >
                            Call Us Now
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            <Footers />
        </div>
    );
};

export default EventManagementServices;