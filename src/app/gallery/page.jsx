"use client"
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Headers';
import Footers from '@/components/Footers';

const ModernGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState('all');
  const [showSubCategories, setShowSubCategories] = useState(false);
  const scrollRef = useRef(null);

  // Sub-categories for advertising
  const advertisingSubCategories = [
    "Auto Branding (Vinyl & Hood)",
    "Tricycle Advertising",
    "E-Rickshaw & Mo Pad Bikes",
    "Bus Branding & Bus Shelters",
    "LED Van Branding",
    "Van Canter Branding",
    "Airport Branding",
    "International Cricket Branding",
    "Mall Branding & Activations",
    "Multiplex Branding",
    "Radio Campaign",
    "Chartered Bus TV Advertising",
    "Wall Painting & Graffiti",
    "In-Shop Branding",
    "Exhibition Creative Stalls",
    "Unipoles & Hoardings",
    "Corporate Event Production",
    "Printing Segment Work",
    "Stationery Printing",
    "Corporate Brochures",
    "Leaflets & Pamphlets",
    "Flex Banners & Hoardings",
    "Backdrops, Standees & Kiosks",
    "No Parking Boards"
  ];

  // Updated Gallery data with multiple photos per project
  const galleryData = [
    {
      id: 1,
      title: "Auto Branding Campaign",
      description: "Creative vehicle wrapping solutions",
      category: "advertising",
      subCategory: "Auto Branding (Vinyl & Hood)",
      photos: [
        { id: 1, src: "/advertising/auto_branding.webp", alt: "Auto Branding Front View" },
        { id: 2, src: "/advertising/auto_branding1.jpg", alt: "Auto Branding Side View" },
        { id: 3, src: "/advertising/auto_branding2.jpeg", alt: "Auto Branding Back View" },
        { id: 4, src: "/advertising/auto_branding3.jpg", alt: "Auto Branding Detail" }
      ]
    },
    {
      id: 2,
      title: "Tricycle Advertising",
      description: "Mobile advertising on tricycles",
      category: "advertising",
      subCategory: "Tricycle Advertising",
      photos: [
        { id: 1, src: "/advertising/tricycle1.jpeg", alt: "Tricycle Ad Front" },
        { id: 2, src: "/advertising/tricycle2.jpeg", alt: "Tricycle Ad Side" },
        { id: 3, src: "/advertising/tricycle3.jpeg", alt: "Tricycle Ad Back" },
        { id: 4, src: "/advertising/tricycle4.jpeg", alt: "Tricycle Ad Detail" }
      ]
    },
    {
      id: 3,
      title: "Bus Shelter Campaign",
      description: "Strategic bus shelter advertising",
      category: "advertising",
      subCategory: "Bus Branding & Bus Shelters",
      photos: [
        { id: 1, src: "/advertising/bus1.jpeg", alt: "Bus Shelter Main" },
        { id: 2, src: "/advertising/bus2.jpeg", alt: "Bus Shelter Side" },
        { id: 3, src: "/advertising/bus3.jpeg", alt: "Bus Shelter Night" },
        { id: 4, src: "/advertising/bus4.jpeg", alt: "Bus Shelter Closeup" }
      ]
    },
    {
      id: 4,
      title: "LED Van Promotion",
      description: "Dynamic mobile LED advertising",
      category: "advertising",
      subCategory: "LED Van Branding",
      photos: [
        { id: 1, src: "/advertising/LED_van1.jpeg", alt: "LED Van Front" },
        { id: 2, src: "/advertising/LED_van2.jpeg", alt: "LED Van Side" },
        { id: 3, src: "/advertising/LED_van3.jpeg", alt: "LED Van Back" },
        { id: 4, src: "/advertising/LED_van4.jpeg", alt: "LED Van Display" }
      ]
    },
    {
      id: 5,
      title: "Mall Activation",
      description: "Interactive mall branding campaign",
      category: "advertising",
      subCategory: "Mall Branding & Activations",
      photos: [
        { id: 1, src: "/advertising/mall1.webp", alt: "Mall Activation Main" },
        { id: 2, src: "/advertising/mall2.webp", alt: "Mall Activation Booth" },
        { id: 3, src: "/advertising/mall3.png", alt: "Mall Activation Crowd" },
        { id: 4, src: "/advertising/mall4.jpg", alt: "Mall Branding Entrance" }
      ]
    },
    {
      id: 6,
      title: "Urban Art Campaign",
      description: "Creative wall paintings and graffiti",
      category: "advertising",
      subCategory: "Wall Painting & Graffiti",
      photos: [
        { id: 1, src: "/advertising/wall_painting1.jpeg", alt: "Wall Painting 1" },
        { id: 2, src: "/advertising/wall_painting2.jpeg", alt: "Wall Painting 2" },
        { id: 3, src: "/advertising/wall_painting3.jpeg", alt: "Wall Painting 3" },
        { id: 4, src: "/advertising/wall_painting4.jpeg", alt: "Wall Painting 4" }
      ]
    },
    {
      id: 7,
      title: "Airport Advertising",
      description: "Premium airport branding solutions",
      category: "advertising",
      subCategory: "Airport Branding",
      photos: [
        { id: 1, src: "/advertising/airport1.jpeg", alt: "Airport Ad 1" },
        { id: 2, src: "/advertising/airport2.jpeg", alt: "Airport Ad 2" },
        { id: 3, src: "/advertising/airport3.jpeg", alt: "Airport Ad 3" },
        { id: 4, src: "/advertising/airport4.jpeg", alt: "Airport Ad 4" }
      ]
    },
    {
      id: 8,
      title: "Sports Sponsorship",
      description: "Kabadi tournament branding",
      category: "advertising",
      subCategory: "International Cricket Branding",
      photos: [
        { id: 1, src: "/advertising/cricket1.webp", alt: "Sports Sponsorship 1" },
        { id: 2, src: "/advertising/cricket2.webp", alt: "Sports Sponsorship 2" },
        { id: 3, src: "/advertising/cricket3.jpg", alt: "Sports Sponsorship 3" },
        { id: 4, src: "/advertising/cricket4.jpeg", alt: "Sports Sponsorship 4" }
      ]
    },
    {
      id: 9,
      title: "Radio Advertising",
      description: "Creative radio commercial campaigns",
      category: "advertising",
      subCategory: "Radio Campaign",
      photos: [
        { id: 1, src: "/advertising/radio_mirchi1.jpg", alt: "Radio Campaign 1" },
        { id: 2, src: "/advertising/radio_mirchi2.jpg", alt: "Radio Campaign 2" },
        { id: 3, src: "/advertising/radio_mirchi3.jpg", alt: "Radio Campaign 3" },
        { id: 4, src: "/advertising/radio_mirchi4.jpg", alt: "Radio Campaign 4" }
      ]
    },
    {
      id: 10,
      title: "Corporate Branding",
      description: "Professional brochure design",
      category: "advertising",
      subCategory: "Corporate Brochures",
      photos: [
        { id: 1, src: "/advertising/corporate_branding1.webp", alt: "Corporate Brochure 1" },
        { id: 2, src: "/advertising/corporate_branding2.webp", alt: "Corporate Brochure 2" },
        { id: 3, src: "/advertising/corporate_branding3.webp", alt: "Corporate Brochure 3" },
        { id: 4, src: "/advertising/corporate_branding4.webp", alt: "Corporate Brochure 4" }
      ]
    },
    {
      id: 11,
      title: "Van Canter Campaign",
      description: "Mobile van advertising solutions",
      category: "advertising",
      subCategory: "Van Canter Branding",
      photos: [
        { id: 1, src: "/advertising/van_canter1.jpeg", alt: "Van Canter Front" },
        { id: 2, src: "/advertising/van_canter2.jpeg", alt: "Van Canter Side" },
        { id: 3, src: "/advertising/van_canter3.jpeg", alt: "Van Canter Back" },
        { id: 4, src: "/advertising/van_canter4.jpeg", alt: "Van Canter Detail" }
      ]
    },
    {
      id: 12,
      title: "Multiplex Advertising",
      description: "Cinema and multiplex branding",
      category: "advertising",
      subCategory: "Multiplex Branding",
      photos: [
        { id: 1, src: "/advertising/multiplex1.jpg", alt: "Multiplex Lobby" },
        { id: 2, src: "/advertising/multiplex2.webp", alt: "Multiplex Screen" },
        { id: 3, src: "/advertising/multiplex3.jpeg", alt: "Multiplex Entrance" },
        { id: 4, src: "/advertising/multiplex4.webp", alt: "Multiplex Branding" }
      ]
    },
    {
      id: 13,
      title: "Bus TV Advertising",
      description: "Chartered bus television campaigns",
      category: "advertising",
      subCategory: "Chartered Bus TV Advertising",
      photos: [
        { id: 1, src: "/advertising/bus_tv1.jpeg", alt: "Bus TV Screen 1" },
        { id: 2, src: "/advertising/bus_tv2.avif", alt: "Bus TV Screen 2" },
        { id: 3, src: "/advertising/bus_tv3.avif", alt: "Bus TV Screen 3" },
        { id: 4, src: "/advertising/bus_tv4.avif", alt: "Bus TV Screen 4" }
      ]
    },
    {
      id: 14,
      title: "In-Shop Branding",
      description: "Retail store branding solutions",
      category: "advertising",
      subCategory: "In-Shop Branding",
      photos: [
        { id: 1, src: "/advertising/in_shop1.jpeg", alt: "In-Shop Display 1" },
        { id: 2, src: "/advertising/in_shop2.jpeg", alt: "In-Shop Display 2" },
        { id: 3, src: "/advertising/in_shop3.jpeg", alt: "In-Shop Display 3" },
        { id: 4, src: "/advertising/in_shop4.jpeg", alt: "In-Shop Display 4" }
      ]
    },
    {
      id: 15,
      title: "Exhibition Stalls",
      description: "Creative exhibition booth designs",
      category: "advertising",
      subCategory: "Exhibition Creative Stalls",
      photos: [
        { id: 1, src: "/advertising/exhibition1.webp", alt: "Exhibition Stall 1" },
        { id: 2, src: "/advertising/exhibition2.jpg", alt: "Exhibition Stall 2" },
        { id: 3, src: "/advertising/exhibition3.jpg", alt: "Exhibition Stall 3" },
        { id: 4, src: "/advertising/exhibition4.webp", alt: "Exhibition Stall 4" }
      ]
    },
    {
      id: 16,
      title: "Hoarding Campaign",
      description: "Large format outdoor advertising",
      category: "advertising",
      subCategory: "Unipoles & Hoardings",
      photos: [
        { id: 1, src: "/advertising/hoarding1.jpeg", alt: "Hoarding 1" },
        { id: 2, src: "/advertising/hoarding2.jpeg", alt: "Hoarding 2" },
        { id: 3, src: "/advertising/hoarding3.jpeg", alt: "Hoarding 3" },
        { id: 4, src: "/advertising/hoarding4.jpeg", alt: "Hoarding 4" }
      ]
    },
    {
      id: 17,
      title: "Corporate Events",
      description: "Professional event production",
      category: "advertising",
      subCategory: "Corporate Event Production",
      photos: [
        { id: 1, src: "/advertising/corporate_event1.jpeg", alt: "Corporate Event 1" },
        { id: 2, src: "/advertising/corporate_event2.jpeg", alt: "Corporate Event 2" },
        { id: 3, src: "/advertising/corporate_event3.jpeg", alt: "Corporate Event 3" },
        { id: 4, src: "/advertising/corporate_event4.jpeg", alt: "Corporate Event 4" }
      ]
    },
    {
      id: 18,
      title: "Printing Services",
      description: "Professional printing solutions",
      category: "advertising",
      subCategory: "Printing Segment Work",
      photos: [
        { id: 1, src: "/advertising/printing1.jpg", alt: "Printing Work 1" },
        { id: 2, src: "/advertising/printing2.jpg", alt: "Printing Work 2" },
        { id: 3, src: "/advertising/printing3.jpeg", alt: "Printing Work 3" },
        { id: 4, src: "/advertising/printing4.webp", alt: "Printing Work 4" }
      ]
    },
    {
      id: 19,
      title: "Stationery Design",
      description: "Corporate stationery printing",
      category: "advertising",
      subCategory: "Stationery Printing",
      photos: [
        { id: 1, src: "/advertising/stationery1.jpeg", alt: "Stationery 1" },
        { id: 2, src: "/advertising/stationery2.jpeg", alt: "Stationery 2" },
        { id: 3, src: "/advertising/stationery3.jpeg", alt: "Stationery 3" },
        { id: 4, src: "/advertising/stationery4.jpeg", alt: "Stationery 4" }
      ]
    },
    {
      id: 20,
      title: "Leaflet Distribution",
      description: "Marketing leaflets and pamphlets",
      category: "advertising",
      subCategory: "Leaflets & Pamphlets",
      photos: [
        { id: 1, src: "/advertising/leaflet1.jpeg", alt: "Leaflet Design 1" },
        { id: 2, src: "/advertising/leaflet2.jpeg", alt: "Leaflet Design 2" },
        { id: 3, src: "/advertising/leaflet3.jpeg", alt: "Leaflet Design 3" },
        { id: 4, src: "/advertising/leaflet4.jpeg", alt: "Leaflet Design 4" }
      ]
    },
    {
      id: 21,
      title: "Flex Banner Campaign",
      description: "Outdoor flex banner advertising",
      category: "advertising",
      subCategory: "Flex Banners & Hoardings",
      photos: [
        { id: 1, src: "/advertising/flex_banner1.jpeg", alt: "Flex Banner 1" },
        { id: 2, src: "/advertising/flex_banner2.jpeg", alt: "Flex Banner 2" },
        { id: 3, src: "/advertising/flex_banner3.jpeg", alt: "Flex Banner 3" },
        { id: 4, src: "/advertising/flex_banner4.jpeg", alt: "Flex Banner 4" }
      ]
    },
    {
      id: 22,
      title: "Event Backdrops",
      description: "Professional backdrop and standee solutions",
      category: "advertising",
      subCategory: "Backdrops, Standees & Kiosks",
      photos: [
        { id: 1, src: "/advertising/backdrop1.jpeg", alt: "Backdrop 1" },
        { id: 2, src: "/advertising/backdrop2.jpeg", alt: "Backdrop 2" },
        { id: 3, src: "/advertising/backdrop3.jpeg", alt: "Backdrop 3" },
        { id: 4, src: "/advertising/backdrop4.jpeg", alt: "Backdrop 4" }
      ]
    },
    {
      id: 23,
      title: "Parking Solutions",
      description: "No parking boards and signage",
      category: "advertising",
      subCategory: "No Parking Boards",
      photos: [
        { id: 1, src: "/advertising/parking_board1.jpeg", alt: "Parking Board 1" },
        { id: 2, src: "/advertising/parking_board2.jpeg", alt: "Parking Board 2" },
        { id: 3, src: "/advertising/parking_board3.jpeg", alt: "Parking Board 3" },
        { id: 4, src: "/advertising/parking_board4.jpeg", alt: "Parking Board 4" }
      ]
    },
    {
      id: 24,
      title: "E-Rickshaw Advertising",
      description: "Chroma advertising on E-Rickshaw",
      category: "advertising",
      subCategory: "E-Rickshaw & Mo Pad Bikes",
      photos: [
        { id: 1, src: "/advertising/e_rickshaw1.jpeg", alt: "E-Rickshaw Front" },
        { id: 2, src: "/advertising/e_rickshaw2.jpeg", alt: "E-Rickshaw Side" },
        { id: 3, src: "/advertising/e_rickshaw3.jpeg", alt: "E-Rickshaw Back" },
        { id: 4, src: "/advertising/e_rickshaw4.jpeg", alt: "E-Rickshaw Detail" }
      ]
    },
    // Events category (single photo projects)
    {
      id: 25,
      title: "Product Launch Event",
      description: "Successful product launch with 500+ attendees",
      category: "events",
      photos: [
        { id: 1, src: "/brand_activation/brand1.jpg", alt: "Product Launch" }
      ]
    },
    {
      id: 26,
      title: "Corporate Conference",
      description: "Annual corporate conference 2024",
      category: "events",
      photos: [
        { id: 1, src: "/corporate/corporate1.webp", alt: "Corporate Conference" }
      ]
    },
    {
      id: 27,
      title: "Charity Gala Night",
      description: "Fundraising event for local community",
      category: "events",
      photos: [
        { id: 1, src: "/events/cherity_gala.webp", alt: "Charity Gala" }
      ]
    },
    {
      id: 28,
      title: "Tech Summit 2024",
      description: "Leading technology conference",
      category: "events",
      photos: [
        { id: 1, src: "/advertising/tech_confrance.webp", alt: "Tech Summit" }
      ]
    },
    {
      id: 29,
      title: "10th Birthday Bash",
      description: "Memorable birthday celebration event",
      category: "events",
      photos: [
        { id: 1, src: "/events/bday.jpg", alt: "Birthday Event" }
      ]
    },
    {
      id: 30,
      title: "Music Festival",
      description: "3-day outdoor music festival",
      category: "events",
      photos: [
        { id: 1, src: "/events/mirchi_music.jpg", alt: "Music Festival" }
      ]
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: galleryData.length },
    { id: 'advertising', label: 'Advertising', count: galleryData.filter(project => project.category === 'advertising').length },
    { id: 'events', label: 'Events', count: galleryData.filter(project => project.category === 'events').length }
  ];

  // Flatten projects into individual images for display in grid
  const getAllImagesForGrid = () => {
    const images = [];
    galleryData.forEach(project => {
      project.photos.forEach(photo => {
        images.push({
          ...photo,
          projectId: project.id,
          projectTitle: project.title,
          projectDescription: project.description,
          category: project.category,
          subCategory: project.subCategory
        });
      });
    });
    return images;
  };

  // Filter images based on active category and sub-category
  const filteredImages = activeFilter === 'all'
    ? getAllImagesForGrid()
    : activeFilter === 'advertising' && activeSubCategory !== 'all'
      ? getAllImagesForGrid().filter(image => image.category === 'advertising' && image.subCategory === activeSubCategory)
      : getAllImagesForGrid().filter(image => image.category === activeFilter);

  // Get project by ID
  const getProjectById = (id) => {
    return galleryData.find(project => project.id === id);
  };

  // Handle image click - open modal with project
  const handleImageClick = (image) => {
    const project = getProjectById(image.projectId);
    setSelectedProject(project);
    setSelectedImage(image);
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveFilter(categoryId);
    if (categoryId === 'advertising') {
      setShowSubCategories(true);
    } else {
      setShowSubCategories(false);
      setActiveSubCategory('all');
    }
  };

  // Handle sub-category change
  const handleSubCategoryChange = (subCategory) => {
    setActiveSubCategory(subCategory);
  };

  // Reset sub-categories
  const resetSubCategories = () => {
    setActiveSubCategory('all');
  };

  // Navigate to next/previous image in project
  const navigateImage = (direction) => {
    if (!selectedProject) return;

    const currentIndex = selectedProject.photos.findIndex(photo => photo.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % selectedProject.photos.length;
    } else {
      newIndex = currentIndex === 0 ? selectedProject.photos.length - 1 : currentIndex - 1;
    }

    setSelectedImage(selectedProject.photos[newIndex]);
  };

  // Navigate to next/previous project
  const navigateProject = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id && img.projectId === selectedImage.projectId);
    let newIndex;

    if (direction === 'next') {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    }

    const newImage = filteredImages[newIndex];
    const newProject = getProjectById(newImage.projectId);
    setSelectedProject(newProject);
    setSelectedImage(newImage);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  };

  const overlayVariants = {
    rest: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const subCategoryVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <div className='fixed w-full z-100'>
        <Header />
      </div>

      <div className="min-h-screen pt-30 bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary to-tertiary bg-clip-text text-transparent mb-6">
            Creative Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of stunning advertising campaigns and unforgettable events.
            Each project tells a unique story of creativity and excellence.
          </p>
        </motion.div>

        {/* Main Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 mx-1 group ${activeFilter === category.id
                  ? 'text-white'
                  : 'text-gray-600 hover:text-primary'
                  }`}
              >
                {activeFilter === category.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{category.label}</span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Advertising Sub-Categories */}
        <AnimatePresence>
          {showSubCategories && (
            <motion.div
              variants={subCategoryVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-6xl mx-auto mb-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                {/* Sub-category Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Advertising Specializations
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetSubCategories}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSubCategory === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    Show All
                  </motion.button>
                </div>

                {/* Sub-category Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 max-h-74 overflow-y-auto">
                  {advertisingSubCategories.map((subCategory, index) => (
                    <motion.button
                      key={subCategory}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSubCategoryChange(subCategory)}
                      className={`p-3 rounded-xl text-left transition-all duration-300 border-2 ${activeSubCategory === subCategory
                        ? 'bg-gradient-to-r from-primary to-tertiary text-white border-primary shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:shadow-md'
                        }`}
                    >
                      <span className="text-xs font-medium leading-tight block">
                        {subCategory}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Active Sub-category Indicator */}
                {activeSubCategory !== 'all' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-blue-800 font-medium">
                        Showing: <span className="font-bold">{activeSubCategory}</span>
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetSubCategories}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Clear Filter
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-7xl mx-auto mb-6"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-bold">{filteredImages.length}</span> images
              {activeSubCategory !== 'all' && (
                <span> in <span className="font-bold text-primary">{activeSubCategory}</span></span>
              )}
            </p>
          </div>
        </motion.div> */}

        {/* Gallery Grid */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.projectId}-${image.id}`}
                variants={cardVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                exit="exit"
                layout
                className="group relative cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                {/* Card Container */}
                <motion.div
                  variants={hoverVariants}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-white/20 hover:border-primary/20 transition-all duration-300"
                >
                  {/* Image Container */}
                  <motion.div
                    variants={imageVariants}
                    className="aspect-square relative overflow-hidden"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />

                    {/* Gradient Overlay */}
                    <motion.div
                      variants={overlayVariants}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
                    />

                    {/* Content Overlay */}
                    <motion.div
                      variants={overlayVariants}
                      className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg leading-tight">{image.projectTitle}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${image.category === 'advertising'
                          ? 'bg-blue-500/90'
                          : 'bg-green-500/90'
                          }`}>
                          {image.category}
                        </span>
                      </div>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {image.projectDescription}
                      </p>

                      {/* Sub-category Badge for Advertising */}
                      {image.subCategory && (
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                          <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                            {image.subCategory}
                          </span>
                        </div>
                      )}

                      {/* View Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 z-10 transition-all duration-300 group"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Image Navigation Arrows */}
              {selectedProject.photos.length > 1 && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 z-10 transition-all duration-300 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                  >
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 z-10 transition-all duration-300 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                  >
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </>
              )}

              {/* Modal Content */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image */}
                  <div className="relative aspect-video bg-gray-900">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      fill
                      className="object-contain"
                    />

                    {/* Image Counter */}
                    {selectedProject.photos.length > 1 && (
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {selectedProject.photos.findIndex(photo => photo.id === selectedImage.id) + 1} / {selectedProject.photos.length}
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {selectedProject.title}
                        </h2>
                        <p className="text-gray-600 text-lg">
                          {selectedProject.description}
                        </p>
                        {selectedProject.subCategory && (
                          <div className="mt-3">
                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {selectedProject.subCategory}
                            </span>
                          </div>
                        )}
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-bold mt-4 md:mt-0 ${selectedProject.category === 'advertising'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                        }`}>
                        {selectedProject.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Project Navigation Arrows */}
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                      <button
                        onClick={() => navigateProject('prev')}
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors group"
                      >
                        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Previous Project</span>
                      </button>

                      <div className="text-sm text-gray-500">
                        Project {filteredImages.findIndex(img => img.id === selectedImage.id && img.projectId === selectedImage.projectId) + 1} of {filteredImages.length}
                      </div>

                      <button
                        onClick={() => navigateProject('next')}
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors group"
                      >
                        <span>Next Project</span>
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-8xl mb-6">🎨</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">No projects found</h3>
            <p className="text-gray-600 text-lg">
              {activeSubCategory !== 'all'
                ? `We're currently working on projects for "${activeSubCategory}". Check back soon!`
                : "We're currently working on new amazing projects for this category."
              }
            </p>
          </motion.div>
        )}
      </div>
      <Footers />
    </>

  );
};

export default ModernGallery;