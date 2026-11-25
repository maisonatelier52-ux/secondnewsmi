"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="fn-footer-wrapper">
      <div className="fn-footer-inner">
        {/* Top Brand Row */}
        <div className="fn-footer-top">
          <div className="fn-footer-brand-tagline">
            <Link href="/" className="fn-footer-logo-box" style={{ textDecoration: "none", color: "inherit" }}>
              <span style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px", fontFamily: "var(--font-serif, Georgia, serif)" }}>
                Tangent Weekly
              </span>
            </Link>
            <p className="fn-footer-tagline">
              Independent Journalism &amp; Global Market Intelligence.
            </p>
          </div>
        </div>

        {/* Middle Links Grid (4 Columns) */}
        <div className="fn-footer-links-grid">
          <div>
            <h4 className="fn-footer-col-title">News Sections</h4>
            <ul className="fn-footer-col-list">
              <li><Link href="/business">Business</Link></li>
              <li><Link href="/entertainment">Entertainment</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/politics">Politics</Link></li>
              <li><Link href="/us">US News</Link></li>
              <li><Link href="/world">World</Link></li>
              <li><Link href="/puertorico">Puerto Rico</Link></li>
              <li><Link href="/bancredito">Bancredito</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="fn-footer-col-title">About & Newsroom</h4>
            <ul className="fn-footer-col-list">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/our-team">Our Team</Link></li>
              <li><Link href="/ownership-and-funding">Ownership & Funding</Link></li>
              <li><Link href="/editorial-policy">Editorial Policy</Link></li>
              <li><Link href="/contact">Contact Newsroom</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="fn-footer-col-title">Standards & Guidelines</h4>
            <ul className="fn-footer-col-list">
              <li><Link href="/source-methodology">Source Methodology</Link></li>
              <li><Link href="/right-of-reply-policy">Right of Reply Policy</Link></li>
              <li><Link href="/advertising-and-sponsored-policy">Advertising & Sponsored Policy</Link></li>
              <li><Link href="/faq">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="fn-footer-col-title">Legal & Compliance</h4>
            <ul className="fn-footer-col-list">
              <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/legal">Legal Disclosures</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="fn-footer-bottom">
          <div>© 2026 Tangent Weekly. All Rights Reserved.</div>
          <button className="fn-footer-back-top" onClick={scrollToTop}>
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
