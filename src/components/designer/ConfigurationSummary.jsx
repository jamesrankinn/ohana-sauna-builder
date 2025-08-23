import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ConfigurationSummary({ configuration }) {
  if (!configuration || !configuration.package_type) {
    return null;
  }

  const {
    package_type,
    size,
    wood_type,
    heating_system,
    accessories,
    total_price,
  } = configuration;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-[var(--soft-birch)]/50 border-[var(--sauna-stone-gray)]/20">
        <CardHeader>
          <CardTitle className="text-lg text-[var(--charcoal)]">Your Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[var(--charcoal)]/80">Package</span>
            <Badge className="bg-[var(--zen-sage)] text-white capitalize border-0">{package_type}</Badge>
          </div>
          <div className="border-t border-[var(--sauna-stone-gray)]/20" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--charcoal)]/80">Size:</span>
              <span className="font-medium">{size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--charcoal)]/80">Wood:</span>
              <span className="font-medium capitalize">{wood_type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--charcoal)]/80">Heating:</span>
              <span className="font-medium capitalize">{heating_system.replace('_', ' ')}</span>
            </div>
            {accessories.length > 0 && (
               <div className="flex justify-between">
                <span className="text-[var(--charcoal)]/80">Accessories:</span>
                <span className="font-medium">{accessories.length}</span>
              </div>
            )}
          </div>
          <div className="border-t border-[var(--sauna-stone-gray)]/20" />
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-[var(--charcoal)]">Estimated Total</span>
            <span className="font-bold text-xl text-[var(--deep-forest)]">
              ${total_price.toLocaleString()}
            </span>
          </div>
           <p className="text-xs text-center text-[var(--charcoal)]/60 pt-2">
            Final price confirmed upon consultation. Shipping & installation calculated separately.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}