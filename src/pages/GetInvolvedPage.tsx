import React from "react";
import { Button } from '../components/ui/button';
import { Users, Flag, Star, ChevronRight, ExternalLink, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';

export default function GetInvolvedPage() {
    return (
        <div className="space-y-16">
          {/* Hero Image */}
          <section className="py-16 bg-gradient-to-r from-red-50 via-white to-blue-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl text-neutral-900 mb-6">Get Involved</h2>
                  <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                    Join us in making a difference in our community. We need dedicated volunteers 
                    to help with events, outreach, and supporting conservative candidates.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Flag className="h-5 w-5 text-blue-600" />
                      <span className="text-neutral-700">Make a meaningful impact</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-red-600" />
                      <span className="text-neutral-700">Connect with like-minded women</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-blue-600" />
                      <span className="text-neutral-700">Advance conservative values</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="p-5 rounded-lg">
                      <Button 
                        className="h-10 bg-red-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf1Q_f0LoCPy2Ag-eNGv8GDwzWw0HsTFvlpfF-VI1KS2ceNKA/viewform', '_blank')}
                      >
                        <ExternalLink className="h-5 w-4 mr-2" />
                        Start Volunteering
                        <ChevronRight className="h-5 w-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="lg:order-first">
                  <div className="relative">
                    <ImageWithFallback
                      src="/pamela.jpeg"
                      alt="Boone County Republican Women's Event Member"
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-blue-600/10 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="border-blue-200 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl text-neutral-900 mb-6 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-blue-600" />
                      Volunteer Opportunities
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Event planning and coordination",
                        "Voter registration drives",
                        "Community outreach programs",
                        "Educational workshops",
                        "Campaign support",
                        "Social media and communications"
                      ].map((item, index) => (
                        <div key={index} className={`flex items-center gap-3 p-3 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-red-50'} rounded-lg`}>
                          <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-red-600'} rounded-full flex-shrink-0`}></div>
                          <span className="text-neutral-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
    
                <div className="flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl text-neutral-900 mb-4">Ready to Make a Difference?</h3>
                    <p className="text-neutral-600 leading-relaxed mb-8">
                      Your involvement helps strengthen our community and advance conservative values. 
                      Every contribution matters, no matter how big or small.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg shadow-lg"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf1Q_f0LoCPy2Ag-eNGv8GDwzWw0HsTFvlpfF-VI1KS2ceNKA/viewform', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Volunteer Today
                    </Button>
                    <p className="text-sm text-neutral-500 mt-4">
                      Complete our volunteer interest form to get started
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
    
}