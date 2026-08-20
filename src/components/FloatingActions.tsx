"use client";

import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="floating-speed-dial">
      {/* Phone Call Link */}
      <a
        href="tel:+916300793688"
        className="floating-btn floating-phone-btn"
        aria-label="Call Dr. Sai Sekhar Clinic"
        title="Call +91 63007 93688"
      >
        <i className="fas fa-phone-alt"></i>
      </a>

      {/* WhatsApp Link with Pulsing Ring */}
      <a
        href="https://wa.me/916300793688?text=Hello%20Dr.%20Sai%20Sekhar%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-wa-btn"
        aria-label="Chat with Dr. Sai Sekhar Clinic on WhatsApp"
        title="Instant WhatsApp Appointment"
      >
        <span className="pulse-ring"></span>
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
