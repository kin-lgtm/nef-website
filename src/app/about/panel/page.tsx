'use client'

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const NEFPanelPage = () => {
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
      <div className="bg-gradient-to-r from-green-600 to-black/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">NEF Panel</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Meet the dedicated panel members leading the National Environmental Forum.
            </p>
          </div>
        </div>
      </div>

      {/* Panel Composition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Panel Composition NEF</h2>
            <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF was established on November 1st, 2012, by visionary environmental advocates committed to preserving Sri Lanka&apos;s natural heritage.
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> {/* Single column for chairperson */}
            {/* First Row: Chairperson (centered) */}
            {panelMembers.filter(member => member.role === "Chairperson").map((member, index) => (
              <div key={index} className="mx-auto max-w-xs"> {/* Centered with max width */}
                <div className="">
                  <div className="text-center">
                    <div className="w-full h-100 overflow-hidden rounded-lg mb-4">
                      <Image
                        src={member.image}
                        alt={`${member.name}&apos;s profile`}
                        width={300}
                        height={600} // 1:2 aspect ratio for consistency with core members
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.jpg';
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{member.name}</h3>
                    <p className="text-gray-500 font-medium mb-2">{member.role} - {member.expertise}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.department}</p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                        <Facebook className="h-6 w-6 text-white" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                        <Twitter className="h-6 w-6 text-white" />
                      </a>
                      <a href={member.x} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                        <Instagram className="h-6 w-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second and Third Rows: 8 Core Members (2 rows of 4) */}
          <div className="mt-10 grid md:grid-cols-4 gap-12">
            {panelMembers.filter(member => member.role === "Core Member").slice(0, 8).map((member, index) => (
              <div key={index} className="">
                <div className="text-center">
                  <div className="w-full h-100 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={member.image}
                      alt={`${member.name}&apos;s profile`}
                      width={300}
                      height={600} // 1:2 aspect ratio
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{member.name}</h3>
                  <p className="text-gray-500 font-medium mb-2">{member.expertise}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.department}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Facebook className="h-6 w-6 text-white" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Twitter className="h-6 w-6 text-white" />
                    </a>
                    <a href={member.x} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NEFPanelPage;