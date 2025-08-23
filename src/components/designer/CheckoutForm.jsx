
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Loader2 } from "lucide-react";

export default function CheckoutForm({ configuration, onSubmit, onCancel, isSubmitting }) {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    shipping_address: "",
    special_instructions: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-2">Complete Your Order</h2>
        <p className="text-stone-600">We're excited to build your custom sauna</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Order Form */}
        <div className="lg:col-span-2">
          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.customer_name}
                      onChange={(e) => handleInputChange('customer_name', e.target.value)}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.customer_email}
                      onChange={(e) => handleInputChange('customer_email', e.target.value)}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.customer_phone}
                    onChange={(e) => handleInputChange('customer_phone', e.target.value)}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Installation Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.shipping_address}
                    onChange={(e) => handleInputChange('shipping_address', e.target.value)}
                    required
                    placeholder="Enter complete address including city, state, and zip code"
                    className="h-20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Textarea
                    id="instructions"
                    value={formData.special_instructions}
                    onChange={(e) => handleInputChange('special_instructions', e.target.value)}
                    placeholder="Any special requests or installation notes..."
                    className="h-24"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onCancel}
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Review
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-brand-green hover:bg-green-800 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 mr-2" />
                        Submit Order Request
                      </>
                    )}
                  </Button>
                </div>
                 <p className="text-xs text-center text-charcoal/50 pt-2">
                    A SaunaForge specialist will contact you to confirm details and arrange payment.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Package</span>
                  <span className="font-medium">
                    {configuration.package_type?.charAt(0).toUpperCase() + configuration.package_type?.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Size</span>
                  <span>{configuration.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Wood</span>
                  <span className="capitalize">{configuration.wood_type}</span>
                </div>
                <div className="flex justify-between">
                  <span>Heating</span>
                  <span className="capitalize">{configuration.heating_system?.replace('_', ' ')}</span>
                </div>
                {configuration.accessories.length > 0 && (
                  <div>
                    <span className="font-medium">Accessories:</span>
                    <ul className="list-disc list-inside text-xs mt-1 space-y-1">
                      {configuration.accessories.map((acc) => (
                        <li key={acc}>{acc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">${configuration.total_price.toLocaleString()}</span>
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  Installation & shipping included
                </p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg text-sm border border-green-200">
                <p className="font-medium text-brand-green mb-1">What Happens Next?</p>
                <ul className="text-brand-green/80 text-xs space-y-1 list-decimal list-inside">
                  <li>Design consultation call within 48 hours.</li>
                  <li>50% deposit required to begin production.</li>
                  <li>Receive build updates and final delivery schedule.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
