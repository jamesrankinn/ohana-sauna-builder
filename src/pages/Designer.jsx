
import React, { useState, useEffect } from "react";
import { SaunaOrder } from "@/api/entities";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Check, Sparkles, Award, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import Sauna3DViewer from "../components/designer/Sauna3DViewer";
import SaunaImageViewer from "../components/designer/SaunaImageViewer";
import PackageSelector from "../components/designer/PackageSelector";
import CustomOptions from "../components/designer/CustomOptions";
import OrderSummary from "../components/designer/OrderSummary";
import CheckoutForm from "../components/designer/CheckoutForm";
import ConfigurationSummary from "../components/designer/ConfigurationSummary";
import Testimonials from "../components/designer/Testimonials";

export default function Designer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [configuration, setConfiguration] = useState({
    package_type: null,
    size: "3x3",
    wood_type: "cedar",
    heating_system: "electric",
    accessories: [],
    total_price: 0,
    consultation_notes: ""
  });
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    { id: 1, name: "Package", description: "Choose a base" },
    { id: 2, name: "Customize", description: "Select materials" },
    { id: 3, name: "Review", description: "Confirm details" },
  ];

  useEffect(() => {
    calculatePrice();
  }, [configuration]);

  const calculatePrice = () => {
    let basePrice = 0;
    
    const packagePrices = {
      essential: 8500,
      premium: 12500,
      luxury: 18500,
      custom: 6500
    };
    basePrice = packagePrices[configuration.package_type] || 0;
    
    const sizePrices = {
      "2x2": 0, "2x3": 1500, "3x3": 2500, "3x4": 4000, "4x4": 6000, "custom": 3000
    };
    basePrice += sizePrices[configuration.size] || 0;
    
    const woodPrices = {
      cedar: 0, pine: -800, hemlock: 400, aspen: 600, birch: 800
    };
    basePrice += woodPrices[configuration.wood_type] || 0;
    
    const heatingPrices = {
      electric: 0, wood_burning: 800, infrared: 1200, steam: 1500
    };
    basePrice += heatingPrices[configuration.heating_system] || 0;
    
    const accessoryPrices = {
      'LED Lighting': 450, 'Sound System': 650, 'Aromatherapy': 200, 'Temperature Control': 350,
      'Premium Benches': 800, 'Glass Door': 1200, 'Ventilation System': 550
    };
    
    const accessoryTotal = configuration.accessories.reduce((sum, acc) => sum + (accessoryPrices[acc] || 0), 0);
    
    setConfiguration(prev => ({ ...prev, total_price: basePrice + accessoryTotal }));
  };

  const handlePackageSelect = (pkg) => {
    setConfiguration(prev => ({ ...prev, package_type: pkg }));
  };
  
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowCheckout(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step) => {
    if (configuration.package_type && step <= currentStep) {
      setCurrentStep(step);
    }
  }

  const handleOrder = async (customerData) => {
    setIsSubmitting(true);
    try {
      const orderData = {
        ...configuration,
        ...customerData,
        estimated_delivery: new Date(Date.now() + 8 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      };
      
      await SaunaOrder.create(orderData);
      setShowCheckout(false);
      setCurrentStep(1);
      setConfiguration({
        package_type: null, size: "3x3", wood_type: "cedar", heating_system: "electric",
        accessories: [], total_price: 0, consultation_notes: ""
      });
    } catch (error) {
      console.error("Error creating order:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[var(--steam-white)]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[var(--rich-mahogany)] to-[var(--warm-cedar)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="bg-[var(--ember-orange)] text-white mb-4 border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Handcrafted to Perfection
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Design Your
              <span className="text-[var(--warm-cedar)] block"> Personal Oasis</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Experience unparalleled craftsmanship. From traditional wood-fired to modern infrared systems, build the sauna of your dreams.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showCheckout ? (
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Viewer Panel */}
            <div className="lg:col-span-3 h-[50vh] lg:h-auto lg:sticky top-24">
              {isMobile ? (
                <SaunaImageViewer configuration={configuration} />
              ) : (
                <Sauna3DViewer configuration={configuration} />
              )}
            </div>

            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Progress Steps */}
              <div className="flex items-center justify-between p-2 bg-[var(--soft-birch)] rounded-full shadow-sm border border-[var(--sauna-stone-gray)]/20">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div
                      className={`flex items-center gap-3 transition-opacity ${
                        currentStep >= step.id && configuration.package_type ? 'opacity-100 cursor-pointer' : 'opacity-40'
                      }`}
                      onClick={() => handleStepClick(step.id)}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        currentStep === step.id
                          ? 'bg-[var(--ember-orange)] text-white ring-4 ring-[var(--ember-orange)]/30'
                          : currentStep > step.id 
                          ? 'bg-[var(--deep-forest)] text-white' 
                          : 'bg-[var(--sauna-stone-gray)]/20 text-[var(--charcoal)]/60'
                      }`}>
                        {currentStep > step.id ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <span className="font-semibold">{step.id}</span>
                        )}
                      </div>
                      <div className="hidden md:block">
                        <p className="font-semibold text-[var(--charcoal)]">{step.name}</p>
                        <p className="text-sm text-[var(--charcoal)]/60">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 bg-[var(--sauna-stone-gray)]/20 mx-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <Card className="border-[var(--sauna-stone-gray)]/20 shadow-lg bg-[var(--steam-white)]">
                <CardContent className="p-6">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <PackageSelector
                        selectedPackage={configuration.package_type}
                        onPackageSelect={handlePackageSelect}
                      />
                    )}
                    {currentStep === 2 && (
                      <CustomOptions
                        configuration={configuration}
                        setConfiguration={setConfiguration}
                      />
                    )}
                    {currentStep === 3 && (
                      <OrderSummary configuration={configuration} />
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>

              <ConfigurationSummary configuration={configuration} />

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="px-8 py-6 text-base bg-transparent border-[var(--zen-sage)] text-[var(--zen-sage)] hover:bg-[var(--zen-sage)] hover:text-white"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!configuration.package_type}
                  className="px-8 py-6 text-base font-semibold bg-[var(--deep-forest)] hover:bg-[var(--deep-forest)]/90 text-white shadow-lg disabled:bg-[var(--sauna-stone-gray)]/50 disabled:cursor-not-allowed"
                >
                  {currentStep === 3 ? 'Finalize & Place Order' : 'Continue'}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <CheckoutForm
            configuration={configuration}
            onSubmit={handleOrder}
            onCancel={() => setShowCheckout(false)}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
      
      <Testimonials />
      
      {/* Why Choose Us Section */}
      <div className="bg-[var(--soft-birch)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--charcoal)]">Why Choose Ohana Saunas?</h2>
                <p className="mt-4 text-lg text-[var(--charcoal)]/70">Uncompromising quality and dedication to your wellness.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--warm-cedar)]/30 text-[var(--deep-forest)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8"/>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--charcoal)]">Master Craftsmanship</h3>
                    <p className="mt-2 text-[var(--charcoal)]/70">Each sauna is built by artisans with decades of experience, using only the finest, sustainably sourced materials.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--warm-cedar)]/30 text-[var(--deep-forest)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Truck className="w-8 h-8"/>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--charcoal)]">White-Glove Service</h3>
                    <p className="mt-2 text-[var(--charcoal)]/70">From design consultation to professional installation, we provide a seamless, hassle-free experience.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--warm-cedar)]/30 text-[var(--deep-forest)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8"/>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--charcoal)]">Lifetime Support</h3>
                    <p className="mt-2 text-[var(--charcoal)]/70">Our commitment to you doesn't end at delivery. We offer lifetime support and a comprehensive warranty.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
