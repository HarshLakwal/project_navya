"use client"
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Headers';
import Footers from '@/components/Footers';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

const ModernGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState('all');
  const [showSubCategories, setShowSubCategories] = useState(false);
  const scrollRef = useRef(null);

  // API state management
  const [galleryData, setGalleryData] = useState([]);
  const [advertisingSubCategories, setAdvertisingSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch subcategories from API
  const fetchSubCategories = async (category) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/gallery/subcategories/category/${category}`);
      let subCategories = [];
      
      if (response.data.success && Array.isArray(response.data.data)) {
        subCategories = response.data.data;
      } else if (Array.isArray(response.data)) {
        subCategories = response.data;
      }
      
      // Extract names and sort by order if available
      // Ensure we only get strings, filter out any undefined/null values
      const subCategoryNames = subCategories
        .filter(item => item && typeof item === 'object' && item.name && typeof item.name === 'string' && item.isActive !== false) // Filter active items with valid names
        .sort((a, b) => (a.order || 0) - (b.order || 0)) // Sort by order
        .map(item => String(item.name)) // Extract just the names as strings
        .filter(name => name && name.trim() !== ''); // Remove any empty strings
      
      console.log('Subcategory names:', subCategoryNames); // Debug log
      setAdvertisingSubCategories(subCategoryNames);
    } catch (err) {
      console.error('Error fetching subcategories:', err);
      setAdvertisingSubCategories([]);
    }
  };

  // Fetch gallery data from API
  const fetchGalleryData = async (category = 'all') => {
    setLoading(true);
    setError(null);
    try {
      let url = `${API_BASE_URL}/api/gallery/active`;
      if (category !== 'all') {
        url = `${API_BASE_URL}/api/gallery/active?category=${category}`;
      }
      
      const response = await axios.get(url);
      
      // Transform API response to match expected format
      let transformedData = [];
      if (response.data.success && Array.isArray(response.data.data)) {
        transformedData = response.data.data.map((item, index) => ({
          id: item._id || index + 1,
          title: item.title || 'Untitled Project',
          description: item.description || '',
          category: item.category || category,
          subCategory: item.subCategory || null,
          photos: Array.isArray(item.photos) 
            ? item.photos.map((photo, photoIndex) => {
                let imageSrc = photo.src || photo.url || photo.image_url || '';
                
                // If src doesn't start with http/https, prepend the base URL
                if (imageSrc && !imageSrc.startsWith('http')) {
                  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ;
                  // Ensure baseURL doesn't end with / and imageSrc starts with /
                  const cleanBaseURL = baseURL.replace(/\/$/, '');
                  const cleanImageSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
                  imageSrc = `${cleanBaseURL}${cleanImageSrc}`;
                  console.log(imageSrc);
                }
                
                return {
                  id: photo._id || photoIndex + 1,
                  src: imageSrc,
                  alt: photo.alt || photo.title || `${item.title} - Photo ${photoIndex + 1}`
                };
              })
            : []
        }));
      } else if (Array.isArray(response.data)) {
        transformedData = response.data.map((item, index) => ({
          id: item._id || item.id || index + 1,
          title: item.title || 'Untitled Project',
          description: item.description || '',
          category: item.category || category,
          subCategory: item.subCategory || null,
          photos: Array.isArray(item.photos) 
            ? item.photos.map((photo, photoIndex) => {
                let imageSrc = photo.src || photo.url || photo.image_url || '';
                
                // If src doesn't start with http/https, prepend the base URL
                if (imageSrc && !imageSrc.startsWith('http')) {
                  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || IMAGE_BASE_URL || '';
                  // Ensure baseURL doesn't end with / and imageSrc starts with /
                  const cleanBaseURL = baseURL.replace(/\/$/, '');
                  const cleanImageSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
                  imageSrc = `${cleanBaseURL}${cleanImageSrc}`;
                }
                
                return {
                  id: photo._id || photo.id || photoIndex + 1,
                  src: imageSrc,
                  alt: photo.alt || photo.title || `${item.title} - Photo ${photoIndex + 1}`
                };
              })
            : []
        }));
      }
      
      setGalleryData(transformedData);
    } catch (err) {
      console.error('Error fetching gallery data:', err);
      setError(err.message || 'Failed to load gallery data');
      setGalleryData([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount and when category changes
  useEffect(() => {
    fetchGalleryData(activeFilter === 'all' ? 'all' : activeFilter);
  }, [activeFilter]);


  // Calculate categories dynamically from API data
  const categories = [
    { id: 'all', label: 'All Projects', count: galleryData.length },
    { id: 'advertising', label: 'Advertising', count: galleryData.filter(item => item.category === 'advertising').length },
    { id: 'events', label: 'Events', count: galleryData.filter(item => item.category === 'events').length }
  ];

  // Flatten projects into individual images for display in grid
  const getAllImagesForGrid = () => {
    const images = [];
    galleryData.forEach(project => {
      if (project.photos && Array.isArray(project.photos)) {
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
      }
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
      // Only fetch subcategories when advertising button is clicked
      fetchSubCategories('advertising');
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
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const hoverVariants = {
    rest: {},
    hover: {}
  };

  const imageVariants = {
    rest: {},
    hover: {}
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 }
  };

  const subCategoryVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 }
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };

  return (
    <>
      <div className='fixed w-full z-50'>
        <Header />
      </div>

      <div className="min-h-screen pt-24 md:pt-30 bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary to-tertiary bg-clip-text text-transparent mb-4 md:mb-6">
            Creative Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Discover our portfolio of stunning advertising campaigns and unforgettable events.
            Each project tells a unique story of creativity and excellence.
          </p>
        </motion.div>

        {/* Main Category Tabs - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-6 md:mb-8 overflow-x-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-1 md:p-2 shadow-xl border border-white/20 flex flex-nowrap sm:flex-wrap justify-center min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`relative px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold transition-all duration-300 mx-1 group flex-shrink-0 ${activeFilter === category.id
                  ? 'text-white'
                  : 'text-gray-600 hover:text-primary'
                  }`}
              >
                {activeFilter === category.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary rounded-lg md:rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base">
                  <span>{category.label}</span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Advertising Sub-Categories - Responsive */}
        <AnimatePresence>
          {showSubCategories && (
            <motion.div
              variants={subCategoryVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-6xl mx-auto mb-6 md:mb-8 px-2"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border border-white/20">
                {/* Sub-category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Advertising Specializations
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetSubCategories}
                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${activeSubCategory === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    Show All
                  </motion.button>
                </div>

                {/* Sub-category Grid - Responsive */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 max-h-48 sm:max-h-64 md:max-h-74 overflow-y-auto">
                  {advertisingSubCategories
                    .filter(subCategory => typeof subCategory === 'string' && subCategory.trim() !== '')
                    .map((subCategory, index) => {
                      const subCategoryName = typeof subCategory === 'string' ? subCategory : String(subCategory?.name || subCategory || '');
                      return (
                        <motion.button
                          key={`subcategory-${index}-${subCategoryName}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSubCategoryChange(subCategoryName)}
                          className={`p-2 sm:p-3 rounded-lg md:rounded-xl text-left transition-all duration-300 border-2 ${activeSubCategory === subCategoryName
                            ? 'bg-gradient-to-r from-primary to-tertiary text-white border-primary shadow-lg'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:shadow-md'
                            }`}
                        >
                          <span className="text-xs font-medium leading-tight block">
                            {subCategoryName}
                          </span>
                        </motion.button>
                      );
                    })}
                </div>

                {/* Active Sub-category Indicator */}
                {activeSubCategory !== 'all' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 md:mt-4 p-2 md:p-3 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-blue-800 font-medium text-sm sm:text-base">
                        Showing: <span className="font-bold">{activeSubCategory}</span>
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetSubCategories}
                        className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium"
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

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <div className="animate-spin inline-block w-10 h-10 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">Loading gallery data...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <div className="text-red-500 text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">⚠️</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-red-800 mb-3 sm:mb-4">Error loading data</h3>
            <p className="text-red-600 text-base sm:text-lg max-w-md mx-auto px-4">
              {error}. Please try again later.
            </p>
          </div>
        )}

        {/* Gallery Grid - Responsive */}
        {!loading && !error && filteredImages.length > 0 && (
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
                  className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border-2 border-white/20 hover:border-primary/20 transition-all duration-300"
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
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        unoptimized={image.src?.startsWith('http')}
                    />

                    {/* Gradient Overlay */}
                    <motion.div
                      variants={overlayVariants}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
                    />

                    {/* Content Overlay */}
                    <motion.div
                      variants={overlayVariants}
                      className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <div className="flex justify-between items-start mb-1 sm:mb-2">
                        <h3 className="font-bold text-sm sm:text-base md:text-lg leading-tight pr-2">{image.projectTitle}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold flex-shrink-0 ${image.category === 'advertising'
                          ? 'bg-blue-500/90'
                          : 'bg-green-500/90'
                          }`}>
                          {image.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                        {image.projectDescription}
                      </p>

                      {/* Sub-category Badge for Advertising */}
                      {image.subCategory && (
                        <div className="mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                          <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs line-clamp-1">
                            {image.subCategory}
                          </span>
                        </div>
                      )}

                      {/* View Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-2">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        )}

        {/* Image Modal - Responsive */}
        <AnimatePresence>
          {selectedImage && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-2 sm:p-3 md:p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button - Responsive */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
                className="absolute top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 z-10 transition-all duration-300 group"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Image Navigation Arrows - Responsive */}
              {selectedProject.photos.length > 1 && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute left-2 sm:left-3 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 md:p-4 z-10 transition-all duration-300 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-2 sm:right-3 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 md:p-4 z-10 transition-all duration-300 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </>
              )}

              {/* Modal Content - Responsive */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative max-w-6xl w-full mx-auto max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image */}
                  <div className="relative aspect-video bg-gray-900">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      fill
                      className="object-contain"
                      priority
                      unoptimized={selectedImage.src?.startsWith('http')}
                    />

                    {/* Image Counter */}
                    {selectedProject.photos.length > 1 && (
                      <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                        {selectedProject.photos.findIndex(photo => photo.id === selectedImage.id) + 1} / {selectedProject.photos.length}
                      </div>
                    )}
                  </div>

                  {/* Info Section - Responsive */}
                  <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4 sm:mb-6 gap-3">
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                          {selectedProject.title}
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                          {selectedProject.description}
                        </p>
                        {selectedProject.subCategory && (
                          <div className="mt-2 sm:mt-3">
                            <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                              {selectedProject.subCategory}
                            </span>
                          </div>
                        )}
                      </div>
                      <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${selectedProject.category === 'advertising'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                        }`}>
                        {selectedProject.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Project Navigation Arrows - Responsive */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 pt-4 sm:pt-6 border-t border-gray-200">
                      <button
                        onClick={() => navigateProject('prev')}
                        className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-primary transition-colors group text-sm sm:text-base"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Previous Project</span>
                      </button>

                      <div className="text-xs sm:text-sm text-gray-500 text-center">
                        Project {filteredImages.findIndex(img => img.id === selectedImage.id && img.projectId === selectedImage.projectId) + 1} of {filteredImages.length}
                      </div>

                      <button
                        onClick={() => navigateProject('next')}
                        className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-primary transition-colors group text-sm sm:text-base"
                      >
                        <span>Next Project</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Empty State - Responsive */}
        {!loading && !error && filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 sm:py-16 md:py-20"
          >
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">🎨</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">No projects found</h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto px-4">
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
