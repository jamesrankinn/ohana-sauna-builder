
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "(250) 883-6649",
      description: "Speak directly with our sauna experts",
      action: "tel:+12508836649"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@ohanasauna.ca",
      description: "Send us your questions and project details",
      action: "mailto:contact@ohanasauna.ca"
    },
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      value: "Vancouver, BC & Victoria, BC",
      description: "See our saunas in person, by appointment only",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      description: "We're here when you need us most",
      action: "#"
    }
  ];

  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Most installations take 2-5 days depending on complexity. Indoor saunas typically take 2-3 days, while outdoor installations may take 3-5 days including site preparation."
    },
    {
      question: "Do I need special permits?",
      answer: "We handle all permit requirements for you. Most indoor saunas require electrical permits, while outdoor saunas may need building permits. Our team manages the entire process."
    },
    {
      question: "What's included in the warranty?",
      answer: "We provide a 10-year structural warranty, 5-year electrical warranty, and 2-year comprehensive warranty on all components. Plus lifetime support and annual maintenance."
    },
    {
      question: "Can you install in any location?",
      answer: "We install throughout the Western United States. Our team will assess your location and provide detailed site requirements during the consultation process."
    },
    {
      question: "What's the maintenance requirement?",
      answer: "Minimal daily care (wiping down and ventilation) plus monthly deep cleaning. We offer professional maintenance services and provide detailed care instructions with every installation."
    },
    {
      question: "Do you offer financing?",
      answer: "Yes, we partner with leading financing companies to offer flexible payment options. Qualified buyers can get 0% APR for up to 12 months or extended payment plans."
    }
  ];

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal to-forest-green text-sage-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-warm-cedar text-charcoal mb-6 text-base px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Let's Create Your
              <span className="text-warm-cedar block">Dream Sauna</span>
            </h1>
            
            <p className="text-xl text-sage-50/90 mb-12 leading-relaxed">
              Ready to transform your home into a wellness sanctuary? 
              Our team of experts is here to guide you through every step of the process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-warm-cedar hover:bg-deep-cedar text-sage-50 px-10 py-6 text-xl font-semibold"
                onClick={() => document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})}
              >
                Free Consultation
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-sage-50 text-sage-50 hover:bg-sage-50 hover:text-charcoal px-10 py-6 text-xl font-semibold"
                onClick={() => window.open('tel:+12508836649')}
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Choose the communication method that works best for you. 
              We're committed to providing exceptional service at every touchpoint.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-sage-50 hover:shadow-xl transition-all h-full cursor-pointer group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <info.icon className="w-8 h-8 text-cream" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-charcoal mb-3">
                      {info.title}
                    </h3>
                    
                    <p className="text-lg font-semibold text-forest-green mb-3">
                      {info.value}
                    </p>
                    
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-sage-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-8">
                Start Your Project Today
              </h2>
              
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Tell us about your vision, and we'll provide a detailed consultation 
                with pricing, timeline, and design recommendations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-forest-green" />
                  <span className="text-charcoal font-medium">Free design consultation</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-forest-green" />
                  <span className="text-charcoal font-medium">Detailed project proposal</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-forest-green" />
                  <span className="text-charcoal font-medium">No obligation quote</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-forest-green" />
                  <span className="text-charcoal font-medium">Timeline and pricing clarity</span>
                </div>
              </div>
              
              <Card className="mt-8 border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex text-warm-cedar">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-charcoal">5.0 Rating</span>
                  </div>
                  <p className="text-charcoal/80 italic">
                    "SaunaForge exceeded every expectation. From the initial consultation 
                    to final installation, the process was seamless and professional."
                  </p>
                  <p className="text-charcoal font-medium mt-3">- Jennifer M., Aspen CO</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal">
                    Get Your Free Consultation
                  </CardTitle>
                  <p className="text-charcoal/70">
                    Fill out the form below and we'll contact you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Full Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => handleInputChange('projectType', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                        >
                          <option value="">Select project type</option>
                          <option value="indoor">Indoor Sauna</option>
                          <option value="outdoor">Outdoor Sauna</option>
                          <option value="commercial">Commercial Installation</option>
                          <option value="renovation">Sauna Renovation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-3months">1-3 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="6+months">6+ months</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-15k">Under $15,000</option>
                        <option value="15k-25k">$15,000 - $25,000</option>
                        <option value="25k-40k">$25,000 - $40,000</option>
                        <option value="40k+">$40,000+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Project Details
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your vision, space constraints, specific requirements, or any questions you have..."
                        className="h-32"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-forest-green hover:bg-forest-green/90 text-sage-50 py-4 text-lg font-semibold"
                    >
                      Get My Free Consultation
                      <Calendar className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <p className="text-center text-charcoal/60 text-sm">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sage-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-charcoal/80">
              Get answers to the most common questions about our sauna design and installation process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-charcoal mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed">
                      {faq.answer}
                    </p>
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
            <p className="text-charcoal/80 mb-6">
              Have a question not covered here?
            </p>
            <Button 
              size="lg"
              className="bg-forest-green hover:bg-forest-green/90 text-sage-50 px-8 py-4"
              onClick={() => window.open('tel:+12508836649')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Our Experts
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
