"use client"
import Footers from "@/components/Footers.jsx";
import Header from "../components/Headers.jsx";
import { useState, useEffect } from "react";
import Image from "next/image.js";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link.js";

export default function Home() {
  // Hero section slider images with different text content
  const heroImages = [
    {
      src: "/SliderImages/slider1.jpg",
      alt: "Bus Branding - Mobile Billboards That Dominate City Streets",
      title: "Bus Branding - Mobile Billboards That Dominate City Streets",
      description: "Make Your Brand the Talk of the Town with Professional Bus Branding"
    },
    {
      src: "/SliderImages/slider2.jpg",
      alt: "Van Branding - Your Brand on the Move",
      title: "Van Branding - Your Brand on the Move",
      description: "Convert delivery vans and commercial vehicles into eye-catching mobile promotions that build brand awareness wherever they travel."
    },
    {
      src: "/SliderImages/slider3.jpg",
      alt: "Social event planning",
      title: "Unipole & Hoarding - Command Attention at Key Locations",
      description: "Dominate strategic high-visibility locations with large-scale outdoor advertising that captures attention 24/7 from pedestrians and motorists."
    },
    {
      src: "/SliderImages/slider4.jpg",
      alt: "Airport Branding - Reach Captive Audiences in Transit",
      title: "Airport Branding - Reach Captive Audiences in Transit",
      description: "Connect with affluent travelers and business professionals through premium airport advertising in high-footfall terminal areas."
    },
    {
      src: "/SliderImages/slider5.jpg",
      alt: "Tricycle Branding - Hyper-Local Mobile Advertising",
      title: "Tricycle Branding - Hyper-Local Mobile Advertising",
      description: "Leverage auto rickshaws and tricycles for cost-effective, nimble advertising that penetrates narrow streets and local neighborhoods."
    },
    {
      src: "/SliderImages/slider6.jpg",
      alt: "Wall Painting - Transform Urban Spaces into Brand Canvases",
      title: "Wall Painting - Transform Urban Spaces into Brand Canvases",
      description: "Turn blank walls into spectacular brand masterpieces that create lasting impressions in high-traffic urban and commercial areas."
    },
     {
      src: "/SliderImages/slider7.jpeg",
      alt: "Bus Branding - Mobile Billboards That Dominate City Streets",
      title: "Bus Branding - Mobile Billboards That Dominate City Streets",
      description: "Make Your Brand the Talk of the Town with Professional Bus Branding"
    },
  ];

  // Main service categories overview
  const serviceCategories = [
    {
      id: "wedding",
      title: "Wedding Events",
      description: "Memorable and flawless wedding planning services to make your special day perfect.",
      icon: "💍",
      src: "/videos/wedding2.mp4"
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description: "Professional event management for conferences, product launches, and corporate gatherings.",
      icon: "🏢",
      src: "/corporate/aavantika.mp4"
    },
    {
      id: "social",
      title: "Social Events",
      description: "Exceptional planning for birthdays, anniversaries, and other social celebrations.",
      icon: "🎉",
      src: "/social/smart_cities.mp4"
    },
    {
      id: "advertising",
      title: "Advertising Solutions",
      description: "Creative strategies to boost your brand visibility with innovative advertising campaigns.",
      icon: "🚀",
      src: "/advertising/advertising.mp4"
    },
    {
      id: "artist",
      title: "Artist Management",
      description: "Comprehensive management services for artists and performers.",
      icon: "🎤",
      src: "/artist/artist.mp4"
    },
  ];

  // Advertising services (detailed)
  const services = [
    {
      title: "Event Management",
      description: "Complete event planning and execution services for corporate and private events.",
      image: "wedding1.jpeg",
    },
    {
      title: "Promotion Mobile Van Branding",
      description: "Transform your mobile vans into moving billboards with our high-quality branding solutions.",
      image: "mobile-van.jpeg",
    },
    {
      title: "Vinyl Auto Rickshaw Advertising",
      description: "Maximize brand visibility with our durable vinyl wraps for auto rickshaws.",
      image: "auto-rickshaw.webp",
    },
    {
      title: "Wall Painting Advertising",
      description: "Large-scale wall paintings that turn urban spaces into captivating brand canvases.",
      image: "wall_painting.jpeg",
    },
    {
      title: "Tata Ace Mobile Van Branding",
      description: "Specialized branding solutions for Tata Ace vans to promote your business on the move.",
      image: "tata-ace.webp",
    },
    {
      title: "Outdoor Hoarding Advertisement",
      description: "Eye-catching hoarding designs that command attention in high-traffic areas.",
      image: "hoarding.jpeg",
    },
  ];

  const portfolioItems = [
    { type: "wedding", image: "wedding1.jpeg", title: "Luxury Royal Wedding" },
    { type: "wedding", image: "wedding2.jpeg", title: "Garden Destination Wedding" },
    { type: "advertising", image: "ad1.jpeg", title: "Brand Campaign - Doodle" },
    { type: "advertising", image: "ad2.jpeg", title: "Vehicle Branding - Dinosaur World" },
    { type: "corporate", image: "corporate1.jpg", title: "Nikon Event" },
    { type: "corporate", image: "corporate2.jpg", title: "Product Launch Event" },
    { type: "social", image: "social1.jpg", title: "Milestone Birthday Celebration" },
    { type: "social", image: "social2.jpeg", title: "Anniversary Gala" },
  ];

  // State for image slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className='fixed w-full z-50'>
        <Header />
      </div>

      {/* Hero Section with Image Slider Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Image Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content with Dynamic Text */}
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {heroImages[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {heroImages[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons remain same for all slides */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href={"/contact-us"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-[#822431] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium shadow-lg text-base md:text-lg"
              >
                Plan Your Event
              </motion.button>
            </Link>
            <Link href={"/our-services"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium text-base md:text-lg"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview - Visual Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-4">What We Do</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
            We create memorable experiences through exceptional event planning and innovative advertising solutions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg h-72 sm:h-80 md:h-96 cursor-pointer"
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                  >
                    <source src={service.src} type="video/mp4" />
                    <Image
                      src="/hero-background.jpg"
                      alt="Elegant wedding background"
                      fill
                      className="object-cover"
                      priority
                    />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-3xl md:text-4xl mb-1 md:mb-2 inline-block">{service.icon}</span>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{service.title}</h3>
                    <p className="text-gray-200 text-sm md:text-base">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase with Default Hover */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-8 md:mb-12">Our Work</h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative h-60 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg md:rounded-xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/portfolio/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Always visible overlay with information */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-3 md:p-4 text-white">
                    <span className="text-xs bg-primary px-2 py-1 rounded-full">{item.type}</span>
                    <h4 className="text-base md:text-lg font-semibold mt-1 md:mt-2">{item.title}</h4>
                  </div>
                </div>

                {/* Additional info on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button className="bg-primary hover:bg-[#822431] text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium">
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href={"/advertising"} >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base"
              >
                View Full Portfolio
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advertising Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-4">Advertising Solutions</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
            Innovative advertising strategies that maximize your brand visibility and impact
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-72 sm:h-80 md:h-96"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/services/${service.image}`}
                  alt={service.title}
                  fill
                  className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{service.title}</h3>
                  <div className="h-0 overflow-hidden group-hover:h-14 md:group-hover:h-16 transition-all duration-500">
                    <p className="text-xs md:text-sm text-gray-200">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-16 bg-primary text-white mb-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg md:rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl mb-2 md:mb-4">&quot;</div>
                <p className="mb-3 md:mb-4 text-sm md:text-base">{testimonial.text}</p>
                <p className="font-semibold text-base md:text-lg">{testimonial.author}</p>
                <p className="text-xs md:text-sm text-white/70">{testimonial.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-cover bg-center relative mb-4">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">Let&quot;s discuss your vision and bring it to life</p>
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