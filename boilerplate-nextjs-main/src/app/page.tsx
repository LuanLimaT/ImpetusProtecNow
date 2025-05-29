"use client";

import { useState } from "react";
import Hero from "./Home/Hero";
import About from "./Home/About";
import Services from "./Home/Services";
import Testimonials from "./Home/Testimonials";
import Footer from "./Home/Footer";
import FloatingChat from "./Home/FloatingChat";
import CheckoutModal from "./Home/CheckoutModal";


import { services } from "@/constants/services";
import { Service } from "@/types/example";
import Header from "@/shared/Header/Header";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleServiceBuy = (service: Service) => {
    setSelectedService(service);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setSelectedService(null);
  };

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services services={services} onServiceBuy={handleServiceBuy} />
      <Testimonials />
      <Footer />
      <FloatingChat />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        service={selectedService}
      />
    </div>
  );
}
