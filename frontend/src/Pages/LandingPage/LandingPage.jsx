import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Users,
  Building,
  Shield,
  GraduationCap,
  Briefcase,
  UserCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const signInOptions = [
    {
      id: "student",
      label: "Student",
      icon: <GraduationCap className="w-4 h-4" />,
      description: "Access placement opportunities",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "company",
      label: "Company",
      icon: <Building className="w-4 h-4" />,
      description: "Post jobs and recruit talent",
      color: "from-green-500 to-green-600",
    },
    {
      id: "admin",
      label: "Admin",
      icon: <Shield className="w-4 h-4" />,
      description: "Manage system and users",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const stats = [
    {
      number: "2,500+",
      label: "Students Placed",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "150+",
      label: "Partner Companies",
      icon: <Building className="w-6 h-6" />,
    },
    {
      number: "80%",
      label: "Placement Rate",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      number: "4/5",
      label: "Satisfaction Score",
      icon: <UserCheck className="w-6 h-6" />,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header */}
      <header className="px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              RecruitEasy
            </span>
          </div>

          {/* Sign In Dropdown */}
          <div className="relative flex gap-2">
              
            <motion.button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm 
            border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 
            transition-all duration-300" 
            onClick={()=>{
              navigate("/register");
            }}>
              <span className="font-medium">Register</span>
            </motion.button>
            <motion.button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <span className="font-medium">Sign In</span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>

            {isDropdownOpen && (
              <div className="absolute z-50 right-0 mt-2 w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden"
               style={{ pointerEvents: isDropdownOpen ? "auto" : "none" }}>
                <div className="p-2">
                  {signInOptions.map((option, index) => (
                    <div
                      key={option.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navigating to /signin");
                        navigate(`/signin`);
                      }} //  always goes to /signin
                      className="cursor-pointer w-full flex items-center space-x-3 p-4 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}
                      >
                        {option.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-medium ">
                          {option.label}
                        </div>
                        <div className="text-white/60 text-sm">
                          {option.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              RecruitEasy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
            >
              Connect Companies, Colleges and Students.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="z-000 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  navigate(`/signin`);
                }}
              >
                Get Started
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button> */}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "For Students",
                description:
                  "Access job opportunities, track applications, and prepare for interviews with our comprehensive platform.",
                icon: <GraduationCap className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "For Companies",
                description:
                  "Find qualified candidates, manage recruitment processes, and build your talent pipeline efficiently.",
                icon: <Building className="w-8 h-8" />,
                color: "from-green-500 to-green-600",
              },
              {
                title: "For Administrators",
                description:
                  "Oversee the entire placement process, generate reports, and ensure smooth operations.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-purple-500 to-purple-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-white/60"
          >
            © 2024 RecruitEasy. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
