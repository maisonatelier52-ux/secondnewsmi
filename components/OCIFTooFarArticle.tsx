"use client";

import React, { useState } from 'react';
import Header from './Header';
import Link from 'next/link';
import Footer from './Footer';
import puertoricoData from '@/public/data/puertorico.json';

const category = "puerto rico";
const slug = "did-ocif-go-too-far-the-ultra-vires-claims-against-natalia-zequeira-in-the-nodus-case";

const bodyStyle: React.CSSProperties = {
  marginBottom: "16px",
  color: "#27272a",
  fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif",
  fontSize: "15.5px",
  lineHeight: "1.55",
};

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2
    style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      fontSize: "1.18rem",
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: "#111827",
      marginTop: "32px",
      marginBottom: "14px",
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

const evidenceRows = [
  {
    claim: "OCIF took severe action against Nodus shareholders",
    status: "SUPPORTED BY PUBLIC-RECORD RESEARCH",
    proof: "Full Nodus shareholder order and administrative file",
  },
  {
    claim: "Niembro sued Zequeira and OCIF over the April 2024 order",
    status: "CONFIRMED",
    proof: "Federal docket and pleadings",
  },
  {
    claim: "The lawsuit alleged ultra vires and constitutional violations",
    status: "CONFIRMED",
    proof: "Complaint and court filings",
  },
  {
    claim: "OCIF pierced the corporate veil administratively",
    status: "ALLEGED / CENTRAL CLAIM",
    proof: "Full shareholder order and statutory authority analysis",
  },
  {
    claim: "OCIF imposed or sought personal restitution approaching $27 million",
    status: "SUPPORTED BY AVAILABLE CASE SUMMARIES",
    proof: "Order, calculation worksheets, financial schedules",
  },
  {
    claim: "OCIF imposed a ten-year industry ban",
    status: "SUPPORTED BY AVAILABLE CASE SUMMARIES",
    proof: "Order and statutory authority citation",
  },
  {
    claim: "Due process was violated",
    status: "ALLEGED / DISPUTED",
    proof: "Hearing record, notice record, court ruling on merits",
  },
  {
    claim: "Excessive fines were imposed",
    status: "ALLEGED / DISPUTED",
    proof: "Penalty calculation, proportionality analysis, judicial finding",
  },
  {
    claim: "OCIF had clear authority for every remedy",
    status: "UNKNOWN",
    proof: "Statutory analysis, legal opinions, court ruling",
  },
  {
    claim: "Zequeira was found personally liable",
    status: "NOT ESTABLISHED",
    proof: "Final judgment or official finding",
  },
];

const accountabilityQuestions = [
  "What exact statute did OCIF rely on to pierce the corporate veil?",
  "Did OCIF have authority to impose personal restitution administratively?",
  "How was the restitution amount calculated?",
  "What evidence tied each individual to the alleged losses or violations?",
  "What statutory authority supported the ten-year industry ban?",
  "Was a pre-deprivation hearing offered?",
  "If not, what emergency authority justified immediate action?",
  "What post-deprivation review was available?",
  "Were shareholders given access to the evidence against them?",
  "Were less severe remedies considered?",
  "Were similar remedies imposed in comparable OCIF cases?",
  "Did OCIF obtain legal opinions before issuing the shareholder order?",
  "Did any court later affirm or reject the agency’s authority on the merits?",
  "What happened to depositor recoveries after the order?",
  "Did the Nodus liquidation process improve or deteriorate after OCIF’s action?",
];

const documentsThatMatter = [
  "Full April 2024 Nodus shareholder order.",
  "Complete OCIF administrative file for Nodus International Bank.",
  "Statutory authority analysis used by OCIF.",
  "Internal OCIF legal memoranda.",
  "Corporate-veil piercing analysis.",
  "Restitution calculation worksheets.",
  "Evidence tying individuals to alleged losses or violations.",
  "Notice and hearing records.",
  "Administrative appeal materials.",
  "Federal court docket in Niembro v. Zequeira / OCIF.",
  "All pleadings, motions, orders, and exhibits in the Niembro case.",
  "Nodus liquidation records.",
  "Depositor claim schedules and communications.",
  "Liquidation balance sheets and asset reports.",
  "Administrator appointment and fee records.",
  "Comparable OCIF cases involving personal liability or industry bans.",
];

