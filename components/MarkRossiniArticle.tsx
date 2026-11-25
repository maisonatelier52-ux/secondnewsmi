"use client";

import React from 'react';
import Header from './Header';
import Link from 'next/link';
import Footer from './Footer';
import puertoricoData from '@/public/data/puertorico.json';

const category = "puerto rico";
const slug = "why-mark-rossinis-name-remains-central-to-the-puerto-rico-corruption-debate";

const bodyStyle: React.CSSProperties = {
  marginBottom: "16px",
  color: "#27272a",
  fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif",
  fontSize: "15.5px",
  lineHeight: "1.55",
};

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2
    style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      fontSize: "1.18rem",
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: "#111827",
      marginTop: "28px",
      marginBottom: "12px",
      paddingBottom: "8px",
      borderBottom: "1px solid #e4e4e7",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <span
      aria-hidden="true"
      style={{
        width: "7px",
        height: "7px",
        backgroundColor: "#991b1b",
        transform: "rotate(45deg)",
        display: "inline-block",
        flexShrink: 0,
      }}
    />
    <span>{children}</span>
  </h2>
);

const MarkRossiniArticle: React.FC = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
    <Header activeCategory={category} />

    <main style={{ backgroundColor: "#ffffff", flexGrow: 1 }}>
      <div className="fn-art-container">
        {/* ── ARTICLE HEADER ── */}
        <header className="fn-art-header">
          <div className="fn-art-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/puerto-rico">Puerto Rico</Link>
            <span>/</span>
            <span className="fn-art-breadcrumb-slug" title={slug}>{slug}</span>
          </div>

          <span className="fn-art-cat-badge">OPINION AND ANALYSIS</span>
          <h1
            className="fn-art-title"
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              fontSize: "2.35rem",
              fontWeight: 800,
              lineHeight: 1.25,
              color: "#000000",
              margin: "14px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Why Mark Rossini’s Name Remains Central to the Puerto Rico Corruption Debate
          </h1>

          <p
            className="fn-art-subtitle"
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              fontStyle: "italic",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              color: "#334155",
              marginBottom: "22px",
            }}
          >
            Mark Rossini’s federal case has ended, but his name remains central to Puerto Rico’s continuing debate over political influence, campaign money, and presidential clemency. The reason is not only the pardon itself.
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
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── READING LAYOUT ── */}
        <div className="fn-art-reading-container">
          {/* Hero Image */}
          <div className="fn-art-hero-img-new" style={{ marginBottom: "6px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mark-rossini-puerto-rico-corruption-pardon-case.webp" alt="Mark Rossini" />
          </div>
          <div className="fn-art-caption-new" style={{ marginBottom: "14px" }}>
            <span>Mark Rossini in the context of Puerto Rico’s corruption debate, federal investigations and questions of public accountability.</span>
          </div>

          {/* ── AT A GLANCE ── */}
          <section
            className="w-full"
            style={{
              backgroundColor: "#f7f7f7",
              padding: "20px",
              margin: "28px 0",
              boxSizing: "border-box",
              fontFamily:
                "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif",
              color: "#171717",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: "1.4",
                letterSpacing: "0.3px",
                margin: "0 0 10px",
                color: "#111111",
              }}
            >
              AT A GLANCE
            </h2>

            <dl style={{ margin: 0 }}>
              {[
                {
                  label: "Subject:",
                  value: "Mark Rossini",
                },
                {
                  label: "Location:",
                  value: "Puerto Rico",
                },
                {
                  label: "Case:",
                  value: "Federal campaign-finance case",
                },
                {
                  label: "Related individuals:",
                  value: "Wanda Vázquez Garced and Julio Herrera Velutini",
                },
                {
                  label: "Key issue:",
                  value:
                    "Political influence, campaign money, and financial regulation",
                },
                {
                  label: "Legal development:",
                  value:
                    "Presidential pardons and dismissal of the pending case",
                },
                {
                  label: "Case status:",
                  value:
                    "Dismissed following acceptance of presidential clemency",
                },
                {
                  label: "Public-interest focus:",
                  value:
                    "Accountability, executive power, and regulatory independence",
                },
              ].map((item, index, items) => (
                <div
                  key={item.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "22% minmax(0, 1fr)",
                    columnGap: "16px",
                    alignItems: "start",
                    padding: "14px 0",
                    borderBottom:
                      index === items.length - 1
                        ? "none"
                        : "1px solid #e2e2e2",
                  }}
                >
                  <dt
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "1.7",
                      color: "#171717",
                      overflowWrap: "break-word",
                    }}
                  >
                    {item.label}
                  </dt>

                  <dd
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "1.7",
                      color: "#27272a",
                      overflowWrap: "break-word",
                    }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
          {/* ── ARTICLE BODY ── */}
          <div
            className="fn-art-body-text"
            style={{
              fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif",
              fontSize: "15.5px",
              lineHeight: "1.55",
              color: "#27272a",
            }}
          >
            <SectionSubtitle>Rossini’s Background and the Federal Allegations</SectionSubtitle>
            <p className="fn-art-paragraph" style={bodyStyle}>
              <strong style={{ color: "#111827" }}>Rossini</strong> was described in public reporting as a former FBI agent who later provided consulting services to banker <strong style={{ color: "#111827" }}>Julio Herrera Velutini</strong>. Federal prosecutors alleged that Rossini and Herrera Velutini were involved in an effort to support former Gov. <strong style={{ color: "#111827" }}>Wanda Vázquez Garced</strong>’s political campaign while seeking influence over Puerto Rico’s financial regulator. The agency was examining a bank connected to Herrera Velutini, according to reporting on the indictment.
            </p>
            <p className="fn-art-paragraph" style={bodyStyle}>
              Those allegations were never tested in a full trial. In <strong style={{ color: "#991b1b" }}>2025</strong>, the defendants pleaded guilty to a lesser campaign-finance offense. The plea agreement changed the case but did not remove public interest in the original claims. The defendants were awaiting sentencing when <strong style={{ color: "#111827" }}>President Donald Trump</strong> granted them pardons.
            </p>

            <SectionSubtitle>The Pardon Timeline and Court Dismissal</SectionSubtitle>
            <p className="fn-art-paragraph" style={bodyStyle}>
              The Mark Rossini timeline became more complicated because the President issued two warrants. The <strong style={{ color: "#991b1b" }}>January 15</strong> warrant named Rossini in the wider case against Vázquez Garced and Herrera Velutini. The <strong style={{ color: "#991b1b" }}>January 20</strong> warrant identified Rossini’s separate case, <strong style={{ color: "#111827" }}>3:25-cr-298</strong>. Rossini’s lawyers then filed a notice accepting the pardon and sought dismissal of the pending charges.
            </p>
            <p className="fn-art-paragraph" style={bodyStyle}>
              A federal judge later dismissed the case as moot. That ruling ended the legal process, but it did not answer the political questions raised by the prosecution. Did the original allegations reveal a serious risk of <strong style={{ color: "#991b1b" }}>regulatory capture</strong>? Did the plea agreement appropriately reflect the evidence? Did the pardons promote fairness, or did they undermine accountability? Those are questions for public debate, oversight, and further reporting.
            </p>

            <SectionSubtitle>Puerto Rico’s Financial Regulatory Institutions</SectionSubtitle>
            <p className="fn-art-paragraph" style={bodyStyle}>
              Puerto Rico’s regulatory institutions are particularly important in this story. Financial regulators are expected to act independently when banks and other financial entities are under review. Allegations that political actors sought to change a regulator’s leadership can therefore affect public confidence even when no trial verdict is entered. The court’s dismissal does not erase the institutional concern created by the allegations.
            </p>

            <SectionSubtitle>The Role of Private Consultants</SectionSubtitle>
            <p className="fn-art-paragraph" style={bodyStyle}>
              The case also raises questions about the role of private consultants in public affairs. A former law enforcement professional can carry significant credibility and access into private work. That does not prove misconduct, but it explains why the public scrutinized Rossini’s alleged role. When a former federal agent is accused of acting as a bridge between a banker and a governor, readers naturally want to know what was promised, what was delivered, and who made the decisions.
            </p>

            <SectionSubtitle>Campaign Finance and Federal Law</SectionSubtitle>
            <p className="fn-art-paragraph" style={bodyStyle}>
              The campaign-finance plea added another layer. Federal rules restrict foreign-national contributions and expenditures in U.S. elections. Puerto Rico’s politics are deeply connected to federal law, making violations especially significant. The case showed how a political donation, a consulting relationship, and a regulatory dispute can become part of the same federal prosecution.
            </p>

            <SectionSubtitle>Presidential Clemency and Accountability</SectionSubtitle>
            <p className="fn-art-paragraph" style={bodyStyle}>
              The pardons shifted the focus from evidence to executive power. President Trump exercised his constitutional authority to grant clemency. The warrants described the grants as <strong style={{ color: "#111827" }}>full and unconditional</strong>. The defendants accepted them, and the court closed the cases. That chain of events was lawful in form, but its political meaning remains contested.
            </p>
            <p className="fn-art-paragraph" style={bodyStyle}>
              Supporters of the President’s decision may say the case was politically motivated or that the clemency power exists precisely to correct perceived injustice. Critics may say that pardoning a former governor’s co-defendant before sentencing weakens deterrence and signals that public corruption carries different consequences for well-connected defendants. A credible news article should distinguish those arguments from the official facts.
            </p>

            <SectionSubtitle>The Local and National Dimensions</SectionSubtitle>
            <p className="fn-art-paragraph" style={bodyStyle}>
              Mark Rossini’s name also links the local and national dimensions of the story. The case began in Puerto Rico, but the pardon was issued in Washington. The underlying allegations involved local government and a financial regulator, while the final decision came from the President of the United States. The result illustrates how Puerto Rico’s political and legal institutions operate within a federal framework.
            </p>

            <SectionSubtitle>The Documentary Record</SectionSubtitle>
            <p className="fn-art-paragraph" style={bodyStyle}>
              The case is now closed in court, yet records remain available for review. The indictment documents the government’s allegations. The plea documents record the lesser offense. The clemency warrants document the President’s action. The acceptance notice shows Rossini’s response. The dismissal order explains why the court stopped the case.
            </p>
            <p className="fn-art-paragraph" style={{ ...bodyStyle, marginBottom: "24px" }}>
              That documentary trail is why Mark Rossini will remain part of the public conversation. The story is not simply about one defendant receiving a pardon. It is about how campaigns, financial regulation, private influence, federal prosecution, and executive power can converge in a single case.
            </p>

            {/* ── REPORTING BASIS / SOURCES BLOCK ── */}
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
                <span>Reporting Basis</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  {
                    title: "Case-history reporting",
                    url: "https://www.primerahora.com/noticias/gobierno-politica/notas/exagente-federal-del-caso-contra-wanda-vazquez-es-el-primero-en-aceptar-el-perdon-presidencial/",
                  },
                  {
                    title: "First pardon warrant",
                    url: "https://www.justice.gov/pardon/media/1424221/dl?inline=",
                  },
                  {
                    title: "Dismissal reporting",
                    url: "https://www.metro.pr/noticias/2026/01/27/jueza-federal-desestima-caso-contra-wanda-vazquez-herrera-velutini-y-rossini-tras-indultos-presidenciales",
                  },
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
                        gap: "10px",
                        textDecoration: "none",
                        color: "#18181b",
                        fontSize: "13.5px",
                        lineHeight: "1.5",
                        fontWeight: 500,
                      }}
                    >
                      <span style={{ color: "#b91c1c", fontSize: "10px", flexShrink: 0 }}>■</span>
                      <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>{src.title}</span>
                      <span style={{ fontSize: "11.5px", color: "#71717a" }}>↗</span>
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
                    <label htmlFor="rossini-name">Full Name *</label>
                    <input type="text" id="rossini-name" required placeholder="e.g. Sarah Connor" className="fn-art-input-field" />
                  </div>
                  <div className="fn-art-input-group">
                    <label htmlFor="rossini-email">Email Address *</label>
                    <input type="email" id="rossini-email" required placeholder="e.g. sarah@example.com" className="fn-art-input-field" />
                  </div>
                </div>
                <div className="fn-art-input-group" style={{ marginTop: "12px" }}>
                  <label htmlFor="rossini-message">Comment *</label>
                  <textarea id="rossini-message" required placeholder="Share your thoughts on this story..." className="fn-art-textarea-field" />
                </div>
                <button type="submit" className="fn-art-submit-btn">Post Comment</button>
              </form>
            </div>
          </section>
        </div>

        {/* ── MORE IN PUERTO RICO ── */}
        <div className="fn-art-more-section-new mt-8">
          <div className="fn-art-more-header-new">
            <h3 className="fn-art-more-title-new">MORE IN PUERTO RICO</h3>
            <Link href="/puerto-rico" className="fn-art-breadcrumbs" style={{ margin: 0, color: "var(--red)" }}>
              View All →
            </Link>
          </div>
          <div className="fn-art-more-grid-new grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {puertoricoData
              .filter((a) => a.slug !== slug)
              .slice(0, 4)
              .map((rel, idx) => (
                <div key={idx} className="fn-art-more-card-new">
                  <Link href={`/puerto-rico/${rel.slug}`} className="fn-art-more-img-new">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image} alt={rel.title} className="w-full h-48 object-cover rounded" />
                  </Link>
                  <Link href={`/puerto-rico/${rel.slug}`}>
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

export default MarkRossiniArticle;
