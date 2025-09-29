'use client'

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

// Define the interface for a news/event item
interface NewsEvent {
  title: string;
  image: string;
  description: string;
  additionalImages: string[];
  secondDescription: string;
  date: string;
  time?: string;
  location?: string;
  category: string;
  type: string;
  tags: string[];
}

// Define the newsEventDetails object with an index signature
const newsEventDetails: { [key: string]: NewsEvent } = {
  '1': {
    title: 'Annual Environmental Summit 2025: Protecting Sri Lanka\'s Biodiversity',
    image: '/images/news-1.jpg',
    description: 'Join us for our flagship event bringing together environmental leaders, researchers, and community activists to discuss conservation strategies. The summit will feature keynote speeches, panel discussions, and workshops focusing on biodiversity protection, climate adaptation, and sustainable development practices across Sri Lanka.',
    additionalImages: [
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
    ],
    secondDescription: 'This year\'s summit brings together over 200 participants including environmental scientists, policy makers, indigenous community leaders, and youth activists. The event will showcase successful conservation projects, facilitate networking opportunities, and develop actionable strategies for protecting Sri Lanka\'s unique ecosystems.',
    date: 'October 15, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Colombo Convention Centre',
    category: 'Event',
    type: 'Conference',
    tags: ['biodiversity', 'conservation', 'summit', 'networking', 'policy', 'climate action'],
  },
  '2': {
    title: 'NEF Receives National Award for Indigenous Knowledge Preservation',
    image: '/images/news-1.jpg',
    description: 'The National Environmental Forum has been honored with the prestigious National Heritage Award for our groundbreaking work in documenting and reviving traditional ecological practices across rural Sri Lanka. This recognition highlights our commitment to bridging indigenous wisdom with modern conservation approaches.',
    additionalImages: [
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
    ],
    secondDescription: 'Over the past three years, NEF has worked with over 50 rural communities to document traditional farming techniques, water management systems, and sustainable harvesting practices. This award validates our approach of empowering local communities as guardians of both ecological and cultural heritage.',
    date: 'September 20, 2025',
    category: 'News',
    type: 'Achievement',
    tags: ['award', 'indigenous knowledge', 'heritage', 'recognition'],
  },
  '3': {
    title: 'Community Workshop: Traditional Water Management Systems',
    image: '/images/news-1.jpg',
    description: 'Hands-on workshop exploring ancient tank cascade systems and their relevance to modern climate adaptation strategies. Participants will visit historical irrigation sites and learn from community elders about sustainable water management practices that have sustained agriculture for centuries.',
    additionalImages: [
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
    ],
    secondDescription: 'The workshop includes field visits to functioning cascade tank systems, interactive sessions with traditional water engineers, and discussions on integrating these time-tested methods with contemporary water conservation technologies. Limited spaces available for this immersive learning experience.',
    date: 'November 5, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Anuradhapura District',
    category: 'Event',
    type: 'Workshop',
    tags: ['water management', 'traditional knowledge', 'workshop', 'climate adaptation'],
  },
  '4': {
    title: 'New Partnership with Universities for Environmental Research',
    image: '/images/news-1.jpg',
    description: 'NEF collaborates with leading academic institutions to establish research programs focused on indigenous ecological knowledge. This partnership will facilitate student internships, joint research projects, and knowledge exchange between traditional practitioners and academic researchers.',
    additionalImages: [
      '/images/news-1.jpg',
      '/images/news-1.jpg',
    ],
    secondDescription: 'The partnership includes three major universities and will focus on documenting traditional ecological knowledge, developing sustainable agricultural practices, and training the next generation of environmental leaders who understand both scientific and indigenous approaches to conservation.',
    date: 'September 10, 2025',
    category: 'News',
    type: 'Partnership',
    tags: ['education', 'research', 'partnership', 'universities', 'youth'],
  },
  '5': {
    title: 'Community Workshop: Traditional Water Management Systems',
    image: '/images/news-1.jpg',
    description: 'Hands-on workshop exploring ancient tank cascade systems and their relevance to modern climate adaptation strategies. Participants will visit historical irrigation sites and learn from community elders about sustainable water management practices that have sustained agriculture for centuries.',
    additionalImages: [
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
    ],
    secondDescription: 'The workshop includes field visits to functioning cascade tank systems, interactive sessions with traditional water engineers, and discussions on integrating these time-tested methods with contemporary water conservation technologies. Limited spaces available for this immersive learning experience.',
    date: 'November 5, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Anuradhapura District',
    category: 'Event',
    type: 'Workshop',
    tags: ['water management', 'traditional knowledge', 'workshop', 'climate adaptation'],
  },
  '6': {
    title: 'Community Workshop: Traditional Water Management Systems',
    image: '/images/news-1.jpg',
    description: 'Hands-on workshop exploring ancient tank cascade systems and their relevance to modern climate adaptation strategies. Participants will visit historical irrigation sites and learn from community elders about sustainable water management practices that have sustained agriculture for centuries.',
    additionalImages: [
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
    ],
    secondDescription: 'The workshop includes field visits to functioning cascade tank systems, interactive sessions with traditional water engineers, and discussions on integrating these time-tested methods with contemporary water conservation technologies. Limited spaces available for this immersive learning experience.',
    date: 'November 5, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Anuradhapura District',
    category: 'Event',
    type: 'Workshop',
    tags: ['water management', 'traditional knowledge', 'workshop', 'climate adaptation'],
  },
  '7': {
    title: 'Community Workshop: Traditional Water Management Systems',
    image: '/images/news-1.jpg',
    description: 'Hands-on workshop exploring ancient tank cascade systems and their relevance to modern climate adaptation strategies. Participants will visit historical irrigation sites and learn from community elders about sustainable water management practices that have sustained agriculture for centuries.',
    additionalImages: [
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
    ],
    secondDescription: 'The workshop includes field visits to functioning cascade tank systems, interactive sessions with traditional water engineers, and discussions on integrating these time-tested methods with contemporary water conservation technologies. Limited spaces available for this immersive learning experience.',
    date: 'November 5, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Anuradhapura District',
    category: 'Event',
    type: 'Workshop',
    tags: ['water management', 'traditional knowledge', 'workshop', 'climate adaptation'],
  },
  '8': {
    title: 'Community Workshop: Traditional Water Management Systems',
    image: '/images/news-1.jpg',
    description: 'Hands-on workshop exploring ancient tank cascade systems and their relevance to modern climate adaptation strategies. Participants will visit historical irrigation sites and learn from community elders about sustainable water management practices that have sustained agriculture for centuries.',
    additionalImages: [
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
      '/images/news-1.jpg',
    ],
    secondDescription: 'The workshop includes field visits to functioning cascade tank systems, interactive sessions with traditional water engineers, and discussions on integrating these time-tested methods with contemporary water conservation technologies. Limited spaces available for this immersive learning experience.',
    date: 'November 5, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Anuradhapura District',
    category: 'Event',
    type: 'Workshop',
    tags: ['water management', 'traditional knowledge', 'workshop', 'climate adaptation'],
  },
  // Add more news/event details as needed
};

