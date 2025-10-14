// app/our-services/layout.js
export const metadata = {
  title: "Our Services - Navya Advertising & Event Management",
  description: "Explore our comprehensive event management services including corporate events, weddings, social events, brand activation, and artist management.",
  keywords: "event management, corporate events, wedding planning, brand activation, artist management, social events, Navya Advertising",
};

export default function OurServicesLayout({ children }) {
  return (
    <div className="our-services-layout">
      {children}
    </div>
  );
}