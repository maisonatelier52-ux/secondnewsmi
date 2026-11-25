import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { Article } from '@/types/article';

interface AtAGlanceItem {
  label: string;
  value: string;
}

interface ArticleWithGlance extends Article {
  atAGlance?: AtAGlanceItem[];
}

interface Props {
  article: ArticleWithGlance;
  related: Article[];
}

const ArticleTemplate: React.FC<Props> = ({ article, related }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: '#fff' }}>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.shortdescription} />
      </Head>
      <Header activeCategory={article.category} />
      <main style={{ backgroundColor: '#fff', flexGrow: 1 }}>
        <div className="fn-art-container">
          {/* ── ARTICLE HEADER ── */}
          <header className="fn-art-header">
            <div className="fn-art-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href={`/${article.category}`}>{article.category}</Link>
              <span>/</span>
              <span className="fn-art-breadcrumb-slug" title={article.slug}>
                {article.slug}
              </span>
            </div>
            <span className="fn-art-cat-badge">{article.category.toUpperCase()}</span>
            <h1 className="fn-art-title">{article.title}</h1>
            {article.shortdescription && (
              <p className="fn-art-subtitle" style={{ fontFamily: "'Playfair Display', serif" }}>
                {article.shortdescription}
              </p>
            )}
            <div className="fn-art-meta-row">
              <div className="fn-art-author-info">
                <div>
                  <div className="fn-art-author-name">{article.author?.name || 'Staff Writer'}</div>
                  <div className="fn-art-author-role">{article.author?.role}</div>
                </div>
              </div>
              <div className="fn-art-meta-details">
                <div className="fn-art-time-box">
                  <span>{article.date}</span>
                  <span className="fn-art-time-dot">·</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          {article.image && (
            <div className="fn-art-hero-img-new">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.image} alt={article.title} />
            </div>
          )}

          {/* AT A GLANCE */}
          {article.atAGlance && <section className="w-full bg-[#f7f7f7] px-4 sm:px-5 py-4 my-6 text-black font-serif">
            <h2 className="text-lg font-bold tracking-wide mb-2">AT A GLANCE</h2>
            <dl className="divide-y divide-[#e2e2e2]">
              {article.atAGlance.map((item: AtAGlanceItem, i: number) => (
                <div key={i} className="grid grid-cols-[34%_minmax(0,1fr)] sm:grid-cols-[23%_minmax(0,1fr)] gap-2 py-3">
                  <dt className="text-xs sm:text-sm font-bold leading-relaxed pr-2">{item.label}</dt>
                  <dd className="text-xs sm:text-sm font-normal leading-relaxed m-0 break-words">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>}

          {/* BODY */}
          <div className="fn-art-body-text prose prose-lg max-w-none text-gray-900 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
            {article.description && article.description.map((sec: any, idx: number) => (
              <section key={idx} className="mb-6">
                {typeof sec === 'object' && sec && sec.subtitle && <h3>{sec.subtitle}</h3>}
                {typeof sec === 'object' && sec && sec.text && <p>{sec.text}</p>}
                {typeof sec === 'string' && <p>{sec}</p>}
              </section>
            ))}
          </div>

          {/* AUTHOR BLOCK */}
          <div className="fn-art-minimal-author mt-8 border-t pt-4">
            <p><strong>{article.author?.name || 'Staff Writer'}</strong> – {article.author?.role}</p>
          </div>

          {/* MORE IN CATEGORY */}
          {related.length > 0 && (
            <section className="mt-8">
              <div className="fn-art-more-header-new">
                <h3 className="fn-art-more-title-new">MORE IN {article.category.toUpperCase()}</h3>
                <Link href={`/${article.category}`} className="fn-art-breadcrumbs" style={{ margin: 0, color: 'var(--red)' }}>
                  View All →
                </Link>
              </div>
              <div className="fn-art-more-grid-new grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map((rel, i) => (
                  <div key={i} className="fn-art-more-card-new">
                    <Link href={`/${rel.category}/${rel.slug}`} className="fn-art-more-img-new">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={rel.image} alt={rel.title} className="w-full h-48 object-cover rounded" />
                    </Link>
                    <Link href={`/${rel.category}/${rel.slug}`}>
                      <h4 className="fn-art-more-card-title">{rel.title}</h4>
                    </Link>
                    <div className="fn-art-more-card-meta">
                      <span>By {rel.author?.name || 'Staff Writer'}</span> · <span>{rel.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleTemplate;
