import React from "react";
import { Truck, Hand, ShieldCheck } from "lucide-react";

const ServiceHighlights = () => {
  return (
    <div className="bg-[#eeeeee] rounded-2xl  py-4 max-w-7xl mx-auto  shadow-sm">
      <div className="flex flex-col sm:flex-row justify-around items-center text-center gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <Truck className="w-6 h-6" />
          <p className="text-sm font-semibold">
            FREE SHIPPING ON <br /> ORDERS OVER ₹799
          </p>
        </div>
        <div className="hidden sm:block h-8 w-px bg-gray-400" />
        <div className="flex items-center gap-3">
          <Hand className="w-6 h-6" />
          <p className="text-sm font-semibold">
            PROMISE, ON TIME <br /> DELIVERY
          </p>
        </div>
        <div className="hidden sm:block h-8 w-px bg-gray-400" />
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6" />
          <p className="text-sm font-semibold">
            100% SECURE <br /> PAYMENT
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
