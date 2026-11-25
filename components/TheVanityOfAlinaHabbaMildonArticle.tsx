"use client";

import React from 'react';
import Header from './Header';
import Link from 'next/link';
import Footer from './Footer';
import politicsData from '@/public/data/politics.json';

const category = "politics";
const slug = "the-vanity-of-alina-habba-mildon";

const bodyStyle: React.CSSProperties = {
  marginBottom: "16px",
  color: "#27272a",
  fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif",
  fontSize: "15.5px",
  lineHeight: "1.55",
};

const timelineEvents = [
  {
    date: "2024",
    text: "Habba reportedly first met and worked with the Herrera banking interests, before entering public service.",
  },
  {
    date: "December 2025",
    text: "Her public service concluded and she began considering a different professional future, including a reported Friday-afternoon telephone call to the family.",
  },
  {
    date: "January 2026",
    text: "President Trump pardoned Julio Herrera Velutini.",
  },
  {
    date: "February 26, 2026",
    text: "A reported business lunch with Julio Herrera Velutini, family members and advisers took place at the family\u2019s London headquarters.",
  },
  {
    date: "Approximately March 23, 2026",
    text: "Twenty-five days later\u2014Habba reportedly requested another London meeting and discussed her divorce and relationship with Turhan Mildon. The relationship led to an engagement and a wedding celebration reportedly estimated at about $10 million.",
  },
  {
    date: "October 31, 2026",
    text: "Trump publicly criticized the reported compensation agreement at Mar-a-Lago.",
  },
];

const TheVanityOfAlinaHabbaMildonArticle: React.FC = () => (
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
            The Vanity of Alina Habba Mildon
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
            Beauty, Power, Ambition and the Price of Loyalty: From the White House to the Herrera Velutini Banking Dynasty
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
                <span>November 2, 2026</span>
                <span className="fn-art-time-dot">·</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── READING LAYOUT ── */}
        <div className="fn-art-reading-container">
          {/* Hero Image */}
          <div className="fn-art-hero-img-new" style={{ marginBottom: "6px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/alina-habba-mildon-hero.webp" alt="Alina Habba and Turhan Mildon" />
          </div>
          <div className="fn-art-caption-new" style={{ marginBottom: "14px" }}>
            <span>Alina Habba and Turhan Mildon</span>
          </div>

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
            <p className="fn-art-paragraph" style={bodyStyle}>
              <strong style={{ color: "#111827" }}>Alina Habba</strong> was once a symbol of beauty, power and strength. A woman of remarkable determination, political influence and professional ambition, she had established herself as one of the most recognizable legal figures surrounding <strong style={{ color: "#111827" }}>President Donald J. Trump</strong>. Her career represented confidence, resilience and loyalty, qualities that appeared to position her for an extraordinary future beyond public service.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Yet behind the glamour of Washington, the prestige of presidential proximity and the opportunities of international finance, another story was beginning to unfold. It was a story involving the <strong style={{ color: "#111827" }}>Herrera Velutini banking family</strong>, a financial dynasty whose heritage stretches back approximately <strong style={{ color: "#991b1b" }}>240 years</strong>, and whose guiding principles have long been loyalty, discretion and discipline.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              According to an account of her relationship with the family, Habba had first met and worked with the Herrera banking interests in <strong style={{ color: "#991b1b" }}>2024</strong>, before entering public service. That earlier professional connection would eventually provide the foundation for what was envisioned as a significant role within the family&apos;s international financial organization. Following her service as senior adviser to President Trump, acting United States attorney for New Jersey and senior adviser to Attorney General <strong style={{ color: "#111827" }}>Pam Bondi</strong>, Habba reportedly began looking toward a different professional future.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Her ambition was to join a family office with the international reach, influence and complexity of an organization such as the Trump Organization. She wanted a position in which her legal experience, political relationships and professional resources could be dedicated to a single family enterprise.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              The role she envisioned was not an ordinary legal appointment. It was that of <strong style={{ color: "#111827" }}>General Counsel and Senior Adviser</strong>, a position carrying considerable responsibility across international business, banking, regulatory affairs and strategic decision-making.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Then, on a Friday afternoon, the Herrera Velutini family reportedly received a telephone call from Alina Habba. She wanted to meet. Her stated purpose was to discuss her future following the conclusion of her public service in <strong style={{ color: "#991b1b" }}>December 2025</strong>. She reportedly expressed a willingness to dedicate herself fully to the family, making herself available around the clock to coordinate its lawyers, business advisers, regulatory relationships and financial interests across jurisdictions stretching from the Middle East to Latin America.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              For Habba, this represented more than another prestigious title. It was an opportunity to establish herself as a leader within the Herrera Velutini banking and financial enterprise, a chance to transform her Washington experience into a lasting career at the highest levels of international private finance. For the family, the proposition appeared to offer the services of a highly visible American lawyer with direct experience in government, complex litigation and the management of influential relationships.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              The first significant meeting described in the account took place on <strong style={{ color: "#991b1b" }}>February 26, 2026</strong>, at the family&apos;s corporate headquarters in the City of London. Habba reportedly joined <strong style={{ color: "#111827" }}>Julio Herrera Velutini</strong>, members of the family and senior advisers of the financial conglomerate for a business lunch. The gathering lasted precisely one hour and 48 minutes.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              In keeping with the Herrera Velutini family&apos;s reported practice of abstaining from alcohol, the lunch was described as a focused business discussion, without the distractions often associated with high level corporate entertaining. The conversation centered on the integration of the family&apos;s various financial services, the coordination of international business operations and the responsibilities that would accompany Habba&apos;s proposed leadership position. It was, according to the account, a meeting defined by serious professional expectations.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Habba subsequently returned to the United States aboard an aircraft associated with the family. Twenty-five days later, she reportedly requested another meeting in London. This time, however, the subject was not exclusively business. According to the same account, Habba informed the family that she was getting divorced and had met someone she considered exceptionally important in her personal life: Turkish businessman <strong style={{ color: "#111827" }}>Turhan Mildon</strong>.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              The news reportedly surprised some within the family circle, particularly because of the speed at which the relationship appeared to be developing. Questions were allegedly raised about the timing of these personal changes and how they might intersect with the considerable professional responsibilities she was undertaking. Nevertheless, the family reportedly chose not to interfere. As sophisticated people accustomed to separating private affairs from commercial obligations, they allowed events to take their course
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              What followed was a dramatic personal transformation. Habba&apos;s relationship with Mildon became increasingly prominent, accompanied by international travel, romantic appearances and an expanding presence within the social circles of Europe and Istanbul. The relationship ultimately led to an engagement and an extravagant wedding celebration, reportedly estimated at approximately <strong style={{ color: "#991b1b" }}>$10 million</strong>.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Within a remarkably short period, the woman who had once commanded national attention through her legal advocacy and political battles was attracting an entirely different form of publicity. Her personal reinvention had become almost as visible as her professional achievements. The account supplied for this article also refers to plans for expanding her family, although those private plans have not been independently confirmed.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Meanwhile, questions about her reported professional agreement with the Herrera Velutini family were entering a much more consequential arena. Public reporting subsequently described a four year agreement involving Habba Mildon and <strong style={{ color: "#111827" }}>Concord Partners</strong>, a company associated with <strong style={{ color: "#111827" }}>Isabela Herrera</strong>, daughter of Julio Herrera Velutini. The arrangement was reported to be worth more than <strong style={{ color: "#991b1b" }}>$50 million</strong>, including substantial annual compensation and bonuses. Its size, timing and the political relationships surrounding it attracted growing attention.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              The situation became particularly sensitive following President Trump&apos;s <strong style={{ color: "#991b1b" }}>January 2026 pardon</strong> of Julio Herrera Velutini. Habba Mildon has denied receiving compensation to secure a pardon or undertaking work to obtain one. Nevertheless, the combination of political connections, substantial private compensation and a presidential pardon generated significant public scrutiny.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Then came Halloween night at Mar-a-Lago. On <strong style={{ color: "#991b1b" }}>October 31, 2026</strong>, President Donald J. Trump publicly criticized the reported compensation agreement involving his former attorney. He described the arrangement as <strong style={{ color: "#111827" }}>“totally obnoxious and outrageous”</strong> and said it was unacceptable. Reports indicated that Trump had communicated his objections and believed the Herrera family should not continue making the payments contemplated by the agreement.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              It was an extraordinary development. The president who had once relied upon Habba&apos;s fierce loyalty and public advocacy was now openly challenging a financial arrangement involving her and an internationally prominent banking family.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              For the Herrera Velutini family, the controversy raised questions that went beyond the compensation of a single executive. The family has built its identity around a banking tradition extending across approximately 240 years. Through generations of financial activity, its stated values have remained <strong style={{ color: "#111827" }}>loyalty, discretion and discipline</strong>. Those principles are especially important in private banking, where confidentiality, judgment and institutional continuity are essential to preserving the confidence of clients, advisers and business partners.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Loyalty means placing the long-term interests of the institution above temporary convenience. Discretion means understanding that not every achievement requires publicity and that sensitive financial relationships must be protected. Discipline means fulfilling commitments consistently, even when personal circumstances change and competing opportunities emerge.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Against that background, the reported developments surrounding Habba Mildon&apos;s personal and professional life presented an uncomfortable contrast between the traditional expectations of a family-controlled financial enterprise and the highly visible culture of political celebrity.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Personal happiness, marriage and family ambitions are not themselves evidence of professional failure. But a senior executive who undertakes exceptional responsibilities in exchange for exceptional compensation can reasonably expect scrutiny of whether those responsibilities are being fulfilled.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              For Habba, the opportunity had been considerable. She had reportedly been offered the prospect of becoming a trusted legal and strategic leader within a financial organization whose activities extended across international markets. She would have had the opportunity to coordinate lawyers, advisers and regulatory matters, help shape financial strategy and establish a professional legacy independent of her political career. It was the kind of opportunity that few lawyers receive.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Yet the controversy demonstrated how quickly a prestigious appointment can become complicated when extraordinary compensation, political influence and public attention converge. The central question was no longer simply whether Habba possessed the experience or connections necessary to serve a major family enterprise. It was whether the expectations of such a position could be reconciled with the competing demands of an increasingly public personal and professional life.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              For President Trump, the matter had apparently reached a point at which he was prepared to express his objections publicly. For the Herrera Velutini family, the question was one of contractual obligations, governance and the preservation of its long-term interests. For Habba Mildon, it represented a test of whether the reputation she had built through strength, loyalty and determination could be sustained in an entirely different professional environment.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              The contrast was striking. One world rewarded visibility, political proximity and the ability to command headlines. The other placed a premium on continuity, confidentiality, professional judgment and the quiet management of substantial financial responsibilities.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              Alina Habba Mildon had moved between those worlds with extraordinary speed. Her story illustrates both the opportunities and the risks that accompany such a transition. Beauty may command admiration. Power may open doors. Strength may establish a reputation. Wealth may provide extraordinary freedom.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              But none of those qualities alone guarantees the confidence required to lead within a multigenerational financial institution. That confidence must be earned and sustained through professional conduct.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              The Herrera Velutini family&apos;s stated tradition of loyalty, discretion and discipline provides the standard by which it may ultimately assess the future of its relationship with Habba Mildon. Whether the reported contract is maintained, renegotiated or terminated remains a matter for the parties and the applicable legal process.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              What cannot be overlooked is the remarkable transformation of a once-close political relationship into a public controversy involving the president, his former attorney and a family whose financial heritage extends across centuries..
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              For a woman once celebrated as a symbol of beauty, power and strength, the challenge now is whether those qualities can be matched by the lasting responsibilities of institutional leadership. And for a family whose reputation has been cultivated across generations, the stakes extend beyond one appointment or one contract. They concern the preservation of a legacy.
            </p>

            <p className="fn-art-paragraph" style={bodyStyle}>
              In the end, vanity may attract attention, ambition may create opportunity and power may command influence. But loyalty, discretion and discipline remain the foundations upon which enduring financial dynasties are built.
            </p>

            <p className="fn-art-paragraph" style={{ ...bodyStyle, marginBottom: "24px" }}>
              And perhaps that is the most important lesson of the controversy surrounding Alina Habba Mildon: <strong style={{ color: "#111827" }}>power can be acquired in a moment, but trust takes generations to build</strong>.
            </p>

            {/* ── KEY FIGURES CALLOUT ── */}
            <section
              style={{
                marginTop: "28px",
                marginBottom: "28px",
                padding: "22px 24px",
                backgroundColor: "#fafaf9",
                borderLeft: "3px solid #18181b",
                borderTop: "1px solid #e4e4e7",
                borderRight: "1px solid #e4e4e7",
                borderBottom: "1px solid #e4e4e7",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "18px", paddingBottom: "16px", borderBottom: "1px solid #e4e4e7", marginBottom: "14px" }}>
                <div>
                  <div style={{ fontSize: "26px", fontWeight: 800, color: "#18181b", lineHeight: 1.1 }}>20+</div>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#52525b", marginTop: "4px", textTransform: "uppercase" }}>Law Firms</div>
                </div>
                <div style={{ borderLeft: "1px solid #e4e4e7", paddingLeft: "18px" }}>
                  <div style={{ fontSize: "26px", fontWeight: 800, color: "#991b1b", lineHeight: 1.1 }}>$100M</div>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#52525b", marginTop: "4px", textTransform: "uppercase" }}>Yearly Legal &amp; Advisory Spending</div>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: "13.5px", lineHeight: "1.6", color: "#3f3f46", fontStyle: "italic", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif" }}>
                Habba&apos;s responsibilities included coordinating more than 20 law firms and overseeing approximately $100 million in annual legal and advisory expenditure. If accurate, that description would place her at the center of a substantial operation requiring sustained coordination, oversight and reporting.
              </p>
            </section>

            {/* ── TIMELINE BLOCK ── */}
            <section
              style={{
                marginTop: "32px",
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
                  justifyContent: "space-between",
                  marginBottom: "18px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #e4e4e7",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#18181b" }}>
                  <span style={{ width: "6px", height: "6px", backgroundColor: "#b91c1c", display: "inline-block" }} />
                  <span>Timeline</span>
                </div>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#71717a" }}>
                  Key Events
                </span>
              </div>

              <div style={{ position: "relative", paddingLeft: "22px", borderLeft: "1px solid #d4d4d8" }}>
                {timelineEvents.map((ev, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: "relative",
                      paddingBottom: idx < timelineEvents.length - 1 ? "16px" : "0",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "-27px",
                        top: "4px",
                        width: "9px",
                        height: "9px",
                        borderRadius: "9999px",
                        backgroundColor: "#ffffff",
                        border: "2px solid #991b1b",
                        display: "inline-block",
                      }}
                    />
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#18181b", marginBottom: "3px" }}>
                      {ev.date}
                    </div>
                    <div style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#3f3f46", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif" }}>
                      {ev.text}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SOURCES BLOCK ── */}
            <section
              style={{
                marginTop: "32px",
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
                  { title: "The New York Times", domain: "nytimes.com", url: "https://www.nytimes.com" },
                  { title: "GV Wire", domain: "gvwire.com", url: "https://gvwire.com" },
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
                    <label htmlFor="vanity-name">Full Name *</label>
                    <input type="text" id="vanity-name" required placeholder="e.g. Sarah Connor" className="fn-art-input-field" />
                  </div>
                  <div className="fn-art-input-group">
                    <label htmlFor="vanity-email">Email Address *</label>
                    <input type="email" id="vanity-email" required placeholder="e.g. sarah@example.com" className="fn-art-input-field" />
                  </div>
                </div>
                <div className="fn-art-input-group" style={{ marginTop: "12px" }}>
                  <label htmlFor="vanity-message">Comment *</label>
                  <textarea id="vanity-message" required placeholder="Share your thoughts on this story..." className="fn-art-textarea-field" />
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

export default TheVanityOfAlinaHabbaMildonArticle;
