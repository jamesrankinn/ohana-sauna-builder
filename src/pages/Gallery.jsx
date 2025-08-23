import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Saunas" },
    { id: "indoor", name: "Indoor" },
    { id: "outdoor", name: "Outdoor" },
    { id: "compact", name: "Compact" },
    { id: "luxury", name: "Luxury" }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Nordic Cedar Outdoor Sauna",
      category: "outdoor",
      size: "3×4m",
      wood: "Cedar",
      heating: "Wood-fired",
      price: "$15,200",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      features: ["Glass Door", "LED Lighting", "Premium Benches"]
    },
    {
      id: 2,
      title: "Modern Indoor Infrared",
      category: "indoor",
      size: "2×3m",
      wood: "Hemlock",
      heating: "Infrared",
      price: "$11,800",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      features: ["Smart Controls", "Sound System", "Aromatherapy"]
    },
    {
      id: 3,
      title: "Compact Urban Sauna",
      category: "compact",
      size: "2×2m",
      wood: "Pine",
      heating: "Electric",
      price: "$8,900",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      features: ["Space Efficient", "Quick Install", "Digital Display"]
    },
    {
      id: 4,
      title: "Luxury Spa Experience",
      category: "luxury",
      size: "4×4m",
      wood: "Birch",
      heating: "Steam",
      price: "$24,500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      features: ["Premium Materials", "Full Automation", "Integrated Sound"]
    },
    {
      id: 5,
      title: "Traditional Finnish Style",
      category: "outdoor",
      size: "3×3m",
      wood: "Aspen",
      heating: "Wood-fired",
      price: "$13,400",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      features: ["Authentic Design", "Hand-crafted", "Traditional Stove"]
    },
    {
      id: 6,
      title: "Glass House Sauna",
      category: "luxury",
      size: "3×4m",
      wood: "Cedar",
      heating: "Electric",
      price: "$19,800",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      features: ["Floor-to-ceiling Glass", "Modern Design", "City Views"]
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sauna Gallery
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Discover our collection of handcrafted saunas. Each one uniquely designed for the perfect wellness experience.
            </p>
            <Link to={createPageUrl("Designer")}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Design Your Own
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? 'bg-amber-600 hover:bg-amber-700'
                  : 'hover:bg-amber-50 hover:border-amber-200'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white">
                      {item.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div>
                      <span className="text-stone-500">Size:</span>
                      <span className="font-medium ml-2">{item.size}</span>
                    </div>
                    <div>
                      <span className="text-stone-500">Wood:</span>
                      <span className="font-medium ml-2">{item.wood}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-stone-500">Heating:</span>
                      <span className="font-medium ml-2">{item.heating}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-stone-700">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <Link to={createPageUrl("Designer")}>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        Customize Similar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">
              Ready to Build Your Dream Sauna?
            </h3>
            <p className="text-stone-600 mb-6">
              Our design team will work with you to create the perfect sauna for your space and lifestyle.
            </p>
            <Link to={createPageUrl("Designer")}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                Start Designing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}