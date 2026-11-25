import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import article data directly from JSON files
import businessArticles from "@/public/data/business.json";
import entertainmentArticles from "@/public/data/entertainment.json";
import technologyArticles from "@/public/data/technology.json";
import usArticles from "@/public/data/us.json";
import worldArticles from "@/public/data/world.json";
import politicsArticles from "@/public/data/politics.json";
import puertoricoArticles from "@/public/data/puertorico.json";
import bancreditoArticles from "@/public/data/bancredito.json";

// Helper to retrieve category info without using lib/data
function getCategoryInfoLocal(slug: string) {
  const normalized = slug.toLowerCase();
  if (normalized === "bancredito") {
    return {
      slug,
      name: "Bancrédito",
      tagline: "Asset Recovery, Regulatory Oversight & Banking Cases",
      description: "In-depth investigative reports on Bancrédito Holding, international banking litigation, and regulatory enforcement.",
      color: "#e8192c",
      topics: [],
    };
  }
  if (normalized === "puertorico" || normalized === "puerto-rico") {
    return {
      slug,
      name: "Puerto Rico",
      tagline: "Island Affairs, Governance, Economy & Special Dispatches",
      description: "Comprehensive coverage of Puerto Rico politics, financial regulation, culture, and key legal developments.",
      color: "#e8192c",
      topics: [],
    };
  }
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    slug,
    name,
    tagline: "",
    description: `Latest ${name} news and analysis.`,
    color: "#e8192c",
    topics: [],
  };
}

