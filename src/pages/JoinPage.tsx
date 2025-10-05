import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Award, Calendar, ChevronRight, ExternalLink, Flag, Heart, Shield, Star, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export default function JoinPage() {
  return (
    <div className="space-y-0 relative">
      {/* Subtle Background */}
      <div className="fixed inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
      </div>

      {/* Animated Hero Section */}
      <section className="py-16 relative z-10 bg-gradient-to-br from-blue-50/80 via-white/70 to-red-50/80 overflow-hidden">
        {/* Floating background elements */}
       
        <motion.div
          className="absolute bottom-20 right-20 w-36 h-36 bg-red-200/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 3 }}
        />

        

        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Flag className="h-8 w-8 text-blue-600" />
              </motion.div>
              <h2 className="text-5xl text-neutral-900">Join Our Club</h2>
              <motion.div
                animate={{ rotate: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <Flag className="h-8 w-8 text-red-600" />
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Become a member of the Boone County Republican Women's Club and join a community of 
              like-minded women dedicated to conservative values and community engagement.
            </motion.p>
            
            {/* Prominent Join Button */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-xl shadow-2xl mb-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white p-8 rounded-xl">
                <motion.div 
                  className="flex items-center justify-center gap-3 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Star className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <motion.span 
                    className="text-3xl text-neutral-900"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Only $55/year
                  </motion.span>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    <Star className="h-8 w-8 text-red-600" />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-16 py-8 text-2xl rounded-xl shadow-2xl transition-all duration-300 animate-pulse relative overflow-hidden"
                    onClick={() => window.open('https://boone-county-republican-womens-club.square.site/', '_blank')}
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
                    <ExternalLink className="h-8 w-8 mr-4" />
                    Join Now - Get Started
                    <ChevronRight className="h-8 w-8 ml-4" />
                  </Button>
                </motion.div>

                <motion.p 
                  className="text-sm text-neutral-600 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Includes local, state, and national federation memberships
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Content Section with Better Balance */}
      <section className="py-16 relative z-10 bg-gradient-to-b from-white/80 to-red-50/60">
        <div className="max-w-6xl mx-auto px-1">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl text-neutral-900 mb-6">Membership Benefits & Community</h3>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Join our community and enjoy exclusive benefits while connecting with like-minded conservative women.
            </p>
          </motion.div>

          {/* Main Benefits Section - Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="border-blue-200 shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Benefits List */}
                  <div>
                    <motion.h3 
                      className="text-2xl text-neutral-900 mb-8 mt-4 flex items-center gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity
                        }}
                      >
                        <Shield className="h-6 w-6 text-blue-600" />
                      </motion.div>
                      Membership Benefits
                    </motion.h3>
                    
                    <div className="space-y-4">
                      {[
                        { text: "Monthly educational speakers", icon: Users },
                        { text: "Networking opportunities", icon: Users },
                        { text: "Political candidate forums", icon: Flag },
                        { text: "Leadership development", icon: Star },
                        { text: "Community service projects", icon: Heart },
                        { text: "Access to exclusive events", icon: Calendar }
                      ].map((benefit, index) => (
                        <motion.div 
                          key={index}
                          className={`flex items-center gap-4 p-6 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-red-50'} rounded-lg transition-all duration-300`}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <motion.div
                            className={`w-10 h-10  rounded-full flex items-center justify-center`}
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, 0]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                          >
                            <benefit.icon className={`h-5 w-5 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'}`} />
                          </motion.div>
                          <span className="text-neutral-700 text-lg">{benefit.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Join Action & Details */}
                  <div className="flex flex-col justify-center">
                    <motion.div
                      className="bg-gradient-to-br from-blue-600 to-red-600  p-2 rounded-xl shadow-xl mb-8"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="bg-white p-8 rounded-xl text-center relative overflow-hidden">
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 opacity-5"
                          animate={{ 
                            backgroundPosition: ["0% 0%", "100% 100%"],
                            backgroundSize: ["100% 100%", "120% 120%"]
                          }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.1'%3E%3Cpath d='M30 6l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z'/%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        />
                        
                        <motion.div
                          className="relative z-10"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Flag className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                        </motion.div>
                        
                        <h3 className="text-3xl text-neutral-900 mb-2">Join Today!</h3>
                        <motion.div 
                          className="text-5xl text-red-600 mb-2"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          $55
                        </motion.div>
                        <p className="text-neutral-600 mb-6">Annual membership includes local, state, and national federation access</p>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            className="bg-gradient-to-r from-blue-600 to-red-600  hover:from-red-700 hover:to-blue-700 text-white w-full py-4 text-lg rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden"
                            onClick={() => window.open('https://boone-county-republican-womens-club.square.site/', '_blank')}
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
                                repeatDelay: 4
                              }}
                            />
                            <ExternalLink className="h-5 w-5 mr-2" />
                            Join Right Now
                            <Star className="h-5 w-5 ml-2" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* What's Included Details */}
                    <motion.div
                      className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-xl border border-neutral-200 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <h4 className="text-lg text-neutral-900 mb-4 flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Award className="h-5 w-5 text-blue-600" />
                        </motion.div>
                        Your Membership Includes
                      </h4>
                      
                      <div className="space-y-3">
                        {[
                          "Local club membership with voting rights",
                          "Indiana Federation of Republican Women access",
                          "National Federation of Republican Women benefits",
                          "Monthly newsletter and updates",
                          "Exclusive member-only events",
                          "Leadership training opportunities"
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-blue-600 rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            />
                            <span className="text-sm text-neutral-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Member Testimonials Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl text-neutral-900 mb-4">What Our Members Say</h3>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Hear from our active members about their experience in the club and the impact it's had on their lives.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah M.",
                  role: "Member since 2022",
                  quote: "Joining BCRWC has been transformative. The networking opportunities and educational speakers have helped me grow both personally and professionally.",
                  color: "blue"
                },
                {
                  name: "Jennifer L.",
                  role: "Member since 2021",
                  quote: "I love the sense of community here. We support each other while working toward our shared conservative values and making a real difference.",
                  color: "red"
                },
                {
                  name: "Patricia K.",
                  role: "Member since 2023",
                  quote: "The leadership development opportunities are incredible. I've gained confidence and skills that I use in all areas of my life.",
                  color: "blue"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`w-10 h-10 ${testimonial.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'} rounded-full flex items-center justify-center`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <Users className={`h-5 w-5 ${testimonial.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                    </motion.div>
                    <div>
                      <h4 className="text-lg text-neutral-900">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-neutral-700 italic leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Membership Gallery Section */}
          <motion.div 
            className="mt-20"
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
              <h3 className="text-3xl text-neutral-900 mb-4">Our Community in Action</h3>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                See what membership means - building friendships, growing together, and making a real impact in our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  image: "members4.jpg",
                  title: "Monthly Meetings",
                  activity: "Learning & Growing"
                },
                {
                  image: "members1.jpg",
                  title: "Monthly Meetings",
                  activity: "Learning & Growing"
                },
                {
                  image: "members2.jpg",
                  title: "Monthly Meetings",
                  activity: "Learning & Growing"
                },
                {
                  image: "members7.jpg",
                  title: "Monthly Meetings",
                  activity: "Learning & Growing"
                },
                {
                  image: "members5.jpg",
                  title: "Monthly Meetings",
                  activity: "Learning & Growing"
                },
                {
                  image: "members.jpg",
                  title: "Monthly Meetings",
                  activity: "Learning & Growing"
                },
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

                  {/* Floating membership indicator */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 15, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                  </motion.div>

                  {/* Animated corner accent */}
                  <motion.div
                    className={`absolute top-0 left-0 w-12 h-12 ${index % 2 === 0 ? 'bg-blue-500/20' : 'bg-red-500/20'} rounded-br-full opacity-60`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
              className="text-center mt-24 "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-xl inline-block">
                <div className="bg-white p-8 rounded-xl relative overflow-hidden">
                 
                  

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
                      <Flag className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    Your Journey Starts Here!
                  </motion.h3>
                  
                  <motion.p 
                    className="text-neutral-600 mb-6 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Join a community of passionate women making a difference. Your voice matters, and we can't wait to welcome you!
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl relative overflow-hidden"
                      onClick={() => window.open('https://boone-county-republican-womens-club.square.site/', '_blank')}
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
                      <Star className="h-5 w-5 mr-2" />
                      Become a Member Today
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}