'use client'

import React, { useState, useEffect } from 'react'; // Removed 'use' import
import Image from 'next/image'; // Added for image support
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'; 
import { 

  Users, 
  BookOpen, 
  ChevronRight, 
  Globe, 
  Award, 
  Calendar, 
  TreePine,
  Droplets,
  Mountain,
  Bird,
  ArrowRight,
} from 'lucide-react';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated heroSlides to use image paths instead of gradients
  const heroSlides = [
    {
      title: "Conserving Nature for Future Generations",
      subtitle: "Protecting Sri Lanka's Indigenous Environmental Heritage",
      image: "/images/hero-1.jpg", // Replace with actual image paths in public/images/
      
    },
    {
      title: "Community-Based Environmental Solutions",
      subtitle: "Working with Local Communities for Sustainable Development",
      image: "/images/hero-2.jpg",
      
    },
    {
      title: "Indigenous Knowledge & Traditional Practices",
      subtitle: "Preserving Ancient Wisdom for Modern Conservation",
      image: "/images/hero-3.jpg",
      
    }
  ];

  const objectives = [
    {
      icon: TreePine,
      title: "Forest Conservation",
      description: "Protecting Sri Lanka's diverse forest ecosystems and endemic species through community engagement."
    },
    {
      icon: Droplets,
      title: "Water Resource Management",
      description: "Sustainable management of water resources using traditional and modern conservation techniques."
    },
    {
      icon: Mountain,
      title: "Biodiversity Protection",
      description: "Conserving unique flora and fauna while supporting indigenous communities."
    },
    {
      icon: Bird,
      title: "Wildlife Conservation",
      description: "Protecting endangered species through habitat restoration and community education."
    }
  ];

  const programs = [
    {
      title: "Youth Environmental Education",
      description: "Engaging younger generations in environmental conservation and indigenous knowledge preservation.",
      participants: "500+ Youth"
    },
    {
      title: "Community Cooperatives",
      description: "Supporting environmental cooperatives across Sri Lanka's 9 provinces.",
      participants: "50+ Communities"
    },
    {
      title: "Traditional Knowledge Documentation",
      description: "Recording and preserving indigenous environmental practices and wisdom.",
      participants: "200+ Elders"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Get current slide data
  const currentSlideData = heroSlides[currentSlide];


  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Current date and time (dynamic)
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString('en-US', {
    timeZone: 'Asia/Colombo',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[80vh] overflow-hidden">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found';
          }}
          priority={currentSlide === 0} // Eagerly load the first slide
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[80vh]">
          <div className="text-center text-white w-full">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {currentSlideData.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              {currentSlideData.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
                <span>Learn More</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300">
                Join Our Mission
              </button>
            </div>
            {/* Optional: Display current date and time */}
            <p className="text-sm text-white/70 mt-4">Last updated: {formattedDateTime}</p>
          </div>
        </div>
        
        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Auto-advance */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Vision Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Vision</h2>
            <h5 className="text-xl text-green-900">
              Lets conserve the nature for the posterity
            </h5>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg  ">
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Environmental Protection</h3>
              <p className="text-gray-600">
                Promoting sustainable environmental practices across Sri Lankas diverse ecosystems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg ">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Engagement</h3>
              <p className="text-gray-600">
                Working with local communities to implement environment-friendly solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Indigenous Knowledge</h3>
              <p className="text-gray-600">
                Preserving traditional ecological knowledge and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Key Objectives</h2>
            <h5 className="text-xl text-green-900 max-w-3xl mx-auto">
              Our comprehensive approach to environmental conservation focuses on protecting Sri Lankas natural heritage while empowering local communities.
            </h5>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4 group-hover:bg-green-200 transition-colors">
                  <objective.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{objective.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-r from-green-600/80 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <h5 className="text-xl text-green-100 max-w-3xl mx-auto">
              Implementing practical solutions through community-driven environmental initiatives.
            </h5>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-8 w-8 text-green-300" />
                  <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {program.participants}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-green-100 mb-4">{program.description}</p>
                <button className="text-green-300 hover:text-white font-medium flex items-center space-x-1 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indigenous Heritage Highlight */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Sri Lankas Indigenous Heritage</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For centuries, Sri Lankas indigenous communities have maintained a profound connection with nature, 
                developing sophisticated environmental management practices that have sustained both ecosystems and livelihoods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <TreePine className="h-6 w-6 text-blue-900" />
                  </div>
                  <p className="text-gray-700">Traditional forest management systems</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Droplets className="h-6 w-6 text-blue-900" />
                  </div>
                  <p className="text-gray-700">Ancient irrigation and water conservation</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-900" />
                  </div>
                  <p className="text-gray-700">Medicinal plant knowledge and preservation</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-blue-300 p-4 rounded-full w-fit mx-auto mb-6">
                  <Users className="h-16 w-16 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Preserving Wisdom</h3>
                <p className="text-blue-700 leading-relaxed">
                  NEF works directly with indigenous communities to document, preserve, and integrate traditional 
                  ecological knowledge with modern conservation science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Join Our Environmental Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            Become part of Sri Lankas leading environmental forum and help preserve our natural heritage for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Become a Member</span>
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Upcoming Events</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;