export default function NewsEventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params Promise using React.use()
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const item = newsEventDetails[id];

  if (!item) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">News/Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Back Button */}
      <section className="py-8 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news-events" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to News & Events
          </Link>  
        </div>
      </section>

      {/* Three-Column Content */}
      <section className="bg-gray-50 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content (Spans first 2 columns) */}
            <div className="col-span-2 space-y-8">
              <h1 className="text-4xl font-bold text-gray-800">{item.title}</h1>
              
              {/* Initial Image */}
              <div className="w-full h-96 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={384}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.jpg';
                  }}
                />
              </div>

              {/* First Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>

              {/* Additional Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.additionalImages.slice(0, 5).map((img, idx) => (
                  <div key={idx} className="w-full h-48 overflow-hidden rounded-lg">
                    <Image
                      src={img}
                      alt={`${item.title} - Image ${idx + 1}`}
                      width={300}
                      height={192}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Second Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.secondDescription}
              </p>
            </div>

            {/* Details Sidebar (Third column) */}
            <div className="space-y-6">
              <div className="bg-white p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Details</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <div>
                      <strong className="block text-sm">Date</strong>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  
                  {item.time && (
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <strong className="block text-sm">Time</strong>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  )}
                  
                  {item.location && (
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <strong className="block text-sm">Location</strong>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* <div className="pt-2 ">
                    <p><strong className="text-sm">Category:</strong> {item.category}</p>
                    <p><strong className="text-sm">Type:</strong> {item.type}</p>
                  </div> */}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-s px-3 py-1 bg-blue-900 text-white ">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {item.category === 'Event' && (
                <div className="bg-blue-900 p-6 shadow-md text-white">
                  <h3 className="text-xl font-semibold mb-3">Register Now</h3>
                  <p className="text-sm mb-4">Secure your spot for this event</p>
                  <button className="w-full bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}