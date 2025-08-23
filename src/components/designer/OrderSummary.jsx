
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Clock, Truck, Shield } from "lucide-react";

export default function OrderSummary({ configuration }) {
  const getPackageDetails = () => {
    const packages = {
      essential: { name: "Essential Package", basePrice: 8500 },
      premium: { name: "Premium Package", basePrice: 12500 },
      luxury: { name: "Luxury Package", basePrice: 18500 },
      custom: { name: "Custom Build", basePrice: 6500 }
    };
    return packages[configuration.package_type] || { name: "Unknown", basePrice: 0 };
  };

  const packageDetails = getPackageDetails();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-left">
        <h2 className="text-2xl font-bold text-charcoal mb-1">Review Your Creation</h2>
        <p className="text-charcoal/70">One final look before confirming your order.</p>
      </div>

      <Card className="border-stone-gray bg-white">
        <CardHeader>
          <CardTitle>Final Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-off-white rounded-lg">
              <span className="font-medium text-charcoal/80">Package</span>
              <Badge className="bg-charcoal text-white">{packageDetails.name}</Badge>
            </div>

            <div className="flex justify-between items-center p-3 bg-off-white rounded-lg">
              <span className="font-medium text-charcoal/80">Size</span>
              <span className="font-semibold text-charcoal">{configuration.size.replace('x', ' × ')}m</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-off-white rounded-lg">
              <span className="font-medium text-charcoal/80">Wood Type</span>
              <span className="font-semibold text-charcoal capitalize">{configuration.wood_type}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-off-white rounded-lg">
              <span className="font-medium text-charcoal/80">Heating System</span>
              <span className="font-semibold text-charcoal capitalize">{configuration.heating_system.replace('_', ' ')}</span>
            </div>

            {configuration.accessories.length > 0 && (
              <div className="p-3 bg-off-white rounded-lg">
                <span className="font-medium mb-2 block text-charcoal/80">Accessories</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {configuration.accessories.map((accessory) => (
                    <div key={accessory} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-charcoal">{accessory}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none bg-gradient-to-r from-charcoal to-gray-800 text-white">
        <CardContent className="p-6">
          <h3 className="font-bold mb-4">Your Investment Includes</h3>
          <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent-gold" />
                <span className="text-sm">8-Week Build Time</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-accent-gold" />
                <span className="text-sm">White-Glove Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent-gold" />
                <span className="text-sm">10-Year Warranty</span>
              </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
