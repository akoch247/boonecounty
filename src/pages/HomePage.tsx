import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, Clock, Users, Calendar, Flag, Star, ChevronRight, Award, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function HomePage() {
  const navigate = useNavigate();

  const useAnimatedCounter = (target: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [target, duration]);
    
    return count;
  };

  const [activeTab, setActiveTab] = useState('home');
  const memberCount = useAnimatedCounter(225);
  const yearsCount = useAnimatedCounter(6);
  const eventsCount = useAnimatedCounter(11);

  return (
    <div className="space-y-0 relative">
      {/* Subtle Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
      </div>

      {/* Animated Hero Section */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        <div className="relative bg-gradient-to-br from-blue-50/80 via-white/70 to-red-50/80 py-24">
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-8 right-8 opacity-30"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1533875595808-e224f806d2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZsYWclMjB3YXZpbmd8ZW58MXx8fHwxNzU4ODQxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="American Flag"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </motion.div>


          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div 
              className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              
              <span className="text-lg text-neutral-700">Boone County Republican Women's Club</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl tracking-tight text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Preserving Our<br />
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Constitutional Values
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a grassroots group of conservative women and families dedicated to defending 
              faith, family, and freedom in our community.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => window.open('https://boone-county-republican-womens-club.square.site/', '_blank')}
                  className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-6 text-2xl rounded-xl shadow-2xl transition-all duration-300 animate-pulse relative overflow-hidden"
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
                  <Flag className="h-8 w-8 mr-8" />
                  Join Our Club Today
                  <ChevronRight className="h-8 w-8 ml-8" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/events">
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab('events')}
                    className="border-red-300 text-red-700 hover:bg-red-50 px-8 py-6 rounded-lg"
                  >
                    View Events
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 relative z-10 bg-gradient-to-r from-blue-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
        </div>

        <div className="py-16 max-w-6xl mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white">Making a difference in our community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: memberCount, suffix: "+", label: "Active Members", icon: Users, color: "text-yellow-300" },
              { number: yearsCount, suffix: "+", label: "Years Strong", icon: Award, color: "text-red-300" },
              { number: eventsCount, suffix: "+", label: "Events This Year", icon: Calendar, color: "text-blue-300" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-20 h-20 ${stat.color} mx-auto mb-4 flex items-center justify-center`}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                  }}
                >
                  <stat.icon className="h-12 w-12" />
                </motion.div>
                <motion.div 
                  className="text-5xl text-white mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Core Values */}
      <section className="py-16 mx-16 relative z-10 bg-gradient-to-b from-white/80 to-blue-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-neutral-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The principles that guide our organization and inspire our community engagement.
            </p>
          </motion.div>
          
          {/* Core Values Grid */}
          <div className="mb-16 grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Faith", 
                description: "Honoring our spiritual foundations and defending religious liberty for all Americans",
                src: "/christians.webp",
                color: "blue",
                icon: Heart
              },
              { 
                title: "Family", 
                description: "Strengthening families as the cornerstone of society and protecting our children's future",
                src: "/community.jpg",
                color: "red",
                icon: Users
              },
              { 
                title: "Freedom", 
                description: "Protecting constitutional rights and preserving individual liberties for generations to come",
                src: "/freedom.png",
                color: "gold",
                icon: Flag
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-neutral-200 hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={value.src}
                      alt={value.title}
                      className="w-full h-full object cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      value.color === 'blue' ? 'from-blue-900/60 to-transparent' : 
                      value.color === 'red' ? 'from-red-900/60 to-transparent' : 
                      'from-yellow-900/60 to-transparent'
                    }`}></div>

                    <motion.div 
                      className="flex items-center gap-4 px-6 mt-4"
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          value.color === 'blue' ? 'bg-blue-600' : 
                          value.color === 'red' ? 'bg-red-600' : 'bg-yellow-600'
                        }`}
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <h3 className="text-2xl font-bold text-neutral-900">{value.title}</h3>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-4 left-4 flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          value.color === 'blue' ? 'bg-blue-600' : 
                          value.color === 'red' ? 'bg-red-600' : 'bg-yellow-600'
                        }`}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />
                      <h3 className="text-2xl">{value.title}</h3>
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="">
                    <motion.p 
                      className="text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="text-2xl">
                      {value.title}
                      </div>
                      <div className="text-center p-3">
                      {value.description}
                      </div>
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section Sliding Loop */}
      <section className="py-20 relative z-10 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-neutral-900 mb-6">Our Community in Action</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              See how we're making a difference through our events, meetings, and community engagement.
            </p>
          </motion.div>
          

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-16">
            {[
              {
                src: "/community3.jpg",
                title: "Community Meeting"
              },
              {
                src: "/community4.jpg",
                title: "Constitution Study"
              },
              {
                src: "/community5.jpg",
                title: "Voter Education"
              },
              {
                src: "/party.jpg",
                title: "Community Service"
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
                <div className="w-full aspect-video">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                  </motion.div>
                </div>

                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Featured Section */}
      <section className="mx-5 py-16 relative z-10 bg-gradient-to-r from-red-50/80 via-white/70 to-blue-50/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-neutral-900 mb-6">Building Strong Communities</h2>
              <p className="text-neutral-600 text-xl leading-relaxed mb-8">
                Through grassroots engagement and principled leadership, we work to strengthen our community 
                and uphold the values that make America great.
              </p>
              <div className="space-y-6">
                {[
                  { text: "Constitutional education and awareness", color: "blue" },
                  { text: "Community service and outreach", color: "red" },
                  { text: "Supporting conservative candidates", color: "blue" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/60 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.8)" }}
                  >
                    <motion.div 
                      className={`w-3 h-3 ${item.color === 'blue' ? 'bg-blue-600' : 'bg-red-600'} rounded-full`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <span className="text-neutral-700 text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="lg:order-first"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src="/community2.jpeg"
                    alt="Community Photo"
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-red-600/10 rounded-2xl"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Meeting Information */}
      <section className="py-24 relative z-10 bg-gradient-to-br from-blue-50/80 to-red-50/60 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className=" absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-red-200/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />

        <div className="max-w-4xl mx-auto py-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-blue-200 shadow-2xl bg-white/90 backdrop-blur overflow-hidden">
              <CardContent className="p-3 mt-4">
                <motion.div 
                  className="text-center mt-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-3 mb-6 mt-3">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Flag className="h-8 w-8 text-blue-600" />
                    </motion.div>
                    <h3 className="text-3xl text-neutral-900">Monthly Meetings</h3>
                    <motion.div
                      animate={{ rotate: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      <Flag className="h-8 w-8 text-red-600" />
                    </motion.div>
                  </div>
                  <p className="text-neutral-600 text-xl mb-3 py-3">Join us for our regular gatherings</p>
                </motion.div>

                <div className=" grid md:grid-cols-3 gap-10">
                  {[
                    { icon: Calendar, color: "blue", title: "When", details: ["3rd Wednesday", "January - November"] },
                    { icon: MapPin, color: "red", title: "Where", details: ["Whitestown Municipal Complex", "6210 Veterans Dr, Whitestown, IN"] },
                    { icon: Clock, color: "blue", title: "Time", details: ["Doors open 6:30 PM", "Meeting 7:00 - 8:00 PM"] }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div 
                        className={`bg-gradient-to-br ${
                          item.color === 'blue' ? 'from-blue-50 to-blue-100 border-blue-200' : 'from-red-50 to-red-100 border-red-200'
                        } w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center border shadow-lg`}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <item.icon className={`h-8 w-8 ${item.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                      </motion.div>
                      
                      <motion.h4 
                        className="text-neutral-900 mb-3 text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      >
                        {item.title}
                      </motion.h4>
                      
                      {item.details.map((detail, detailIndex) => (
                        <motion.p 
                          key={detailIndex}
                          className="text-neutral-600"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + detailIndex * 0.1 }}
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => window.open('https://boone-county-republican-womens-club.square.site/', '_blank')}
                      className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-10 py-4 text-lg rounded-xl shadow-xl transition-all duration-300 relative overflow-hidden"
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
                      <Flag className="h-5 w-5 mr-2" />
                      Join Us at Our Next Meeting
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}