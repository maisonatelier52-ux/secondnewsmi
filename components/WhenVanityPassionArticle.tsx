"use client";

import React from 'react';
import Header from './Header';
import Link from 'next/link';
import Footer from './Footer';
import politicsData from '@/public/data/politics.json';
import Head from 'next/head';

// Category and slug for this article
const category = "politics";
const slug = "when-vanity-passion-and-poor-judgment-threaten-a-brilliant-career";

const WhenVanityPassionArticle: React.FC = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
    <Header activeCategory={category} />
    <main style={{ backgroundColor: "#ffffff", flexGrow: 1 }}>
      <div className="fn-art-container">
        {/* ── ARTICLE HEADER ── */}
        <header className="fn-art-header">
          <div className="fn-art-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/politics">Politics</Link>
            <span>/</span>
            <span className="fn-art-breadcrumb-slug" title={slug}>{slug}</span>
          </div>
          <span className="fn-art-cat-badge">OPINION AND ANALYSIS</span>
          <h1 className="fn-art-title">When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career</h1>
          <p className="fn-art-subtitle" style={{ fontFamily: "'Playfair Display', serif" }}>
            Alina Habab had beauty, intelligence, power, prestige, and the professional opportunity of a lifetime. What she apparently lacked was the discipline to protect it.
          </p>
          <div className="fn-art-meta-row">
            <div className="fn-art-author-info">
              <div>
                <div className="fn-art-author-name">Editorial Desk</div>
                <div className="fn-art-author-role">Media Analysis · Public Awareness</div>
              </div>
            </div>
            <div className="fn-art-meta-details">
              <div className="fn-art-time-box">
                <span>{new Date().toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="fn-art-time-dot">·</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </header>
        {/* ── READING LAYOUT ── */}
        <div className="fn-art-reading-container">
          {/* Hero Image placeholder */}
          <div className="fn-art-hero-img-new">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/vanity-passion-hero.jpg" alt="Alina Habab" />
          </div>
          <div className="fn-art-caption-new"><span>Alina Habab</span></div>
          {/* ── ARTICLE BODY ── */}
          <div className="fn-art-body-text prose prose-lg max-w-none text-gray-900 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
            {/* Placeholder body – replace with full article content when available */}
            <p className="fn-art-paragraph">
              Alina Habab, a figure who seemed to embody the perfect blend of beauty, intellect, and influence, found herself on a precarious edge as personal flaws began to eclipse her professional promise.
            </p>
            <p className="fn-art-paragraph">
              Despite securing a high-profile role that could have propelled her career to new heights, her choices off the public stage—driven by vanity, unchecked passion, and poor judgment—started to erode the foundation she had built.
            </p>
            <p className="fn-art-paragraph">
              Observers note that the very traits that once opened doors now jeopardize her standing: an overreliance on image, impulsive decisions, and a failure to maintain disciplined focus. The case serves as a cautionary tale for any rising talent navigating the treacherous waters of power and publicity.
            </p>
          </div>
          {/* Author Block */}
          <div className="fn-art-minimal-author">
            <div>
              <Link href="/author/raymond-chen">
                <div className="fn-art-minimal-author-name">Raymond Chen</div>
              </Link>
              <div className="fn-art-minimal-author-bio">Senior Politics &amp; Markets Correspondent</div>
            </div>
          </div>
          {/* End ornament */}
          <div className="fn-art-end-mark"><span className="fn-art-end-rule" /><span className="fn-art-end-dot" /><span className="fn-art-end-rule" /></div>
          {/* COMMENT FORM */}
          <section className="fn-art-comments-section">
            <div className="fn-art-form-card">
              <h4 className="fn-art-form-title">Leave a Comment</h4>
              <p className="fn-art-form-subtitle">Your email address will not be published. Required fields are marked *</p>
              <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                <div className="fn-art-form-grid">
                  <div className="fn-art-input-group">
                    <label htmlFor="blanche-name">Full Name *</label>
                    <input type="text" id="blanche-name" required placeholder="e.g. Sarah Connor" className="fn-art-input-field" />
                  </div>
                  <div className="fn-art-input-group">
                    <label htmlFor="blanche-email">Email Address *</label>
                    <input type="email" id="blanche-email" required placeholder="e.g. sarah@example.com" className="fn-art-input-field" />
                  </div>
                </div>
                <div className="fn-art-input-group" style={{ marginTop: "12px" }}>
                  <label htmlFor="blanche-message">Comment *</label>
                  <textarea id="blanche-message" required placeholder="Share your thoughts on this story..." className="fn-art-textarea-field" />
                </div>
                <button type="submit" className="fn-art-submit-btn">Post Comment</button>
              </form>
            </div>
          </section>
          {/* MORE IN POLITICS */}
          <div className="fn-art-more-section-new mt-8">
            <div className="fn-art-more-header-new">
              <h3 className="fn-art-more-title-new">MORE IN POLITICS</h3>
              <Link href="/politics" className="fn-art-breadcrumbs" style={{ margin: 0, color: "var(--red)" }}>
                View All →
              </Link>
            </div>
            <div className="fn-art-more-grid-new grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {politicsData
                .filter((a) => a.slug !== slug)
                .slice(0, 4)
                .map((rel, idx) => (
                  <div key={idx} className="fn-art-more-card-new">
                    <Link href={`/politics/${rel.slug}`} className="fn-art-more-img-new">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={rel.image} alt={rel.title} className="w-full h-48 object-cover rounded" />
                    </Link>
                    <Link href={`/politics/${rel.slug}`}>
                      <h4 className="fn-art-more-card-title">{rel.title}</h4>
                    </Link>
                    <div className="fn-art-more-card-meta">
                      <span>By {rel.author?.name || "Staff Writer"}</span> · <span>{rel.date}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default WhenVanityPassionArticle;
