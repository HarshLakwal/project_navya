"use client"
import Footers from "@/components/Footers.jsx";
import Header from "../components/Headers.jsx";
import { useState, useEffect } from "react";
import Image from "next/image.js";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link.js";
import api from "@/lib/api";

export default function Home() {
  // Hero section slider images - will be fetched from API only
  const [heroImages, setHeroImages] = useState([]);
  const [isLoadingHero, setIsLoadingHero] = useState(true);
  
  // Service categories - will be fetched from API only
  const [serviceCategories, setServiceCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  
  // Portfolio items - will be fetched from API only
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoadingPortfolio, setIsLoadingPortfolio] = useState(true);
  
  // Services - will be fetched from API only
  const [services, setServices] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);

  // Fetch hero images from API using axios
  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        setIsLoadingHero(true);
        const response = await api.get('/api/home-section', {
          params: {
            isActive: true,
            sortBy: 'order',
            sortOrder: 'asc'
          }
        });
        
        // Axios automatically parses JSON, so response.data contains the data
        const data = response.data;
        
        // Map API response to heroImages format
        // Handle different response structures: direct array, or wrapped in data/results property
        let items = [];
        if (Array.isArray(data)) {
          items = data;
        } else if (data?.data && Array.isArray(data.data)) {
          items = data.data;
        } else if (data?.results && Array.isArray(data.results)) {
          items = data.results;
        } else if (data?.items && Array.isArray(data.items)) {
          items = data.items;
        }
        
        // Map API response to heroImages format
        const mappedImages = items.map((item) => ({
          src: item.heroImage || item.image || item.src || item.hero_image || '',
          alt: item.alt || item.title || item.heading || 'Hero Image',
          title: item.title || item.heading || item.name || '',
          description: item.description || item.subtitle || item.subTitle || ''
        })).filter(item => item.src); // Filter out items without images
        
        // Debug: Log the mapped images
        console.log('Mapped hero images:', mappedImages);
        console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
        
        // Only set images from API, no fallback
        setHeroImages(mappedImages);
      } catch (error) {
        console.error('Error fetching hero images:', error);
        // On error, set empty array - no fallback images
        setHeroImages([]);
      } finally {
        setIsLoadingHero(false);
      }
    };

    fetchHeroImages();
  }, []);

  // Fetch service categories from API using axios
  useEffect(() => {
    const fetchServiceCategories = async () => {
      try {
        setIsLoadingCategories(true);
        const response = await api.get('/api/home-section/service-categories/active');
        
        // Axios automatically parses JSON, so response.data contains the data
        const data = response.data;
        
        // Handle different response structures: direct array, or wrapped in data/results property
        let items = [];
        if (Array.isArray(data)) {
          items = data;
        } else if (data?.data && Array.isArray(data.data)) {
          items = data.data;
        } else if (data?.results && Array.isArray(data.results)) {
          items = data.results;
        } else if (data?.items && Array.isArray(data.items)) {
          items = data.items;
        }
        
        // Map API response to serviceCategories format
        const mappedCategories = items.map((item) => ({
          id: item.id || item.slug || item.name?.toLowerCase().replace(/\s+/g, '-') || '',
          title: item.title || item.name || '',
          description: item.description || item.desc || '',
          icon: item.icon || item.emoji || '📋',
          src: item.videoUrl || item.video || item.src || item.videoSrc || ''
        })).filter(item => item.title); // Filter out items without title
        
        // Debug: Log the mapped categories
        console.log('Mapped service categories:', mappedCategories);
        
        // Only set categories from API, no fallback
        setServiceCategories(mappedCategories);
      } catch (error) {
        console.error('Error fetching service categories:', error);
        // On error, set empty array - no fallback
        setServiceCategories([]);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchServiceCategories();
  }, []);

  // Fetch services from API using axios
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoadingServices(true);
        const response = await api.get('/api/home-section/services/active');
        
        // Axios automatically parses JSON, so response.data contains the data
        const data = response.data;
        
        // Handle different response structures: direct array, or wrapped in data/results property
        let items = [];
        if (Array.isArray(data)) {
          items = data;
        } else if (data?.data && Array.isArray(data.data)) {
          items = data.data;
        } else if (data?.results && Array.isArray(data.results)) {
          items = data.results;
        } else if (data?.items && Array.isArray(data.items)) {
          items = data.items;
        }
        
        // Map API response to services format
        const mappedServices = items.map((item) => ({
          title: item.title || item.name || '',
          description: item.description || item.desc || '',
          image: item.image || item.imageUrl || item.src || item.serviceImage || ''
        })).filter(item => item.title && item.image); // Filter out items without title or image
        
        // Debug: Log the mapped services
        console.log('Mapped services:', mappedServices);
        
        // Only set services from API, no fallback
        setServices(mappedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
        // On error, set empty array - no fallback
        setServices([]);
      } finally {
        setIsLoadingServices(false);
      }
    };

    fetchServices();
  }, []);

  // Fetch portfolio items from API using axios
  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        setIsLoadingPortfolio(true);
        const response = await api.get('/api/home-section/portfolio/active');
        
        // Axios automatically parses JSON, so response.data contains the data
        const data = response.data;
        
        // Handle different response structures: direct array, or wrapped in data/results property
        let items = [];
        if (Array.isArray(data)) {
          items = data;
        } else if (data?.data && Array.isArray(data.data)) {
          items = data.data;
        } else if (data?.results && Array.isArray(data.results)) {
          items = data.results;
        } else if (data?.items && Array.isArray(data.items)) {
          items = data.items;
        }
        
        // Map API response to portfolioItems format
        const mappedPortfolio = items.map((item) => ({
          type: item.type || item.category || item.categoryType || '',
          image: item.image || item.imageUrl || item.src || item.portfolioImage || '',
          title: item.title || item.name || ''
        })).filter(item => item.image && item.title); // Filter out items without image or title
        
        // Debug: Log the mapped portfolio
        console.log('Mapped portfolio items:', mappedPortfolio);
        
        // Only set portfolio from API, no fallback
        setPortfolioItems(mappedPortfolio);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
        // On error, set empty array - no fallback
        setPortfolioItems([]);
      } finally {
        setIsLoadingPortfolio(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  // State for image slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying || heroImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length, isAutoPlaying]);

  // Manual slide navigation
  const goToSlide = (index) => {
    if (heroImages.length === 0) return;
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    if (heroImages.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    if (heroImages.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className='fixed w-full z-50'>
        <Header />
      </div>

      {/* Hero Section with Image Slider Background - ENHANCED RESPONSIVE DESIGN */}
      <section
        className="relative min-h-[50vh] xs:min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh] xl:min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-4 sm:pb-8 md:pb-12"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Image Slider - Enhanced for mobile */}
        <div className="absolute inset-0 z-0">
          {isLoadingHero ? (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          ) : (
            heroImages.length > 0 && heroImages.map((image, index) => {
              // Construct full image URL - check if src already includes protocol
              let imageSrc = image.src || '';
              
              // If src doesn't start with http/https, prepend the base URL
              if (imageSrc && !imageSrc.startsWith('http')) {
                const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
                // Ensure baseURL doesn't end with / and imageSrc starts with /
                const cleanBaseURL = baseURL.replace(/\/$/, '');
                const cleanImageSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
                imageSrc = `${cleanBaseURL}${cleanImageSrc}`;
              }
             
              return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                    src={imageSrc}
                alt={image.alt}
                fill
                className="object-contain md:object-cover object-center"
                priority={index === 0}
                sizes="(max-width: 320px) 100vw, (max-width: 425px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1440px) 100vw, 100vw"
                quality={90}
                    unoptimized={true}
              />
              {/* Enhanced gradient overlay for better text readability on all screens */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 
                            sm:from-black/40 sm:via-black/60 sm:to-black/80
                            md:from-black/30 md:via-black/50 md:to-black/70"></div>
            </div>
              );
            })
          )}
        </div>

        {/* Navigation Arrows - Mobile Optimized */}
        {!isLoadingHero && heroImages.length > 0 && (
          <>
        <button
          onClick={prevSlide}
          className="absolute left-2 xs:left-3 sm:left-4 md:left-6 z-20 p-1.5 xs:p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center shadow-lg"
          aria-label="Previous slide"
        >
          <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 xs:right-3 sm:right-4 md:right-6 z-20 p-1.5 xs:p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center shadow-lg"
          aria-label="Next slide"
        >
          <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
          </>
        )}

        {/* Hero Content - Mobile First Approach */}
        {!isLoadingHero && heroImages.length > 0 && (
        <div className="container mx-auto mt-18 px-3 xs:px-4 sm:px-6 z-10 text-center text-white w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto w-full px-2 xs:px-3 sm:px-4"
            >
              {/* Title with optimized responsive sizing */}
              <motion.h1
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight sm:leading-snug md:leading-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                  {heroImages[currentSlide]?.title || ''}
              </motion.h1>

              {/* Description with optimized readability */}
              <motion.p
                className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 xs:mb-5 sm:mb-6 md:mb-8 max-w-2xl xs:max-w-3xl mx-auto leading-relaxed sm:leading-normal font-light px-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                  {heroImages[currentSlide]?.description || ''}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons - Mobile Optimized */}
          <motion.div
            className="flex flex-col md:flex-row  xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center items-center mt-16 xs:mt-5 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link href={"/contact-us"} className="w-full md:w-[20%] xs:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-[#822431] text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-lg font-medium shadow-lg text-xs xs:text-sm sm:text-base md:text-lg w-full  xs:w-auto transition-all duration-300"
              >
                Plan Your Event
              </motion.button>
            </Link>
            <Link href={"/our-services"} className="w-full md:w-[20%] xs:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-md border border-white sm:border-2 text-white hover:bg-white/30 px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-lg font-medium text-xs xs:text-sm sm:text-base md:text-lg w-full  xs:w-auto transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
        )}
      </section>

      {/* Rest of your components remain exactly the same */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-primary mb-3 sm:mb-4">What We Do</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-xs sm:text-sm md:text-base px-2">
            We create memorable experiences through exceptional event planning and innovative advertising solutions
          </p>

          {isLoadingCategories ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          ) : serviceCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {serviceCategories.map((service, index) => {
                // Construct full video URL if needed
                let videoSrc = service.src || '';
                
                // If video src doesn't start with http/https, check if it needs API base URL
                if (videoSrc && !videoSrc.startsWith('http')) {
                  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9091';
                  
                  // If it starts with /uploads/, it's from the API server - prepend base URL
                  // If it starts with other / paths like /videos/, /corporate/, etc., they're local public folder paths
                  if (videoSrc.startsWith('/uploads/') || (!videoSrc.startsWith('/'))) {
                    // API path or relative path - prepend base URL
                    const cleanBaseURL = baseURL.replace(/\/$/, '');
                    const cleanVideoSrc = videoSrc.startsWith('/') ? videoSrc : `/${videoSrc}`;
                    videoSrc = `${cleanBaseURL}${cleanVideoSrc}`;
                  }
                  // Otherwise, it's a local public folder path (like /videos/...) - keep as is
                }
                return (
              <motion.div
                    key={service.id || index}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 cursor-pointer"
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0">
                      {videoSrc ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                  >
                          <source src={videoSrc} type="video/mp4" />
                  </video>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-[#822431] opacity-50" />
                      )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-white">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl mb-1 inline-block">{service.icon}</span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{service.title}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">{service.description}</p>
                  </div>
                </div>
              </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No service categories available.</p>
          </div>
          )}
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-100">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-primary mb-6 sm:mb-8 md:mb-10 lg:mb-12">Our Work</h2>

          {isLoadingPortfolio ? (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden rounded sm:rounded-lg md:rounded-xl bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          ) : portfolioItems.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {portfolioItems.map((item, index) => {
                // Construct full image URL - check if src already includes protocol or is from API
                let imageSrc = item.image || '';
                
                // If image doesn't start with http/https, check if it's a local path or needs API base URL
                if (imageSrc && !imageSrc.startsWith('http')) {
                  // If it starts with /uploads/, it's from the API server - prepend base URL
                  // If it starts with other / paths like /portfolio/, they're local public folder paths
                  if (imageSrc.startsWith('/uploads/') || (!imageSrc.startsWith('/'))) {
                    // API path or relative path - prepend base URL
                    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9091';
                    const cleanBaseURL = baseURL.replace(/\/$/, '');
                    const cleanImageSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
                    imageSrc = `${cleanBaseURL}${cleanImageSrc}`;
                  }
                  // Otherwise, it's a local public folder path (like /portfolio/...) - keep as is
                }
                
                return (
              <motion.div
                    key={item.id || index}
                className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden rounded sm:rounded-lg md:rounded-xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                      src={imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                      unoptimized={imageSrc.startsWith('http')}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-2 sm:p-3 md:p-4 text-white">
                    <span className="text-[10px] xs:text-xs bg-primary px-1 xs:px-2 py-0.5 xs:py-1 rounded-full">{item.type}</span>
                    <h4 className="text-sm xs:text-base sm:text-lg font-semibold mt-1">{item.title}</h4>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center p-2 sm:p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button className="bg-primary hover:bg-[#822431] text-white px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded text-xs sm:text-sm font-medium">
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No portfolio items available.</p>
          </div>
          )}

          {portfolioItems.length > 0 && (
          <div className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <Link href={"/advertising"} >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary sm:border-2 text-primary hover:bg-primary hover:text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg font-medium transition-colors text-xs sm:text-sm md:text-base"
              >
                View Full Portfolio
              </motion.button>
            </Link>
          </div>
          )}
        </div>
      </section>

      {/* Advertising Services */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-primary mb-3 sm:mb-4">Advertising Solutions</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-xs sm:text-sm md:text-base px-2">
            Innovative advertising strategies that maximize your brand visibility and impact
          </p>

          {isLoadingServices ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          ) : services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {services.map((service, index) => {
                // Construct full image URL - check if src already includes protocol or is from API
                let imageSrc = service.image || '';
                
                // If image doesn't start with http/https, check if it's a local path or needs API base URL
                if (imageSrc && !imageSrc.startsWith('http')) {
                  // If it starts with /uploads/, it's from the API server - prepend base URL
                  // If it starts with other / paths like /services/, they're local public folder paths
                  if (imageSrc.startsWith('/uploads/') || (!imageSrc.startsWith('/'))) {
                    // API path or relative path - prepend base URL
                    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9091';
                    const cleanBaseURL = baseURL.replace(/\/$/, '');
                    const cleanImageSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
                    imageSrc = `${cleanBaseURL}${cleanImageSrc}`;
                  } else {
                    // Local public folder path (like /services/...) - prepend /services/ if not already there
                    if (!imageSrc.startsWith('/services/')) {
                      imageSrc = `/services/${imageSrc}`;
                    }
                  }
                }
                
                return (
                  <motion.div
                    key={service.id || index}
                    className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg group cursor-pointer h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      unoptimized={imageSrc.startsWith('http')}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-white">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">{service.title}</h3>
                      <div className="h-0 overflow-hidden group-hover:h-12 sm:group-hover:h-14 md:group-hover:h-16 transition-all duration-500">
                        <p className="text-xs sm:text-sm text-gray-200 leading-tight sm:leading-normal">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No services available.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-primary text-white mb-4">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[
              {
                text: "They made our wedding day absolutely perfect! Every detail was taken care of.",
                author: "Priya & Raj",
                type: "Wedding Clients"
              },
              {
                text: "Our brand visibility increased by 40% after their innovative advertising campaign.",
                author: "Sanjay Mehta",
                type: "Marketing Director, StyleHub"
              },
              {
                text: "The corporate event was flawlessly executed. Professional from start to finish.",
                author: "Neha Gupta",
                type: "CEO, TechInnovate"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-3 sm:p-4 md:p-5 lg:p-6 rounded sm:rounded-lg md:rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">&quot;</div>
                <p className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-sm sm:text-base md:text-lg">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-white/70">{testimonial.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-cover bg-center relative mb-4">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="container mx-auto px-3 sm:px-4 text-center relative z-10 text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-2xl mx-auto">Let&apos;s discuss your vision and bring it to life</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href={"/contact-us"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary cursor-pointer hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium shadow-lg text-base md:text-lg"
              >
                Start Planning
              </motion.button>
            </Link>
            <Link href={"/contact-us"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent cursor-pointer border-2 border-white text-white hover:bg-white/10 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium text-base md:text-lg"
              > 
                Request a Quote
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footers />
    </div>
  );
}