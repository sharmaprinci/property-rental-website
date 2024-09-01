import React from 'react';
import '../PageStyle/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <main className="privacy-container">
      <section className="privacy-hero">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-intro">
          At <strong>Your Dream Home Finder</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Information We Collect</h2>
        <p className="section-description">
          We collect several types of information from and about users of our website, including:
        </p>
        <ul className="privacy-list">
          <li className="privacy-item"><strong>Personal Information:</strong> Information such as your name, email address, phone number, and other identifiers by which you may be contacted online or offline.</li>
          <li className="privacy-item"><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our website, and usage details.</li>
          <li className="privacy-item"><strong>Cookies and Tracking Technologies:</strong> Details of your visits to our website, including traffic data, location data, logs, and other communication data.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">How We Use Your Information</h2>
        <p className="section-description">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="privacy-list">
          <li className="privacy-item">To provide, operate, and maintain our website and services.</li>
          <li className="privacy-item">To improve our website and services based on your feedback and interactions.</li>
          <li className="privacy-item">To process transactions and send you related information, including purchase confirmations and invoices.</li>
          <li className="privacy-item">To communicate with you, including responding to your comments, questions, and requests.</li>
          <li className="privacy-item">To send you updates, newsletters, and marketing and promotional materials.</li>
          <li className="privacy-item">To detect, prevent, and address technical issues and protect against fraudulent or illegal activity.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Sharing of Your Information</h2>
        <p className="section-description">
          We may share your information in the following circumstances:
        </p>
        <ul className="privacy-list">
          <li className="privacy-item"><strong>With Service Providers:</strong> We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
          <li className="privacy-item"><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
          <li className="privacy-item"><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Security of Your Information</h2>
        <p className="section-description">
          We use administrative, technical, and physical security measures to help protect your personal information. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Your Choices</h2>
        <p className="section-description">
          You have choices regarding the collection, use, and sharing of your information, including:
        </p>
        <ul className="privacy-list">
          <li className="privacy-item"><strong>Opt-Out of Communications:</strong> You can opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</li>
          <li className="privacy-item"><strong>Cookies:</strong> If you prefer, you can choose to set your browser to remove or reject cookies before using our website, with the drawback that certain features of the website may not function properly without the aid of cookies.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Changes to This Privacy Policy</h2>
        <p className="section-description">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-description">
          If you have any questions about this Privacy Policy, please contact us at <a href="/contact" className="contact-link">Contact Us</a>.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