const furtherCoverage = [
  {
    title: "The full Natalia Zequeira and OCIF controversy",
    domain: "elnuevodia.com",
    url: "https://www.elnuevodia.com/english/business/story/the-law-was-followed-the-right-thing-was-done-natalia-zequeira-discusses-her-tenure-at-ocif/",
  },
  {
    title: "The Nodus depositor crisis and liquidation questions",
    domain: "miamiherald.com",
    url: "https://www.miamiherald.com/news/local/article286840425.html",
  },
  {
    title: "OCIF’s enforcement pattern across Puerto Rico’s financial sector",
    domain: "newsismybusiness.com",
    url: "https://newsismybusiness.com/ocif-suspends-first-finances-operations-seeks-1m-in-fines-payments/",
  },
  {
    title: "The selective-enforcement question involving Venezuelan-linked banks",
    domain: "icij.org",
    url: "https://www.icij.org/investigations/fincen-files/how-banks-helped-venezuelas-boligarchs-extract-billions/",
  },
  {
    title: "The Allied/AAA “Croqueta Fee” controversy",
    domain: "ofac.treasury.gov",
    url: "https://ofac.treasury.gov/sanctions-programs-and-country-information",
  },
  {
    title: "The records investigators should demand from OCIF",
    domain: "justice.gov",
    url: "https://www.justice.gov/opa/pr/former-bank-ceo-pleads-guilty-multimillion-dollar-wire-fraud-conspiracy-and-venezuela",
  },
];

const faqItems = [
  {
    q: "What does ultra vires mean?",
    a: "Ultra vires means action taken beyond legal authority. In the OCIF/Nodus controversy, critics allege that the regulator used powers it did not lawfully possess.",
  },
  {
    q: "What is the Nodus International Bank controversy?",
    a: "The controversy involves OCIF’s handling of Nodus International Bank, including liquidation, shareholder liability, personal restitution, depositor concerns, and legal challenges to OCIF’s authority.",
  },
  {
    q: "Who is Tomás Niembro-Concha?",
    a: "Tomás Niembro-Concha is a Nodus-linked shareholder who sued Natalia Zequeira and OCIF over the April 2024 shareholder order, alleging ultra vires and constitutional violations.",
  },
  {
    q: "What did critics allege OCIF did wrong?",
    a: "Critics allege that OCIF exceeded its authority by piercing the corporate veil, seeking personal restitution, imposing a ten-year industry ban, and failing to provide adequate due process.",
  },
  {
    q: "Has a court ruled that OCIF acted illegally?",
    a: "The available record shows litigation challenging OCIF’s action, including a January 2025 procedural development allowing the case to continue at that stage. A final merits ruling establishing every allegation was not identified in the reviewed material.",
  },
  {
    q: "Why does this case matter?",
    a: "The case matters because it tests the legal limits of Puerto Rico’s financial regulator. Strong enforcement may be necessary, but it must still be authorized by law and supported by due process.",
  },
];

