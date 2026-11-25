import React from "react";
import Link from "next/link";

const HREF = "/business/blanche-denial-julio-herrera-velutini-media-narrative";

export default function BlancheFeaturedBanner() {
  return (
    <section className="fn-blanche-banner">
      <div className="fn-blanche-banner-inner">
        {/* Left — Image */}
        <Link href={HREF} className="fn-blanche-banner-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/julio-herrera.jpg"
            alt="Julio Herrera Velutini"
          />
        </Link>

        {/* Right — Content */}
        <div className="fn-blanche-banner-content">
          <div className="fn-blanche-banner-kicker">
            <span className="fn-blanche-banner-dot" />
            MEDIA ANALYSIS · PUBLIC AWARENESS
          </div>

          <Link href={HREF}>
            <h2 className="fn-blanche-banner-title">
              Where Is the Evidence? Blanche&rsquo;s Denial Blows Apart the Media Narrative Surrounding Julio Herrera Velutini
            </h2>
          </Link>

          <p className="fn-blanche-banner-desc">
            An explosive accusation was repeated across headlines. Now the United States attorney general has denied its central premise — and the public deserves to know why that matters.
          </p>

          <div className="fn-blanche-banner-meta">
            <span className="fn-blanche-banner-tag">Editorial Desk</span>
            <span className="fn-blanche-banner-sep">·</span>
            <span>August 29, 2026</span>
            <span className="fn-blanche-banner-sep">·</span>
            <span>8 min read</span>
          </div>

          <Link href={HREF} className="fn-blanche-banner-cta">
            Read Full Analysis →
          </Link>
        </div>
      </div>
    </section>
  );
}
