import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Star, Shield, Badge } from 'lucide-react';


export default function AboutPage() {
    const members = [
        { name: 'Valerie Swack', title: 'President' },
        { name: 'Anna Schappaugh', title: 'Vice President' },
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
      
    return (
        <div className="space-y-16">
          {/* Hero Image */}
          <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-red-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <ImageWithFallback
                    src="/leadership.jpeg"
                    alt="Boone County Women's Club Leadership Event"
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
                        <p className="text-sm text-neutral-500"></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
    );
}