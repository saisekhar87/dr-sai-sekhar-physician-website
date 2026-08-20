"use client";

import { useState, useEffect } from "react";

interface MobileStickyCtaProps {
  serviceName: string;
}

export default function MobileStickyCta({ serviceName }: MobileStickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const waMessage = `Hello Dr. Sai Sekhar Clinic, I would like to book a consultation for ${serviceName}.`;
  const whatsappUrl = `https://wa.me/916300793688?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="mobile-sticky-cta-bar">
      <div className="mobile-cta-info">
        <span className="mobile-cta-label">Consultation</span>
        <span className="mobile-cta-title">{serviceName}</span>
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mobile-cta-btn"
      >
        <i className="fab fa-whatsapp"></i> Book via WhatsApp
      </a>
    </div>
  );
}
