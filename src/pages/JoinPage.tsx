import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function JoinPage() {
  return (
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
                  <div className="text-4xl mb-2">$55</div>
                  <p className="text-neutral-300 text-sm mb-6">
                    Includes local, state, and national federation memberships
                  </p>
                  <Button 
                    className="bg-white text-neutral-900 hover:bg-neutral-100 w-full rounded-lg"
                    onClick={() => window.open('https://boone-county-republican-womens-club.square.site/', '_blank')}
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
}