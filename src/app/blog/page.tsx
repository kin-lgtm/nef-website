import React from 'react';
import { Layout } from 'lucide-react';
import { 
  Leaf, 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Globe,
  TreePine,
  BookOpen,
  Heart,
  Users
} from 'lucide-react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Preserving Sri Lanka's Ancient Tank Systems: Indigenous Water Management Wisdom",
      excerpt: "Explore how traditional cascade tank systems have sustained Sri Lankan agriculture for over 2,000 years and NEF's efforts to revive this indigenous knowledge in the face of climate change.",
      date: "September 15, 2025",
      author: "Dr. Sumedha Manjula",
      category: "Indigenous Knowledge",
      image: "/images/blog-1.jpg", // Placeholder for image
      readingTime: "8 min read",
      tags: ["Water Conservation", "Traditional Practices", "Climate Resilience"]
    },
    {
      id: 2,
      title: "The Role of Sacred Groves in Biodiversity Conservation",
      excerpt: "Discover how Sri Lanka's sacred forest groves (Devale) protect endangered species and maintain ecological balance, with insights from NEF's community-based preservation projects.",
      date: "August 28, 2025",
      author: "Amitha Bandara Andagala",
      category: "Biodiversity",
      image: "/images/blog-1.jpg",
      readingTime: "6 min read",
      tags: ["Forest Protection", "Cultural Heritage", "Community Action"]
    },
    {
      id: 3,
      title: "Youth Engagement in Environmental Conservation: NEF's Educational Initiatives",
      excerpt: "Learn about NEF's programs aimed at cultivating environmental awareness among Sri Lanka's youth, including school workshops and field studies on indigenous ecological practices.",
      date: "July 10, 2025",
      author: "Herath Mudiyanselage Punchi Banda Herath",
      category: "Education",
      image: "/images/blog-1.jpg",
      readingTime: "7 min read",
      tags: ["Youth Education", "Environmental Habits", "Future Generations"]
    },
    {
      id: 4,
      title: "Alternative Energy Solutions: Promoting Solar and Wind in Rural Sri Lanka",
      excerpt: "NEF's collaborative projects with communities to implement sustainable energy alternatives, reducing reliance on fossil fuels while preserving traditional knowledge.",
      date: "June 5, 2025",
      author: "NEF Research Team",
      category: "Sustainable Energy",
      image: "/images/blog-1.jpg",
      readingTime: "9 min read",
      tags: ["Renewable Energy", "Community Development", "Climate Action"]
    },
    {
      id: 5,
      title: "Alternative Energy Solutions: Promoting Solar and Wind in Rural Sri Lanka",
      excerpt: "NEF's collaborative projects with communities to implement sustainable energy alternatives, reducing reliance on fossil fuels while preserving traditional knowledge.",
      date: "June 5, 2025",
      author: "NEF Research Team",
      category: "Sustainable Energy",
      image: "/images/blog-1.jpg",
      readingTime: "9 min read",
      tags: ["Renewable Energy", "Community Development", "Climate Action"]
    },
    {
      id: 6,
      title: "Alternative Energy Solutions: Promoting Solar and Wind in Rural Sri Lanka",
      excerpt: "NEF's collaborative projects with communities to implement sustainable energy alternatives, reducing reliance on fossil fuels while preserving traditional knowledge.",
      date: "June 5, 2025",
      author: "NEF Research Team",
      category: "Sustainable Energy",
      image: "/images/blog-1.jpg",
      readingTime: "9 min read",
      tags: ["Renewable Energy", "Community Development", "Climate Action"]
    },
    {
      id: 7,
      title: "Alternative Energy Solutions: Promoting Solar and Wind in Rural Sri Lanka",
      excerpt: "NEF's collaborative projects with communities to implement sustainable energy alternatives, reducing reliance on fossil fuels while preserving traditional knowledge.",
      date: "June 5, 2025",
      author: "NEF Research Team",
      category: "Sustainable Energy",
      image: "/images/blog-1.jpg",
      readingTime: "9 min read",
      tags: ["Renewable Energy", "Community Development", "Climate Action"]
    },
    {
      id: 8,
      title: "Alternative Energy Solutions: Promoting Solar and Wind in Rural Sri Lanka",
      excerpt: "NEF's collaborative projects with communities to implement sustainable energy alternatives, reducing reliance on fossil fuels while preserving traditional knowledge.",
      date: "June 5, 2025",
      author: "NEF Research Team",
      category: "Sustainable Energy",
      image: "/images/blog-1.jpg",
      readingTime: "9 min read",
      tags: ["Renewable Energy", "Community Development", "Climate Action"]
    }
  ];

  const categories = [
    { name: "Indigenous Knowledge", icon: BookOpen, count: 12 },
    { name: "Biodiversity Conservation", icon: TreePine, count: 8 },
    { name: "Climate Change", icon: Globe, count: 15 },
    { name: "Youth Education", icon: Users, count: 10 },
    { name: "Sustainable Development", icon: Leaf, count: 7 },
    { name: "Community Action", icon: Heart, count: 9 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">NEF Blog</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Insights, stories, and expert analysis on environmental conservation, indigenous knowledge, and sustainable development in Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Categories */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search blog posts..." 
                  className="w-full py-3 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              {categories.map((cat, index) => (
                <button 
                  key={index} 
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-green-100 transition-colors whitespace-nowrap"
                >
                  <cat.icon className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">Previous</button>
            <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">1</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Blog</h2>
          <p className="text-xl text-green-100 mb-8">
            Stay updated with the latest insights on environmental conservation and indigenous knowledge preservation.      </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full py-4 px-6 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white placeholder:text-green-100"
            />
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
        <Footer />
    </div>
  );
};

export default BlogPage;