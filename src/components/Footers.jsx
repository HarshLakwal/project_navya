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
const Footers = () => {

    return (
        < div className="bg-gray-800 text-white py-12" >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">EventMasters</h3>
                        <p className="text-gray-400">
                            Professional event management services for all occasions. We make your events memorable.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#workflow" className="text-gray-400 hover:text-white transition-colors">Workflow</a></li>
                            <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {serviceCategories.map(service => (
                                <li key={service.id}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{service.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact Us</h4>
                        <address className="not-italic text-gray-400">
                            <p>Office No. 404, The Heritage, 582</p>
                            <p>Mahatma Gandhi Rd, New Palasia, Indore,
                                Madhya Pradesh 452001</p>
                            <p className="mt-2">Phone: +917987709774 +919977732199</p>
                            <p>Email: navyaadvertisingindore@gmail.com</p>
                        </address>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>© 2025 navyaadvertising. All rights reserved.</p>
                </div>
            </div>
        </div >
    )
}
export default Footers