// Helper to retrieve articles for a category directly from the imported JSON
function getArticlesForCategoryLocal(slug: string) {
  const map: Record<string, any[]> = {
    business: businessArticles,
    entertainment: entertainmentArticles,
    technology: technologyArticles,
    tech: technologyArticles,
    us: usArticles,
    world: worldArticles,
    politics: politicsArticles,
    puertorico: puertoricoArticles,
    "puerto-rico": puertoricoArticles,
    bancredito: bancreditoArticles,
  };
  const normalized = slug.toLowerCase();
  return map[normalized] ?? [];
}

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const categoryInfo = getCategoryInfoLocal(categorySlug);
  const rawArticles = getArticlesForCategoryLocal(categorySlug);
  const seenSlugs = new Set<string>();
  const articles = rawArticles.filter((a) => {
    if (!a?.slug || seenSlugs.has(a.slug)) return false;
    seenSlugs.add(a.slug);
    return true;
  });

  // Partition articles across sections with zero repetition
  const leadArticle = articles[0];
  const rest = articles.slice(1);
  const spotlightCount =
    rest.length >= 9 ? 4 :
    rest.length >= 6 ? 3 :
    rest.length >= 4 ? 2 :
    rest.length >= 2 ? 1 : 0;
  const spotlightArticles = rest.slice(0, spotlightCount);

  const afterSpotlight = rest.slice(spotlightCount);
  const sidebarCount =
    afterSpotlight.length >= 8 ? 4 :
    afterSpotlight.length >= 6 ? 3 :
    afterSpotlight.length >= 4 ? 2 :
    afterSpotlight.length >= 2 ? 1 : 0;
  const gridArticles = afterSpotlight.slice(0, afterSpotlight.length - sidebarCount);
  const sidebarArticles = afterSpotlight.slice(afterSpotlight.length - sidebarCount);

  const categoryPills = [
    { slug: "business", label: "Business" },
    { slug: "entertainment", label: "Entertainment" },
    { slug: "technology", label: "Technology" },
    { slug: "politics", label: "Politics" },
    { slug: "us", label: "US News" },
    { slug: "world", label: "World" },
    { slug: "puertorico", label: "Puerto Rico" },
    { slug: "bancredito", label: "Bancrédito" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
      <Header activeCategory={categorySlug} />

      <main style={{ backgroundColor: "#ffffff", flexGrow: 1 }}>
        <div className="fn-site-container">
          {/* Category Hero Header Banner */}
          <div className="fn-cat-hero-wrapper">
            <div className="fn-cat-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>{categoryInfo.name}</span>
            </div>

            <div className="fn-cat-title-row">
              <div className="fn-cat-title-box">
                <div className="fn-cat-accent-bar" style={{ backgroundColor: "var(--red)" }} />
                <h1 className="fn-cat-main-title">{categoryInfo.name}</h1>
              </div>
            </div>

            <p className="fn-cat-tagline">{categoryInfo.description}</p>

            {/* Quick Navigation Category Pills */}
            <div className="fn-cat-pills-row">
              {categoryPills.map((pill) => {
                const isActive =
                  pill.slug === categorySlug.toLowerCase() ||
                  (categorySlug.toLowerCase() === "tech" && pill.slug === "technology");
                return (
                  <Link
                    key={pill.slug}
                    href={`/${pill.slug}`}
                    className={`fn-cat-pill ${isActive ? "active" : ""}`}
                  >
                    {pill.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Featured Section: Lead Left + Right Section Spotlight */}
          {leadArticle && (
            <div className="fn-cat-featured-wrapper">
              {/* LEFT — Major Lead Showcase */}
              <div className="fn-cat-featured-lead">
                <Link href={`/${categorySlug}/${leadArticle.slug}`} className="fn-cat-featured-lead-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={leadArticle.image} alt={leadArticle.title} />
                </Link>
                <div className="fn-cat-featured-lead-body">
                  <div>
                    <div className="fn-cat-badge-row">
                      <span className="fn-cat-lead-badge">Featured Story</span>
                    </div>
                    <Link href={`/${categorySlug}/${leadArticle.slug}`}>
                      <h2 className="fn-cat-lead-title">{leadArticle.title}</h2>
                    </Link>
                    <p className="fn-cat-lead-desc">{leadArticle.shortdescription}</p>
                  </div>

                  <div className="fn-cat-author-row">
                    <span>By {leadArticle.author?.name || "Editorial Team"}</span>
                    <span>·</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — Section Spotlight */}
              {spotlightArticles.length > 0 && (
                <div className="fn-cat-featured-stack">
                  <div className="fn-cat-spotlight-header">
                    <span className="fn-cat-spotlight-dot" />
                    <h3 className="fn-cat-spotlight-title">SECTION SPOTLIGHT</h3>
                  </div>

                  <div className="fn-cat-spotlight-list">
                    {spotlightArticles.map((art, idx) => (
                      <div key={art.slug || idx} className="fn-cat-spotlight-card">
                        <Link href={`/${categorySlug}/${art.slug}`} className="fn-cat-spotlight-img">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={art.image} alt={art.title} />
                        </Link>
                        <div className="fn-cat-spotlight-content">
                          <span className="fn-cat-spotlight-cat">{art.category}</span>
                          <Link href={`/${categorySlug}/${art.slug}`}>
                            <h4 className="fn-cat-spotlight-card-title">{art.title}</h4>
                          </Link>
                          <div className="fn-cat-spotlight-meta">
                            <span>By {art.author?.name || "Staff Writer"}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Category Grid & Sidebar Layout */}
          {(gridArticles.length > 0 || sidebarArticles.length > 0) && (
            <div className="fn-cat-grid-layout">
              {/* Left Main Feed Grid with Hidden Scrollbar */}
              <div>
                <div className="fn-cat-section-title">
                  <span>Latest News</span>
                  <div className="fn-section-tabs" style={{ marginBottom: 0 }}>
                    <span className="fn-section-tab active">All</span>
                    <span className="fn-section-tab">Analysis</span>
                    <span className="fn-section-tab">Opinion</span>
                  </div>
                </div>

                <div className="fn-cat-scroll-container">
                  <div className="fn-cat-card-grid">
                    {gridArticles.map((article, idx) => (
                      <div key={article.slug || idx} className="fn-cat-card">
                        <Link href={`/${categorySlug}/${article.slug}`} className="fn-cat-card-img-wrap">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={article.image} alt={article.title} />
                        </Link>
                        <div className="fn-cat-card-body">
                          <div>
                            <div className="fn-cat-card-cat" style={{ color: "var(--red)" }}>
                              {article.category}
                            </div>
                            <Link href={`/${categorySlug}/${article.slug}`}>
                              <h3 className="fn-cat-card-title">{article.title}</h3>
                            </Link>
                            {article.shortdescription && (
                              <p className="fn-cat-card-desc">{article.shortdescription}</p>
                            )}
                          </div>

                          <div className="fn-cat-card-meta">
                            <span>By {article.author?.name || "Staff Writer"}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar Widgets */}
              {sidebarArticles.length > 0 && (
                <aside className="fn-cat-sidebar">
                  <div className="fn-cat-hot-widget">
                    <h3 className="fn-cat-widget-title" style={{ borderColor: "var(--red)" }}>
                      EDITOR&apos;S PICKS
                    </h3>

                    <div>
                      {sidebarArticles.map((item, idx) => (
                        <div key={item.slug || idx} className="fn-cat-hot-item">
                          <span className="fn-cat-hot-num" style={{ color: "var(--red)" }}>
                            {idx + 1}
                          </span>
                          <div>
                            <Link href={`/${categorySlug}/${item.slug}`}>
                              <h4 className="fn-cat-hot-text">{item.title}</h4>
                            </Link>
                            <div className="fn-cat-hot-meta">By {item.author?.name || "Staff Writer"}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
