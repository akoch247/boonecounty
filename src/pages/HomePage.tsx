import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, Clock, Users, Calendar, Flag, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-16">
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        <div className="relative bg-gradient-to-b from-neutral-50 to-white py-24">
          <div className="absolute top-8 right-8 opacity-20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1533875595808-e224f806d2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZsYWclMjB3YXZpbmd8ZW58MXx8fHwxNzU4ODQxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Boone County Republican Women's Event American Flag"
              className="w-32 h-24 object-cover rounded-lg"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <h1 className="text-sm text-neutral-700">Boone County Republican Women's Club</h1>
            </div>
            <h2 className="text-5xl md:text-6xl tracking-tight text-neutral-900 mb-6">
              Preserving Our<br />
              <h2 className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Constitutional Values</h2>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              We are a grassroots group of conservative women and families dedicated to defending 
              faith, family, and freedom in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => navigate('/join')}
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-14 py-6 text-2xl font-bold rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
              >
                <Flag className="h-7 w-7 mr-3" />
                Join Our Club Today
                <ChevronRight className="h-7 w-7 ml-3" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/events')}
                className="border-red-300 text-red-700 hover:bg-red-50 px-8 py-6 rounded-lg"
              >
                View Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-neutral-900 mb-4">Our Core Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The principles that guide our organization and inspire our community engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Faith", 
                description: "Honoring our spiritual foundations and religious liberty",
                icon: Star,
                color: "blue"
              },
              { 
                title: "Family", 
                description: "Strengthening families as the cornerstone of society",
                icon: Users,
                color: "red"
              },
              { 
                title: "Freedom", 
                description: "Protecting constitutional rights and individual liberties",
                icon: Flag,
                color: "blue"
              }
            ].map((value, index) => (
              <Card key={index} className="border-neutral-200 hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${value.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-100' : 'bg-red-50 group-hover:bg-red-100'} rounded-xl mx-auto mb-6 flex items-center justify-center transition-colors duration-300`}>
                    <value.icon className={`h-8 w-8 ${value.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                  </div>
                  <h3 className="text-xl text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-neutral-900 mb-6">Building Strong Communities</h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Through grassroots engagement and principled leadership, we work to strengthen our community 
                and uphold the values that make America great.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-neutral-700">Constitutional education and awareness</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-neutral-700">Community service and outreach</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-neutral-700">Supporting conservative candidates</span>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="relative">
                <ImageWithFallback
                  src="/community2.jpeg"
                  alt="Boone County Republican Women's Club Community Event"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-red-600/10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Flag className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl text-neutral-900">Monthly Meetings</h3>
                  <Flag className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-neutral-600">Join us for our regular gatherings</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center border border-blue-200">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-neutral-900 mb-1">When</h4>
                  <p className="text-neutral-600 text-sm">3rd Wednesday</p>
                  <p className="text-neutral-600 text-sm">January - November</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center border border-red-200">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="text-neutral-900 mb-1">Where</h4>
                  <p className="text-neutral-600 text-sm">Whitestown Municipal Complex</p>
                  <p className="text-neutral-600 text-sm">6210 Veterans Dr, Whitestown, IN</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center border border-blue-200">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-neutral-900 mb-1">Time</h4>
                  <p className="text-neutral-600 text-sm">Doors open 6:30 PM</p>
                  <p className="text-neutral-600 text-sm">Meeting 7:00 - 8:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}