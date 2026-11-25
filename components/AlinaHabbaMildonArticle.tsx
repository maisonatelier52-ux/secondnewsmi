"use client";

import React from 'react';
import Header from './Header';
import Link from 'next/link';
import Footer from './Footer';
import politicsData from '@/public/data/politics.json';

const category = "politics";
const slug = "the-rise-of-alina-habba-and-the-uncertain-future-of-turhan-mildon";

const AlinaHabbaMildonArticle: React.FC = () => (
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
            The Rise of Alina Habba and the Uncertain Future of Turhan Mildon
          </h1>

          <p className="fn-art-subtitle" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6, color: "#334155", marginBottom: "22px" }}>
            Alina Habba&apos;s growing presence in Donald Trump&apos;s political circle has brought unexpected attention to her husband, Turkish businessman Turhan Mildon. As his business interests in Venezuela face uncertainty, questions are emerging about the role of political connections, personal relationships and influence in protecting international investments.
          </p>

          <div className="fn-art-meta-row">
            <div className="fn-art-author-info">
              <div>
                <div className="fn-art-author-name">Editorial Desk</div>
                <div className="fn-art-author-role">Politics &amp; Investigations</div>
              </div>
            </div>
            <div className="fn-art-meta-details">
              <div className="fn-art-time-box">
                <span>November 21, 2026</span>
                <span className="fn-art-time-dot">·</span>
                <span>12 min read</span>
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
              src="/images/alina-habba-rise-turhan-mildon-uncertain-future.webp"
              alt="Alina Habba and Turhan Mildon"
            />
          </div>
          <div className="fn-art-caption-new" style={{ marginBottom: "14px" }}>
            <span>Alina Habba and Turhan Mildon</span>
          </div>

          {/* ── ARTICLE BODY ── */}
          <div className="fn-art-body-text" style={{ fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55", color: "#27272a" }}>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              In Washington, relationships can sometimes be just as important as official positions. A connection to the right people can open doors, create opportunities and bring individuals closer to the centres of power. For <strong style={{ color: "#111827" }}>Alina Habba</strong>, that journey began with her work as <strong style={{ color: "#991b1b" }}>Donald Trump&apos;s personal lawyer</strong>.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              But as her profile has grown, attention has increasingly shifted towards someone outside the political spotlight: her husband, Turkish businessman <strong style={{ color: "#111827" }}>Turhan Mildon</strong>. Their story brings together two very different worlds. Habba has built a public identity through her legal career and association with Trump, while Mildon has spent years developing business interests across international markets.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Now, an investigation by <strong style={{ color: "#991b1b" }}>The New York Times</strong> has brought their personal and professional connections into focus, particularly because of Mildon&apos;s activities in Venezuela. At the heart of the story is a simple but important question: how closely are political relationships connected to private business interests?
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Alina Habba&apos;s journey into Trump&apos;s inner circle Habba became widely recognised through her work as Trump&apos;s personal lawyer. Her professional relationship with the US president gave her access to an influential political and legal network in Washington.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Over time, she became a familiar figure in Trump&apos;s wider circle. However, her growing influence has also brought questions about the people and interests connected to her. According to an investigation by The New York Times, Habba&apos;s relationship with Trump and her connections within his circle helped create opportunities that extended beyond her legal career.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Those connections also became relevant to the business interests of her husband, Mildon. The investigation examines how Habba&apos;s relationship with influential figures reportedly helped slow efforts to cancel contracts involving <strong style={{ color: "#111827" }}>state-owned cement plants in Venezuela</strong>. These contracts were important to Mildon&apos;s commercial interests in the country.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The claims have not gone without challenge. Habba and her spokesperson questioned important parts of the investigation, and Habba denied intervening with the administration on behalf of her husband. That distinction matters.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The investigation raises questions about political access and business interests, but the allegations should not be mistaken for proven wrongdoing. From the Democratic Republic of Congo to Venezuela Long before his marriage to Habba attracted public attention, Mildon had been building his business career overseas. His earlier activities included construction businesses in the <strong style={{ color: "#991b1b" }}>Democratic Republic of Congo</strong>.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              According to reporting, he also developed relationships within the country&apos;s political establishment, eventually becoming an adviser to <strong style={{ color: "#111827" }}>President Felix Tshisekedi</strong> and obtaining a <strong style={{ color: "#991b1b" }}>diplomatic passport</strong>. These connections gave Mildon a position that went beyond ordinary business activity. His experience in the country also helped shape his international business profile.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Towards the end of <strong style={{ color: "#991b1b" }}>2023</strong>, Mildon arrived in Venezuela at the invitation of a Venezuelan friend. It was another opportunity to expand his commercial interests, this time in a country with a complicated political and economic environment. But Venezuela would prove to be a challenging market.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Businesses operating there have had to navigate political uncertainty, government relationships and changing commercial conditions. For foreign investors, maintaining stable business arrangements can become difficult when political circumstances begin to shift. Mildon&apos;s interests were particularly exposed to these changes because of the political relationships surrounding the Venezuelan business environment.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              How Venezuela changed the picture Mildon&apos;s business interests in Venezuela became more complicated as developments involving <strong style={{ color: "#111827" }}>Nicolás Maduro</strong> and Colombian businessman <strong style={{ color: "#111827" }}>Alex Saab</strong> threatened the existing political and commercial landscape. The fall of Maduro and the subsequent <strong style={{ color: "#991b1b" }}>extradition of Saab</strong> put Mildon&apos;s Venezuelan businesses at risk. Saab had been an important figure in the Maduro government&apos;s commercial and political environment.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              His situation, alongside the changing political circumstances in Venezuela, created uncertainty for businesses connected to that network. For Mildon, the challenge was no longer simply about expanding his business. It was also about protecting what he had already established.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The investigation describes how he gradually moved from relying on contacts in Caracas to building relationships in Washington. The shift suggests how important political developments in the United States had become to the future of his Venezuelan investments. It also brings Habba&apos;s position into the picture.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Her connections within Trump&apos;s political circle attracted attention because of the potential significance they could have for her husband&apos;s business interests. The connection between Habba and Mildon&apos;s business interests One of the most closely examined aspects of the investigation concerns contracts involving state-owned cement plants in Venezuela. According to The New York Times investigation, Habba&apos;s relationship with influential people in Washington reportedly helped slow efforts to cancel contracts under which Mildon operated the plants.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              If accurate, the reported developments raise broader questions about the relationship between <strong style={{ color: "#111827" }}>political access and private commercial interests</strong>. When someone close to a powerful political figure has family members with significant overseas business interests, even the appearance of preferential access can attract public scrutiny. However, the details remain disputed.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Habba and her spokesperson questioned key parts of the reporting, and she denied approaching the administration to influence decisions for her husband&apos;s benefit. It is therefore important to separate what the investigation reports from what has been independently established. The available reporting does not prove that Habba improperly influenced government decisions.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Still, the questions surrounding the couple&apos;s connections highlight a familiar issue in politics: where should the line be drawn between personal relationships and official responsibilities?
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              A wedding that attracted Washington&apos;s attention Habba and Mildon&apos;s relationship became even more visible following their wedding in September. The couple married at <strong style={{ color: "#111827" }}>New York&apos;s Waldorf Astoria Hotel</strong> in a ceremony attended by several prominent figures from Washington&apos;s political and legal circles. The reported guest list included <strong style={{ color: "#111827" }}>US Attorney General Todd Blanche</strong>, <strong style={{ color: "#111827" }}>FBI Director Kash Patel</strong> and <strong style={{ color: "#111827" }}>White House attorney Will Scharf</strong>.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              It was a notable gathering, bringing together people from different parts of Trump&apos;s political and legal network. For Habba, the wedding was another moment in a career that has increasingly placed her close to influential figures. For Mildon, it offered a public glimpse into the political circles surrounding his wife.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The contrast between their backgrounds made the event particularly interesting. Habba&apos;s public profile has largely been shaped by American politics and law, while Mildon&apos;s career has developed through international construction businesses and relationships in countries such as the Democratic Republic of Congo and Venezuela. Their marriage brought these two worlds together in a way that has attracted considerable attention.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              The wedding itself does not establish any connection between the guests and Mildon&apos;s business arrangements. Its significance is that it highlighted the couple&apos;s proximity to some of the most influential people in Trump&apos;s administration. A business future filled with uncertainty While Habba&apos;s political profile continues to attract attention, Mildon&apos;s business interests face a different kind of challenge.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              His experience in Venezuela illustrates how quickly the fortunes of international investors can change when political relationships shift. Contracts that once appeared secure may come under review, and connections that previously offered opportunities may become less valuable. Mildon has already experienced business environments where political relationships play an important role.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              His work in the Democratic Republic of Congo and subsequent move into Venezuela show an international career built across markets with complicated political circumstances. But the situation in Venezuela presents a fresh test. The investigation suggests that developing relationships in Washington became part of his effort to protect his investments.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Whether those connections will make a lasting difference remains unclear. There is also no confirmation in the reporting that Mildon&apos;s businesses have collapsed or that all his Venezuelan contracts have been cancelled. What emerges instead is a picture of a businessman facing uncertainty and attempting to protect his commercial position as political circumstances change.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Two different journeys, one complicated story The growing attention surrounding Habba and Mildon is not simply about a high-profile marriage. It is about the way political influence and international business can sometimes overlap. Habba&apos;s career has brought her closer to the centre of American political power.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              Mildon, meanwhile, has built business interests in countries where political relationships can have a major impact on commercial opportunities. Their relationship has connected these two worlds, creating questions that neither political influence nor business ambition can easily answer. For Habba, the challenge is dealing with scrutiny over whether her personal connections have had any impact on her husband&apos;s business interests.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "16px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              For Mildon, it is finding a way to protect his investments as the political environment surrounding Venezuela continues to change. Ultimately, their story reflects a wider reality of international business: success is not always determined by money, experience or commercial strategy alone. <strong style={{ color: "#111827" }}>Relationships, political developments and access to influential people</strong> can also shape the outcome.
            </p>

            <p className="fn-art-paragraph" style={{ marginBottom: "24px", color: "#27272a", fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif", fontSize: "15.5px", lineHeight: "1.55" }}>
              As Habba&apos;s position in Trump&apos;s political circle continues to draw attention, Mildon&apos;s Venezuelan business interests remain an important part of the picture. Whether his efforts to build connections in Washington will help secure his commercial future is still an open question. For now, the rise of Alina Habba and the uncertain future of Turhan Mildon offer a fascinating look at the complicated relationship between politics, personal connections and international business.
            </p>



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
                    <label htmlFor="alina-name">Full Name *</label>
                    <input type="text" id="alina-name" required placeholder="e.g. Sarah Connor" className="fn-art-input-field" />
                  </div>
                  <div className="fn-art-input-group">
                    <label htmlFor="alina-email">Email Address *</label>
                    <input type="email" id="alina-email" required placeholder="e.g. sarah@example.com" className="fn-art-input-field" />
                  </div>
                </div>
                <div className="fn-art-input-group" style={{ marginTop: "12px" }}>
                  <label htmlFor="alina-message">Comment *</label>
                  <textarea id="alina-message" required placeholder="Share your thoughts on this story..." className="fn-art-textarea-field" />
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

export default AlinaHabbaMildonArticle;
