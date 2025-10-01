import React from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge, ExternalLink, Flag, Shield, Star } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function NewsPage() {
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

    return (
        <div className="space-y-16">
          {/* Hero Section with Constitution Image */}
          <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-red-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1753799515528-d2873549b442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGl0dXRpb24lMjBkb2N1bWVudHxlbnwxfHx8fDE3NTg4NDExNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Boone County Republican Women's Event Resourses"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-red-600/10 rounded-xl"></div>
                </div>
                <div>
                  <h2 className="text-4xl text-neutral-900 mb-6">News & Resources</h2>
                  <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                    Stay informed with the latest updates, educational resources, and important information 
                    about constitutional rights and conservative principles.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Flag className="h-5 w-5 text-blue-600" />
                      <span className="text-neutral-700">Constitutional education materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-red-600" />
                      <span className="text-neutral-700">Legislative updates and alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="text-neutral-700">Conservative news and analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {newsItems.map((item, index) => (
                    <Card key={index} className={`${index % 2 === 0 ? 'border-blue-200' : 'border-red-200'} hover:shadow-lg transition-shadow duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl text-neutral-900">{item.title}</h3>
                          <Badge variant="outline" className={`${index % 2 === 0 ? 'border-blue-300 text-blue-700' : 'border-red-300 text-red-700'}`}>
                            {item.date}
                          </Badge>
                        </div>
                        <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
    
                <div className="space-y-6">
                  <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl text-neutral-900 mb-4 flex items-center gap-2">
                        <ExternalLink className="h-5 w-5 text-blue-600" />
                        External Resources
                      </h3>
                      <div className="space-y-3">
                        {[
                          "National Federation of Republican Women",
                          "Indiana Federation of Republican Women", 
                          "Boone County GOP"
                        ].map((resource, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-100">
                            <span className="text-sm text-neutral-700">{resource}</span>
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
    
                  <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl text-neutral-900 mb-4 flex items-center gap-2">
                        <Flag className="h-5 w-5 text-red-600" />
                        Quick Links
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Meeting Minutes",
                          "Event Calendar",
                          "Member Directory",
                          "Constitution & Bylaws"
                        ].map((link, index) => (
                          <div key={index} className="flex items-center gap-3 text-neutral-600 hover:text-red-700 cursor-pointer transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span className="text-sm">{link}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}