'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Users, 
  Target, 
  Award, 
  Calendar, 
  MapPin, 
  Leaf, 
  BookOpen, 
  Globe, 
  Heart,
  TreePine,
  Droplets,
  Mountain,
  Facebook, 
  Twitter, 
  Instagram,
  Lightbulb,
  Shield,
  TrendingUp,
} from 'lucide-react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const StoryPage = () => {
  const founderMembers = [
    {
      name: "Weerawardhanalage Sumedha MANJULA",
      position: "President & Founder",
      department: "Department of Philosophy & Psychology, Faculty of Arts, University of Peradeniya",
      role: "The President"
    },
    {
      name: "Amitha Bandara ANDAGALA",
      position: "Secretary & Founder",
      location: "Kehelwala, Kiribathkumbura",
      role: "Secretary"
    },
    {
      name: "Herath Mudiyanselage Punchi Banda HERATH",
      position: "Treasurer & Founder",
      location: "Hanthana Place, Kandy",
      role: "Treasurer"
    }
  ];

  const journeyMilestones = [
    { year: 2012, title: "The Beginning", description: "Founded on November 1st by passionate environmental advocates at University of Peradeniya", icon: Calendar },
    { year: 2014, title: "Expansion", description: "Established presence across all 9 provinces with dedicated coordinators", icon: MapPin },
    { year: 2017, title: "Community Partnership", description: "Partnered with Hantana Conservation Society for local environmental initiatives", icon: Heart },
    { year: 2024, title: "National Impact", description: "1000+ active members driving change with 50+ projects completed nationwide", icon: Globe }
  ];

  const achievements = [
    { label: "Years of Service", value: "12+", icon: Calendar, color: "from-green-400 to-emerald-500" },
    { label: "Provinces Covered", value: "9", icon: MapPin, color: "from-blue-400 to-cyan-500" },
    { label: "Active Members", value: "1000+", icon: Users, color: "from-purple-400 to-pink-500" },
    { label: "Projects Completed", value: "50+", icon: Target, color: "from-orange-400 to-red-500" },
    { label: "District Coordinators", value: "24", icon: Globe, color: "from-teal-400 to-green-500" },
    { label: "Communities Impacted", value: "100+", icon: Heart, color: "from-rose-400 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-black/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Story NEF</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              National Environmental Forum - Sri Lanka has premier environmental protection assembly, working to conserve nature for posterity since 2012.
            </p>
          </div>
        </div>
      </div>

      {/* Journey & Achievements Section */}
      <div className="bg-gradient-to-br from-slate-50 to-green-50">
        {/* Journey Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-5xl font-bold text-green-900 mb-4">Our Journey</h2>
              <h5 className="text-xl text-gray-600">A decade of environmental stewardship</h5>
            </div>

            <div className="relative px-8">
              {/* Horizontal Timeline line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>

              {/* Milestones */}
              <div className="flex gap-8 pb-8">
                {journeyMilestones.map((milestone, index) => {
                

                  return (
                    <div key={milestone.year} className="relative flex-shrink-0 w-70">
                      {/* Center dot */}
                      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                      
                      {/* Content Card */}
                      <div className="mt-32 ">
                        <div className="bg-white rounded-xl shadow-lg p-6 w-[300px] h-[250px] ">
                          <div className="flex items-center mb-3">
                            
                            <span className="text-xl font-bold text-white bg-green-600 border px-4 py-2">{milestone.year}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
{/* <div className="text-center mb-16">             
              <h2 className="text-5xl font-bold text-green-900 mb-4">Impact Dashboard</h2>
              <h5 className="text-xl text-grey-400">Measuring our environmental footprint</h5>
            </div> */}
        {/* Achievements Section */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#3c3c3c]">
          <div className="max-w-7xl mx-auto"> */}
        
            {/* Achievement Cards Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-4xl p-6 text-center"
                  >
                    <h3 className="text-4xl font-bold text-white mb-2">{achievement.value}</h3>
                    <p className="text-green-100 text-lg">{achievement.label}</p>
                  </div>
                );
              })}
            </div> */}

{/*         
          </div>
        </section> */}
      </div>

      {/* Founding Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Founding Members</h2>
            <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF was established on November 1st, 2012, by visionary environmental advocates committed to preserving Sri Lankas natural heritage.
            </h5>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {founderMembers.map((founder, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">{founder.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{founder.position}</p>
                  {founder.department && (
                    <p className="text-sm text-gray-600 mb-2">{founder.department}</p>
                  )}
                  {founder.location && (
                    <p className="text-sm text-gray-600 mb-2">{founder.location}</p>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StoryPage;