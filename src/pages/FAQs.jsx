import { useState } from "react";
import "./FAQs.css";

const faqs = [
  { q: "What is Southerntrybe?", a: "Placeholder answer." },
  { q: "How often is new content posted?", a: "Placeholder answer." },
  { q: "Can I submit my work to be featured?", a: "Placeholder answer." },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="page faqs-page">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div className="faq-item" key={i}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;