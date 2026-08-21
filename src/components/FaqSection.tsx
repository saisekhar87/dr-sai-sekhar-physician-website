"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What medical conditions does Dr. Sai Sekhar P (MD General Medicine) treat?",
    answer:
      "Dr. Sai Sekhar P provides comprehensive diagnosis and evidence-based care for a wide range of adult health conditions, including Type 1 & Type 2 Diabetes, High Blood Pressure (Hypertension), Thyroid disorders, Fever & Viral infections (Dengue, Typhoid), Respiratory issues (Asthma/COPD), Digestive complaints, and preventive internal medicine."
  },
  {
    question: "When should I consult Dr. Sai Sekhar P?",
    answer:
      "You should consult Dr. Sai Sekhar P if you experience persistent symptoms, recurring health issues, unexplained fatigue or weakness, chronic condition management (such as Diabetes or High Blood Pressure), fever or infections, or whenever you require a comprehensive health evaluation."
  },
  {
    question: "Can I consult Dr. Sai Sekhar P for Diabetes, High Blood Pressure, and Cholesterol?",
    answer:
      "Yes. Dr. Sai Sekhar P specializes in Diabetology and Chronic Disease Management. Type 1 & Type 2 Diabetes, Hypertension, Dyslipidemia (high cholesterol), and metabolic conditions are thoroughly evaluated and managed with individualized medical therapy, continuous monitoring, and structured lifestyle guidance."
  },
  {
    question: "Can I visit the clinic for acute fever, cough, cold, or viral infections?",
    answer:
      "Yes. Common acute symptoms such as high fever, persistent cough, cold, body aches, weakness, Dengue, Malaria, or suspected infections are promptly evaluated at Trinetra Medicals to determine exact causes and provide targeted medical treatment."
  },
  {
    question: "Do I need to bring my previous medical reports and prescriptions for consultation?",
    answer:
      "Yes, if available. Bringing past prescriptions, blood test results, scan reports, and a list of ongoing medications helps Dr. Sai Sekhar P evaluate your complete medical history and design the most effective treatment plan."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="faq-section bg-gradient-mesh scroll-reveal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container max-w-4xl" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="section-header text-center" style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="badge">Frequently Asked Questions</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, marginTop: "8px" }}>
            Common Patient Queries
          </h2>
        </div>

        <div className="faq-accordion" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-card ${isOpen ? "open" : ""}`}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--neutral-border)",
                  borderRadius: "var(--border-radius-md)",
                  boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
                  overflow: "hidden",
                  transition: "var(--transition-smooth)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: isOpen ? "var(--primary)" : "var(--neutral-dark)",
                      margin: 0,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <i
                    className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
                    style={{
                      color: "var(--primary)",
                      fontSize: "1rem",
                      transition: "transform 0.3s ease",
                    }}
                  ></i>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer faq-answer-anim"
                    style={{
                      padding: "0 24px 20px 24px",
                      color: "var(--neutral-muted)",
                      fontSize: "0.98rem",
                      lineHeight: "1.6",
                      borderTop: "1px solid var(--neutral-light)",
                      paddingTop: "16px",
                    }}
                  >
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
