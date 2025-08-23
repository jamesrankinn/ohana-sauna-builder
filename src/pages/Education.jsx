import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Thermometer, 
  Heart, 
  Brain, 
  Shield, 
  Droplets,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Education() {
  const saunaTypes = [
    {
      id: "traditional",
      name: "Traditional Finnish",
      icon: Thermometer,
      temperature: "80-100°C (176-212°F)",
      humidity: "10-20%",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "The authentic sauna experience using wood-burning or electric heaters with sauna stones.",
      benefits: [
        "Deep heat penetration",
        "Traditional löyly steam",
        "Social wellness experience",
        "Cardiovascular benefits"
      ],
      bestFor: "Those seeking the authentic Finnish experience and social sauna sessions"
    },
    {
      id: "infrared",
      name: "Infrared Sauna",
      icon: Zap,
      temperature: "45-60°C (113-140°F)",
      humidity: "0-5%",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      description: "Uses infrared light to heat your body directly rather than heating the air around you.",
      benefits: [
        "Lower operating temperatures",
        "Energy efficient",
        "Deeper tissue penetration",
        "Shorter warm-up time"
      ],
      bestFor: "Heat-sensitive individuals and those seeking targeted therapeutic benefits"
    },
    {
      id: "steam",
      name: "Steam Room",
      icon: Droplets,
      temperature: "40-50°C (104-122°F)",
      humidity: "100%",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      description: "High humidity environment that opens pores and provides respiratory benefits.",
      benefits: [
        "Respiratory health improvement",
        "Skin hydration",
        "Muscle relaxation",
        "Sinus congestion relief"
      ],
      bestFor: "Those with respiratory issues or seeking skin and breathing benefits"
    }
  ];

  const healthBenefits = [
    {
      category: "Cardiovascular Health",
      icon: Heart,
      color: "text-red-500",
      benefits: [
        "Improved circulation and blood flow",
        "Lower blood pressure over time", 
        "Enhanced heart rate variability",
        "Reduced risk of cardiovascular disease",
        "Improved endothelial function"
      ]
    },
    {
      category: "Mental Wellbeing",
      icon: Brain,
      color: "text-blue-500",
      benefits: [
        "Stress reduction and cortisol decrease",
        "Enhanced mood and relaxation",
        "Better sleep quality",
        "Increased mindfulness and meditation",
        "Social connection and bonding"
      ]
    },
    {
      category: "Physical Recovery",
      icon: Shield,
      color: "text-green-500",
      benefits: [
        "Muscle recovery after exercise",
        "Reduced inflammation markers",
        "Pain relief for chronic conditions",
        "Improved flexibility and mobility",
        "Enhanced immune system function"
      ]
    }
  ];

  const maintenanceTips = [
    {
      title: "Daily Care",
      frequency: "After each use",
      tasks: [
        "Wipe down benches with clean cloth",
        "Leave door open to air dry",
        "Check ventilation is working",
        "Remove any towels or accessories"
      ]
    },
    {
      title: "Weekly Maintenance",
      frequency: "Once per week",
      tasks: [
        "Clean interior with mild soap solution",
        "Inspect heater and stones",
        "Check door seals and hinges",
        "Clean exterior surfaces"
      ]
    },
    {
      title: "Monthly Deep Clean",
      frequency: "Once per month",
      tasks: [
        "Deep clean all surfaces",
        "Inspect electrical connections",
        "Check and clean ventilation system",
        "Treat wood surfaces if needed"
      ]
    },
    {
      title: "Annual Service",
      frequency: "Once per year",
      tasks: [
        "Professional inspection and service",
        "Replace worn components",
        "Update safety systems",
        "Wood restoration if needed"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal to-forest-green text-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-warm-cedar text-charcoal mb-6 text-base px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Sauna Education Hub
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Everything You Need to Know
              <span className="text-warm-cedar block">About Saunas</span>
            </h1>
            
            <p className="text-xl text-cream/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover the science, benefits, and traditions behind sauna wellness. 
              Make informed decisions about your health and home sanctuary.
            </p>
            
            <Link to={createPageUrl("Designer")}>
              <Button 
                size="lg" 
                className="bg-warm-cedar hover:bg-deep-cedar text-charcoal px-10 py-6 text-xl font-semibold"
              >
                Design Your Sauna
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sauna Types Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Types of Saunas
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Understanding the differences helps you choose the perfect sauna for your wellness goals and preferences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {saunaTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-cream hover:shadow-xl transition-all h-full overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={type.image} 
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-forest-green text-cream">
                        <type.icon className="w-4 h-4 mr-1" />
                        {type.name}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-warm-cedar/20 rounded-lg">
                        <div className="font-semibold text-charcoal text-sm">Temperature</div>
                        <div className="text-xs text-charcoal/70 mt-1">{type.temperature}</div>
                      </div>
                      <div className="text-center p-3 bg-warm-cedar/20 rounded-lg">
                        <div className="font-semibold text-charcoal text-sm">Humidity</div>
                        <div className="text-xs text-charcoal/70 mt-1">{type.humidity}</div>
                      </div>
                    </div>
                    
                    <p className="text-charcoal/80 mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-charcoal mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0" />
                            <span className="text-charcoal/80 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-charcoal mb-2">Best For:</h4>
                      <p className="text-charcoal/80 text-sm">{type.bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-warm-cedar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Scientifically Proven Benefits
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Decades of research confirm the profound health benefits of regular sauna use.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {healthBenefits.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
                        <category.icon className={`w-6 h-6 text-cream`} />
                      </div>
                      <CardTitle className="text-xl text-charcoal">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Best Practices */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Sauna Safety & Best Practices
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Maximize benefits and ensure safety with proper sauna etiquette and usage guidelines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    Do's
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Shower before entering the sauna",
                      "Sit on a clean towel",
                      "Stay hydrated - drink water before, during, and after",
                      "Start with shorter sessions (5-15 minutes)",
                      "Listen to your body and exit if uncomfortable",
                      "Cool down gradually after sessions",
                      "Wait at least 2 hours after eating before sauna use"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    Don'ts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Don't use sauna if pregnant without doctor approval",
                      "Avoid alcohol before or during sauna use",
                      "Don't stay in if you feel dizzy or unwell",
                      "Avoid wearing jewelry or metal objects",
                      "Don't use sauna with open wounds or infections",
                      "Never fall asleep in the sauna",
                      "Don't use sauna if taking certain medications"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Sauna Maintenance Guide
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Keep your sauna in perfect condition with our comprehensive maintenance schedule.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-cream hover:shadow-xl transition-all h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-6 h-6 text-forest-green" />
                      <CardTitle className="text-lg text-charcoal">
                        {tip.title}
                      </CardTitle>
                    </div>
                    <Badge className="bg-warm-cedar text-charcoal w-fit">
                      {tip.frequency}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tip.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal/80 text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Card className="border-none shadow-lg bg-forest-green text-cream max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Professional Maintenance Services
                </h3>
                <p className="text-cream/90 mb-6">
                  Let our experts handle the maintenance. We offer comprehensive service packages 
                  to keep your sauna in pristine condition year-round.
                </p>
                <Link to={createPageUrl("Contact")}>
                  <Button 
                    size="lg" 
                    className="bg-warm-cedar hover:bg-deep-cedar text-charcoal"
                  >
                    Schedule Service
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
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
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-cream/90 mb-12 leading-relaxed">
              Now that you understand the benefits and options, let's design the perfect sauna for your home and lifestyle.
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