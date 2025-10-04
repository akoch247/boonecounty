import React, { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge, Calendar, ExternalLink, Flag, Mail, Shield, Star, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from 'motion/react';


export default function NewsPage() {
    useEffect(() => {
        // Load Mailchimp validation script
        const script = document.createElement("script");
        script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
          window.fnames = ["EMAIL", "FNAME", "LNAME", "PHONE"];
          window.ftypes = ["email", "text", "text", "phone"];
          window.$mcj = window.jQuery?.noConflict(true);
    
          // ✅ Fix autofill issue
          // 1️⃣ Re-dispatch input events on focus and form submit
          const form = document.querySelector("#mc-embedded-subscribe-form");
          const inputs = form?.querySelectorAll("input");
    
          const triggerInputEvent = (input) => {
            const event = new Event("input", { bubbles: true });
            input.dispatchEvent(event);
          };
    
          // When user focuses the field after autofill
          inputs?.forEach((input) => {
            input.addEventListener("focus", () => triggerInputEvent(input));
          });
    
          // When user submits form (autofill values may still be "invisible" to script)
          form?.addEventListener("submit", () => {
            inputs?.forEach((input) => triggerInputEvent(input));
          });
    
          // As an extra safety net: run once after 1 second (covers instant autofill)
          setTimeout(() => {
            inputs?.forEach(triggerInputEvent);
          }, 1000);
        };
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
  
  
    const newsItems = [
        {
          title: "Upcoming Election Information",
          date: "December 15, 2024",
          description: "Important dates and candidate information for the upcoming elections."
        },
        {
          title: "Constitutional Education Resources",
          date: "December 10, 2024",
          description: "New educational materials available for studying our founding documents."
        },
        {
          title: "Legislative Updates",
          date: "December 5, 2024",
          description: "Recent developments in state and federal legislation affecting families."
        }
      ];
      
      const upcomingEvents = [
        {
          url: "https://images.unsplash.com/photo-1728655947843-fdbf6fdfbe51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBtZWV0aW5nJTIwd29tZW58ZW58MXx8fHwxNzU4ODM5NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          title: "January Monthly Meeting",
          date: "January 15, 2025",
          duration: "1.5 hours",
          address: "Whitestown Municipal Complex, 6210 Veterans Dr, Whitestown, IN 46075",
          time: "7:00 PM - 8:30 PM",
          description: "New Year kickoff meeting with guest speaker State Senator discussing upcoming legislative priorities. Planning session for 2025 activities and initiatives.",
          registration: "Required",
          featured: true
        },
        {
          url: "https://images.unsplash.com/photo-1681949222860-9cb3b0329878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGxlYWRlcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc1ODgzOTcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          title: "Constitution Study Workshop",
          date: "February 8, 2025",
          duration: "2.5 hours",
          address: "Zionsville Library, 1100 W Oak St, Zionsville, IN 46077",
          time: "10:00 AM - 12:30 PM",
          description: "Interactive workshop on the Constitution and Bill of Rights. Includes small group discussions and practical applications for civic engagement.",
          registration: "Required",
          featured: false
        },
        {
          url: "https://images.unsplash.com/photo-1758610840977-8ee55513281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBldmVudHxlbnwxfHx8fDE3NTg4Mzk3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          title: "February Monthly Meeting",
          date: "February 19, 2025",
          duration: "1.5 hours",
          address: "Whitestown Municipal Complex, 6210 Veterans Dr, Whitestown, IN 46075",
          time: "7:00 PM - 8:30 PM",
          description: "Special presentation on 'Women in Conservative Leadership' featuring local female elected officials and business leaders sharing their experiences.",
          registration: "Open",
          featured: false
        },
        {
          url: "https://images.unsplash.com/photo-1585942740847-55be8f2f7352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zZXJ2YXRpdmUlMjByYWxseXxlbnwxfHx8fDE3NTg4Mzk3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          title: "Spring Fundraising Gala",
          date: "March 22, 2025",
          duration: "4 hours",
          address: "Boone County Fairgrounds, 1300 E 100 S, Lebanon, IN 46052",
          time: "6:00 PM - 10:00 PM",
          description: "Annual fundraising gala with dinner, silent auction, and keynote speaker. Formal attire requested. Proceeds support local conservative candidates and educational programs.",
          registration: "Required",
          featured: true
        }
      ];
  

    return (
        <div className="space-y-0 relative">
          {/* Subtle Background */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
          </div>
    
          {/* Animated Hero Section */}
          <section className="py-20 relative z-10 bg-gradient-to-r from-blue-50/80 via-white/70 to-red-50/80 overflow-hidden">
            {/* Floating background elements */}
            <motion.div
              className="absolute top-16 right-16 w-28 h-28 bg-blue-200/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.4, 1],
                x: [0, -25, 0],
                y: [0, 25, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-16 w-32 h-32 bg-red-200/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            />
    
            <div className=" py-16 max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1753799515528-d2873549b442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGl0dXRpb24lMjBkb2N1bWVudHxlbnwxfHx8fDE3NTg4NDExNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Constitution document"
                      className="w-full h-80 object-cover rounded-xl shadow-2xl"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-red-600/10 rounded-2xl"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Floating constitutional elements */}
                 
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
                    News & Resources
                  </motion.h2>
                  
                  <motion.p 
                    className="text-xl text-neutral-600 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Stay informed with the latest updates, educational resources, and important information 
                    about constitutional rights and conservative principles.
                  </motion.p>
                  
                  <div className="space-y-6  mb-8">
                    {[
                      { icon: Flag, text: "Constitutional education materials", color: "blue" },
                      { icon: Star, text: "Legislative updates and alerts", color: "red" },
                      { icon: Shield, text: "Conservative news and analysis", color: "blue" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-4 py-3 bg-white/60 rounded-lg shadow-sm"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, repeatDelay: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.8)" }}
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
                          <item.icon className={`h-6 w-6 ${item.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                        </motion.div>
                        <span className="text-neutral-700 text-lg">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
    
          {/* Mailing List Signup Section */}
          <section className="py-16 relative z-10 bg-gradient-to-r from-blue-600 via-indigo-700 to-red-600 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{

                backgroundSize: '60px 60px'
              }}></div>
            </div>
    
            <div className="max-w-4xl mx-auto px-6 relative">
              <motion.div
                className="text-center mb-12"
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
                    <Mail className="h-8 w-8 text-yellow-300" />
                  </motion.div>
                  Stay Informed with Our Newsletter
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
                    <Flag className="h-8 w-8 text-yellow-300" />
                  </motion.div>
                </motion.h3>
                
                <motion.p 
                  className="text-xl text-white max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Get the latest updates on conservative issues, upcoming events, and important news delivered directly to your inbox.
                </motion.p>
              </motion.div>
    
              {/* Form Container */}

              <motion.div
                className="bg-white rounded-xl p-8 shadow-2xl max-w-2xl mx-auto" initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
                  <div id="mc_embed_shell" className="flex justify-center py-10">
                    <div
                        id="mc_embed_signup"
                        style={{
                        background: "#fff",
                        clear: "left",
                        font: "14px Helvetica, Arial, sans-serif",
                        width: "600px",
                        borderRadius: "12px",
                        padding: "20px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                    </div>
                  </div>
                  <form
                    action="https://boonecountyrepublicanwomensclub.us5.list-manage.com/subscribe/post?u=a2bf7f2f663c11b56aae15ef7&amp;id=a9b0b0e5e3&amp;v_id=3613&amp;f_id=008271ebf0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                    >
                <div id="mc_embed_signup_scroll">
                    <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
                </div>

                <div className="mc-field-group mb-4">
                    <label htmlFor="mce-EMAIL">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        required
                        className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    />
                    </div>

                    <div className="mc-field-group mb-4">
                        <label htmlFor="mce-FNAME">First Name</label>
                        <input
                            type="text"
                            name="FNAME"
                            id="mce-FNAME"
                            className="w-full border border-gray-300 rounded-md p-2 mt-1"
                        />
                    </div>

                    <div className="mc-field-group mb-4">
                        <label htmlFor="mce-LNAME">Last Name</label>
                        <input
                            type="text"
                            name="LNAME"
                            id="mce-LNAME"
                            className="w-full border border-gray-300 rounded-md p-2 mt-1"
                        />
                    </div>

                    <div id="mergeRow-gdpr" className="mb-6">
                        <label className="font-medium">Marketing Permissions</label>
                        <p className="text-sm text-gray-600 mb-2">
                            Please select all the ways you would like to hear from us:
                        </p>
                        <fieldset className="space-y-2">
                            <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="gdpr_367813"
                                name="gdpr[367813]"
                                value="Y"
                                className="w-auto"
                            />
                            <span>Email</span>
                            </label>
                        </fieldset>
                        <p className="text-xs text-gray-500 mt-3">
                            You can unsubscribe at any time by clicking the link in the
                            footer of our emails. For information about our privacy
                            practices, please visit our website.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                            We use Mailchimp as our marketing platform. By clicking below to
                            subscribe, you acknowledge that your information will be
                            transferred to Mailchimp for processing.{" "}
                            <a
                                href="https://mailchimp.com/legal/terms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Learn more
                            </a>{" "}
                            about Mailchimp's privacy practices.
                        </p>
                    </div>

                    <div className="clear">
                        <input
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
                            value="Subscribe"
                        />
                    </div>

                
                
                    {/* 
                    <motion.div 
                      className="text-center mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <h4 className="text-2xl text-neutral-900 mb-2">Join Our Mailing List</h4>
                      <p className="text-black-600">Stay connected with the latest news and updates from BCRWC</p>
                    </motion.div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      <label htmlFor="mce-FNAME" className="block text-sm text-neutral-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="FNAME"
                        id="mce-FNAME"
                        placeholder="Your first name"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      <label htmlFor="mce-LNAME" className="block text-sm text-neutral-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="LNAME"
                        id="mce-LNAME"
                        placeholder="Your last name"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <label htmlFor="mce-EMAIL" className="block text-sm text-neutral-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="EMAIL"
                      id="mce-EMAIL"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>
                  {/* Honeypot field to prevent spam 
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input 
                      type="text" 
                      name="b_a2bf7f2f663c11b56aae15ef7_a9b0b0e5e3" 
                      tabIndex={-1}
                      defaultValue="" 
                    />
                  </div>

                  <motion.div 
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl transition-all duration-300 relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20" animate={{ x: ["-100%", "100%"], opacity: [0, 0.5, 0]}}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3}}
                        />

                        <Mail className="h-5 w-5 mr-2" />
                        <span className="relative z-10">
                          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                        </span>
                        <Star className="h-5 w-5 ml-2" />
                      </Button>
                    </motion.div>
    
                    <motion.p 
                      className="text-sm text-neutral-500 max-w-md mx-auto mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                    >
                      
                      We respect your privacy. Unsubscribe at any time. No spam, just important updates about conservative values and community events.
                    </motion.p>
                  </motion.div>
                    */}
                </form>
              )
                    
    
                {/* Newsletter Benefits */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-neutral-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <h5 className="text-lg text-neutral-900 mb-4 text-center">What You'll Receive:</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Calendar, text: "Event announcements & reminders", color: "blue" },
                      { icon: Flag, text: "Legislative updates & alerts", color: "red" },
                      { icon: Users, text: "Member highlights & stories", color: "blue" },
                      { icon: ExternalLink, text: "Educational resources & links", color: "red" }
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      >
                        <motion.div
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
                          <benefit.icon className={`h-5 w-5 ${benefit.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                        </motion.div>
                        <span className="text-sm text-neutral-700">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
    
          {/* Press Coverage Section */}
          <section className="py-16 relative z-10 bg-gradient-to-b from-white/80 to-red-50/60">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl text-neutral-900 mb-6">Press Coverage & News Articles</h3>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  Read what local and national media outlets are saying about our organization and activities.
                </p>
              </motion.div>
    
              {/* Article Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    image: "current2025.webp",
                    outlet: "Zionsville Current",
                    headline: "Mourners fill Mulberry Fields in Zionsville for Charlie Kirk vigil",
                    date: "September 22, 2025",
                    excerpt: "Organizers of a vigil for Charlie Kirk said more than 1,000 people came to Mulberry Fields Park in Zionsville Sept. 21 in a celebration of faith....",
                    url: "https://youarecurrent.com/2025/09/22/mourners-fill-mulberry-fields-for-charlie-kirk-vigil/"
                  },
                  {
                    image: "current2023.jpg",
                    outlet: "Zionsville Current",
                    headline: "Boone County GOP Freedom Fest",
                    date: "July 20, 2023",
                    excerpt: "The Boone County Republican Women’s Club and the Boone County GOP held their first Freedom Fest July 15 at Zionsville Lions Park. The event featured a kids zone, family games, live music and opportunities to meet local political candidates. ...",
                    url: "https://youarecurrent.com/2023/07/20/snapshot-boone-county-gop-freedom-fest/"
                  }

                ].map((article, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >

                    {/* Image and Overlay and Badges */}
                    <div className="relative group">
                    <ImageWithFallback
                          src={article.image}
                          alt={article.headline}
                          className="w-full h-48 object-cover"
                        />

                      {/* Always-visible outlet badge */}
                      {/* 
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-md">
                        {article.outlet}
                      </div>
                      */}

                      {/* Always-visible date badge */}
                      {/*}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm shadow-md">
                        {article.date}
                      </div>
                      */}

                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
    
                    {/* Text Content */}
                    <div className="p-6">
                      <motion.h4 
                        className="text-lg text-neutral-900 mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        {article.headline}
                      </motion.h4>
                      
                      <motion.p 
                        className="text-neutral-600 text-sm leading-relaxed mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        {article.excerpt}
                      </motion.p>
    
                      <motion.div 
                        className="flex items-center justify-between pt-4 border-t border-neutral-100"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-2 h-2 bg-blue-500 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          />
                          
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="ghost" size="sm"
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                            onClick={() => window.open(article.url, '_blank')}
                          >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Read Full Article
                        </Button>

                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
    
          {/* X Mentions Section */}
          <section className="py-16 relative z-10 bg-gradient-to-b from-white/80 to-blue-50/60">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl text-neutral-900 mb-6">X Mentions & Social Media</h3>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  See what people are saying about us on X (formerly Twitter) and other social platforms.
                </p>
              </motion.div>
    
              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1553383410-a6756f288673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1lbnRpb25zJTIwdHdpdHRlciUyMGZlZWR8ZW58MXx8fHwxNzU5NDM1NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Social Media Mentions"
                          className="w-full h-64 object-cover"
                        />
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                        animate={{ opacity: [0.6, 0.8, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <h4 className="text-xl mb-2">Latest X Mentions</h4>
                        <p className="text-sm text-white/80">Follow our social media activity</p>
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <motion.p 
                        className="text-neutral-600 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        Track mentions, conversations, and engagement about our organization across social media platforms.
                      </motion.p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className=" from-blue-700 to-indigo-800 text-white px-6 py-3 rounded-xl shadow-lg w-full"
                          onClick={() => window.open('https://x.com/cdiegomorales/status/1934057638507204844', '_blank')}
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          View X Mentions
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    {[
                      { platform: "X (Twitter)", mentions: "45+", color: "blue", icon: ExternalLink },
                      { platform: "Facebook", mentions: "120+", color: "indigo", icon: Users },
                      { platform: "Local News", mentions: "8", color: "red", icon: Flag }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div
                              className={`w-12 h-12 bg-${stat.color}-100 rounded-full flex items-center justify-center`}
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
                              <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                            </motion.div>
                            <div>
                              <h4 className="text-lg text-neutral-900">{stat.platform}</h4>
                              <p className="text-sm text-neutral-600">Recent activity</p>
                            </div>
                          </div>
                          <motion.div 
                            className={`text-3xl text-${stat.color}-600`}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          >
                            {stat.mentions}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
    
          {/* YouTube Channel Section */}
      <section className="py-20 relative z-10 bg-gradient-to-r from-red-50/80 via-white/70 to-blue-50/80">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl text-neutral-900 mb-6">Our YouTube Channel</h3>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Watch our latest videos, meeting recordings, and educational content about conservative values.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                videoId: "qNM6qk-BBeU",
                title: "Whitestown Town Candidates March 2023",
                
              },
              {
                videoId: "ADjLlNz4JVE", 
                title: "Zionsville Town Candidates March 2023", 
            
              },
              {
                videoId: "iUggq5vbgM0", 
                title: "Lebanon March Candidates March 2023",
                
              },
          
            ].map((video, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                    className="aspect-video"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                      title={video.title}
                      className="w-full h-full rounded-t-xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </motion.div>

                  {/* Duration badge */}
                  <motion.div
                    className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h4 
                    className="text-lg text-neutral-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    {video.title}
                  </motion.h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* YouTube Channel CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border border-red-300 rounded-xl p-1 rounded-2xl inline-block">
              <div className="bg-white p-8 rounded-xl relative overflow-hidden">

                <h4 className=" text-2xl text-neutral-900 mb-4">Subscribe to Our Channel</h4>
                <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                  Don't miss our latest videos! Subscribe for meeting highlights, educational content, and more.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl relative overflow-hidden"
                    onClick={() => window.open('https://www.youtube.com/@boonecountyrepublicanwomen8170', '_blank')}
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
                    Visit Our YouTube Channel
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    
          {/* Enhanced Content Section */}
          
        </div>
      );
    
}


