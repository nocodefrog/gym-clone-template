"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { faqSection } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
  id="faq"
  className="max-w-6xl mx-auto px-6 py-20"
>
  <h2 className="text-3xl font-bold">
  {faqSection.title}
</h2>
      {faqs.map((faq, index) => (
  <div key={faq.question} className="border-b py-5">
    <button
      className="transition
duration-300
hover:scale-105 flex w-full justify-between text-left text-lg font-semibold"
      onClick={() =>
        setOpenIndex(openIndex === index ? null : index)
      }
    >
      {faq.question}
      <span>{openIndex === index ? "−" : "+"}</span>
    </button>

    {openIndex === index && (
      <p className="mt-3 text-gray-600">
        {faq.answer}
      </p>
    )}
  </div>
))}
    </section>
  );
}