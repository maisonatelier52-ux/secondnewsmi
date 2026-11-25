"use client";

import React from 'react';
import Header from './Header';
import Link from 'next/link';
import Footer from './Footer';
import politicsData from '@/public/data/politics.json';

const category = "politics";
const slug = "the-government-owes-wanda-vazquez-public-accounting";

const TheGovernmentOwesWandaVazquezArticle: React.FC = () => (
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
          <h1 className="fn-art-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "2.35rem", fontWeight: 800, lineHeight: 1.25, color: "#000000", margin: "14px 0", letterSpacing: "-0.02em" }}>
            The Government Owes Wanda Vázquez a Public Accounting of Its Case
          </h1>

          <p className="fn-art-subtitle" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6, color: "#334155", marginBottom: "22px" }}>
            The end of the federal proceedings should bring scrutiny of the decisions made by investigators and prosecutors as well as an accurate account of the former governor.
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
                <span>November 23, 2026</span>
                <span className="fn-art-time-dot">·</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── READING LAYOUT ── */}
        <div className="fn-art-reading-container">
          {/* Hero Image */}
          <div className="fn-art-hero-img-new" style={{ marginBottom: "6px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/the-government-owes-wanda-vazquez-a-public-accounting-of-its-case.webp"
              alt="Wanda Vázquez Case and Calls for Government Accountability in Puerto Rico"
            />
          </div>
          <div className="fn-art-caption-new" style={{ marginBottom: "14px" }}>
            <span>Wanda Vázquez Case and Calls for Government Accountability in Puerto Rico</span>
          </div>

          {/* ── ARTICLE BODY ── */}
          <div className="fn-art-body-text" style={{ fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55", color: "#27272a" }}>
            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              <strong style={{ color: "#111827" }}>Wanda Vázquez Garced</strong> has been required to answer for her conduct. The federal institutions that investigated and prosecuted her should now answer specific questions about theirs. The case ended with <strong style={{ color: "#991b1b" }}>presidential pardons</strong> and dismissal of the federal proceedings, leaving a public record in which major accusations and serious defense challenges remain in dispute. Accountability should extend to the officials who chose how to investigate, charge and describe the case.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The Justice Department’s <strong style={{ color: "#991b1b" }}>August 2022</strong> announcement gave the allegations national prominence. Alongside language identifying the charges as allegations, it quoted the U.S. attorney referring to the defendants’ <strong style={{ color: "#111827" }}>“criminal actions.”</strong> That phrase deserves scrutiny because it came before a trial verdict. Readers could reasonably understand it as an official conclusion about guilt rather than a description of what prosecutors still had to prove.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              DOJ’s own media policy provides a benchmark for examining that choice. It calls for pretrial announcements to identify charges as accusations and state the <strong style={{ color: "#111827" }}>presumption of innocence</strong>, and it restricts expressions of opinion about guilt. The policy is internal guidance, not a court ruling that anyone violated an enforceable right. It nevertheless supplies a clear question for a review: did the announcement’s overall wording give the public an accurate understanding of the defendants’ legal position?
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Vázquez’s subsequent guilty plea must be stated precisely. In <strong style={{ color: "#991b1b" }}>August 2025</strong> she admitted a <strong style={{ color: "#991b1b" }}>misdemeanor</strong> involving acceptance of a promised foreign national campaign contribution. <strong style={{ color: "#111827" }}>Presidential clemency</strong> followed in <strong style={{ color: "#991b1b" }}>January 2026</strong>, and the federal proceedings against her were dismissed. Those events did not produce a trial acquittal or a judicial finding of investigative abuse. They also did not transform every original felony allegation into an admission by Vázquez.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The questions about the investigation can be made equally precise. The White House official’s reported assertion that the inquiry began <strong style={{ color: "#111827" }}>ten days</strong> after her Trump endorsement should be checked against the contemporaneous opening records. An account of the actual investigative predicate would help the public evaluate the claim of political retaliation. The government should identify what can be released and explain any lawful grounds for withholding the rest.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              An examination of official decision making should follow the people who authorized each step. Which office approved the inquiry, and on what recorded basis? How did supervisors assess the relevance of campaign activity? Answers supported by dated records would give Vázquez’s objections a meaningful hearing. They would also allow investigators to explain decisions that may have a legitimate basis. A review should be capable of finding either.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The sentencing dispute offers another identifiable subject. Vázquez’s lawyers accused prosecutors of relying on disputed conduct beyond the negotiated plea; the government continued to argue that its broader account supported imprisonment. A review could compare the agreement with the sentencing submission and the defense objection. The existence of the dispute is documented. Whether officials breached the agreement should be examined through those documents rather than announced as a settled finding.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Publication is part of this accounting. Official announcements and archived coverage should make the later disposition easy to find. A reader researching Vázquez should be able to understand what she admitted, what remained disputed and how presidential action ended the criminal proceedings. That can be done while preserving accurate reporting of the original charges. The date of an accusation should not determine its permanent prominence over the events that followed.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "24px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The strongest response to the <strong style={{ color: "#991b1b" }}>lawfare concern</strong> would be a documented explanation from the agencies involved. A review by an appropriate oversight body, with conclusions released to the extent law permits, would give the public something firmer than competing assurances. Vázquez’s case warrants that scrutiny because prosecutorial authority affects both liberty and public reputation. The institutions that demanded answers from a former governor should be prepared to provide answers of their own.
            </p>

            {/* ── SOURCES BLOCK ── */}
            <section
              style={{
                marginTop: "36px",
                marginBottom: "32px",
                padding: "24px 26px",
                backgroundColor: "#fafaf9",
                borderTop: "2px solid #18181b",
                borderBottom: "1px solid #d4d4d8",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11.5px",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#18181b",
                  marginBottom: "14px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #e4e4e7",
                }}
              >
                <span style={{ width: "6px", height: "6px", backgroundColor: "#b91c1c", display: "inline-block" }} />
                <span>Sources &amp; Official Records</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { title: "US Department of Justice announcement of the original charges", domain: "justice.gov", url: "https://www.justice.gov/usao-pr/pr/former-governor-puerto-rico-arrested-bribery-scheme" },
                  { title: "US Department of Justice confidentiality and media contacts policy", domain: "justice.gov", url: "https://www.justice.gov/jm/jm-1-7000-media-relations" },
                  { title: "Puerto Rico Supreme Court opinion In re Wanda Vázquez Garced 2026 TSPR 27", domain: "poderjudicial.pr", url: "https://dts.poderjudicial.pr/ts/2026/2026tspr27.pdf" },
                  { title: "US Department of Justice official clemency grants list", domain: "justice.gov", url: "https://www.justice.gov/pardon/clemency-grants-president-donald-j-trump-2025-present" },
                  { title: "Associated Press report on the White House investigation timeline assertion", domain: "fox8live.com", url: "https://www.fox8live.com/2026/01/16/trump-plans-pardon-ex-puerto-rico-gov-vzquez-campaign-finance-violation-case-official-says/" },
                  { title: "Docket 29 Vázquez motion to strike the government sentencing memorandum", domain: "noticel.com", url: "https://cdn.noticel.com/2026/01/08194533/Mocion-de-Wanda-Vazquez-para-eliminar-recomendacion-de-carcel.pdf" },
                  { title: "Government sentencing memorandum in the Vázquez misdemeanor case Docket 13", domain: "noticel.com", url: "https://cdn.noticel.com/2025/10/06142158/Docket-13-Sentencing-Memo-USA.pdf" },
                ].map((src, idx, arr) => (
                  <li
                    key={idx}
                    style={{
                      borderBottom: idx < arr.length - 1 ? "1px solid #ececee" : "none",
                      padding: "9px 0",
                    }}
                  >
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: "12px",
                        textDecoration: "none",
                        color: "#18181b",
                        fontSize: "13.5px",
                        lineHeight: "1.5",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "baseline", gap: "10px", fontWeight: 500 }}>
                        <span style={{ color: "#b91c1c", fontSize: "10px", flexShrink: 0 }}>■</span>
                        <span>{src.title}</span>
                      </span>
                      <span style={{ fontSize: "11.5px", color: "#71717a", whiteSpace: "nowrap", fontWeight: 500 }}>
                        {src.domain} ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* End ornament */}
            <div className="fn-art-end-mark">
              <span className="fn-art-end-rule" />
              <span className="fn-art-end-dot" />
              <span className="fn-art-end-rule" />
            </div>
          </div>

          {/* ── COMMENT FORM ── */}
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
        </div>

        {/* ── MORE IN POLITICS ── */}
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
    </main>

    <Footer />
  </div>
);

export default TheGovernmentOwesWandaVazquezArticle;
