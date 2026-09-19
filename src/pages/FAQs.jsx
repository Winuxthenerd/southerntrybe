import { useState } from "react";
import "./FAQs.css";

const faqs = [
  {
    q: "What is SOUTHERNTRYBE?",
    a: "SOUTHERNTRYBE is an art oriented media and lifestyle firm dedicated to young southern creatives. We spotlight people, ideas, stories and experiences across arts, youth culture, lifestyle and feminity.",
  },
  {
    q: "Who is SOUTHERNTRYBE for?",
    a: "SOUTHERNTRYBE is for young creatives, culture enthusiasts, artists, entrepreneurs and anyone interested in arts driven projects.",
  },
  {
    q: "What kind of content does SOUTHERNTRYBE create?",
    a: "We create original on and off screen artistic contents ranging from physical audience interactive events,  interviews, editorials, creative features, visual stories, lifestyle content, recommendations, profiles and other original content that celebrates young southern voices and creativity.",
  },
  {
    q: "Who can be featured on SOUTHERNTRYBE?",
    a: "We are interested in creatives doing something worth talking about. Artists, filmmakers, photographers, musicians, writers, models, designers, creative entrepreneurs, influencers and other emerging personalities can be considered for features.",
  },
  {
    q: "Can I submit myself or someone else for a feature?",
    a: "Yes. If you know a creative or personality whose craft deserves to be told, you can reach out to us with relevant information about them and what they do. We review submissions based on our editorial direction and available opportunities.",
  },
  {
    q: "How can I collaborate with SOUTHERNTRYBE?",
    a: "We are open to collaborations with creatives, brands, organisations, events and individuals whose work aligns with our vision. You can contact us with your idea, proposal or partnership request via our official WhatsApp or gmail platforms.",
  },
  {
    q: "Does SOUTHERNTRYBE only cover people from Southern Nigeria?",
    a: "Our identity is rooted in the South and our primary focus is young southern creatives and stories. However, our platform can spotlight people and ideas beyond the region when they connect meaningfully with our audience and creative vision.",
  },
  {
    q: "Does SOUTHERNTRYBE organise events?",
    a: "Yes. Beyond our editorial work, SOUTHERNTRYBE develops experiences, creative projects and events designed to connect young people, creatives and personalities.",
  },
  {
    q: "Can brands advertise or partner with SOUTHERNTRYBE?",
    a: "Yes. We work with brands that want to connect with a young, creative and culturally aware audience. Partnership opportunities may include advertising, sponsored content, event partnerships, creative campaigns and other tailored collaborations.",
  },
  {
    q: "What Is SOUTHR Magazine?",
    a: "Southr magazine is an affiliate artistic firm crafted to spotlight southern creatives in the area of film and tv, lifestyle, music, fashion and beauty and every facets of the creative industry.",
  },
  {
    q: "What Platform Is SOUTHR magazine crafted In?",
    a: "Southr magazine is a quarterly publication drafted both in hard print and ezine. Each publication is curated in preview copy for teaser reader with the full edition entailing all feature contents.",
  },
  {
    q: "Can I buy a copy of the SOUTHR magazine?",
    a: "Yes. Information about available issues, editions and how to get a copy are provided through our website and official platforms.",
  },
  {
    q: "Is SOUTHERNTRYBE also a magazine?",
    a: "No. The magazine is an important part of what we do, but SOUTHERNTRYBE is beyond print. We are building a wider media, lifestyle and creative platform through digital content, experiences, events and artistic collaborations.",
  },
  {
    q: "How can I stay updated with SOUTHERNTRYBE?",
    a: "Follow our official social platforms and keep an eye on our website for new stories, features, announcements, events and opportunities.",
  },
  {
    q: "Can I work with or join the SOUTHERNTRYBE team?",
    a: "We are always interested in meeting young people with something to bring to the table. Opportunities may come up across writing, photography, design, content, social media, production and other creative roles.",
  },
  {
    q: "What does “TRYBE” mean?",
    a: "For us, TRYBE represents a community of people connected by creativity, artistic expression and shared experiences. It is not about fitting into one box; it is about finding your people and creating your own space.",
  },
  {
    q: "What makes SOUTHERNTRYBE different?",
    a: "We are not simply documenting what is happening. We want to be part of it. SOUTHERNTRYBE gives young southern creatives a platform to be discovered, tells their stories from a youthful perspective and creates experiences that bring the community together.",
  },
  {
    q: "How do I contact SOUTHERNTRYBE?",
    a: "For features, collaborations, partnerships, submissions, advertising or general enquiries, you can reach out through the contact information provided on our website.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="page faqs-page">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={i}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer-wrapper">
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQs;
