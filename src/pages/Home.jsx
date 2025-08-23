import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Award, 
  Shield, 
  Clock, 
  Users, 
  Thermometer,
  Heart,
  Star,
  CheckCircle,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Home() {
  const benefits = [
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Regular sauna use improves circulation and supports heart health."
    },
    {
      icon: Thermometer,
      title: "Stress Relief & Relaxation", 
      description: "Heat therapy naturally reduces cortisol and promotes deep relaxation."
    },
    {
      icon: Users,
      title: "Social Wellness",
      description: "Create meaningful connections in your personal wellness sanctuary."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Vancouver, BC",
      rating: 5,
      text: "Our Ohana sauna has become the heart of our home. The craftsmanship is extraordinary, and the daily wellness benefits are life-changing.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Chen", 
      location: "Victoria, BC",
      rating: 5,
      text: "From design to installation, the Ohana team exceeded every expectation. Five stars for quality, service, and pure luxury.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emma Thompson",
      location: "Kelowna, BC", 
      rating: 5,
      text: "The attention to detail is incredible. Our cedar sauna is not just beautiful—it's a daily retreat that brings our family together.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--steam-white)]">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=900&fit=crop&q=80" 
              alt="Luxury Custom Sauna Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--warm-cedar)]/50 via-[var(--rich-mahogany)]/60 to-[var(--charcoal)]/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-[var(--ember-orange)] text-white mb-6 text-base px-4 py-2 border-0">
                <Award className="w-4 h-4 mr-2" />
                Master Craftsmen Since 2003
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-shadow-lg">
                Handcrafted
                <span className="text-[var(--warm-cedar)] block">Wellness</span>
                Sanctuaries
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed text-shadow">
                Transform your home into a personal oasis with our premium custom saunas. 
                Finnish tradition meets modern luxury in every handcrafted detail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to={createPageUrl("Designer")}>
                  <Button 
                    size="lg" 
                    className="bg-[var(--deep-forest)] hover:bg-[var(--deep-forest)]/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Design Your Sauna
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link to={createPageUrl("Contact")}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-[var(--warm-cedar)] text-[var(--warm-cedar)] hover:bg-[var(--warm-cedar)] hover:text-white px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[var(--soft-birch)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--charcoal)] mb-4">
              The Ohana Difference
            </h2>
            <p className="text-xl text-[var(--charcoal)]/80 max-w-3xl mx-auto">
              Two decades of master craftsmanship, premium materials, and unwavering commitment to your wellness journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Master Craftsmanship",
                description: "Every sauna is handbuilt by certified artisans using traditional Finnish techniques and premium sustainably-sourced materials."
              },
              {
                icon: Shield,
                title: "Lifetime Support",
                description: "From design consultation to lifetime maintenance, we're your wellness partners for life with comprehensive warranties."
              },
              {
                icon: Clock,
                title: "White-Glove Service", 
                description: "Seamless experience from concept to completion. Professional installation, permits handled, zero stress for you."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[var(--sauna-stone-gray)]/20 shadow-lg bg-[var(--steam-white)] hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[var(--warm-cedar)]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <item.icon className="w-8 h-8 text-[var(--deep-forest)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--charcoal)] mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-[var(--charcoal)]/80 text-center leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Designer CTA */}
      <section className="py-20 bg-[var(--zen-sage)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--charcoal)] mb-6">
              Design Your Perfect Sauna
            </h2>
            <p className="text-xl text-[var(--charcoal)]/80 mb-10 max-w-3xl mx-auto">
              Use our interactive 3D designer to customize every detail. 
              Choose materials, size, heating systems, and premium accessories.
            </p>
            
            <Link to={createPageUrl("Designer")}>
              <Button 
                size="lg" 
                className="bg-[var(--deep-forest)] hover:bg-[var(--deep-forest)]/90 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Launch 3D Designer
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            
            <div className="mt-8 text-[var(--charcoal)]/70 text-sm">
              Get instant pricing • No commitment required • Free design consultation
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-[var(--steam-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--charcoal)] mb-4">
              Trusted by Wellness Enthusiasts
            </h2>
            <p className="text-xl text-[var(--charcoal)]/80 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who've transformed their homes into wellness retreats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[var(--sauna-stone-gray)]/20 shadow-lg bg-[var(--soft-birch)] h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[var(--ember-orange)] text-[var(--ember-orange)]" />
                      ))}
                    </div>
                    
                    <p className="text-[var(--charcoal)]/80 mb-6 leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-[var(--charcoal)]">
                          {testimonial.name}
                        </div>
                        <div className="text-[var(--charcoal)]/60 text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-[var(--soft-birch)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-[var(--zen-sage)] text-white mb-6 text-base px-4 py-2 border-0">
                  Wellness Benefits
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-[var(--charcoal)] mb-8">
                  Transform Your Health & Wellbeing
                </h2>
                <p className="text-xl text-[var(--charcoal)]/80 mb-10 leading-relaxed">
                  Scientific research shows regular sauna use provides profound health benefits, 
                  from improved cardiovascular health to enhanced mental wellbeing.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--deep-forest)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-[var(--deep-forest)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-[var(--charcoal)]/80">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link to={createPageUrl("Education")} className="inline-block mt-8">
                  <Button variant="outline" className="border-[var(--deep-forest)] text-[var(--deep-forest)] hover:bg-[var(--deep-forest)] hover:text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=700&fit=crop" 
                  alt="Relaxing in Premium Sauna" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[var(--steam-white)] p-6 rounded-xl shadow-lg border border-[var(--sauna-stone-gray)]/20">
                  <div className="text-3xl font-bold text-[var(--deep-forest)] mb-1">15min</div>
                  <div className="text-sm text-[var(--charcoal)]/70">Daily session recommended</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  );
}