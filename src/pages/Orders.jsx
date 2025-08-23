import React, { useState, useEffect } from "react";
import { SaunaOrder } from "@/api/entities";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { Package, Clock, Truck, CheckCircle, Calendar, User, Home, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const orderList = await SaunaOrder.list("-created_date");
      setOrders(orderList);
    } catch (error) {
      console.error("Error loading orders:", error);
    }
    setLoading(false);
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-warm-cedar text-charcoal",
      confirmed: "bg-forest-green text-sage-50",
      in_production: "bg-deep-cedar text-charcoal",
      shipped: "bg-forest-green text-sage-50",
      delivered: "bg-forest-green text-sage-50"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: Clock,
      confirmed: CheckCircle,
      in_production: Package,
      shipped: Truck,
      delivered: CheckCircle
    };
    const IconComponent = icons[status] || Clock;
    return <IconComponent className="w-4 h-4" />;
  };

  const ordersByStatus = {
    all: orders,
    pending: orders.filter(o => o.order_status === 'pending'),
    confirmed: orders.filter(o => o.order_status === 'confirmed'),
    in_production: orders.filter(o => o.order_status === 'in_production'),
    shipped: orders.filter(o => o.order_status === 'shipped'),
    delivered: orders.filter(o => o.order_status === 'delivered')
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sage-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-green mx-auto mb-4"></div>
          <p className="text-charcoal">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-warm-cedar to-deep-cedar py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Your Sauna Orders
            </h1>
            <p className="text-charcoal/80 max-w-2xl mx-auto text-lg">
              Track the progress of your custom sauna builds and manage your wellness investments
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {orders.length === 0 ? (
          <div className="text-center py-20">
            <Package className="w-20 h-20 text-charcoal/40 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-charcoal mb-4">No Orders Yet</h3>
            <p className="text-charcoal/70 mb-8 text-lg max-w-md mx-auto">
              Ready to create your wellness sanctuary? Start designing your custom sauna today.
            </p>
            <Link to={createPageUrl("Designer")}>
              <Button className="bg-forest-green hover:bg-forest-green/90 text-sage-50 px-8 py-4 text-lg">
                <Settings className="w-5 h-5 mr-2" />
                Design Your Sauna
              </Button>
            </Link>
          </div>
        ) : (
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full max-w-4xl mx-auto bg-white shadow-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-forest-green data-[state=active]:text-sage-50">
                All ({orders.length})
              </TabsTrigger>
              <TabsTrigger value="pending" className="data-[state=active]:bg-forest-green data-[state=active]:text-sage-50">
                Pending ({ordersByStatus.pending.length})
              </TabsTrigger>
              <TabsTrigger value="confirmed" className="data-[state=active]:bg-forest-green data-[state=active]:text-sage-50">
                Confirmed ({ordersByStatus.confirmed.length})
              </TabsTrigger>
              <TabsTrigger value="in_production" className="data-[state=active]:bg-forest-green data-[state=active]:text-sage-50">
                Production ({ordersByStatus.in_production.length})
              </TabsTrigger>
              <TabsTrigger value="shipped" className="data-[state=active]:bg-forest-green data-[state=active]:text-sage-50">
                Shipped ({ordersByStatus.shipped.length})
              </TabsTrigger>
              <TabsTrigger value="delivered" className="data-[state=active]:bg-forest-green data-[state=active]:text-sage-50">
                Delivered ({ordersByStatus.delivered.length})
              </TabsTrigger>
            </TabsList>

            {Object.entries(ordersByStatus).map(([status, statusOrders]) => (
              <TabsContent key={status} value={status}>
                <div className="grid gap-6">
                  {statusOrders.map((order) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <Card
                        className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                        onClick={() => setSelectedOrder(selectedOrder?.id === order.id ? null : order)}
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl mb-2 text-charcoal">
                                Order #{order.id.slice(-8).toUpperCase()}
                              </CardTitle>
                              <div className="flex items-center gap-4 text-sm text-charcoal/70">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Ordered: {format(new Date(order.created_date), "MMM d, yyyy")}
                                </div>
                                {order.estimated_delivery && (
                                  <div className="flex items-center gap-1">
                                    <Truck className="w-4 h-4" />
                                    Est. Delivery: {format(new Date(order.estimated_delivery), "MMM d, yyyy")}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={`${getStatusColor(order.order_status)} mb-2`}>
                                {getStatusIcon(order.order_status)}
                                <span className="ml-1 capitalize">
                                  {order.order_status.replace('_', ' ')}
                                </span>
                              </Badge>
                              <p className="text-2xl font-bold text-forest-green">
                                ${order.total_price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent>
                          <div className="grid md:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Package className="w-4 h-4 text-charcoal/60" />
                              <div>
                                <p className="text-xs text-charcoal/60">Package</p>
                                <p className="font-medium capitalize text-charcoal">{order.package_type}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Home className="w-4 h-4 text-charcoal/60" />
                              <div>
                                <p className="text-xs text-charcoal/60">Size</p>
                                <p className="font-medium text-charcoal">{order.size}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-warm-cedar rounded" />
                              <div>
                                <p className="text-xs text-charcoal/60">Wood</p>
                                <p className="font-medium capitalize text-charcoal">{order.wood_type}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-charcoal/60" />
                              <div>
                                <p className="text-xs text-charcoal/60">Customer</p>
                                <p className="font-medium text-charcoal">{order.customer_name}</p>
                              </div>
                            </div>
                          </div>

                          {selectedOrder?.id === order.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="border-t pt-4 mt-4 space-y-4"
                            >
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold mb-2 text-charcoal">Contact Information</h4>
                                  <div className="space-y-1 text-sm">
                                    <p><span className="text-charcoal/60">Email:</span> {order.customer_email}</p>
                                    <p><span className="text-charcoal/60">Phone:</span> {order.customer_phone}</p>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-charcoal">Installation Address</h4>
                                  <p className="text-sm text-charcoal/70">{order.shipping_address}</p>
                                </div>
                              </div>

                              {order.accessories && order.accessories.length > 0 && (
                                <div>
                                  <h4 className="font-semibold mb-2 text-charcoal">Premium Accessories</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {order.accessories.map((accessory) => (
                                      <Badge key={accessory} variant="outline" className="text-xs border-forest-green text-forest-green">
                                        {accessory}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {order.special_instructions && (
                                <div>
                                  <h4 className="font-semibold mb-2 text-charcoal">Special Instructions</h4>
                                  <p className="text-sm text-charcoal/70 bg-warm-cedar/10 p-3 rounded-lg">
                                    {order.special_instructions}
                                  </p>
                                </div>
                              )}

                              {order.consultation_notes && (
                                <div>
                                  <h4 className="font-semibold mb-2 text-charcoal">Consultation Notes</h4>
                                  <p className="text-sm text-charcoal/70 bg-warm-cedar/10 p-3 rounded-lg">
                                    {order.consultation_notes}
                                  </p>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}