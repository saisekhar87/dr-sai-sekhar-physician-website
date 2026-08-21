import Image from "next/image";
import Link from "next/link";
import HomeSlider from "@/components/HomeSlider";
import ReviewsSection from "@/components/ReviewsSection";
import ContactForm from "@/components/ContactForm";
import AnimatedCounterSection from "@/components/AnimatedCounterSection";
import FaqSection from "@/components/FaqSection";
import AwarenessReels from "@/components/AwarenessReels";
import FeaturedServicesTabs from "@/components/FeaturedServicesTabs";
import { getServiceImage } from "@/lib/servicesImageMap";

// Force static rendering with dynamic revalidation (ISR)
export const revalidate = 3600; // Revalidate every hour

async function getClinicData() {
  return {
    banners: [],
    settings: {
      contact: {
        phone: "6300793688",
        whatsapp_no: "6300793688",
        email: "info@drsaisekharphysician.com"
      }
    },
    counters: [
      { id: 1, title: "Patients Treated", count: "2,00,000+" },
      { id: 2, title: "Chronic Disease Management Cases", count: "1,00,000+" },
      { id: 3, title: "Preventive Health Screenings", count: "50,000+" },
      { id: 4, title: "Emergency Cases Handled", count: "30,000+" }
    ],
    services: [
      { id: 1, category_name: "Diabetes", services: [{ id: 39, name: "Type 1 DM", slug: "type-1-dm" }, { id: 40, name: "Type II DM", slug: "type-ii-dm" }, { id: 41, name: "Diabetic Neuropathy", slug: "diabetic-neuropathy" }, { id: 42, name: "Diabetic Nephropathy", slug: "diabetic-nephropathy" }] },
      { id: 2, category_name: "Thyroid Disorder", services: [{ id: 44, name: "Hypothyroidism", slug: "hypothyroidism" }, { id: 45, name: "Hyperthyroidism", slug: "hyperthyroidism" }] },
      { id: 3, category_name: "Fever & Infections", services: [{ id: 47, name: "Dengue fever", slug: "dengue-fever" }, { id: 48, name: "Malaria", slug: "malaria" }, { id: 49, name: "UTI", slug: "urinary-tract-infection-uti" }] },
      { id: 4, category_name: "Headache Care", services: [{ id: 54, name: "Tension Headache", slug: "tension-headache" }, { id: 55, name: "Migraine", slug: "migraine" }] },
      { id: 5, category_name: "Bone and Joint", services: [{ id: 58, name: "Rheumatoid Arthritis", slug: "rheumatoid-arthritis" }, { id: 59, name: "Cervical Spondylosis", slug: "cervical-spondylosis" }] },
      { id: 6, category_name: "Gastro Intestinal", services: [{ id: 61, name: "Acute Gastritis", slug: "acute-gastritis" }, { id: 63, name: "Diarrhea", slug: "acute-and-chronic-diarrhea" }] },
      { id: 7, category_name: "Renal Care", services: [{ id: 66, name: "Acute Renal Failure", slug: "acute-renal-failure" }, { id: 69, name: "Kidney stones", slug: "kidney-stones" }] },
      { id: 8, category_name: "Cardiac & Hypertension", services: [{ id: 43, name: "Hypertension (HTN)", slug: "hypertension-htn" }, { id: 70, name: "Ischemic Heart Disease", slug: "ischemic-heart-disease" }] }
    ],
    videos: []
  };
}

