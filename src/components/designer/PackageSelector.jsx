import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PackageSelector({ selectedPackage, onPackageSelect }) {
  const packages = [
    {
      id: "essential",
      name: "Essential Collection",
      price: 8500,
      image: "https://images.unsplash.com/photo-1593482146727-3ae39f280bce?w=800&q=80",
      features: [
        "Nordic Pine construction",
        "Efficient electric heater",
        "Standard bench seating",
        "2-year comprehensive warranty"
      ],
      badge: "Most Popular"
    },
    {
      id: "premium",
      name: "Premium Collection",
      price: 12500,
      image: "https://images.unsplash.com/photo-1586310191562-58a436926343?w=800&q=80",
      features: [
        "Premium Western Red Cedar",
        "Choice of heating systems",
        "Ambient LED lighting",
        "5-year comprehensive warranty"
      ],
      badge: "Best Value"
    },
    {
      id: "luxury",
      name: "Luxury Collection",
      price: 18500,
      image: "https://images.unsplash.com/photo-1614926521770-2023d6c5b4d4?w=800&q=80",
      features: [
        "Premium hardwood selection",
        "Full glass front panel",
        "Integrated sound system",
        "10-year comprehensive warranty"
      ],
      badge: "Ultimate Experience"
    },
    {
      id: "custom",
      name: "Bespoke Build",
      price: "From 6500",
      image: "https://images.unsplash.com/photo-1521783599418-25a25a4f6d86?w=800&q=80",
      features: [
        "Fully custom dimensions",
        "Any wood type available",
        "Dedicated design consultation",
        "White-glove installation"
      ],
      badge: "Your Vision"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-left mb-6">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-1">Select Your Foundation</h2>
        <p className="text-[var(--charcoal)]/70">Each collection is a starting point for your perfect sauna.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="h-full"
            onClick={() => onPackageSelect(pkg.id)}
          >
            <Card
              className={`cursor-pointer transition-all duration-300 border-2 h-full flex flex-col overflow-hidden group ${
                selectedPackage === pkg.id
                  ? 'border-[var(--deep-forest)] shadow-xl'
                  : 'border-[var(--sauna-stone-gray)]/20 hover:border-[var(--sauna-stone-gray)]/80 hover:shadow-lg bg-white'
              }`}
            >
              <div className="relative h-48">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-3 right-3 bg-[var(--ember-orange)] text-white border-none">{pkg.badge}</Badge>
                <div className="absolute bottom-3 left-3">
                    <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                    <p className="text-lg font-bold text-white/90">
                      {typeof pkg.price === 'number' ? `$${pkg.price.toLocaleString()}` : pkg.price}
                    </p>
                </div>
              </div>

              <CardContent className="p-6 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[var(--deep-forest)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--charcoal)]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}