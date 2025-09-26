import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { MapPin, Clock, Users, Calendar, ExternalLink, Building2, Phone, Mail, ChevronRight, Flag, Star, Shield } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'join', label: 'Join' },
    { id: 'news', label: 'News & Resources' }
  ];

  const members = [
    { name: 'Valerie Swack', title: 'President' },
    { name: 'Anna Schappaugh', title: 'Vice President' },
    { name: 'Jennifer Williams', title: 'Secretary' },
    { name: 'Sandy Jasionowski', title: 'Treasurer'},
    { name: 'Diana Freeman', title: 'Secretary'},
    { name: 'Jenny Beyer', title: 'Parliamentarian'},
    { name: 'Yvonne Koch', title: 'Legislative Committee'},
    { name: 'Sam Anders', title: 'Marketing Committee'},
    { name: 'Cheryl Hancock', title: 'Membership Committee'},
    { name: 'Regina Sharrow', title: 'Events'},
    { name: 'Anna Schappaugh', title: 'Campaign Activities'},
    { name: 'Emily Myers', title: 'Correseponding Secretary'},
  ];

  const eventImages = [
    {
      url: "https://images.unsplash.com/photo-1728655947843-fdbf6fdfbe51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBtZWV0aW5nJTIwd29tZW58ZW58MXx8fHwxNzU4ODM5NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Monthly Meeting",
      date: "October 2024",
      description: "Guest speaker on constitutional rights"
    },
    {
      url: "https://images.unsplash.com/photo-1758610840977-8ee55513281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBldmVudHxlbnwxfHx8fDE3NTg4Mzk3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Community BBQ",
      date: "September 2024",
      description: "Annual fundraising event"
    },
    {
      url: "https://images.unsplash.com/photo-1585942740847-55be8f2f7352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zZXJ2YXRpdmUlMjByYWxseXxlbnwxfHx8fDE3NTg4Mzk3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Rally for Freedom",
      date: "August 2024",
      description: "Supporting conservative candidates"
    },
    {
      url: "https://images.unsplash.com/photo-1681949222860-9cb3b0329878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGxlYWRlcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc1ODgzOTcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Leadership Workshop",
      date: "July 2024",
      description: "Empowering conservative women leaders"
    }
  ];

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

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        <div className="relative bg-gradient-to-b from-neutral-50 to-white py-24">
          <div className="absolute top-8 right-8 opacity-20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1533875595808-e224f806d2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZsYWclMjB3YXZpbmd8ZW58MXx8fHwxNzU4ODQxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="American Flag"
              className="w-32 h-24 object-cover rounded-lg"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-neutral-700">Boone County Republican Women's Club</span>
            </div>
            <h1 className="text-5xl md:text-6xl tracking-tight text-neutral-900 mb-6">
              Preserving Our<br />
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Constitutional Values</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              We are a grassroots group of conservative women and families dedicated to defending 
              faith, family, and freedom in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setActiveTab('join')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-lg shadow-lg"
              >
                Join Our Club
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('events')}
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
                  src="https://images.unsplash.com/photo-1758620140601-791f2761514a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBwYXRyaW90aWN8ZW58MXx8fHwxNzU4ODQxMTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Government building"
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

  const renderAbout = () => (
    <div className="space-y-16">
      {/* Hero Image */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757353614837-d8085c4fdbd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGxlYWRlcnNoaXAlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4ODQxMTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Women in leadership"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-red-600/10 rounded-xl"></div>
            </div>
            <div>
              <h2 className="text-4xl text-neutral-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Dedicated women leading with integrity, passion, and unwavering commitment to conservative values.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-neutral-700">Experienced community leaders</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-red-600" />
                  <span className="text-neutral-700">Committed to conservative principles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-neutral-700">Serving our community with dedication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">        
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <Card key={index} className="border-neutral-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-blue-50 group-hover:bg-blue-100' : 'bg-red-50 group-hover:bg-red-100'} rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300`}>
                    <Users className={`h-8 w-8 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'}`} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-neutral-900 mb-1">{member.name}</h3>
                    <Badge variant="secondary" className={`mb-2 ${index % 2 === 0 ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'} hover:bg-opacity-80`}>
                      {member.title}
                    </Badge>
                    <p className="text-sm text-neutral-500">Member since {member.since}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderEvents = () => (
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
                    src={event.url}
                    alt={event.title}
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

  const renderGetInvolved = () => (
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
              <div className="space-y-4">
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
            </div>
            <div className="lg:order-first">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXIlMjBoZWxwaW5nfGVufDF8fHx8MTc1ODg0MTE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Community volunteers"
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
                  onClick={() => window.open('https://forms.google.com/volunteer-form', '_blank')}
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

  const renderJoin = () => (
    <div className="space-y-16">
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-6 mb-16">
          <h2 className="text-4xl text-neutral-900 mb-6">Join Our Club</h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Become a member of the Boone County Republican Women's Club and join a community of 
            like-minded women dedicated to conservative values and community engagement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-neutral-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl text-neutral-900 mb-6">Membership Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Monthly educational speakers",
                      "Networking opportunities",
                      "Political candidate forums",
                      "Leadership development",
                      "Community service projects",
                      "Access to exclusive events"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                        <div className="w-2 h-2 bg-neutral-600 rounded-full flex-shrink-0"></div>
                        <span className="text-neutral-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-neutral-200 bg-neutral-900 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl mb-2">Annual Membership</h3>
                  <div className="text-4xl mb-2">$35</div>
                  <p className="text-neutral-300 text-sm mb-6">
                    Includes local, state, and national federation memberships
                  </p>
                  <Button 
                    className="bg-white text-neutral-900 hover:bg-neutral-100 w-full rounded-lg"
                    onClick={() => window.open('https://forms.google.com/membership-form', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Join Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-neutral-200">
                <CardContent className="p-6">
                  <h4 className="text-neutral-900 mb-3">What's Included</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    {[
                      "Local club membership",
                      "State federation access",
                      "National federation benefits",
                      "Monthly newsletter"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                        {item}
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

  const renderNews = () => (
    <div className="space-y-16">
      {/* Hero Section with Constitution Image */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753799515528-d2873549b442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGl0dXRpb24lMjBkb2N1bWVudHxlbnwxfHx8fDE3NTg4NDExNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Constitution document"
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

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'events': return renderEvents();
      case 'get-involved': return renderGetInvolved();
      case 'join': return renderJoin();
      case 'news': return renderNews();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Flag className="h-6 w-6 text-blue-600" />
                <span className="text-xl text-neutral-900">BCRWC</span>
                <Flag className="h-6 w-6 text-red-600" />
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                    activeTab === item.id 
                      ? 'bg-neutral-100 text-neutral-900' 
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button 
                onClick={() => setActiveTab('join')}
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-4 py-2 rounded-md shadow-md"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
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
              © 2024 Boone County Republican Women's Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}