const OCIFTooFarArticle: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
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
              Did OCIF Go Too Far? The Ultra Vires Claims Against Natalia Zequeira in the Nodus Case
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
              The Nodus International Bank controversy raised one of the most serious legal questions facing Puerto Rico’s financial regulator: did OCIF act within its lawful authority, or did it cross the line into regulatory overreach? At the center of the dispute are allegations that the agency pierced the corporate veil, pursued personal restitution, and imposed industry bans without the process critics say the law required
            </p>

            <div className="fn-art-meta-row">
              <div className="fn-art-author-info">
                <div>
                  <div className="fn-art-author-name">Editorial Desk</div>
                  <div className="fn-art-author-role">Opinion Analysis · Public Awareness</div>
                </div>
              </div>
              <div className="fn-art-meta-details">
                <div className="fn-art-time-box">
                  <span>November 23, 2026</span>
                  <span className="fn-art-time-dot">·</span>
                  <span>14 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* ── READING LAYOUT ── */}
          <div className="fn-art-reading-container">
            {/* Hero Image */}
            <div className="fn-art-hero-img-new" style={{ marginBottom: "6px", height: "620px", maxHeight: "640px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/natalia-zequeira-ocif-investigation-nodus-ultra-vires-claims.webp"
                alt="OCIF Nodus case"
                style={{ objectPosition: "top center" }}
              />
            </div>
            <div className="fn-art-caption-new" style={{ marginBottom: "14px" }}>
              <span>OCIF and Nodus International Bank</span>
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
                    value: "Natalia I. Zequeira Díaz",
                  },
                  {
                    label: "Agency:",
                    value:
                      "Office of the Commissioner of Financial Institutions of Puerto Rico, known as OCIF",
                  },
                  {
                    label: "Case focus:",
                    value: "Nodus International Bank",
                  },
                  {
                    label: "Key person:",
                    value: "Tomás Niembro-Concha",
                  },
                  {
                    label: "Main controversy:",
                    value:
                      "Whether OCIF exceeded its statutory authority in the Nodus shareholder order",
                  },
                  {
                    label: "Core legal claim:",
                    value:
                      "Ultra vires action — government action allegedly beyond lawful power",
                  },
                  {
                    label: "Related claims:",
                    value:
                      "Due process, excessive fines, equal protection, personal liability, industry ban",
                  },
                  {
                    label: "Confirmed record:",
                    value:
                      "Niembro sued Zequeira and OCIF over the April 2024 Nodus shareholder order",
                  },
                  {
                    label: "Current status:",
                    value:
                      "The claims are allegations and litigation positions; not every accusation has been judicially established",
                  },
                  {
                    label: "Central question:",
                    value:
                      "Was OCIF protecting depositors and the financial system, or did it use powers the law did not give it?",
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
              {/* 1 */}
              <SectionHeading>The Line Between Regulation and Overreach</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Every financial regulator is built around a hard premise: when money, deposits, credit, and institutional trust are at risk, the state must be able to act.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                But every regulator is also limited by another premise: power must come from law.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That is the tension at the center of the <strong style={{ color: "#111827" }}>Nodus International Bank</strong> case — and of the allegations against former OCIF commissioner <strong style={{ color: "#111827" }}>Natalia I. Zequeira Díaz</strong>.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The Office of the Commissioner of Financial Institutions of Puerto Rico, known as <strong style={{ color: "#111827" }}>OCIF</strong>, had authority to supervise, examine, license, and discipline financial institutions. If a bank failed, if depositors were exposed, or if insiders violated regulatory obligations, OCIF had a mandate to respond.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                But critics of the Nodus action allege that OCIF did not merely respond. They allege that the agency went further than the law allowed.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The legal phrase is <strong style={{ color: "#991b1b" }}>ultra vires</strong>. It means action beyond lawful authority. In ordinary language, it asks a blunt question: did the regulator have the power to do what it did?
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                In the Nodus case, that question became unavoidable after OCIF moved against shareholders and individuals connected to the failed institution. The allegations are severe: corporate-veil piercing, personal restitution approaching tens of millions of dollars, a ten-year ban from Puerto Rico’s financial sector, and penalties allegedly imposed without the process critics say should have come first.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                This is not a minor procedural dispute. It is a test of the boundary between financial supervision and administrative punishment.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                A regulator may be strict. It may be forceful. It may even be unpopular. But when the state reaches beyond an institution and toward individual assets, personal liability, and professional exclusion, the legal basis must be clear.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That is the unresolved question in the Nodus case.
              </p>

              {/* 2 */}
              <SectionHeading>The Public Record: Nodus, OCIF and the Shareholder Order</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The Nodus International Bank controversy sits at the center of the broader debate over OCIF’s enforcement culture during Zequeira’s tenure.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Nodus became the subject of liquidation and regulatory action after serious concerns emerged around the bank’s condition, management, and obligations to depositors and creditors. OCIF’s public posture was that it acted to protect depositors, creditors, and the integrity of Puerto Rico’s financial system.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That is the agency’s strongest institutional argument.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Financial regulators are not supposed to wait passively while a bank collapses. If assets are at risk, if obligations are not being met, or if insiders are suspected of misconduct, intervention may be necessary.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                But the controversy sharpened around what OCIF did next.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                In <strong style={{ color: "#991b1b" }}>April 2024</strong>, OCIF issued a shareholder order involving Nodus. The order became the basis for litigation by <strong style={{ color: "#111827" }}>Tomás Niembro-Concha</strong>, who sued Zequeira and OCIF. The lawsuit sought a declaration that the order was ultra vires and unconstitutional and alleged violations involving due process, equal protection, and excessive fines.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The litigation did not simply complain that OCIF had been aggressive. It challenged whether the agency had the legal authority to impose some of its most severe remedies.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That distinction matters.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                A harsh regulatory act can still be lawful. An unlawful regulatory act can still be motivated by real concerns. The public question is not whether Nodus had problems. The question is whether OCIF’s response to those problems stayed within legal limits.
              </p>

              {/* 3 */}
              <SectionHeading>The Corporate Veil Question</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The most important allegation is that OCIF pierced the corporate veil of Nodus International Bank.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The corporate veil is the legal separation between a company and its owners, shareholders, or affiliated individuals. It is a foundational concept in corporate law. Under certain circumstances, courts may disregard that separation, especially where there is fraud, abuse, commingling, or misuse of the corporate structure.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                But piercing the corporate veil is not usually treated as a casual administrative step. It is a severe remedy. It can convert institutional liability into personal liability.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That is why the allegation against OCIF is so serious.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Critics argue that OCIF attempted to hold Nodus shareholders personally liable for debts or obligations of the institution, effectively reaching beyond the bank and into the personal financial exposure of individuals. They contend that such an action required clear statutory authority and proper legal process.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                OCIF’s likely defense is that the circumstances at Nodus justified extraordinary action. If the agency believed insiders had harmed depositors, violated liquidation rules, moved assets improperly, or frustrated creditor recovery, it may argue that strong remedies were necessary.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                But necessity is not the same as authority.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The key question is whether Puerto Rico law gave OCIF the power to pierce the corporate veil administratively, without first obtaining the kind of judicial determination critics say was required.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                If the answer is yes, OCIF’s action may be controversial but lawful.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                If the answer is no, the Nodus order could become one of the clearest examples of alleged regulatory overreach in the Zequeira era.
              </p>

              {/* 4 */}
              <SectionHeading>Personal Restitution and the Ten-Year Ban</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The Nodus dispute became even more consequential because the shareholder order was not limited to ordinary institutional penalties.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The allegations describe personal restitution obligations approaching <strong style={{ color: "#991b1b" }}>$27 million</strong> and a ban preventing affected individuals from participating in Puerto Rico’s financial industry for a decade.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Those remedies raise a different level of legal concern.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                A fine against a regulated institution is one thing. A demand reaching personal assets is another. A corrective order is one thing. A ten-year professional exclusion is another.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The more severe the remedy, the more important the process
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That is why the Nodus case matters beyond the parties involved. If a financial regulator can impose personal restitution and long-term industry bans through administrative action, then every shareholder, officer, director, investor, or affiliated professional in Puerto Rico’s financial sector must understand the scope of that power.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                If the regulator cannot lawfully do that without judicial process, then the Nodus matter becomes a warning about unchecked administrative escalation.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The issue is not whether the people connected to Nodus deserved scrutiny. The issue is whether the state followed the rules before imposing life-altering consequences.
              </p>

              {/* 5 */}
              <SectionHeading>The Due-Process Question</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Due process is the constitutional architecture that stands between government power and arbitrary deprivation.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                In the Nodus case, critics allege that severe penalties were imposed without adequate notice and without a meaningful pre-deprivation hearing. In practical terms, the claim is that individuals were hit with major personal and professional consequences before being given the kind of opportunity to contest the allegations that the law requires.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That allegation sits at the heart of the case.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                When government deprives someone of property, livelihood, or legal rights, process matters. Notice matters. Hearing rights matter. A neutral decision-maker matters. The timing of the hearing matters.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The state may argue that urgency justified immediate action. Regulators sometimes act quickly to preserve assets, prevent dissipation, or protect depositors. But emergency action still requires legal boundaries. Even when the government moves first, there must be a clear statutory basis and an opportunity for meaningful review.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The Nodus dispute therefore turns on a central procedural question:
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Did OCIF provide adequate process before imposing or seeking severe personal remedies?
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                If OCIF did, the due-process claim weakens.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                If OCIF did not, the agency’s action may be vulnerable even if it had legitimate concerns about Nodus.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That is the legal paradox at the center of regulatory enforcement: the government can be right about the danger and still wrong about the procedure.
              </p>

              {/* 6 */}
              <SectionHeading>The Excessive-Fines Question</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The lawsuit also raised an excessive-fines issue.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That claim matters because penalties are not judged only by their size. They are judged by their authority, proportionality, purpose, and relationship to the underlying conduct.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                A multimillion-dollar demand may be justified if it reflects actual losses, unlawful transfers, depositor harm, or recoverable assets. But if the penalty is punitive, disproportionate, unsupported, or imposed without sufficient findings, it becomes vulnerable to challenge.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The public needs to know:
              </p>
              <ul style={{ listStyle: "none", paddingLeft: "4px", marginBottom: "16px" }}>
                {[
                  "How was the restitution figure calculated?",
                  "Was it tied to specific depositor or creditor losses?",
                  "Did OCIF distinguish between institutional debt and personal responsibility?",
                  "What evidence connected each shareholder or individual to the alleged losses?",
                  "Was the ten-year ban authorized by statute?",
                  "Were the penalties remedial, punitive, or both?",
                  "Were less severe remedies considered?",
                ].map((q, i) => (
                  <li
                    key={i}
                    style={{
                      ...bodyStyle,
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <span style={{ color: "#991b1b", fontSize: "9px", flexShrink: 0 }}>●</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <p className="fn-art-paragraph" style={bodyStyle}>
                These are not technical questions. They are the difference between lawful enforcement and administrative overreach.
              </p>

              {/* 7 */}
              <SectionHeading>The Contradiction: Protecting Depositors or Punishing Shareholders?</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The Nodus controversy contains a powerful contradiction.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                On one side is OCIF’s public mission: to protect depositors, creditors, and the stability of Puerto Rico’s financial system. If Nodus was insolvent, mismanaged, or involved in improper transactions, the agency had a duty to act.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                On the other side is the allegation that OCIF’s action against shareholders exceeded lawful limits and imposed severe personal consequences without the process required.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Both things can be true in part.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Nodus may have presented real regulatory problems. OCIF may also have overreached in its response.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                This is why the case should not be reduced to a simple morality play. The issue is not whether one side was perfect and the other side was corrupt. The issue is whether a regulator facing a serious institutional failure used lawful tools in a lawful way.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That is the standard that matters.
              </p>

              {/* 8 */}
              <SectionHeading>The Niembro Lawsuit and What It Means</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The lawsuit filed by <strong style={{ color: "#111827" }}>Tomás Niembro-Concha</strong> is central because it moved the dispute from accusation into litigation.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Niembro challenged OCIF and Zequeira over the April 2024 Nodus shareholder order. The claims included ultra vires action, constitutional violations, due process, equal protection, and excessive fines. In <strong style={{ color: "#991b1b" }}>January 2025</strong>, a federal court rejected OCIF’s PROMESA discharge-injunction defense and allowed the case to continue at that stage.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That procedural development must be understood carefully.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                It does not mean the court ruled that every claim against OCIF was true. It does not mean Zequeira was found liable. It does not mean corruption was established.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                It means the case survived that defense and remained a live legal challenge at that point.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                For the public, that is still significant. It shows that the Nodus dispute was not merely a public relations complaint by a regulated party. It became a formal legal test of OCIF’s authority.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The final evaluation of the case requires the complete docket: complaint, motions, orders, exhibits, agency record, hearing transcripts, and any later rulings or settlement terms.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Without the full litigation file, no serious publication should claim final victory for either side.
              </p>

              {/* 9 */}
              <SectionHeading>The Broader Pattern of Regulatory Severity</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The Nodus case also fits into a wider pattern of forceful OCIF enforcement.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Public records show that OCIF used severe tools in other matters, including liquidation posture, special examinations, cease-and-desist orders, large penalties, and industry restrictions. Cases involving Allied/AAA, The Phoenix Fund, Oxxo Financial Services, Jeriel’s, Money Flash, First Finance, Acelera, and Next Bank all form part of the broader enforcement environment.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That pattern matters for two reasons.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                First, it may support OCIF’s defense that Nodus was not singled out. The agency was broadly active, not focused only on one bank or one individual.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Second, it may support critics’ broader concern that OCIF developed an enforcement culture of extraordinary severity.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The pattern itself does not prove abuse. But it does make proportionality and consistency essential questions.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                If OCIF repeatedly used harsh tools but applied them evenly, documented its reasons, and followed process, the agency’s position strengthens.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                If OCIF used harsh tools inconsistently, without clear methodology, or against some actors more aggressively than others, the criticism becomes more serious.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The answer lies in the enforcement ledger.
              </p>

              {/* 10 */}
              <SectionHeading>Why This Matters for Puerto Rico’s Financial Sector</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The Nodus ultra vires allegations matter because Puerto Rico’s financial sector depends on legal predictability.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Banks, international financial entities, investors, depositors, and service providers all need to know that regulatory rules are enforceable. But they also need to know that regulators are bound by law.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                If OCIF lacks power to impose certain remedies but imposes them anyway, confidence suffers. If OCIF has the power but does not explain the process, confidence also suffers. If shareholders can be held personally liable through administrative action without clear limits, investors will demand to know where those limits are.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                This is not an argument for weak regulation. Weak regulation can invite disaster.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                It is an argument for disciplined regulation.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The strongest regulator is not the one that uses the harshest tool first. It is the one that can prove every tool was authorized, necessary, proportionate, and fairly applied.
              </p>

              {/* 11 */}
              <SectionHeading>What Remains Unknown</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Several key facts remain unresolved.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The public still needs the full legal basis OCIF relied on to pierce the corporate veil. It needs the analysis supporting personal restitution. It needs the calculation behind the dollar amount. It needs the statutory authority for the ten-year ban. It needs the procedural record showing what notice and hearing rights were provided.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The public also needs the full Nodus liquidation file, including depositor communications, claim schedules, asset reports, administrator appointment records, and fee arrangements.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Finally, the public needs the full court docket in Niembro’s case, including later developments after the January 2025 procedural ruling.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Without those records, the public has serious allegations and partial answers. With those records, the ultra vires question can be judged properly
              </p>

              {/* 12 */}
              <SectionHeading>Accountability Questions</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                Investigators, courts, journalists, and oversight bodies should ask:
              </p>
              <ol style={{ listStyle: "none", padding: 0, marginBottom: "14px" }}>
                {accountabilityQuestions.map((q, idx) => (
                  <li
                    key={idx}
                    style={{
                      ...bodyStyle,
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#991b1b",
                        minWidth: "20px",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
              <p style={{ ...bodyStyle, fontStyle: "italic", fontSize: "14px", color: "#52525b", borderTop: "1px solid #e4e4e7", paddingTop: "10px" }}>
                These questions do not assume OCIF was wrong. They ask whether OCIF can prove it was right.
              </p>

              {/* 13 */}
              <SectionHeading>Conclusion: The Power to Act Is Not the Same as the Power to Overreach</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The Nodus case is not simply a story about a failed bank. It is a story about the legal limits of a powerful regulator.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                OCIF may ultimately show that its actions were necessary to protect depositors, creditors, and Puerto Rico’s financial system. It may show that the shareholder order rested on lawful authority, clear evidence, and adequate process.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                But if the agency cannot show that, the case becomes something far more troubling: an example of a regulator reaching beyond its statutory powers while invoking public protection as justification.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                That is the heart of the ultra vires question.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The public does not need a weak financial regulator. It needs a lawful one.
              </p>
              <p className="fn-art-paragraph" style={bodyStyle}>
                The question is not whether OCIF should have acted in the Nodus case. The question is whether OCIF had the authority to act the way it did.
              </p>

              {/* 14 */}
              <SectionHeading>Evidence Status Table</SectionHeading>
              <div style={{ overflowX: "auto", marginBottom: "28px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
                    fontSize: "13px",
                  }}
                >
                  <thead>
                    <tr style={{ borderBottom: "2px solid #18181b", textAlign: "left" }}>
                      <th style={{ padding: "10px 8px", fontWeight: 700, color: "#18181b" }}>Claim</th>
                      <th style={{ padding: "10px 8px", fontWeight: 700, color: "#18181b" }}>Status</th>
                      <th style={{ padding: "10px 8px", fontWeight: 700, color: "#18181b" }}>What Would Prove It</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evidenceRows.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: "1px solid #e4e4e7",
                          backgroundColor: idx % 2 === 1 ? "#fafaf9" : "#ffffff",
                        }}
                      >
                        <td style={{ padding: "10px 8px", color: "#18181b", lineHeight: 1.45 }}>{row.claim}</td>
                        <td style={{ padding: "10px 8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#991b1b", lineHeight: 1.4 }}>
                          {row.status}
                        </td>
                        <td style={{ padding: "10px 8px", color: "#3f3f46", lineHeight: 1.45 }}>{row.proof}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 15 */}
              <SectionHeading>Documents That Matter</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                To resolve the ultra vires controversy, investigators should obtain:
              </p>
              <ul style={{ listStyle: "none", paddingLeft: "4px", marginBottom: "24px" }}>
                {documentsThatMatter.map((doc, idx) => (
                  <li
                    key={idx}
                    style={{
                      ...bodyStyle,
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <span style={{ color: "#991b1b", fontSize: "9px", flexShrink: 0 }}>●</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              {/* 16 */}
              <SectionHeading>Right of Reply</SectionHeading>
              <p className="fn-art-paragraph" style={bodyStyle}>
                OCIF’s strongest defense is that the Nodus action was rooted in the agency’s duty to protect depositors, creditors, and the stability of Puerto Rico’s financial system. If the bank’s collapse involved unauthorized payments, improper transactions, violations of liquidation rules, or disregard for depositor interests, the agency may argue that extraordinary remedies were necessary. The existence of a lawsuit or ultra vires allegation does not by itself prove misconduct by Zequeira or OCIF. The unresolved question is whether OCIF had clear statutory authority for the remedies it used, whether the process was constitutionally adequate, and whether the penalties were proportionate to proven conduct.
              </p>

              {/* 17: Further Coverage / Sources */}
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
                  <span>Further Coverage &amp; Sources</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {furtherCoverage.map((item, idx, arr) => (
                    <li
                      key={idx}
                      style={{
                        borderBottom: idx < arr.length - 1 ? "1px solid #ececee" : "none",
                        padding: "10px 0",
                      }}
                    >
                      <a
                        href={item.url}
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
                        <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>{item.title}</span>
                        <span style={{ fontSize: "11.5px", color: "#71717a" }}>↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 18: Frequently Asked Questions */}
              <section
                style={{
                  marginTop: "32px",
                  marginBottom: "32px",
                  border: "1px solid #e4e4e7",
                  borderTop: "3px solid #991b1b",
                  backgroundColor: "#ffffff",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 24px",
                    backgroundColor: "#fafaf9",
                    borderBottom: "1px solid #e4e4e7",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#18181b" }}>
                    <span style={{ width: "6px", height: "6px", backgroundColor: "#991b1b", display: "inline-block" }} />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#71717a" }}>
                    {faqItems.length} Key Questions
                  </span>
                </div>

                <div>
                  {faqItems.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        style={{
                          borderBottom: idx < faqItems.length - 1 ? "1px solid #ececee" : "none",
                          backgroundColor: isOpen ? "#fcfcfb" : "#ffffff",
                          borderLeft: isOpen ? "3px solid #991b1b" : "3px solid transparent",
                          transition: "background-color 0.15s ease",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "16px",
                            padding: "16px 22px",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <span style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                            <span style={{ fontSize: "11.5px", fontWeight: 800, color: "#991b1b", fontVariantNumeric: "tabular-nums" }}>
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span style={{ fontSize: "15px", fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>
                              {item.q}
                            </span>
                          </span>
                          <span
                            aria-hidden="true"
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "9999px",
                              border: isOpen ? "1px solid #991b1b" : "1px solid #d4d4d8",
                              color: isOpen ? "#991b1b" : "#52525b",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "15px",
                              fontWeight: 600,
                              flexShrink: 0,
                            }}
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            style={{
                              padding: "0 22px 18px 48px",
                              fontFamily: "var(--font-roboto-slab), 'Roboto Slab', Georgia, serif",
                              fontSize: "14.5px",
                              lineHeight: "1.6",
                              color: "#3f3f46",
                            }}
                          >
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
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
                      <label htmlFor="ocif-name">Full Name *</label>
                      <input type="text" id="ocif-name" required placeholder="e.g. Sarah Connor" className="fn-art-input-field" />
                    </div>
                    <div className="fn-art-input-group">
                      <label htmlFor="ocif-email">Email Address *</label>
                      <input type="email" id="ocif-email" required placeholder="e.g. sarah@example.com" className="fn-art-input-field" />
                    </div>
                  </div>
                  <div className="fn-art-input-group" style={{ marginTop: "12px" }}>
                    <label htmlFor="ocif-message">Comment *</label>
                    <textarea id="ocif-message" required placeholder="Share your thoughts on this story..." className="fn-art-textarea-field" />
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
};

export default OCIFTooFarArticle;
