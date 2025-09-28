'use client'

import React from 'react';
import Image from 'next/image'; // Added for image support
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

  Lightbulb,
  Shield,

} from 'lucide-react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Layout } from 'lucide-react';

const AboutPage = () => {
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

  const objectives = [
    {
      icon: TreePine,
      title: "Environment Review & Policy",
      description: "Review progress in environmental fields and recommend necessary policies for sustainable development."
    },
    {
      icon: Users,
      title: "Community-Based Solutions",
      description: "Follow community-based actions to solve identified environmental problems in Sri Lanka."
    },
    {
      icon: BookOpen,
      title: "Indigenous Knowledge Conservation",
      description: "Protect indigenous knowledge, technology, and cultural heritage of Sri Lanka."
    },
    {
      icon: Lightbulb,
      title: "Training & Research",
      description: "Identify areas for training, research, and technical assistance in environmental conservation."
    },
    {
      icon: Globe,
      title: "International Cooperation",
      description: "Collaborate with regional and international organizations for environmental development."
    },
    {
      icon: Shield,
      title: "Youth Education",
      description: "Focus on younger generation to cultivate environment-friendly habits among public."
    }
  ];

  const membershipTypes = [
    {
      type: "Honorary Membership",
      description: "Granted to persons dedicating to nature and NEF progress",
      fee: "Free",
      color: "bg-gradient-to-r from-yellow-400 to-amber-500"
    },
    {
      type: "Life Membership",
      description: "All executive committee members become life members",
      fee: "Rs. 2,500",
      color: "bg-gradient-to-r from-green-500 to-emerald-600"
    },
    {
      type: "General Membership",
      description: "Active associate members selected by executive committee",
      fee: "Rs. 500/year",
      color: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    {
      type: "Associate Membership",
      description: "Anyone active towards NEF objectives",
      fee: "Rs. 100/year",
      color: "bg-gradient-to-r from-purple-500 to-pink-600"
    }
  ];

  const organizationalStructure = [
    {
      title: "Board of Trustees",
      description: "Responsible for all movable and non-movable properties of NEF",
      members: "4 founder members + President + Advisory Council Coordinator"
    },
    {
      title: "Executive Committee",
      description: "Main decision-making body with 11 members",
      members: "President, 4 Vice-Presidents, Secretary, Treasurer, Editor, etc."
    },
    {
      title: "Advisory Council",
      description: "External specialized institutions and experts",
      members: "Environmental specialists in 11 different fields"
    },
    {
      title: "Provincial Coordinators",
      description: "Representatives from all 9 provinces of Sri Lanka",
      members: "9 Provincial Coordinators + District Coordinators"
    }
  ];
  const panelMembers = [
  // Top Row: Chairperson
  {
    name: "Mr. Indika Karunarathne",
    role: "Chairperson",
    expertise: "Leadership & Environmental Governance",
    department: "Environmental Policy & Administration",
    image: "/images/team-1.png", // Placeholder; replace with actual image
    facebook: "#",
    linkedin: "#",
    x: "#",
    isChairperson: true, // Flag for layout
  },
  // Bottom Row: Core Members (only 4 as specified; others can be added)
  {
    name: "Dr. Ruchira Somaweera",
    role: "Core Member",
    expertise: "Strategic Conservation & Ecology",
    department: "Zoology / Botany",
    image: "/images/team-1.png",
    facebook: "https://facebook.com/ruchira.somaweera",
    linkedin: "https://linkedin.com/in/ruchira-somaweera",
    x: "https://x.com/ruchirasomaweera",
  },
  {
    name: "Prof. Gamini Pushpakumara",
    role: "Core Member",
    expertise: "Forest Ecology & Habitat Restoration",
    department: "Crop Science / Botany",
    image: "/images/team-1.png",
    facebook: "#",
    linkedin: "https://linkedin.com/in/gamini-pushpakumara",
    x: "#",
  },
  {
    name: "Prof. Induka Werellagama",
    role: "Core Member",
    expertise: "Environmental Engineering & Waste Management",
    department: "Civil Engineering / Water Engineering",
    image: "/images/team-1.png",
    facebook: "#",
    linkedin: "https://linkedin.com/in/induka-werellagama",
    x: "#",
  },
  {
    name: "Dr. Sumedha Weerawardena",
    role: "Core Member",
    expertise: "Community Engagement & Sociology",
    department: "Sociology / Environmental Studies",
    image: "/images/team-1.png",
    facebook: "#",
    linkedin: "#",
    x: "#",
  },
  // Bottom Row: Core Members (only 4 as specified; others can be added)
  {
    name: "Dr. Ruchira Somaweera",
    role: "Core Member",
    expertise: "Strategic Conservation & Ecology",
    department: "Zoology / Botany",
    image: "/images/team-1.png",
    facebook: "https://facebook.com/ruchira.somaweera",
    linkedin: "https://linkedin.com/in/ruchira-somaweera",
    x: "https://x.com/ruchirasomaweera",
  },
  {
    name: "Prof. Gamini Pushpakumara",
    role: "Core Member",
    expertise: "Forest Ecology & Habitat Restoration",
    department: "Crop Science / Botany",
    image: "/images/team-1.png",
    facebook: "#",
    linkedin: "https://linkedin.com/in/gamini-pushpakumara",
    x: "#",
  },
  {
    name: "Prof. Induka Werellagama",
    role: "Core Member",
    expertise: "Environmental Engineering & Waste Management",
    department: "Civil Engineering / Water Engineering",
    image: "/images/team-1.png",
    facebook: "#",
    linkedin: "https://linkedin.com/in/induka-werellagama",
    x: "#",
  },
  {
    name: "Dr. Sumedha Weerawardena",
    role: "Core Member",
    expertise: "Community Engagement & Sociology",
    department: "Sociology / Environmental Studies",
    image: "/images/team-1.png",
    facebook: "#",
    linkedin: "#",
    x: "#",
  },
  // Add more core members if needed (e.g., for Biodiversity & Wildlife Management)
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
                <Leaf className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About NEF</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              National Environmental Forum - Sri Lanka has premier environmental protection assembly, working to conserve nature for posterity since 2012.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Vision</h2>
              <div className="bg-green-100 p-6 rounded-xl ">
                <p className="text-2xl font-semibold text-green-700 mb-4">
                  Lets conserve the nature for the posterity
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our vision represents our commitment to environmental stewardship, ensuring that Sri Lankas rich biodiversity and indigenous ecological knowledge are preserved for future generations.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <div className="bg-blue-100 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To advise on promotion and development of environmental-based principles, working toward 
                  lasting solutions to environmental problems in Sri Lanka through community participation 
                  and expert guidance as a non-profit organization.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Key Objectives</h2>
            <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF operates through comprehensive objectives that address environmental conservation, 
              community engagement, and indigenous knowledge preservation.
            </h5>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Organizational Structure</h2>
            <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF operates through a well-structured governance system ensuring effective environmental action across Sri Lanka.
            </h5>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {organizationalStructure.map((structure, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">{structure.title}</h3>
                <p className="text-gray-700 mb-4">{structure.description}</p>
                <div className="bg-green-200 p-3 rounded-lg ">
                  <p className="text-sm font-medium text-gray-600">{structure.members}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Membership Categories</h2>
            <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join NEF through various membership categories designed to accommodate different levels of commitment to environmental conservation.
            </h5>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTypes.map((membership, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`${membership.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <Users className="h-8 w-8" />
                    <span className="text-2xl font-bold">{membership.fee}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">{membership.type}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{membership.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-green-800 mb-4">Panel Composition NEF</h2>
      <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
        NEF was established on November 1st, 2012, by visionary environmental advocates committed to preserving Sri Lanka&apos;s natural heritage.
      </h5>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Top Row: Chairperson (full width on mobile, spans all on desktop) */}
      {panelMembers.filter(member => member.isChairperson).map((member, index) => (
        <div key={index} className="md:col-span-3"> {/* Full width */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="text-center">
              <div className="w-60 h-80 overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name}&apos;s profile`}
                  width={400} // Wider for chairperson
                  height={600} // 16:10 aspect ratio for rectangle
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.jpg';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{member.name}</h3>
              <p className="text-green-600 font-medium mb-2">{member.role} - {member.expertise}</p>
              <p className="text-sm text-gray-600 mb-4">{member.department}</p>
              <div className="flex justify-center space-x-6 mt-4"> {/* Larger spacing for chairperson */}
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM20 19h-3v-5.634c0-1.032-.02-2.358-1.438-2.358-1.438 0-1.658 1.122-1.658 2.28V19h-3V8h3v1.367c.472-.895 1.313-1.368 2.529-1.368 2.766 0 3.279 1.821 3.279 4.19V19z" />
                  </svg>
                </a>
                <a href={member.x} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Row: 4 Core Members */}
      <div className="grid md:grid-cols-4 gap-8 md:col-span-3"> {/* 4 columns on desktop */}
        {panelMembers.filter(member => member.role === "Core Member").slice(0, 4).map((member, index) => (
          <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="text-center">
              <div className="w-full h-80 overflow-hidden rounded-lg mb-4"> {/* Slightly shorter for core members */}
                <Image
                  src={member.image}
                  alt={`${member.name}&apos;s profile`}
                  width={300}
                  height={600} // 3:2 aspect ratio
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.jpg';
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">{member.name}</h3>
              <p className="text-green-600 font-medium mb-2">{member.expertise}</p>
              <p className="text-sm text-gray-600 mb-4">{member.department}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM20 19h-3v-5.634c0-1.032-.02-2.358-1.438-2.358-1.438 0-1.658 1.122-1.658 2.28V19h-3V8h3v1.367c.472-.895 1.313-1.368 2.529-1.368 2.766 0 3.279 1.821 3.279 4.19V19z" />
                  </svg>
                </a>
                <a href={member.x} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Indigenous Knowledge Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Preserving Indigenous Heritage</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sri Lankas indigenous communities have maintained sophisticated environmental knowledge systems for over 2,500 years. NEF recognizes and works to preserve this invaluable heritage.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <TreePine className="h-6 w-6 text-blue-900" />
                  </div>
                  <p className="text-gray-700">Traditional forest conservation practices</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Droplets className="h-6 w-6 text-blue-900" />
                  </div>
                  <p className="text-gray-700">Ancient water management systems (Tank cascade systems)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-900" />
                  </div>
                  <p className="text-gray-700">Traditional Ayurvedic medicinal plant knowledge</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Mountain className="h-6 w-6 text-blue-900" />
                  </div>
                  <p className="text-gray-700">Sacred grove conservation (Devrai tradition)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="bg-blue-200 p-4 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-12 w-12 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Commitment</h3>
                <p className="text-blue-700 leading-relaxed mb-6">
                  NEF works directly with village elders, traditional healers, and indigenous communities
                  to document and preserve their environmental wisdom for future generations.
                </p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-800">200+</p>
                    <p className="text-sm text-blue-700">Elders Interviewed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-800">500+</p>
                    <p className="text-sm text-blue-700">Plants Documented</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-800">50+</p>
                    <p className="text-sm text-blue-700">Practices Recorded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Founding Members</h2>
            <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF was established on November 1st, 2012, by visionary environmental advocates committed to preserving Sri Lankas natural heritage.</h5>
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
                  <div className="bg-white p-2 rounded-lg mt-4">
                    <span className="text-xs font-medium text-green-700">{founder.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Establishment */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Established 2012</h3>
                    <p className="text-green-100">Founded on November 1st by dedicated environmental advocates</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Peradeniya Headquarters</h3>
                    <p className="text-green-100">National Center located at University of Peradeniya, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Heart className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Community Focus</h3>
                    <p className="text-green-100">Supporting Hantana Conservation Society and local environmental initiatives</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Globe className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">National Coverage</h3>
                    <p className="text-green-100">Operating across all 9 provinces with 24 district coordinators</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-300">12+</p>
                  <p className="text-sm text-green-100">Years of Service</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-300">9</p>
                  <p className="text-sm text-green-100">Provinces Covered</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-300">1000+</p>
                  <p className="text-sm text-green-100">Active Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-300">50+</p>
                  <p className="text-sm text-green-100">Projects Completed</p>
                </div>
              </div>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-300" />
                  <span>Non-profit environmental organization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-green-300" />
                  <span>Preserving indigenous environmental knowledge</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-300" />
                  <span>Community-based environmental solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Join Our Environmental Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            Become part of Sri Lankas premier environmental forum and contribute to preserving our natural heritage and indigenous knowledge.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
              <Users className="h-5 w-5" />
              <span>Become a Member</span>
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Learn More About Our Work</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default AboutPage;