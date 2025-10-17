"use client"
import Header from '@/components/Headers';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Auto Branding",
    description: "Transform vehicles into mobile billboards with our comprehensive auto branding solutions.",
    details: [
      { title: "Auto Vinyl", text: "Most economical way to carpet bomb the city with your product message" },
      { title: "Auto Hood", text: "Entire roof replaced with your branding printed on quality rexine" }
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Tricycle Advertising",
    description: "Mobile billboard advertising using tricycles to reach customers in high-traffic areas."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "E-Rickshaw Advertising",
    description: "Environmentally friendly advertising with high visibility in crowded areas."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Bus Branding",
    description: "High visibility advertising on buses for maximum audience reach."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "LED Van Canter",
    description: "Dynamic LED screen advertising on vans for maximum impact."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Airport Branding",
    description: "Premium advertising in airports to reach a captive audience of travelers."
  }
];

const allServices = [
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

const detailedServices = [
  {
    title: "Auto Branding",
    image: "/advertising/auto_branding.webp",
    description: [
      "Auto Vinyl: Most economical and can be used to carpet bomb the city with your product message. Solvent Vinyl used to give good picture resolution.",
      "Auto Hood: The entire roof is replaced with your product branding which is printed on a good quality rexine. Highly durable and High on viewership. High brand positioning."
    ]
  },
  {
    title: "Tricycle Advertising",
    image: "/advertising/tricycle3.jpeg",
    description: [
      "Tricycle advertising, also known as mobile billboard advertising using tricycles, can offer several benefits for businesses looking to promote their products or services. Tricycle advertising effectiveness depends on factors such as the design of the advertisement, the choice of routes, and the specific target audience."
    ]
  },
  {
    title: "E-Rickshaw Advertising",
    image: "/services/mobile-van.jpeg",
    description: [
      "Advertising on e-rickshaws (electric rickshaw) can offer several benefits for businesses looking to promote their products or services."
    ],
    listItems: [
      "Environmentally Friendly",
      "Cost-Effective",
      "Localized Marketing",
      "Mobile Advertising",
      "High Visibility in Crowded Areas",
      "Local Targeting",
      "Non-Intrusive",
      "Brand Visibility",
      "Community Engagement",
      "Innovative and Modern Image"
    ]
  },
  {
    title: "Bus Branding",
    image: "/advertising/ibus.jpeg",
    description: [
      "Bus branding, also known as bus advertising or bus wraps, involves placing advertisements on the exterior of buses. This form of outdoor advertising can offer several benefits for businesses and advertisers."
    ],
    listItems: [
      "High Visibility",
      "Wide Audience Reach",
      "Frequency of Exposure",
      "Mobile Advertising",
      "Cost-Effective",
      "Local Targeting",
      "Long Exposure Times",
      "Creative Opportunities",
      "Environmental Impact",
      "Complements Other Marketing Channels"
    ]
  },
  {
    title: "LED Van Canter Advertising",
    image: "/advertising/led_van.jpeg",
    description: [
      "LED van Canter advertising involves using LED screens or panels on the exterior of a van for advertising purposes. LED screens are large and bright enough to ensure that viewers watch and read the ad comfortably.",
      "Canter van branding, often known as mobile van advertising, is one of the earliest and most powerful types of mass advertising. It involves promoting a good or service using a van or canter that travels through the target locations."
    ]
  },
  {
    title: "Airport Branding",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: [
      "Airport advertising involves promoting products, services, or brands within airport facilities to reach a diverse and captive audience. Airports provide a unique environment where advertisers can engage with travelers who often have time to spare before their flights.",
      "International airport branding offers premium exposure to a global audience with high disposable income, making it ideal for luxury brands and international services."
    ]
  },
  {
    title: "International Cricket Branding",
    image: "/advertising/cricket.webp",
    description: [
      "Cricket stadium advertising involves promoting products, services, or brands within the confines of cricket stadiums during matches or events. This type of advertising allows businesses to reach a captive audience of fans who are physically present to watch the game.",
      "With millions watching both in-stadium and on television, cricket branding offers massive visibility and brand recall, especially during high-profile international matches and tournaments."
    ]
  },
  {
    title: "Mall Branding & Activations",
    image: "/advertising/mall.jpg",
    description: [
      "Mall advertising refers to the promotion of products, services, or brands within shopping malls. It is a popular marketing strategy because malls attract a diverse and large audience of potential consumers.",
      "When planning mall advertising, it's crucial to consider the target audience, the overall aesthetics of the mall, and any specific guidelines or restrictions set by the mall management."
    ]
  },
  {
    title: "Cinema & Multiplex Branding",
    image: "/advertising/cinema.jpg",
    description: [
      "Cinema theatre advertising, also known as cinema advertising, involves promoting products or services to audiences before or during screenings at movie theaters.",
      "It's essential for advertisers to carefully plan their campaigns, considering factors such as the target audience, film genres, and the creative elements of the advertisements to ensure optimal impact. Additionally, technological advancements, such as the use of digital projection and interactive experiences, can further enhance the effectiveness of cinema theatre advertising."
    ]
  },
  {
    title: "Radio Campaign Advertising",
    image: "/advertising/radio.jpg",
    description: [
      "Radio campaign advertising involves promoting products, services, or messages through radio broadcasts. This form of advertising has several benefits and can be an effective way to reach a diverse audience.",
      "We partner with leading radio stations including 92.7 BIG FM, 93.5 RED FM, 94.3 MY FM, 98.3 MIRCHI, and many more to ensure your message reaches the right audience at the right time."
    ]
  },
  {
    title: "Chartered Bus TV Advertising",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: [
      "Chartered bus TV advertising refers to the promotion of products, services, or brands through television screens installed inside chartered buses. This form of advertising allows businesses to reach a captive audience of passengers during their journey.",
      "With passengers having extended travel times, chartered bus TV advertising ensures high engagement and message retention for your brand."
    ]
  },
  {
    title: "Wall Painting & Graffiti Advertising",
    image: "/advertising/wall_painting.jpeg",
    description: [
      "Wall painting advertising involves creating large-scale mural advertisements on exterior walls of buildings or structures. This form of outdoor advertising is visually impactful and can capture the attention of people in high-traffic areas.",
      "From traditional painted murals to modern graffiti art, we create eye-catching wall advertisements that transform urban spaces into brand canvases."
    ]
  },
  {
    title: "In-Shop Branding",
    image: "/advertising/shop.webp",
    description: [
      "In-shop advertising, also known as in-store advertising or point-of-sale advertising, involves promoting products, services, or brand messages within a retail environment. This form of advertising is strategically placed to capture the attention of customers while they are inside a store.",
      "Our in-shop branding solutions include shelf talkers, danglers, counter displays, floor graphics, and other point-of-purchase materials designed to influence buying decisions at the critical moment."
    ]
  },
  {
    title: "Exhibition Creative Stalls",
    image: "/advertising/stall.jpg",
    description: [
      "Exhibition stalls are temporary setups or spaces within an exhibition or trade show where businesses showcase their products, services, or innovations to a targeted audience. The design and presentation of exhibition stalls are crucial for attracting visitors, making a positive impression, and effectively communicating the brand's message.",
      "We create custom exhibition stalls that reflect your brand identity while maximizing engagement and lead generation at trade shows and exhibitions."
    ]
  },
  {
    title: "Unipole & Hoarding Advertising",
    image: "/services/hoarding.jpeg",
    description: [
      'A unipole, short for "single-pole," is a type of outdoor advertising structure commonly used for displaying large-format billboards or advertisements. Unipoles are freestanding structures typically consisting of a single vertical pole or column that supports the advertising display.',
      "These structures are strategically placed in high-traffic areas to maximize visibility and reach a large audience. We offer prime locations for unipoles and hoardings across major cities and highways."
    ]
  },
  {
    title: "Printing Services",
    image: "/advertising/painting_service.jpeg",
    description: [
      "Our comprehensive printing services cover all your branding and communication needs with the highest quality outputs."
    ],
    listItems: [
      "Stationery - Visiting Cards, Envelopes, Letter Heads, Receipts, etc.",
      "Corporate Brochures & Catalogs",
      "Leaflets & Pamphlets for mass distribution",
      "Paper Insertions for newspapers and magazines",
      "Flex Banners, Hoardings, Canopy, etc. for outdoor advertising",
      "Backdrops, Standees, Kiosks for events and retail environments",
      "No Parking Boards and other signage solutions"
    ]
  }
];

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

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-100">
      {/* Header */}
      <div className='fixed w-full z-100'>
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"
          ></motion.div>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
          ></motion.div>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-10 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="md:w-1/2 mb-12 md:mb-0 md:pr-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                India's Premier{' '}
                <span className="bg-gradient-to-r from-primary to-[#822431] bg-clip-text text-transparent">
                  Advertising & Event
                </span>{' '}
                Management Solution
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                In a country where streets are saturated with advertising mediums, selecting the right platform to maximize your brand exposure becomes challenging.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                NAVYA EVENT & ADVERTISING simplifies this process by offering comprehensive solutions that eliminate the need to coordinate with multiple media vendors.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r cursor-pointer from-primary to-[#822431] text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
                >
                  Explore Our Services
                </motion.button>
                <Link href={"/contact-us"}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white cursor-pointer text-gray-800 font-medium py-3 px-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transform transition-all duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-6 border-t border-gray-200"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-gray-600">Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-gray-600">Cities</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700"
              >
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt="Advertising in India"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.div>

              {/* Floating card elements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">360° Solutions</div>
                    <div className="text-xs text-gray-500">End-to-end advertising</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center">
                  <div className="bg-secondary/10 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Pan-India</div>
                    <div className="text-xs text-gray-500">Nationwide reach</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-primary mr-3"></div>
              <span className="text-primary font-semibold">OUR SERVICES</span>
              <div className="w-12 h-0.5 bg-primary ml-3"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive advertising solutions to maximize your brand visibility across multiple media channels
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="mb-6 bg-gradient-to-r from-primary to-[#822431] p-3 rounded-xl w-14 h-14 flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                {service.details && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    {service.details.map((detail, i) => (
                      <p key={i} className="text-gray-700 mb-2">
                        <span className="font-semibold text-primary">{detail.title}:</span> {detail.text}
                      </p>
                    ))}
                  </div>
                )}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-primary font-semibold flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* All Services Section */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-r from-primary to-[#822431] rounded-3xl p-10 mb-20 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-10">Our Complete Service Offerings</h3>
              <motion.div 
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {allServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="flex items-center py-2"
                  >
                    <div className="bg-white/20 p-1 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{service}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Detailed Service Sections */}
          <div className="space-y-32">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.7 }}
                  className="w-full md:w-1/2"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-100 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.7 }}
                  className="w-full md:w-1/2"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  {service.description.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                  {service.listItems && (
                    <ul className="mt-6 space-y-2">
                      {service.listItems.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gradient-to-r from-primary to-[#822431] text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Explore {service.title}
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gradient-to-r from-primary to-[#822431] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-white/50 mr-3"></div>
              <span className="text-white/90 font-semibold tracking-wider">TRUSTED BY INDUSTRY LEADERS</span>
              <div className="w-12 h-0.5 bg-white/50 ml-3"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Brands That Have Grown With Us</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We've had the privilege of partnering with some of the most recognized brands across industries
            </p>
          </motion.div>

          {/* Client Logos Slider */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-16 overflow-hidden"
          >
            <div className="flex animate-scroll">
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-8">
                  {[
                    "Big Basket", "Aakash Institute", "Best Solution", "Dev Bhumi Rice", "LIC", "Mahi Milk",
                    "Manappuram Gold Loan", "Chings Pasta", "Porter", "Rainbow Raincoat", "Victory Raincoat",
                    "Ram Bandhu", "Shankara Eye", "Agarwal Eye", "ASG Eye", "Khandelwal Suzuki", "Raj Suzuki",
                    "Sudhakar Pipe", "Zebronics", "Bajaj Finance", "Navratan Cool Talk", "Unipath Lab",
                    "Winner Coaching", "Sangam Steel", "Symphony Cooler", "Symbiosis University", "Wama Oil",
                    "TBZ Jewellery", "Taco Bell", "Wow Momos", "Snow City Indore", "Snow Hills Jaipur",
                    "Aditya Birla Group", "SBI Life", "Vivo", "Croma", "Reliance Trends", "ICICI Bank",
                    "RSWS", "Oriental University", "Prestige University", "Poliraj Pipe", "Orra Jewellery",
                    "Kent RO", "D-Mart", "Ola Cabs", "Pizza Hut", "Nagar Nigam Indore", "Smart City Indore"
                  ].map((brand, index) => (
                    <motion.div
                      key={`${brand}-${index}-${loopIndex}`}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="group flex-shrink-0 w-56 h-32 px-4 bg-white/5 rounded-2xl flex items-center justify-center backdrop-filter backdrop-blur-sm border border-white/10 transition-all duration-300"
                    >
                      <span
                        className="text-lg font-medium text-white/90 group-hover:text-white truncate w-full text-center"
                        title={brand}
                      >
                        {brand}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-primary to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#822431] to-transparent z-10"></div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { number: "500+", text: "Successful Campaigns" },
              { number: "98%", text: "Client Retention Rate" },
              { number: "25+", text: "Industries Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-white/5 rounded-2xl backdrop-filter backdrop-blur-sm border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-16"
          >
            <p className="text-xl font-semibold mb-8">Join 500+ leading brands that trust us with their advertising</p>
            <Link href={"/contact-us"}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Become Our Client
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* CSS for infinite scroll */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 60s linear infinite;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NAVYA EVENT & ADVERTISING</h3>
              <p className="text-gray-400">
                Your complete solution for advertising and event management needs across India.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#clients" className="text-gray-400 hover:text-white">Our Clients</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Auto Branding</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Bus Advertising</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Event Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Outdoor Hoarding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p>123 Advertising Street</p>
                <p>Mumbai, Maharashtra 400001</p>
                <p className="mt-2">Phone: +91 123 456 7890</p>
                <p>Email: info@navyaadvertising.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 NAVYA EVENT & ADVERTISING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyProfile;