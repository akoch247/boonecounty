import { Building2, Calendar, MapPin } from "lucide-react";
import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-neutral-900" />
                <span className="text-xl text-neutral-900">Boone County Republican Women's Club</span>
              </div>
              <p className="text-neutral-600 mb-4 max-w-md">
                Preserving Faith, Family, and Freedom in our community through grassroots engagement and conservative leadership.
              </p>
            </div>
            
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
            
            <div>
              <h4 className="text-neutral-900 mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-neutral-600">
                <div className="cursor-pointer hover:text-neutral-900">About Us</div>
                <div className="cursor-pointer hover:text-neutral-900">Events</div>
                <div className="cursor-pointer hover:text-neutral-900">Join</div>
                <div className="cursor-pointer hover:text-neutral-900">Contact</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-200 mt-12 pt-8 text-center">
            <p className="text-sm text-neutral-500">
              © 2025 Boone County Republican Women's Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}