import Header from '@/components/Headers';
import React from 'react';

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-100">
      {/* Header */}
      <div className='fixed w-full z-100'>
                <Header />
            </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center mt-25">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondry bg-clip-text text-transparent leading-tight mb-6">
              India's Premier Advertising & Event Management Solution
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              India's streets are awash with banners, hoardings, bus branding, bus shelters, road mediums, signage, etc., 
              so it becomes a challenge for an advertiser or client to select the location and the media to give their brand 
              the greatest possible exposure.
            </p>
            <p className="text-lg text-gray-700">
              NAVYA EVENT & ADVERTISING was founded with the goal of offering brands seeking to attract millions of 
              eyeballs the solutions they need, eliminating the need for customers to remember various media vendors.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-xl p-2 shadow-xl w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Advertising in India" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">Services We Offer</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Comprehensive advertising solutions to maximize your brand visibility across multiple media channels
          </p>
          
          {/* Service List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">Auto Branding</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Auto Vinyl:</span> Most economical and can be used to carpet bomb the city with your product message.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Auto Hood:</span> The entire roof is replaced with your product branding printed on good quality rexine.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">Tricycle Advertising</h3>
              <p className="text-gray-700">
                Tricycle advertising, also known as mobile billboard advertising using tricycles, can offer several benefits for businesses looking to promote their products or services.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">E-Rickshaw Advertising</h3>
              <p className="text-gray-700">
                Advertising on e-rickshaws offers benefits like being environmentally friendly, cost-effective, localized marketing, and high visibility in crowded areas.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">Bus Branding</h3>
              <p className="text-gray-700">
                Bus branding involves placing advertisements on the exterior of buses, offering high visibility, wide audience reach, and frequency of exposure.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">LED Van Canter</h3>
              <p className="text-gray-700">
                LED van canter advertising involves using LED screens on the exterior of a van for advertising purposes, ensuring viewers watch and read the ad comfortably.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">Airport Branding</h3>
              <p className="text-gray-600">
                Airport advertising involves promoting products within airport facilities to reach a diverse and captive audience of travelers.
              </p>
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="bg-gradient-to-r from-primary to-[#822431] text-white rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Complete Service Offerings</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Auto Branding (Vinyl & Hood)</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Tricycle Advertising</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>E-Rickshaw & Mo Pad Bikes</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Bus Branding & Bus Shelters</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>LED Van Branding</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Van Canter Branding</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Airport Branding</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>International Cricket Branding</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Mall Branding & Activations</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Multiplex Branding</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Radio Campaign</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Chartered Bus TV Advertising</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Wall Painting & Graffiti</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>In-Shop Branding</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Exhibition Creative Stalls</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Unipoles & Hoardings</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Corporate Event Production</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Printing Segment Work</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Stationery Printing</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Corporate Brochures</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Leaflets & Pamphlets</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Flex Banners & Hoardings</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>Backdrops, Standees & Kiosks</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>No Parking Boards</span>
              </div>
            </div>
          </div>
          
          {/* Service Details with Images */}
          <div className="space-y-20">
            {/* Auto Branding */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Auto Branding" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Auto Branding</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Auto Vinyl:</span> Most economical and can be used to carpet bomb the city with your product message. Solvent Vinyl used to give good picture resolution.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Auto Hood:</span> The entire roof is replaced with your product branding which is printed on a good quality rexine. Highly durable and High on viewership. High brand positioning.
                </p>
              </div>
            </div>
            
            {/* Tricycle Advertising */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1621841957884-0a1e0fe7eed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Tricycle Advertising" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Tricycle Advertising</h3>
                <p className="text-gray-700">
                  Tricycle advertising, also known as mobile billboard advertising using tricycles, can offer several benefits for businesses looking to promote their products or services. Tricycle advertising effectiveness depends on factors such as the design of the advertisement, the choice of routes, and the specific target audience.
                </p>
              </div>
            </div>
            
            {/* E-Rickshaw Advertising */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1633296120382-4b5fb3c4d94d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="E-Rickshaw Advertising" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-primary mb-4">E-Rickshaw Advertising</h3>
                <p className="text-gray-700 mb-4">
                  Advertising on e-rickshaws (electric rickshaw) can offer several benefits for businesses looking to promote their products or services.
                </p>
                <ul className="text-gray-700 list-disc pl-5">
                  <li>Environmentally Friendly</li>
                  <li>Cost-Effective</li>
                  <li>Localized Marketing</li>
                  <li>Mobile Advertising</li>
                  <li>High Visibility in Crowded Areas</li>
                  <li>Local Targeting</li>
                  <li>Non-Intrusive</li>
                  <li>Brand Visibility</li>
                  <li>Community Engagement</li>
                  <li>Innovative and Modern Image</li>
                </ul>
              </div>
            </div>
            
            {/* Bus Branding */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1593075736327-4d4f2c2e85c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Bus Branding" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Bus Branding</h3>
                <p className="text-gray-700 mb-4">
                  Bus branding, also known as bus advertising or bus wraps, involves placing advertisements on the exterior of buses. This form of outdoor advertising can offer several benefits for businesses and advertisers.
                </p>
                <ul className="text-gray-700 list-disc pl-5">
                  <li>High Visibility</li>
                  <li>Wide Audience Reach</li>
                  <li>Frequency of Exposure</li>
                  <li>Mobile Advertising</li>
                  <li>Cost-Effective</li>
                  <li>Local Targeting</li>
                  <li>Long Exposure Times</li>
                  <li>Creative Opportunities</li>
                  <li>Environmental Impact</li>
                  <li>Complements Other Marketing Channels</li>
                </ul>
              </div>
            </div>
            
            {/* LED Van Canter */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1566842600175-97dca3dfc3c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="LED Van Canter" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-primary mb-4">LED Van Canter Advertising</h3>
                <p className="text-gray-700 mb-4">
                  LED van Canter advertising involves using LED screens or panels on the exterior of a van for advertising purposes. LED screens are large and bright enough to ensure that viewers watch and read the ad comfortably.
                </p>
                <p className="text-gray-700">
                  Canter van branding, often known as mobile van advertising, is one of the earliest and most powerful types of mass advertising. It involves promoting a good or service using a van or canter that travels through the target locations.
                </p>
              </div>
            </div>
            
            {/* Airport Branding */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Airport Branding" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Airport Branding</h3>
                <p className="text-gray-700 mb-4">
                  Airport advertising involves promoting products, services, or brands within airport facilities to reach a diverse and captive audience. Airports provide a unique environment where advertisers can engage with travelers who often have time to spare before their flights.
                </p>
                <p className="text-gray-700">
                  International airport branding offers premium exposure to a global audience with high disposable income, making it ideal for luxury brands and international services.
                </p>
              </div>
            </div>
            
            {/* Cricket Branding */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Cricket Branding" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-primary mb-4">International Cricket Branding</h3>
                <p className="text-gray-700 mb-4">
                  Cricket stadium advertising involves promoting products, services, or brands within the confines of cricket stadiums during matches or events. This type of advertising allows businesses to reach a captive audience of fans who are physically present to watch the game.
                </p>
                <p className="text-gray-700">
                  With millions watching both in-stadium and on television, cricket branding offers massive visibility and brand recall, especially during high-profile international matches and tournaments.
                </p>
              </div>
            </div>
            
            {/* Mall Branding */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1562962236-2c5f585fab38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Mall Branding" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Mall Branding & Activations</h3>
                <p className="text-gray-700 mb-4">
                  Mall advertising refers to the promotion of products, services, or brands within shopping malls. It is a popular marketing strategy because malls attract a diverse and large audience of potential consumers.
                </p>
                <p className="text-gray-700">
                  When planning mall advertising, it's crucial to consider the target audience, the overall aesthetics of the mall, and any specific guidelines or restrictions set by the mall management.
                </p>
              </div>
            </div>
            
            {/* Cinema Branding */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Cinema Branding" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Cinema & Multiplex Branding</h3>
                <p className="text-gray-700 mb-4">
                  Cinema theatre advertising, also known as cinema advertising, involves promoting products or services to audiences before or during screenings at movie theaters.
                </p>
                <p className="text-gray-700">
                  It's essential for advertisers to carefully plan their campaigns, considering factors such as the target audience, film genres, and the creative elements of the advertisements to ensure optimal impact. Additionally, technological advancements, such as the use of digital projection and interactive experiences, can further enhance the effectiveness of cinema theatre advertising.
                </p>
              </div>
            </div>
            
            {/* Radio Campaign */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1584824486537-52a948dd499c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Radio Campaign" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Radio Campaign Advertising</h3>
                <p className="text-gray-700 mb-4">
                  Radio campaign advertising involves promoting products, services, or messages through radio broadcasts. This form of advertising has several benefits and can be an effective way to reach a diverse audience.
                </p>
                <p className="text-gray-700">
                  We partner with leading radio stations including 92.7 BIG FM, 93.5 RED FM, 94.3 MY FM, 98.3 MIRCHI, and many more to ensure your message reaches the right audience at the right time.
                </p>
              </div>
            </div>
            
            {/* Chartered Bus TV */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Chartered Bus TV" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Chartered Bus TV Advertising</h3>
                <p className="text-gray-700 mb-4">
                  Chartered bus TV advertising refers to the promotion of products, services, or brands through television screens installed inside chartered buses. This form of advertising allows businesses to reach a captive audience of passengers during their journey.
                </p>
                <p className="text-gray-700">
                  With passengers having extended travel times, chartered bus TV advertising ensures high engagement and message retention for your brand.
                </p>
              </div>
            </div>
            
            {/* Wall Painting */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Wall Painting" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Wall Painting & Graffiti Advertising</h3>
                <p className="text-gray-700 mb-4">
                  Wall painting advertising involves creating large-scale mural advertisements on exterior walls of buildings or structures. This form of outdoor advertising is visually impactful and can capture the attention of people in high-traffic areas.
                </p>
                <p className="text-gray-700">
                  From traditional painted murals to modern graffiti art, we create eye-catching wall advertisements that transform urban spaces into brand canvases.
                </p>
              </div>
            </div>
            
            {/* In-Shop Branding */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="In-Shop Branding" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-primary mb-4">In-Shop Branding</h3>
                <p className="text-gray-700 mb-4">
                  In-shop advertising, also known as in-store advertising or point-of-sale advertising, involves promoting products, services, or brand messages within a retail environment. This form of advertising is strategically placed to capture the attention of customers while they are inside a store.
                </p>
                <p className="text-gray-700">
                  Our in-shop branding solutions include shelf talkers, danglers, counter displays, floor graphics, and other point-of-purchase materials designed to influence buying decisions at the critical moment.
                </p>
              </div>
            </div>
            
            {/* Exhibition Stalls */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Exhibition Stalls" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Exhibition Creative Stalls</h3>
                <p className="text-gray-700 mb-4">
                  Exhibition stalls are temporary setups or spaces within an exhibition or trade show where businesses showcase their products, services, or innovations to a targeted audience. The design and presentation of exhibition stalls are crucial for attracting visitors, making a positive impression, and effectively communicating the brand's message.
                </p>
                <p className="text-gray-700">
                  We create custom exhibition stalls that reflect your brand identity while maximizing engagement and lead generation at trade shows and exhibitions.
                </p>
              </div>
            </div>
            
            {/* Unipole & Hoarding */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Unipole & Hoarding" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Unipole & Hoarding Advertising</h3>
                <p className="text-gray-700 mb-4">
                  A unipole, short for "single-pole," is a type of outdoor advertising structure commonly used for displaying large-format billboards or advertisements. Unipoles are freestanding structures typically consisting of a single vertical pole or column that supports the advertising display.
                </p>
                <p className="text-gray-700">
                  These structures are strategically placed in high-traffic areas to maximize visibility and reach a large audience. We offer prime locations for unipoles and hoardings across major cities and highways.
                </p>
              </div>
            </div>
            
            {/* Printing Services */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1603712610496-72e9fbf05b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Printing Services" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Printing Services</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive printing services cover all your branding and communication needs with the highest quality outputs.
                </p>
                <ul className="text-gray-700 list-disc pl-5">
                  <li>Stationery - Visiting Cards, Envelopes, Letter Heads, Receipts, etc.</li>
                  <li>Corporate Brochures & Catalogs</li>
                  <li>Leaflets & Pamphlets for mass distribution</li>
                  <li>Paper Insertions for newspapers and magazines</li>
                  <li>Flex Banners, Hoardings, Canopy, etc. for outdoor advertising</li>
                  <li>Backdrops, Standees, Kiosks for events and retail environments</li>
                  <li>No Parking Boards and other signage solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16 bg-gradient-to-r from-primary to-[#822431] text-white mb-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Brands Which Have Grown With Us</h2>
          <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
            We've had the privilege of working with some of the most recognized brands in the industry
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6",
              "Brand 7", "Brand 8", "Brand 9", "Brand 10", "Brand 11", "Brand 12"
            ].map((brand, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 flex items-center justify-center h-32 backdrop-filter backdrop-blur-sm">
                <span className="text-lg font-medium">{brand}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl font-semibold cursor-pointer">& Many More...</p>
          </div>
        </div>
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