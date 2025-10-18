import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Star, Shield, Badge } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
    const members = [
        { name: 'Valerie Swack', title: 'President', image: "val.png"},
        { name: 'Anna Schappaugh', title: 'Vice President', image: "anna.png" },
        { name: 'Sandy Jasionowski', title: 'Treasurer', image: "/sandra.png"},
        { name: 'Diana Freeman', title: 'Secretary', image: "/diane.png"},
        { name: 'Jenny Beyer', title: 'Parliamentarian', image: "/jenny.png"},
        { name: 'Yvonne Koch', title: 'Legislative Committee', image: "/yvonne.jpeg"},
        { name: 'Sam Anders', title: 'Marketing Committee', image: "/sam.png"},
        { name: 'Cheryl Hancock', title: 'Membership Committee', image: "/cheryl.jpg"},
        { name: 'Regina Sharrow', title: 'Events', image: "/regina.jpeg"},
        { name: 'Anna Schappaugh', title: 'Campaign Activities', image: "/anna.png"},
        { name: 'Emily Myers', title: 'Correseponding Secretary', image: "/emily1.jpg"},
      ];
    return (
        <div className="space-y-0 relative">
          {/* Subtle Background */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
          </div>
    
          {/* Animated Hero Section */}
          <section className="py-20 relative z-10 bg-gradient-to-r from-blue-50/80 via-white/70 to-red-50/80 overflow-hidden">
            {/* Floating elements */}
            <motion.div
              className="absolute top-10 right-10 w-24 h-24 bg-blue-200/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-32 h-32 bg-red-200/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 15, 0],
                y: [0, -15, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
    
            <div className="max-w-6xl mx-auto px-6">
              <div className="py-16 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src="/leadership.jpeg"
                      alt="Boone County Women's Club Leadership Event"
                      className=" mt-4 w-full h-96 object-cover rounded-xl shadow-xl"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-red-600/10 rounded-2xl"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                </motion.div>
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
                    Leadership Team
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-neutral-600 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Dedicated women leading with integrity, passion, and unwavering commitment to conservative values.
                  </motion.p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Shield, text: "Experienced community leaders", color: "blue" },
                      { icon: Star, text: "Committed to conservative principles", color: "red" },
                      { icon: Users, text: "Serving our community with dedication", color: "blue" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/60 rounded-lg shadow-sm will-change-transform"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4}}
                        viewport={{ once: true }}
                        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.8)" }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          <item.icon className={` h-6 w-6  ${item.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                        </motion.div>
                        <span className=" mb-3 mt-4 text-neutral-700 text-lg">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
    
          {/* Team Section Header */}
          <section className="py-16 relative z-10 bg-gradient-to-b from-white/80 to-blue-50/60">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl text-neutral-900 mb-6">Meet Our Team</h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  Passionate leaders working together to preserve our constitutional values and strengthen our community.
                </p>
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {members.map((member, index) => {
                  // Cycle through our professional images
                  const fallbackImages = [
                    "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc1OTE0Njg2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MTAwMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    "https://images.unsplash.com/photo-1758691737587-7630b4d31d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlcnxlbnwxfHx8fDE3NTkxNTQ5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5MTU1MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    "https://images.unsplash.com/photo-1758691737605-69a0e78bd193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwbGVhZGVyJTIwY29ycG9yYXRlJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU5MTU1MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  ];
                  const image = member.image || fallbackImages[index % fallbackImages.length];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <Card className="border-neutral-200 hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full">
                        <div className="relative overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={member.name}
                              className="w-full aspect-video object-cover"
                            />
                          </motion.div>
                          
                          {/* Animated overlay */}
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-t ${index % 2 === 0 ? 'from-blue-900/30 to-transparent' : 'from-red-900/30 to-transparent'}`}
                            initial={{ opacity: 0.3 }}
                            whileHover={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Floating badge */}
                          <motion.div
                            className="absolute top-4 right-4"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                            animate={{ 
                              rotate: [0, 5, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 4,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                          >
                            <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-red-500'} shadow-lg`}></div>
                          </motion.div>
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="text-center">
                            <motion.h3 
                              className="text-lg text-neutral-900 mb-2"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                            >
                              {member.name}
                            </motion.h3>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                            >
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
                                ${index % 2 === 0 
                                  ? 'bg-blue-100 text-blue-700' 
                                  : 'bg-red-100 text-red-700'}`}
                              >
                                {member.title}
                              </span>
                            </motion.div>
                            
                            <motion.p 
                              className="text-sm text-neutral-500"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                            >
                            </motion.p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      );
}