import { Building2, Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import React from "react";
import { motion } from 'motion/react';
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom"; // if you're using React Router

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-6 w-6 text-neutral-900" />
              <span className="text-xl text-neutral-900">Boone County Republican Women's Club</span>
            </div>
            <p className="text-neutral-600 mb-4 max-w-md">
              Preserving Faith, Family, and Freedom in our community through grassroots engagement and conservative leadership.
            </p>

            {/* Social Media Section */}
            <div className="mb-4">
              <h4 className="text-neutral-900 mb-3 text-sm uppercase tracking-wide">Connect With Us</h4>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline"
                  className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 px-4 py-2 rounded-lg shadow-sm transition-all duration-300"
                  onClick={() => window.open('https://www.facebook.com/groups/808957406673035', '_blank')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Join Our Facebook Group
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-neutral-900 mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Whitestown, IN 46075</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>3rd Wednesday • 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neutral-900 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-neutral-600">
              <Link to="/home" className="hover:text-neutral-900 block py-1">Home</Link>
              <Link to="/aboutus" className="hover:text-neutral-900 block py-1">About Us</Link>
              <Link to="/events" className="hover:text-neutral-900 block py-1">Events</Link>
              <Link to="/get-involved" className="hover:text-neutral-900 block py-1">Get Involved</Link>
              <Link to="/join" className="hover:text-neutral-900 block py-1">Join</Link>
              <Link to="/news" className="hover:text-neutral-900 block py-1">News & Resources</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 mt-12 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            © 2025 Boone County Republican Women's Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
