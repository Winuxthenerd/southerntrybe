import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    const lastUpdated = "October 22, 2026";

    return (
        <main className="privacy-policy">
            <header className="privacy-policy-header">
                <h1>Privacy Policy</h1>
                <p>Last updated: {lastUpdated}</p>
                </header>

                {/* Introduction section */}
                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Southerntrybe, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or use our website.
                    </p>
                </section>

                {/*Information collected section */}
                <section>
                    <h2>2. Information We Collect</h2>
                    <p>
                        We may collect the following types of information:
                    </p>
                    <ul>
                        <li>Personal information, such as your name, email address, and message when you contact us.</li>
                    </ul>
                </section>

                {/*Why we collect what we collect section */}
                <section>
                    <h2>3. Why We Collect Your Information</h2>
                    <p>
                        We collect your personal information to respond to your inquiries, provide you with information about our services, and improve our website and services to suit your needs.
                    </p>
                </section>

                {/* Information is not sold section */}
                <section>
                    <h2>4. Information Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and providing our services, as long as those parties agree to keep this information confidential.
                    </p>
                </section>

                {/* How long information is retained section */}
                <section>
                    <h2>5. Data Retention</h2>
                    <p>
                        We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements.
                    </p>
                </section>

                {/* How to request deletion of information section */}
                <section>
                    <h2>6. How to request deletion of your information</h2>
                    <p>
                        If you wish to request the deletion of your personal information, please contact us via our email at <a href="mailto:officialsoutherntrybe@gmail.com">officialsoutherntrybe@gmail.com</a>.
                    </p>
                </section>

                {/* Third-Party Links section */}
                <section>
                    <h2>7. Third-Party Videos and Youtube</h2>
                    <p>
                        Our website may contain videos embedded from Youtube or links that direct users to Youtube. Youtube is a third-party service operated by Google. Please note that when you interact with an embedded video, or when the video loads, Youtube and its related services may collect information such as your IP address, device information, and usage data. Youtube may also use cookies or similar technologies in accordance with their own privacy policies.
                    </p>
                    <p>
                        We do not control how youtube collects or processes information. For more information, please check out the
                        <a href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            {""}Google Privacy Policy
                        </a>.
                    </p>
                </section>

                {/*Advertising and Third-Party Advertisers section*/}
                <section>
                    <h2>8. Advertising and Third-Party Advertisers</h2>
                    <p>
                        Our website may display advertisements provided by third-party businesses, brands, or individuals. These advertisements may appear on selected pages of our website.
                        Advertisers may provide us with advertising materials or links to their own websites. When you click on an advertisement, you may be redirected to an external website that operates under its own privacy policy. Please do well to review the privacy policies of those websites before sharing personal information with them. We do not have control over the privacy practices of third-party advertisers and are not responsible for their actions or policies.
                    </p>
                </section>

                {/* Possible Changes to this Policy section */}
                <section>
                    <h2>9. Changes to This Privacy Policy</h2>
                    <p>
                        This Privacy Policy may be updated from time to time. Any changes will be published on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                    </p>
                </section>

                {/* Contact Information section */}
                <section>
                    <h2>10. Contact Information</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:officialsoutherntrybe@gmail.com">officialsoutherntrybe@gmail.com</a>.
                    </p>
                </section>
        </main>
    );
};

export default PrivacyPolicy;