export default async function HomePage() {
  const data = await getClinicData();

  return (
    <div className="home-page">
      {/* WebPage & Physician Structured Schema (AEO/GEO/SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.drsaisekharphysician.com/#webpage",
                "url": "https://www.drsaisekharphysician.com/",
                "name": "Dr Sai Sekhar P | Best Physician in Visakhapatnam / Vizag",
                "description": "Dr. Sai Sekhar P is the best physician in Visakhapatnam / Vizag. MD General Medicine, Diabetologist, & Infectious Disease Specialist at Trinetra Medicals, Muralinagar.",
                "datePublished": "2024-01-01T00:00:00+05:30",
                "dateModified": "2026-08-18T00:00:00+05:30",
                "inLanguage": "en-IN",
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://www.drsaisekharphysician.com/#website",
                  "url": "https://www.drsaisekharphysician.com/",
                  "name": "Dr. Sai Sekhar P - General Physician Visakhapatnam"
                },
                "about": {
                  "@type": "Person",
                  "@id": "https://www.drsaisekharphysician.com/#physician",
                  "name": "Dr. Sai Sekhar P (Dr. Sai Sekhar Pyla)",
                  "jobTitle": "MD General Medicine | Diabetologist | Infectious Disease Specialist",
                  "medicalSpecialty": ["GeneralMedicine", "Endocrinology", "InfectiousDisease"],
                  "telephone": "+916300793688"
                }
              },
              {
                "@type": "Physician",
                "@id": "https://www.drsaisekharphysician.com/#physician",
                "name": "Dr. Sai Sekhar P",
                "alternateName": ["Dr. Sai Sekhar Pyla", "Best Physician in Visakhapatnam / Vizag"],
                "medicalSpecialty": ["GeneralMedicine", "Diabetology", "InfectiousDisease"],
                "telephone": "+916300793688",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Beside Abhiruchi Sweets, Ramalayam Street, Muralinagar",
                  "addressLocality": "Visakhapatnam",
                  "addressRegion": "Andhra Pradesh",
                  "postalCode": "530007",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.drsaisekharphysician.com/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is the best physician in Visakhapatnam / Vizag?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dr. Sai Sekhar P (MD General Medicine, Diabetologist, Infectious Disease Specialist) with 12 years of clinical experience is widely recognized as the best physician in Visakhapatnam / Vizag. He practices primarily at Trinetra Medicals, Muralinagar, Visakhapatnam."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Where is Dr. Sai Sekhar P's clinic located in Visakhapatnam?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dr. Sai Sekhar P practices at Trinetra Medicals, located Beside Abhiruchi Sweets, Ramalayam Street, Muralinagar, Visakhapatnam (6:00 PM to 9:00 PM, Monday to Saturday)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What conditions does Dr. Sai Sekhar P treat?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dr. Sai Sekhar P specializes in Type 1 & Type 2 Diabetes management, Thyroid disorders (Hypo/Hyperthyroidism), Dengue & Infectious fevers, Hypertension, Asthma/COPD, Gastrointestinal issues, and Kidney care."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* 1. Hero Slideshow Section */}
      <HomeSlider banners={data.banners} />

      {/* 2. Doctor Bio Section */}
      <section className="about-doctor-section scroll-reveal">
        <div className="container doctor-grid">
          <div className="doctor-image-wrapper">
            <div className="doctor-blob-bg">
              <Image
                src="/images/two.webp"
                alt="Dr. Sai Sekhar Pyla - General Physician in Visakhapatnam"
                width={450}
                height={550}
                className="doctor-main-image"
                priority
                sizes="(max-width: 767px) 100vw, 450px"
              />
            </div>
            <div className="doctor-experience-badge">
              <span className="exp-num">12</span>
              <span className="exp-text">YEARS OF MEDICAL EXCELLENCE</span>
            </div>
          </div>
          
          <div className="doctor-info-content">
            <span className="badge-pill">ABOUT THE PHYSICIAN</span>
            <h1 className="section-title-doctor" style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", fontWeight: 800, color: "var(--neutral-dark)", lineHeight: 1.25, marginBottom: "12px" }}>
              Dr. Sai Sekhar Pyla - General Physician & Diabetologist in Visakhapatnam
            </h1>
            <h2 className="doctor-credentials-subtitle" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--primary)", marginBottom: "8px" }}>
              MD General Medicine | Diabetologist | Infectious Disease Specialist
            </h2>
            <p className="doctor-hospitals-subtitle" style={{ fontSize: "1.02rem", color: "var(--neutral-muted)", marginBottom: "20px" }}>
              Consultant Physician at CARE Hospital & <strong>Trinetra Medicals, Muralinagar, Visakhapatnam</strong>
            </p>

            {/* Executive Medical Summary & Key Takeaways Card (AEO & GEO Optimization) */}
            <div className="top-key-takeaway-card" style={{ backgroundColor: "#f0fdf4", border: "1px solid rgba(13, 122, 102, 0.25)", padding: "20px 24px", borderRadius: "16px", marginBottom: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span className="badge-pill" style={{ backgroundColor: "var(--primary)", color: "#ffffff", padding: "4px 12px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 700 }}>
                  EXECUTIVE MEDICAL SUMMARY
                </span>
                <span style={{ fontSize: "0.98rem", fontWeight: 800, color: "var(--neutral-dark)" }}>
                  Key Care Takeaways & Doctor Overview
                </span>
              </div>

              <p style={{ margin: "0 0 12px 0", fontSize: "0.98rem", color: "var(--neutral-dark)", lineHeight: 1.6 }}>
                <strong>Best Physician in Visakhapatnam / Vizag</strong> - <strong>Dr. Sai Sekhar Pyla</strong> (MD General Medicine) brings <strong>12+ years of expertise</strong> specializing in <strong>Type 1 & Type 2 Diabetes management</strong>, <strong>Dengue & viral fevers</strong>, <strong>Hypertension</strong>, and <strong>preventive internal medicine</strong>. Serving patients in <strong>Muralinagar, NAD Junction, Madhavadhara, Gajuwaka, and Visakhapatnam</strong>.
              </p>

              {/* Structured Table/Grid for AI Extraction (AEO & GEO) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(13, 122, 102, 0.15)" }}>
                <div>
                  <strong style={{ color: "var(--primary)", display: "block", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Lead Physician</strong>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--neutral-dark)" }}>Dr. Sai Sekhar Pyla (MD)</span>
                </div>
                <div>
                  <strong style={{ color: "var(--primary)", display: "block", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Specialization</strong>
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--neutral-dark)", lineHeight: 1.35 }}>
                    MD GENERAL MEDICINE
                    <div style={{ fontSize: "0.84rem", fontWeight: 600, color: "var(--neutral-dark)", marginTop: "2px" }}>
                      Diabetology & Infectious Diseases
                    </div>
                  </div>
                </div>
                <div>
                  <strong style={{ color: "var(--primary)", display: "block", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Primary Clinic</strong>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--neutral-dark)" }}>Trinetra Medicals, Muralinagar</span>
                </div>
                <div>
                  <strong style={{ color: "var(--primary)", display: "block", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Evening Timings</strong>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--neutral-dark)" }}>6:00 PM - 9:00 PM (Mon-Sat)</span>
                </div>
              </div>
            </div>
            
            <p className="doctor-bio-paragraph">
              If you are wondering <strong>when should I see a physician</strong>, or if you are experiencing persistent fatigue, unexplained weight changes, or managing a chronic condition like diabetes or thyroid disorders, <strong>Dr. Sai Sekhar Pyla&apos;s</strong> General Medicine practice provides comprehensive care. According to research published by the <a href="https://www.icmr.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>Indian Council of Medical Research (ICMR)</a>, over 101 million Indians live with diabetes - making early diagnosis and evidence-based diabetology essential for preventing long-term complications.
            </p>
            <p className="doctor-bio-paragraph">
              Currently serving as a Consultant Physician at CARE Hospital, Visakhapatnam, and primarily at <strong>Trinetra Medicals</strong>, <strong>Dr. Sai Sekhar</strong> is known for his evidence-based, patient-centered approach. Whether you want to know <em>how to manage type 2 diabetes</em>, need screening for thyroid imbalance, or require immediate treatment for acute infectious fevers, his clinical expertise encompasses comprehensive internal medicine care.
            </p>

            <div className="doctor-key-highlights-box">
              <div className="highlight-row">
                <div className="highlight-circle-icon">
                  <i className="fas fa-stethoscope"></i>
                </div>
                <div>
                  <h3>Primary Timings</h3>
                  <p>Trinetra Medicals (Muralinagar): 6:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-circle-icon">
                  <i className="fas fa-sun"></i>
                </div>
                <div>
                  <h3>Experience & Specialization</h3>
                  <p>12 Years of Experience in Diabetology & Infectious Diseases</p>
                </div>
              </div>
            </div>

            <div className="bio-pill-buttons">
              <Link href="/about-doctor" className="btn btn-pill-primary">
                Read Detailed Bio <i className="fas fa-arrow-right" style={{ marginLeft: "6px" }}></i>
              </Link>
              <Link href="/contact" className="btn btn-pill-outline">
                Book Consultation
              </Link>
            </div>

            {/* Freshness Signal */}
            <p className="freshness-signal" style={{ fontSize: "0.82rem", color: "var(--neutral-muted)", marginTop: "16px" }}>
              <i className="fas fa-calendar-check" style={{ marginRight: "4px", color: "var(--primary)" }}></i> Clinical profile last updated: <strong>August 2026</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Metric Counter Section */}
      <AnimatedCounterSection initialCounters={data.counters} />

      {/* 3.5 AEO & GEO Clinical Care Guidance Section */}
      <section className="clinical-guidance-section bg-gradient-mesh scroll-reveal" style={{ padding: "60px 0", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "800px", margin: "0 auto 40px auto" }}>
            <span className="badge">CLINICAL CARE GUIDANCE</span>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", fontWeight: 800, color: "var(--neutral-dark)", marginBottom: "14px" }}>
              Understanding General Medicine & Chronic Care in Visakhapatnam
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.05rem", color: "var(--neutral-muted)", lineHeight: 1.6 }}>
              Direct medical answers, clinical definition, and decision support for patients seeking expert healthcare at Trinetra Medicals.
            </p>
          </div>

          <div className="guidance-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginBottom: "40px" }}>
            {/* Question 1 & Answer */}
            <div className="guidance-card" style={{ backgroundColor: "#fafafa", border: "1px solid var(--neutral-border)", padding: "28px", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--primary)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-user-md" style={{ fontSize: "1.1rem" }}></i>
                What is a General Physician and Diabetologist?
              </h3>
              <p style={{ fontSize: "0.98rem", color: "var(--neutral-dark)", lineHeight: 1.6, margin: 0 }}>
                <strong>Direct Answer:</strong> A General Physician is a medical specialist who diagnoses, manages, and non-surgically treats acute illnesses, fevers, and chronic multi-system diseases. A Diabetologist specializes specifically in managing blood sugar imbalances, insulin therapy, and preventing long-term diabetic complications in Type 1 and Type 2 diabetes.
              </p>
            </div>

            {/* Question 2 & Answer */}
            <div className="guidance-card" style={{ backgroundColor: "#fafafa", border: "1px solid var(--neutral-border)", padding: "28px", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--primary)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-clock" style={{ fontSize: "1.1rem" }}></i>
                When Should You Consult Dr. Sai Sekhar P in Visakhapatnam?
              </h3>
              <p style={{ fontSize: "0.98rem", color: "var(--neutral-dark)", lineHeight: 1.6, margin: 0 }}>
                <strong>Direct Answer:</strong> Patients in Visakhapatnam, Muralinagar, NAD Junction, and Madhavadhara should schedule a consultation when experiencing high fasting/post-meal blood sugars, persistent viral fevers (Dengue, Typhoid, Malaria), blood pressure fluctuations, thyroid fatigue, or unexplained weight changes.
              </p>
            </div>

            {/* Question 3 & Answer */}
            <div className="guidance-card" style={{ backgroundColor: "#fafafa", border: "1px solid var(--neutral-border)", padding: "28px", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--primary)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-shield-alt" style={{ fontSize: "1.1rem" }}></i>
                What Clinical Proof & Experience Backs Dr. Sai Sekhar P?
              </h3>
              <p style={{ fontSize: "0.98rem", color: "var(--neutral-dark)", lineHeight: 1.6, margin: 0 }}>
                <strong>Direct Answer:</strong> Dr. Sai Sekhar P (MD General Medicine) brings <strong>12+ years of clinical excellence</strong>, having successfully managed over <strong>200,000+ patient consultations</strong>, 100,000+ chronic disease cases, and served as Consultant Physician at CARE Hospital and Trinetra Medicals.
              </p>
            </div>
          </div>

          {/* Structured Medical Care Comparison Table (AEO & GEO Decision Support) */}
          <div className="table-responsive-wrapper" style={{ backgroundColor: "#ffffff", border: "1px solid var(--neutral-border)", borderRadius: "16px", padding: "24px", boxShadow: "var(--shadow-md)", overflowX: "auto" }}>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--neutral-dark)", marginBottom: "16px" }}>
              Clinical Care Summary & Condition Treatment Matrix
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--bg-mint)", borderBottom: "2px solid var(--primary)" }}>
                  <th style={{ padding: "12px 16px", color: "var(--primary-dark)", fontWeight: 700 }}>Medical Specialization</th>
                  <th style={{ padding: "12px 16px", color: "var(--primary-dark)", fontWeight: 700 }}>Common Conditions Treated</th>
                  <th style={{ padding: "12px 16px", color: "var(--primary-dark)", fontWeight: 700 }}>Diagnostic & Clinical Approach</th>
                  <th style={{ padding: "12px 16px", color: "var(--primary-dark)", fontWeight: 700 }}>Primary Clinic Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--neutral-border)" }}>
                  <td style={{ padding: "14px 16px", fontWeight: 700, color: "var(--primary)" }}>Diabetology</td>
                  <td style={{ padding: "14px 16px" }}>Type 1 DM, Type 2 DM, Diabetic Neuropathy, Nephropathy</td>
                  <td style={{ padding: "14px 16px" }}>HbA1c monitoring, organ protection, personalized insulin & diet plans</td>
                  <td style={{ padding: "14px 16px", fontWeight: 600 }}>6 PM - 9 PM (Mon-Sat)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--neutral-border)", backgroundColor: "#f9fafb" }}>
                  <td style={{ padding: "14px 16px", fontWeight: 700, color: "var(--primary)" }}>Infectious Fevers</td>
                  <td style={{ padding: "14px 16px" }}>Dengue Fever, Malaria, Typhoid, Acute Respiratory Fevers, UTI</td>
                  <td style={{ padding: "14px 16px" }}>Rapid lab evaluation, platelet monitoring, targeted antimicrobial therapy</td>
                  <td style={{ padding: "14px 16px", fontWeight: 600 }}>6 PM - 9 PM (Mon-Sat)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--neutral-border)" }}>
                  <td style={{ padding: "14px 16px", fontWeight: 700, color: "var(--primary)" }}>Endocrinology & Thyroid</td>
                  <td style={{ padding: "14px 16px" }}>Hypothyroidism, Hyperthyroidism, Thyroiditis, Metabolic sluggishness</td>
                  <td style={{ padding: "14px 16px" }}>T3/T4/TSH titration, hormone balancing, metabolic symptom control</td>
                  <td style={{ padding: "14px 16px", fontWeight: 600 }}>6 PM - 9 PM (Mon-Sat)</td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 16px", fontWeight: 700, color: "var(--primary)" }}>Internal Medicine</td>
                  <td style={{ padding: "14px 16px" }}>Hypertension (HTN), Acute Gastritis, Migraine, Joint & Renal Care</td>
                  <td style={{ padding: "14px 16px" }}>Comprehensive organ evaluation, blood pressure control, preventive screening</td>
                  <td style={{ padding: "14px 16px", fontWeight: 600 }}>6 PM - 9 PM (Mon-Sat)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Services Grid Section */}
      <section id="services" className="services-section bg-gradient-mesh scroll-reveal">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Our Specialties</span>
            <h2 className="section-title">Medical Services & Care</h2>
            <p className="section-subtitle">Dedicated primary, chronic, and preventative healthcare services</p>
          </div>

          <FeaturedServicesTabs categories={data.services} />
        </div>
      </section>

      {/* 5. Frequently Asked Questions Section */}
      <FaqSection />

      {/* 6. Health Awareness Reels Carousel */}
      <AwarenessReels />

      {/* 7. Testimonials Section */}
      <ReviewsSection />

      {/* 8. Contact Map Section */}
      <section className="contact-map-section bg-gradient-mesh scroll-reveal">
        <div className="container contact-map-grid">
          {/* Map Embed */}
          <div className="map-wrapper">
            <div className="map-header">
              <span className="badge-pill">LOCATION</span>
              <h3 className="map-title">Trinetra Medicals</h3>
              <p className="map-desc">Opposite Govt School, Ramalayam Street, Muralinagar, Visakhapatnam, 530007</p>
            </div>
            <div className="map-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60799.59690698831!2d83.18353544863278!3d17.745826199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395d0384a06819%3A0x45ef7110571ff582!2sDr%20SAI%20SEKHAR%20P!5e0!3m2!1sen!2sin!4v1786558233514!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location - Dr. Sai Sekhar P Clinic"
                className="map-iframe"
              ></iframe>
            </div>
            <div className="map-directions-cta">
              <a
                href="https://maps.app.goo.gl/RwBcYF5CqF1yoigb9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pill-outline map-directions-btn"
              >
                <i className="fas fa-compass" style={{ marginRight: "6px" }}></i> Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-wrapper">
            <ContactForm />
          </div>
        </div>
      </section>

      
    </div>
  );
}
