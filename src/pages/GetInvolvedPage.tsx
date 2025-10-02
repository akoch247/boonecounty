import React from "react";
import { Button } from '../components/ui/button';
import { Users, Flag, Star, ChevronRight, ExternalLink, Shield, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';

export default function GetInvolvedPage() {
    return (
        <div className="space-y-0 relative">
          {/* Subtle Background */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
          </div>
    
          {/* Animated Hero Section */}
          <section className="py-12 bg-gradient-to-r from-red-50 via-white to-blue-50">
            {/* Floating background elements */}
            <motion.div
              className="absolute top-16 left-16 w-24 h-24 bg-red-200/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.4, 1],
                x: [0, 25, 0],
                y: [0, -25, 0]
              }}
              transition={{ duration: 9, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 right-16 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            />
    
            <div className="max-w-6xl mx-auto px-6 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-5xl text-neutral-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Get Involved
                  </motion.h2>
                  
                  <motion.p 
                    className="text-xl text-neutral-600 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Join us in making a difference in our community. We need dedicated volunteers 
                    to help with events, outreach, and supporting conservative candidates.
                  </motion.p>
    
                  <div className="space-y-6 mb-8">
                    {[
                      { icon: Flag, text: "Make a meaningful impact", color: "blue" },
                      { icon: Users, text: "Connect with like-minded women", color: "red" },
                      { icon: Star, text: "Advance conservative values", color: "blue" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-4 py-3 bg-white/60 rounded-lg shadow-sm"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 1,
                      
                          repeatDelay: 0
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.8)" }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          <item.icon className={`h-6 w-6 ${item.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                        </motion.div>
                        <span className="text-neutral-700 text-lg">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Hero CTA Button */}
                  <motion.div 
                    className="bg-gradient-to-r from-red-600 to-blue-600 p-1 rounded-xl inline-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-white p-4 rounded-lg">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden"
                          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf1Q_f0LoCPy2Ag-eNGv8GDwzWw0HsTFvlpfF-VI1KS2ceNKA/viewform', '_blank')}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ 
                              x: ["-100%", "100%"],
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          />
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Start Volunteering
                          <ChevronRight className="h-5 w-5 mr-3" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
    
                <motion.div 
                  className="lg:order-first"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src="/pamela.jpeg"
                        alt="Community volunteers"
                        className="w-full h-90 object-cover rounded-xl shadow-2xl"
                      />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-blue-600/10 rounded-2xl"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
    
                    
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
    
          {/* Enhanced Content Section */}
          <section className="py-16 relative z-10 bg-gradient-to-b from-white/80 to-blue-50/60">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl text-neutral-900 mb-6">Ways to Get Involved</h3>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  Choose how you'd like to contribute to our mission and make a lasting impact in our community.
                </p>
              </motion.div>
    
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-8">
                      <motion.h3 
                        className="text-2xl text-neutral-900 mb-6 flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity
                          }}
                        >
                          <Shield className="h-6 w-6 text-blue-600" />
                        </motion.div>
                        Volunteer Opportunities
                      </motion.h3>
                      
                      <div className="space-y-4">
                        {[
                          "Event planning and coordination",
                          "Voter registration drives", 
                          "Community outreach programs",
                          "Educational workshops",
                          "Campaign support",
                          "Social media and communications"
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            className={`flex items-center gap-4 p-4 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-red-50'} rounded-lg transition-all duration-300`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            whileHover={{ x: 10, scale: 1.02 }}
                          >
                            <motion.div 
                              className={`w-3 h-3 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-red-600'} rounded-full flex-shrink-0`}
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            />
                            <span className="text-neutral-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
    
                <motion.div 
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-8">
                    <motion.h3 
                      className="text-3xl text-neutral-900 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Ready to Make a Difference?
                    </motion.h3>
                    
                    <motion.p 
                      className="text-neutral-600 leading-relaxed mb-10 text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Your involvement helps strengthen our community and advance conservative values. 
                      Every contribution matters, no matter how big or small.
                    </motion.p>
                    
                    {/* Prominent Call-to-Action Box */}
                    <motion.div 
                      className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-xl border-2 border-red-200 shadow-xl mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className="flex items-center justify-center gap-3 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Users className="h-8 w-8 text-red-600" />
                        </motion.div>
                        <h4 className="text-2xl text-neutral-900">Join Our Volunteer Team</h4>
                        <motion.div
                          animate={{ rotate: [0, -360] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <Flag className="h-8 w-8 text-blue-600" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl rounded-xl shadow-2xl transition-all duration-300 animate-pulse relative overflow-hidden"
                          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf1Q_f0LoCPy2Ag-eNGv8GDwzWw0HsTFvlpfF-VI1KS2ceNKA/viewform', '_blank')}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ 
                              x: ["-100%", "100%"],
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          />
                          <ExternalLink className="h-6 w-6 mr-3" />
                          Volunteer Today
                          <Star className="h-6 w-6 ml-3" />
                        </Button>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-center gap-2 mt-4 p-3 bg-white text-sm text-neutral-600 rounded-lg border border-neutral-200 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-neutral-600">
                        Complete our volunteer interest form to get started
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
    
              {/* Volunteer Gallery Section */}
              <motion.div 
                className="mt-20 py-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl text-neutral-900 mb-4 ">Volunteers in Action</h3>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    See our dedicated volunteers making a difference in our community through various service activities and outreach programs.
                  </p>
                </motion.div>
    
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    {
                      image: "/volunteer.jpg",
                      title: "Community Outreach",
                      activity: "Helping Families"
                    },
                    {
                      image: "/volunteer1.jpg",
                      title: "Community Service",
                      activity: "Working Together"
                    },
                    {
                      image: "/volunteer2.jpg",
                      title: "Team Volunteering",
                      activity: "Building Community"
                    },
                    {
                      image: "/volunteer3.jpg",
                      title: "Voter Registration",
                      activity: "Civic Engagement"
                    },
                    {
                      image: "/volunteer4.jpg",
                      title: "Event Planning",
                      activity: "Behind the Scenes"
                    },
                    {
                      image: "/volunteer5.jpg",
                      title: "Educational Outreach",
                      activity: "Teaching Values"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative group cursor-pointer overflow-hidden rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 md:h-56 object-cover"
                        />
                      </motion.div>
                      
                      {/* Animated overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      {/* Content overlay */}
                      <motion.div 
                        className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="font-medium text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-white/80">{item.activity}</p>
                      </motion.div>
    
                      
    
                      
                    </motion.div>
                  ))}
                </div>
              </motion.div>
    
              {/* Facebook Group Section */}
              <motion.div 
                className="text-center mt-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-xl border-4 border-blue-600 inline-block shadow-lg relative overflow-hidden">

                    {/* Animated background elements */}
                   
                    <motion.div
                      className="absolute bottom-4 left-4 w-12 h-12 bg-indigo-100 rounded-full opacity-40"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        x: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity
                      }}
                    />
    
                    <motion.h3 
                      className="text-2xl text-neutral-900 mb-4 flex items-center justify-center gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity
                        }}
                      >
                        <Users className="h-6 w-6 text-blue-600" />
                      </motion.div>
                      Stay Connected Online
                    </motion.h3>
                    
                    <motion.p 
                      className="text-neutral-600 mb-6 max-w-md mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Join our Facebook group to connect with members, share updates, and participate in ongoing discussions about conservative values and community initiatives.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="bg-blue-600 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-xl shadow-xl relative overflow-hidden"
                        onClick={() => window.open('https://www.facebook.com/groups/808957406673035', '_blank')}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{ 
                            x: ["-100%", "100%"],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        />
                        <Users className="h-5 w-5 mr-2" />
                        Join Our Facebook Group
                        <ExternalLink className="h-5 w-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
              </motion.div>
            </div>
          </section>
        </div>
      );
}