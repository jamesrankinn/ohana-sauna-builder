import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Clock, 
  Heart,
  Shield,
  TreePine,
  Hammer,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function About() {
  const milestones = [
    { year: "2003", event: "SaunaForge founded by master craftsman Erik Lindqvist" },
    { year: "2008", event: "Became certified Finnish Sauna Society member" },
    { year: "2012", event: "Expanded to serve the entire Western United States" },
    { year: "2018", event: "Launched innovative 3D design technology" },
    { year: "2020", event: "Reached 500+ custom saunas built milestone" },
    { year: "2024", event: "Celebrating 20+ years of wellness craftsmanship" }
  ];

  const teamMembers = [
    {
      name: "Erik Lindqvist",
      role: "Founder & Master Craftsman",
      bio: "Third-generation Finnish sauna builder with 25+ years of experience. Erik learned traditional techniques from his grandfather in Lapland.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      certifications: ["Finnish Sauna Society", "Master Carpenter", "Wellness Design Specialist"]
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      bio: "Award-winning architect specializing in wellness spaces. Sarah brings modern innovation to traditional sauna design.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      certifications: ["Licensed Architect", "LEED Certified", "Wellness Design Expert"]
    },
    {
      name: "Marcus Thompson",
      role: "Installation Master",
      bio: "15+ years of precision installation experience. Marcus ensures every sauna is perfectly integrated into your space.",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
      certifications: ["Master Electrician", "Plumbing Certified", "Safety Specialist"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Wellness First",
      description: "Every decision we make prioritizes your health, relaxation, and wellbeing."
    },
    {
      icon: TreePine,
      title: "Sustainable Craftsmanship",
      description: "We use only sustainably sourced, premium materials that honor our planet."
    },
    {
      icon: Shield,
      title: "Lifetime Partnership",
      description: "Your satisfaction is our legacy. We're with you for the lifetime of your sauna."
    },
    {
      icon: Star,
      title: "Uncompromising Quality",
      description: "No shortcuts, no compromises. Only the finest materials and techniques."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal to-forest-green text-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-warm-cedar text-charcoal mb-6 text-base px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Est. 2003 - 20+ Years of Excellence
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Our Story of
                <span className="text-warm-cedar block">Craftsmanship</span>
              </h1>
              
              <p className="text-xl text-cream/90 mb-8 leading-relaxed">
                Born from a passion for Finnish wellness traditions and a commitment to unparalleled craftsmanship, 
                SaunaForge has been transforming homes into wellness sanctuaries for over two decades.
              </p>
              
              <div className="flex items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-cedar">500+</div>
                  <div className="text-sm text-cream/70">Saunas Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-cedar">100%</div>
                  <div className="text-sm text-cream/70">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-cedar">20+</div>
                  <div className="text-sm text-cream/70">Years Experience</div>
                </div>
              </div>
              
              <Link to={createPageUrl("Designer")}>
                <Button 
                  size="lg" 
                  className="bg-warm-cedar hover:bg-deep-cedar text-charcoal px-8 py-4 text-lg font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1521783599418-25a25a4f6d86?w=600&h=500&fit=crop" 
                alt="Master Craftsman at Work" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-warm-cedar p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-charcoal mb-1">Finnish</div>
                <div className="text-sm text-charcoal/70">Traditional Methods</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From humble beginnings to becoming the West Coast's premier custom sauna builder, 
              every milestone represents our commitment to quality and wellness.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-warm-cedar/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-none shadow-lg bg-cream hover:shadow-xl transition-all">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-forest-green mb-3">
                          {milestone.year}
                        </div>
                        <p className="text-charcoal/80 leading-relaxed">
                          {milestone.event}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-forest-green rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-warm-cedar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              These principles guide every decision we make and every sauna we craft.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mb-6 mx-auto">
                      <value.icon className="w-8 h-8 text-cream" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">
                      {value.title}
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Meet Our Master Craftsmen
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our team combines decades of traditional expertise with modern innovation 
              to create wellness sanctuaries that exceed expectations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8 text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                    />
                    
                    <h3 className="text-2xl font-bold text-charcoal mb-2">
                      {member.name}
                    </h3>
                    
                    <Badge className="bg-forest-green text-cream mb-4">
                      {member.role}
                    </Badge>
                    
                    <p className="text-charcoal/80 mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-charcoal text-sm mb-3">
                        Certifications:
                      </h4>
                      {member.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-4 h-4 text-forest-green" />
                          <span className="text-sm text-charcoal/80">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by industry leaders and satisfied customers alike.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Finnish Sauna Society",
                subtitle: "Certified Member",
                description: "Official recognition of traditional Finnish sauna craftsmanship"
              },
              {
                title: "Better Business Bureau",
                subtitle: "A+ Rating",
                description: "Consistently excellent customer service and business practices"
              },
              {
                title: "Green Building Council",
                subtitle: "Sustainable Builder",
                description: "Commitment to environmentally responsible construction"
              },
              {
                title: "Contractor's License",
                subtitle: "Fully Licensed & Insured",
                description: "Licensed in all states we serve with comprehensive insurance"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-cream hover:shadow-xl transition-all h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Award className="w-8 h-8 text-cream" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      {cert.title}
                    </h3>
                    <Badge className="bg-warm-cedar text-charcoal mb-4">
                      {cert.subtitle}
                    </Badge>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-forest-green to-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Experience Our Craftsmanship?
            </h2>
            <p className="text-xl text-cream/90 mb-12 leading-relaxed">
              Join our family of satisfied customers and experience the SaunaForge difference. 
              Your wellness sanctuary awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("Designer")}>
                <Button 
                  size="lg" 
                  className="bg-warm-cedar hover:bg-deep-cedar text-charcoal px-10 py-6 text-xl font-semibold"
                >
                  Design Your Sauna
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              
              <Link to={createPageUrl("Contact")}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-cream text-cream hover:bg-cream hover:text-charcoal px-10 py-6 text-xl font-semibold"
                >
                  Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}