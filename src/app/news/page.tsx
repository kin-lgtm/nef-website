import React from 'react';
import { 
  Calendar, 
  MapPin,
  Clock,
  Search,
  Newspaper,
  PartyPopper,
  Megaphone,
  Award,
  Users,
  TreePine
} from 'lucide-react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const NewsEventsPage = () => {
  const newsEvents = [
    {
      id: 1,
      title: "Annual Environmental Summit 2025: Protecting Sri Lanka's Biodiversity",
      excerpt: "Join us for our flagship event bringing together environmental leaders, researchers, and community activists to discuss conservation strategies.",
      date: "October 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Colombo Convention Centre",
      category: "Event",
      image: "/images/news-1.jpg",
      type: "Upcoming Event"
    },
    {
      id: 2,
      title: "NEF Receives National Award for Indigenous Knowledge Preservation",
      excerpt: "Recognition for our groundbreaking work in documenting and reviving traditional ecological practices across rural Sri Lanka.",
      date: "September 20, 2025",
      category: "News",
      image: "/images/news-1.jpg",
      type: "Achievement"
    },
    {
      id: 3,
      title: "Community Workshop: Traditional Water Management Systems",
      excerpt: "Hands-on workshop exploring ancient tank cascade systems and their relevance to modern climate adaptation strategies.",
      date: "November 5, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Anuradhapura District",
      category: "Event",
      image: "/images/news-1.jpg",
      type: "Workshop"
    },
    {
      id: 4,
      title: "New Partnership with Universities for Environmental Research",
      excerpt: "NEF collaborates with leading academic institutions to establish research programs focused on indigenous ecological knowledge.",
      date: "September 10, 2025",
      category: "News",
      image: "/images/news-1.jpg",
      type: "Partnership"
    },
    {
      id: 5,
      title: "Youth Climate Action Camp 2025",
      excerpt: "Week-long immersive program for young environmental leaders featuring field visits, workshops, and community projects.",
      date: "December 1-7, 2025",
      time: "All Day",
      location: "Sinharaja Forest Reserve",
      category: "Event",
      image: "/images/news-1.jpg",
      type: "Youth Program"
    },
    {
      id: 6,
      title: "Success Story: Village Transforms with Solar Energy Project",
      excerpt: "How NEF's renewable energy initiative brought sustainable power to 150 households in rural Monaragala district.",
      date: "August 28, 2025",
      category: "News",
      image: "/images/news-1.jpg",
      type: "Success Story"
    },
    {
      id: 7,
      title: "Sacred Groves Conservation Symposium",
      excerpt: "International conference on the role of traditional sacred forests in biodiversity conservation and cultural heritage.",
      date: "November 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Kandy",
      category: "Event",
      image: "/images/news-1.jpg",
      type: "Conference"
    },
    {
      id: 8,
      title: "NEF Launches Mobile App for Indigenous Plant Identification",
      excerpt: "Innovative technology meets traditional knowledge in new app helping communities identify and preserve native plant species.",
      date: "September 5, 2025",
      category: "News",
      image: "/images/news-1.jpg",
      type: "Innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-black/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">           
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Events</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay connected with NEF's latest initiatives, upcoming events, and environmental conservation milestones across Sri Lanka.
            </p>
          </div>
        </div>
      </div>    

      {/* News & Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsEvents.map((item) => (
              <div key={item.id} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative h-120">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    
                    <div className="flex items-center space-x-1 mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h2>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                    
                    <div className="flex justify-center mb-4">
                      <a href={`/news/${item.id}`}>
                        <button className="bg-blue-900 hover:bg-red-700 text-white px-6 py-4 font-semibold text-sm transition-all duration-300">
                          KNOW MORE
                        </button>
                      </a>
                    </div>
                    
                    {/* <div className="flex items-center justify-between text-xs text-gray-300">
                      
                      {item.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                    {item.time && (
                      <div className="flex items-center space-x-1 text-xs text-gray-300 mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.time}</span>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">Previous</button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">1</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsEventsPage;