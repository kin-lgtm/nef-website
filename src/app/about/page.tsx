import React from 'react';
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
  Bird,
  Lightbulb,
  Shield,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram
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
              National Environmental Forum - Sri Lanka's premier environmental protection assembly, 
              working to conserve nature for posterity since 2012.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <p className="text-2xl font-semibold text-green-700 mb-4">
                  "Let's conserve the nature for the posterity"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our vision represents our commitment to environmental stewardship, ensuring that Sri Lanka's 
                  rich biodiversity and indigenous ecological knowledge are preserved for future generations.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To advise on promotion and development of environmental-based principles, working toward 
                  lasting solutions to environmental problems in Sri Lanka through community participation 
                  and expert guidance as a non-profit organization.
                </p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Target className="h-5 w-5" />
                  <span className="font-medium">Community-Driven Environmental Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Key Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF operates through comprehensive objectives that address environmental conservation, 
              community engagement, and indigenous knowledge preservation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{objective.title}</h3>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Organizational Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF operates through a well-structured governance system ensuring effective environmental action across Sri Lanka.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {organizationalStructure.map((structure, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">{structure.title}</h3>
                <p className="text-gray-700 mb-4">{structure.description}</p>
                <div className="bg-white p-3 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-gray-600">{structure.members}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Membership Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join NEF through various membership categories designed to accommodate different levels of commitment to environmental conservation.
            </p>
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{membership.type}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{membership.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indigenous Knowledge Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-800 mb-6">Preserving Indigenous Heritage</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sri Lanka's indigenous communities have maintained sophisticated environmental knowledge systems 
                for over 2,500 years. NEF recognizes and works to preserve this invaluable heritage.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <TreePine className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-gray-700">Traditional forest conservation practices</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Droplets className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-gray-700">Ancient water management systems (Tank cascade systems)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <BookOpen className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-gray-700">Traditional Ayurvedic medicinal plant knowledge</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Mountain className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-gray-700">Sacred grove conservation (Devrai tradition)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="bg-amber-200 p-4 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-12 w-12 text-amber-800" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Our Commitment</h3>
                <p className="text-amber-700 leading-relaxed mb-6">
                  NEF works directly with village elders, traditional healers, and indigenous communities 
                  to document and preserve their environmental wisdom for future generations.
                </p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-800">200+</p>
                    <p className="text-sm text-amber-700">Elders Interviewed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-800">500+</p>
                    <p className="text-sm text-amber-700">Plants Documented</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-800">50+</p>
                    <p className="text-sm text-amber-700">Practices Recorded</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Founding Members</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF was established on November 1st, 2012, by visionary environmental advocates committed to preserving Sri Lanka's natural heritage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founderMembers.map((founder, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{founder.name}</h3>
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
            Become part of Sri Lanka's premier environmental forum and contribute to preserving our natural heritage and indigenous knowledge.
          </p>
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