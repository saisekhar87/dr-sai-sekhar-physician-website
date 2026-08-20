"use client";

import { useState, useEffect } from "react";

export default function ClinicStatusBadge({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    text: string;
    subtext: string;
    colorClass: "open" | "upcoming" | "closed";
  }>({
    isOpen: false,
    text: "Checking Clinic Timings...",
    subtext: "Trinetra Medicals, Muralinagar",
    colorClass: "upcoming"
  });

  useEffect(() => {
    const updateClinicStatus = () => {
      const now = new Date();
      // Format time in Asia/Kolkata timezone
      const kolkataString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const kolkataDate = new Date(kolkataString);

      const day = kolkataDate.getDay(); // 0 = Sunday, 1-6 = Mon-Sat
      const hour = kolkataDate.getHours();
      const minutes = kolkataDate.getMinutes();
      const timeInMinutes = hour * 60 + minutes;

      const openTime = 18 * 60; // 6:00 PM (1080 mins)
      const closeTime = 21 * 60; // 9:00 PM (1260 mins)

      if (day === 0) {
        // Sunday
        setStatus({
          isOpen: false,
          text: "",
          subtext: "",
          colorClass: "closed"
        });
      } else if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
        // Mon-Sat between 6 PM and 9 PM
        setStatus({
          isOpen: true,
          text: "Open Now for Consultations",
          subtext: "Trinetra Medicals · 6 PM - 9 PM",
          colorClass: "open"
        });
      } else {
        // Outside 6 PM - 9 PM
        setStatus({
          isOpen: false,
          text: "",
          subtext: "",
          colorClass: "closed"
        });
      }
    };

    updateClinicStatus();
    const interval = setInterval(updateClinicStatus, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  // Only render badge when clinic is actively open (between 6 PM and 9 PM)
  if (!status.isOpen) return null;

  if (compact) {
    return (
      <div className={`clinic-live-badge compact ${status.colorClass}`} title={status.subtext}>
        <span className="live-dot"></span>
        <span className="live-text">{status.text}</span>
      </div>
    );
  }

  return (
    <div className={`clinic-live-badge full ${status.colorClass}`}>
      <span className="live-dot"></span>
      <div className="badge-text-group">
        <span className="badge-main-text">{status.text}</span>
        <span className="badge-sub-text">{status.subtext}</span>
      </div>
    </div>
  );
}
