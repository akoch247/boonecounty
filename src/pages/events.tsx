import React from "react";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { Badge, Calendar, ChevronRight, Clock, ExternalLink, Mail, MapPin, Star, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';

export default function EventsPage() {
    const eventImages = [
        {
          url: "",
          duration: "3.5 hours",
          address: "Boone County",
          time: "6:00-9:30",
          src: "/charlie.jpg",
          title: "Charlie Kirk Vigil",
          date: "October 21st, 2025",
          description: "Candlelight vigil honoring the life of Charlie Kirk",
          attendees: "2500"
        },
        {
          url: "",
          duration: "3 hours",
          address: "Boone County",
          time: "6:00-9:00",
          src: "/monthly.jpg",
          title: "Monthly Meeting",
          date: "October 2024",
          description: "Guest speaker on constitutional rights",
          attendees: "75"
        },
        {
          url: "",
          duration: "3 hours",
          address: "Boone County",
          time: "6:00-9:00",
          src: "/barbecue.jpeg",
          title: "Community BBQ",
          date: "September 2024",
          description: "Annual fundraising event",
          attendees: "75"
        },
        {
          url: "",
          duration: "3 hours",
          address: "Boone County",
          time: "6:00-9:00",
          src: "/beckyrally.jpg",
          title: "Rally for Freedom",
          date: "August 2024",
          description: "Supporting conservative candidates",
          attendees: "500"
        },
        {
          url: "",
          duration: "3 hours",
          address: "Boone County",
          time: "6:00-9:00",
          src: "/becky.jpg",
          title: "Leadership Workshop",
          date: "July 2024",
          description: "Empowering conservative women leaders",
          attendees: "100"
        }
    ];

    const upcomingEvents = [
        {
            url: "",
            duration: "3 hours",
            address: "Boone County",
            time: "6:00-9:00",
            src: "/stateofthetown.jpg",
            title: "State of The Town",
            date: "October 29st, 2025",
            description: "The 2025 State of the Town event, presented by the Zionsville Chamber of Commerce in partnership with the Town of Zionsville, offers a unique opportunity to learn about the town's vision, progress, and future priorities.",
            registration: "Required",
            featured: "false"
        },
        {
            duration: "3 hours",
            address: "Boone County",
            time: "6:00-9:00",
            src: "/whatsgoingoninIN.jpg",
            title: "What's Going on in IN?",
            date: "October 15th, 2025",
            description: "You're invited! We're excited to welcome our Indiana Lt. Governor Micah Beckwith and our State Comptroller Elise Nieshalla as our guest speakers this month. After July's weather cancellation, we can't wait to hear about all the great things happening at the state level.",
            registration: "Required",
            featured: true
        },
    ]
    
    return (
        <div className="space-y-0 relative">
          {/* Subtle Background */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
          </div>
    
          {/* Animated Hero Section */}
          <section className="py-20 relative z-10 bg-gradient-to-br from-red-50/80 via-white/70 to-blue-50/80 overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute top-20 left-20 w-20 h-20 bg-red-200/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.4, 1],
                x: [0, 30, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-28 h-28 bg-blue-200/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, -20, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 3 }}
            />
    
            {/* Floating Stars */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute opacity-20"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8
                }}
              >
                <Calendar className="h-5 w-5 text-red-600" />
              </motion.div>
            ))}
    
            <div className="max-w-4xl mx-auto text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-5xl text-neutral-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Recent Events
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-neutral-600 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Highlights from our recent gatherings, meetings, and community engagements.
                </motion.p>
    
                {/* Event Stats */}
                <motion.div 
                  className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {[
                    { number: "24+", label: "Events This Year", icon: Calendar, color: "blue" },
                    { number: "500+", label: "Attendees", icon: Users, color: "red" },
                    { number: "12", label: "Guest Speakers", icon: Star, color: "blue" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className={`w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full ${
                          stat.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'
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
                      >
                        <stat.icon className={`h-6 w-6 ${stat.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                      </motion.div>
                      <div className={`text-2xl ${stat.color === 'blue' ? 'text-blue-600' : 'text-red-600'} mb-1`}>{stat.number}</div>
                      <div className="text-sm text-neutral-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
    
          {/* Upcoming Events Calendar Section */}
          <section className="py-20 relative z-10 bg-gradient-to-r from-blue-600 via-indigo-700 to-red-600 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M30 6l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
    
            <div className="max-w-6xl mx-auto px-6 relative">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-4xl text-white mb-6 flex items-center justify-center gap-4"
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
                    <Calendar className="h-8 w-8 text-yellow-300" />
                  </motion.div>
                  Upcoming Events Calendar
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.5
                    }}
                  >
                    <Star className="h-8 w-8 text-yellow-300" />
                  </motion.div>
                </motion.h3>
                
                <motion.p 
                  className="text-xl text-white/90 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Mark your calendar for these exciting upcoming events and meetings. Don't miss out on opportunities to connect and make a difference!
                </motion.p>
              </motion.div>
    
              <div className="grid lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className={`border-white/20 overflow-hidden shadow-2xl transition-all duration-500 group ${event.featured ? 'ring-2 ring-yellow-300' : ''}`}>
                      <div className="aspect-video relative overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <ImageWithFallback
                            src={event.url}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        
                        {/* Animated overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                        />
                        
                        {/* Featured badge */}
                        {event.featured && (
                          <motion.div
                            className="absolute top-4 left-4"
                            initial={{ opacity: 0, scale: 0, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Badge className="bg-yellow-500 text-black shadow-lg animate-pulse">
                              <Star className="h-3 w-3 mr-1" />
                              Featured Event
                            </Badge>
                          </motion.div>
                        )}
    
                        {/* Date badge */}
                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, scale: 0, rotate: 10 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <Badge variant="outline" className="bg-white/95 text-black border-white shadow-lg">
                            {event.date}
                          </Badge>
                        </motion.div>
    
                        {/* Registration status */}
                        <motion.div
                          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg">
                            <div className="flex items-center justify-between text-sm text-neutral-800">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-blue-600" />
                                <span>{event.time} • {event.duration}</span>
                              </div>
                              <Badge className={`${event.registration === 'Required' ? 'bg-red-600' : 'bg-green-600'} text-white text-xs`}>
                                {event.registration}
                              </Badge>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <CardContent className="p-6 bg-white">
                        <motion.div 
                          className="mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        >
                          <h3 className="text-xl text-neutral-900 mb-2">{event.title}</h3>
                          
                          {/* Event details */}
                          <div className="space-y-2 mb-4">
                            <motion.div 
                              className="flex items-center gap-2 text-sm text-neutral-600"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            >
                              <Clock className={`h-4 w-4 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'}`} />
                              <span>{event.time} • {event.duration}</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-start gap-2 text-sm text-neutral-600"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            >
                              <MapPin className={`h-4 w-4 mt-0.5 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'} flex-shrink-0`} />
                              <span className="leading-tight">{event.address}</span>
                            </motion.div>
                          </div>
                        </motion.div>
                        
                        <motion.p 
                          className="text-neutral-600 leading-relaxed text-sm mb-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        >
                          {event.description}
                        </motion.p>
    
                        {/* Action button */}
                        <motion.div 
                          className="pt-4 border-t border-neutral-100"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              className={`w-full ${event.featured 
                                ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black' 
                                : 'bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white'
                              } px-6 py-3 rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden`}
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
                              <Calendar className="h-5 w-5 mr-2" />
                              {event.registration === 'Required' ? 'Register Now' : 'Add to Calendar'}
                              <ChevronRight className="h-5 w-5 ml-2" />
                            </Button>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
    
              {/* CTA Section */}
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20">
                  <h4 className="text-2xl text-white mb-4">Never Miss an Event!</h4>
                  <p className="text-white/80 mb-6 max-w-md mx-auto">
                    Subscribe to our newsletter or join our Facebook group to get notified about all upcoming events and meetings.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl shadow-lg"
                        onClick={() => setActiveTab('news')}
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Subscribe to Newsletter
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl"
                        onClick={() => window.open('https://www.facebook.com/groups/boone-county-republican-women', '_blank')}
                      >
                        <Users className="h-5 w-5 mr-2" />
                        Join Facebook Group
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
            
          {/* Past Events Grid Section */}
          <section className="py-20 relative z-10 bg-gradient-to-b from-white/80 to-red-50/60">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl text-neutral-900 mb-4">Past Events Gallery</h3>
                <p className="text-lg text-neutral-600">
                  Capturing moments from our recent community events and gatherings
                </p>
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {eventImages.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="border-neutral-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                      <div className="aspect-video relative overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <ImageWithFallback
                            src={event.url}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        
                        {/* Animated overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        
                        {/* Date badge */}
                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, scale: 0, rotate: -10 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Badge variant="outline" className="bg-white/95 text-xs border-neutral-300 shadow-lg">
                            {event.date}
                          </Badge>
                        </motion.div>
    
                        {/* Attendees badge */}
                        <motion.div
                          className="absolute top-4 left-4"
                          initial={{ opacity: 0, scale: 0, rotate: 10 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <Badge className={`${index % 2 === 0 ? 'bg-blue-600' : 'bg-red-600'} text-white text-xs shadow-lg`}>
                            <Users className="h-3 w-3 mr-1" />
                            {event.attendees}
                          </Badge>
                        </motion.div>
    
                        {/* Floating event info overlay on hover */}
                        <motion.div
                          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg">
                            <div className="flex items-center gap-2 text-sm text-neutral-800 mb-1">
                              <Clock className="h-4 w-4 text-blue-600" />
                              <span>{event.time} • {event.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-700">
                              <MapPin className="h-4 w-4 text-red-600" />
                              <span className="truncate">{event.address.split(',')[0]}</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <CardContent className="p-6">
                        <motion.div 
                          className="mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        >
                          <h3 className="text-xl text-neutral-900 mb-2">{event.title}</h3>
                          
                          {/* Event details */}
                          <div className="space-y-2 mb-4">
                            <motion.div 
                              className="flex items-center gap-2 text-sm text-neutral-600"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            >
                              <Clock className={`h-4 w-4 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'}`} />
                              <span>{event.time} • {event.duration}</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-start gap-2 text-sm text-neutral-600"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            >
                              <MapPin className={`h-4 w-4 mt-0.5 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'} flex-shrink-0`} />
                              <span className="leading-tight">{event.address}</span>
                            </motion.div>
                          </div>
                        </motion.div>
                        
                        <motion.p 
                          className="text-neutral-600 leading-relaxed text-sm"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        >
                          {event.description}
                        </motion.p>
    
                        {/* Interactive elements */}
                        <motion.div 
                          className="mt-6 pt-4 border-t border-neutral-100"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              {/* Status indicator */}
                              <div className="flex items-center gap-2">
                                <motion.div
                                  className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-red-500'}`}
                                  animate={{ scale: [1, 1.3, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                />
                                <span className="text-sm text-neutral-500">Event Complete</span>
                              </div>
                              
                              {/* Attendee count */}
                              <div className="flex items-center gap-1 text-sm text-neutral-500">
                                <Users className="h-4 w-4" />
                                <span>{event.attendees} attendees</span>
                              </div>
                            </div>
                            
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button variant="ghost" size="sm" className={`${index % 2 === 0 ? 'text-blue-600 hover:text-blue-800 hover:bg-blue-50' : 'text-red-600 hover:text-red-800 hover:bg-red-50'}`}>
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View Details
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
    
              {/* Call to Action */}
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-red-600 p-1 rounded-2xl inline-block">
                  <div className="bg-white p-8 rounded-xl">
                    <h3 className="text-2xl text-neutral-900 mb-4">Don't Miss Our Next Event!</h3>
                    <p className="text-neutral-600 mb-6">Join us at our next meeting and be part of our growing community.</p>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        onClick={() => setActiveTab('join')}
                        className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-10 py-4 text-lg rounded-xl shadow-xl relative overflow-hidden"
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
                        <Calendar className="h-5 w-5 mr-2" />
                        Join Our Next Meeting
                        <ChevronRight className="h-5 w-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      );
}