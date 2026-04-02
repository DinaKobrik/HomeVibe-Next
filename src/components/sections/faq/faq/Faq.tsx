"use client";

import { useState } from "react";
import { Heading, P } from "@/components/ui/";
import styles from "./faq.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: Record<string, FaqItem[]> = {
  "Shipping & Delivery": [
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery takes 3–7 business days. Express delivery is available for selected items and arrives within 1–3 business days.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes! Once your order is shipped, you will receive a tracking number via email.",
    },
  ],
  "Returns & Refunds": [
    {
      question: "What is your return policy?",
      answer:
        "You have 30 days from the date of delivery to return any item. The product must be in its original condition and packaging.",
    },
    {
      question: "When will I get my refund?",
      answer:
        "Refunds are processed within 5–7 business days after we receive and inspect the returned item.",
    },
  ],
  "Product & Warranty": [
    {
      question: "Do your products come with a warranty?",
      answer:
        "Yes, all furniture and lighting items come with a 2-year manufacturer's warranty.",
    },
    {
      question: "What if the product arrives damaged?",
      answer:
        "Please contact us within 48 hours with photos of the damage. We will arrange a replacement or refund.",
    },
    {
      question: "Are your products eco-friendly?",
      answer:
        "We prioritize sustainable materials. Many of our products are made from FSC-certified wood and recycled fabrics.",
    },
  ],
};

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className={styles.faqSection}>
      <Heading level="h2" className={styles.title}>
        Frequently asked questions
      </Heading>

      <P className={styles.description}>
        Find answers to the most common questions about shipping, returns, and
        our products.
      </P>

      <div className={styles.faqContainer}>
        {Object.entries(faqData).map(([category, questions]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>

            <div className={styles.questions}>
              {questions.map((item, index) => {
                const isOpen = openQuestion === item.question;

                return (
                  <div key={index} className={styles.faqItem}>
                    <button
                      className={styles.questionButton}
                      onClick={() => toggleQuestion(item.question)}
                      aria-expanded={isOpen}>
                      <span className={styles.questionText}>
                        {item.question}
                      </span>
                      <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                    </button>

                    <div
                      className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
                      <P>{item.answer}</P>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
