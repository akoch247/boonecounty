import React from "react";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from 'lucide-react';

export default function EventsPage() {
    const eventImages = [
        {
          src: "/community.jpg",
          title: "Monthly Meeting",
          date: "October 2024",
          description: "Guest speaker on constitutional rights"
        },
        {
          src: "/barbecue.jpeg",
          title: "Community BBQ",
          date: "September 2024",
          description: "Annual fundraising event"
        },
        {
          src: "/regina.jpg",
          title: "Rally for Freedom",
          date: "August 2024",
          description: "Supporting conservative candidates"
        },
        {
          src: "/becky.jpg",
          title: "Leadership Workshop",
          date: "July 2024",
          description: "Empowering conservative women leaders"
        }
      ];
      
    return (
        <div className="space-y-16">
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center px-6 mb-16">
              <h2 className="text-4xl text-neutral-900 mb-6">Recent Events</h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Highlights from our recent gatherings, meetings, and community engagements.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {eventImages.map((event, index) => (
                  <Card key={index} className="border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video relative">
                      <ImageWithFallback
                        src={event.src}
                        alt="Boone County Republican Women's Events"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl text-neutral-900">{event.title}</h3>
                        <Badge variant="outline" className="text-xs border-neutral-300">
                          {event.date}
                        </Badge>
                      </div>
                      <p className="text-neutral-600 leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
    );
}