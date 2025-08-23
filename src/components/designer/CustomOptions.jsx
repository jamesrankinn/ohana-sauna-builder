import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const sizeOptions = ["2x2", "2x3", "3x3", "3x4", "4x4", "custom"];
const woodOptions = ["cedar", "pine", "hemlock", "aspen", "birch"];
const heatingOptions = ["electric", "wood_burning", "infrared", "steam"];
const accessoryOptions = [
  'LED Lighting', 'Sound System', 'Aromatherapy', 'Temperature Control',
  'Premium Benches', 'Glass Door', 'Ventilation System'
];

const OptionCard = ({ title, children }) => (
  <Card className="bg-[var(--soft-birch)]/50 border-[var(--sauna-stone-gray)]/20">
    <CardHeader>
      <CardTitle className="text-lg text-[var(--charcoal)]">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

export default function CustomOptions({ configuration, setConfiguration }) {
  const handleSelectChange = (field, value) => {
    setConfiguration(prev => ({ ...prev, [field]: value }));
  };

  const handleAccessoryChange = (accessory) => {
    setConfiguration(prev => {
      const currentAccessories = prev.accessories || [];
      const newAccessories = currentAccessories.includes(accessory)
        ? currentAccessories.filter(a => a !== accessory)
        : [...currentAccessories, accessory];
      return { ...prev, accessories: newAccessories };
    });
  };

  const handleNotesChange = (e) => {
    setConfiguration(prev => ({ ...prev, consultation_notes: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-left mb-6">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-1">Customize Your Sauna</h2>
        <p className="text-[var(--charcoal)]/70">Select the perfect materials and features for your wellness sanctuary.</p>
      </div>

      <div className="space-y-4">
        <OptionCard title="Dimensions & Layout">
          <Label htmlFor="size-select">Sauna Size (meters)</Label>
          <Select value={configuration.size} onValueChange={(value) => handleSelectChange('size', value)}>
            <SelectTrigger id="size-select" className="bg-white">
              <SelectValue placeholder="Select size..." />
            </SelectTrigger>
            <SelectContent>
              {sizeOptions.map(size => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </OptionCard>

        <OptionCard title="Materials & Heating">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="wood-select">Wood Type</Label>
              <Select value={configuration.wood_type} onValueChange={(value) => handleSelectChange('wood_type', value)}>
                <SelectTrigger id="wood-select" className="bg-white">
                  <SelectValue placeholder="Select wood..." />
                </SelectTrigger>
                <SelectContent>
                  {woodOptions.map(wood => (
                    <SelectItem key={wood} value={wood} className="capitalize">{wood}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="heating-select">Heating System</Label>
              <Select value={configuration.heating_system} onValueChange={(value) => handleSelectChange('heating_system', value)}>
                <SelectTrigger id="heating-select" className="bg-white">
                  <SelectValue placeholder="Select heating..." />
                </SelectTrigger>
                <SelectContent>
                  {heatingOptions.map(heater => (
                    <SelectItem key={heater} value={heater} className="capitalize">{heater.replace('_', ' ')}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </OptionCard>

        <OptionCard title="Premium Accessories">
          <div className="grid grid-cols-2 gap-4">
            {accessoryOptions.map(acc => (
              <div key={acc} className="flex items-center space-x-2">
                <Checkbox
                  id={acc}
                  checked={configuration.accessories.includes(acc)}
                  onCheckedChange={() => handleAccessoryChange(acc)}
                />
                <Label htmlFor={acc} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {acc}
                </Label>
              </div>
            ))}
          </div>
        </OptionCard>
        
        <OptionCard title="Consultation Notes">
           <Textarea
              placeholder="Any specific requests or questions for our design team? Let us know here."
              value={configuration.consultation_notes}
              onChange={handleNotesChange}
              className="bg-white h-24"
            />
        </OptionCard>
      </div>
    </motion.div>
  );
}