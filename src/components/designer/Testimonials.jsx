import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    location: "Aspen, CO",
    quote: "The entire process was seamless. The SaunaForge team helped me design the perfect outdoor sauna, and the craftsmanship is simply stunning. It's the highlight of our home.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Samantha Lee",
    location: "Brooklyn, NY",
    quote: "I never thought I could fit a sauna in my apartment, but their design team created a compact, beautiful solution. The quality is top-tier. My daily escape!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    quote: "From the 3D design to the white-glove installation, everything was handled with incredible professionalism. The final product exceeded all my expectations. Worth every penny.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const TestimonialCard = ({ name, location, quote, avatar }) => (
  <Card className="border-stone-gray bg-white h-full flex flex-col">
    <CardContent className="p-6 flex-grow flex flex-col">
      <div className="flex text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
      </div>
      <p className="text-charcoal/80 mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center mt-auto">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold text-charcoal">{name}</p>
          <p className="text-sm text-charcoal/60">{location}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  return (
    <div className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal">Trusted by Wellness Enthusiasts</h2>
          <p className="mt-4 text-lg text-charcoal/70">See what our satisfied customers have to say.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}