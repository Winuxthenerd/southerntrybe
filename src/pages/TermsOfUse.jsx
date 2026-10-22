import "./TermsOfUse.css";

const TermsOfUse = () => {
  const lastUpdated = "October 22, 2026";

  return (
    <main className="terms-of-use">
      <header className="terms-of-use-header">
        <h1>Terms of Use</h1>
        <p>Last updated: {lastUpdated}</p>
      </header>

      {/* Introduction section */}
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Southerntrybe. These Terms of Use govern your access to and
          use of our website, including its pages, content, links and services.
          By accessing or using our website, you agree to be bound by these
          Terms of Use. If you do not agree to these terms, please do not use
          our website.
        </p>
      </section>

      {/* Ownership of Content section */}
      <section>
        <h2>2. Ownership of Content</h2>
        <p>
          Unless otherwise stated, original editorial content, articles,
          photographs, graphics, and other materials published by Southerntrybe
          are owned by Southerntrybe or used with permission from their
          respective owners. Such materials are protected by copyright and
          interllectual property laws. You may access and read our content for
          personal, non-commercial use. This does not grant you ownership or
          permission to reproduce, republish, modify, distribute, or
          commercially exploit our content without prior written permission from
          the relevant rights holder.
        </p>
        <p>
          Third-party names, trademarks, images, and material remain the
          property of their respective owners.
        </p>
      </section>

      {/* Acceptable Use section */}
      <section>
        <h2>3. Acceptable Use</h2>
        <p>
          You agree to use Southerntrybe responsibly and in accordance with
          applicable laws. You must not:
        </p>
        <ul>
          <li>
            Copy, reproduce, or redistribute our original articles, photographs,
            or other materials without prior written permission.
          </li>

          <li>
            Scrape, crawl, or systematically extract website content for
            republication, commercial use, or building another database without
            authorization.
          </li>

          <li>
            Remove copyright notices, credits, or other ownership information
            from our content.
          </li>

          <li>
            Attempt to disrupt, damage, or gain unauthorized access to our
            website or its systems.
          </li>

          <li>
            Use our websites for unlawful purposes or in ways that infringe the
            rights of others.
          </li>
        </ul>
        <p>
          These restrictions do not prohibit activites permitted by applicable
          law, including lawful quotation, fair dealing, or other applicable
          copyright exceptions.
        </p>
      </section>

      {/* Third-Party Content and links section*/}
      <section>
        <h2>4. Third-Party Content and Links</h2>
        <p>
          Southerntrybe may contain links to third-party websites, embedded
          Youtube videos, and other external content. These services are
          operated independently, and we do not control their content,
          avilability, or privacy policies. Visiting or interacting with
          third-party services is subject to their own terms and privacy
          policies.
        </p>
      </section>

      {/* Advertisement and Promotion section */}
      <section>
        <h2>5. Advertisement and Promotion</h2>
        <p>
          Southerntrybe may display advertisement or promotional materials
          supplied by third parties. Unless expressly stated otherwise, the
          appperance of an advertisemeent does not constitute a guarantee or
          endorsement by Southerntrybe of the advertised product, service, or
          business. Questions or disputes concerning a third-party product or
          service should generally be directed to the relevant provider, subject
          to any rights you may have under applicable law.
        </p>
      </section>

      {/* Disclaimer of Warranties section */}
      <section>
        <h2>6. Disclaimer of Warranties</h2>
        <p>
          Southerntrybe is provided on an "as is" and "as available" basis. To
          the extent permitted by applicable law, we make no warranties or
          representations that the website will always be available,
          unimterrupted, sevure, accurate, or free from errors. We may update,
          correct, modify, or remove content at any time. We do not guarantee
          that all published information will remain current or complete.
        </p>
        <p>
          Nothing in these terms excludes any warranty, right, or protection
          that cannot lawfully be excluded or limited under applicable law.
        </p>
      </section>

      {/* Limitation of Liability section */}
      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          To the extent permitted by applicable law, Southern Trybe will not be
          liable for losses arising from your use of, or inability to use, the
          website or reliance on its content. This provision does not exclude or
          limit liability where such exclusion or limitation is prohibited by
          law.
        </p>
      </section>

      {/* Changes to these Terms section */}
      <section>
        <h2>8. Changes to These Terms</h2>
        <p>
          We may revise these Terms of Use from time to time. Changes will be
          published on this page alongside an updated revision date. Your
          continued use of the website after changes take effect may signify
          acceptance of the revised terms where permitted by applicable law.
        </p>
      </section>

      {/* Contact section */}
      <section>
        <h2>9. Contact Us</h2>
        <p>
            For any questions about these Terms of Use or request for permission to reproduce Southerntrybe content, please contact us at <a href="mailto:officialsoutherntrybe@gmail.com">officialsoutherntrybe@gmail.com</a>.
        </p>
      </section>
    </main>
  );
};

export default TermsOfUse;