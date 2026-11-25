"use client";

import React from "react";
import Header from "@/components/Header";
import HeroGridSection from "@/components/HeroGridSection";
import EditorialSelectionSection from "@/components/EditorialSelectionSection";
import OpinionCarouselSection from "@/components/OpinionCarouselSection";
import InvestigativeReportsSection from "@/components/InvestigativeReportsSection";
import WorldDispatchesSection from "@/components/WorldDispatchesSection";
import VisualEssaysSection from "@/components/VisualEssaysSection";
import SpecialFeaturesSection from "@/components/SpecialFeaturesSection";
import BlancheFeaturedBanner from "@/components/BlancheFeaturedBanner";
import Footer from "@/components/Footer";
import { Article } from "@/types/article";
import { WorldDispatchColumn } from "@/lib/data";

import businessArticles from "@/public/data/business.json";
import worldArticles from "@/public/data/world.json";
import entertainmentArticles from "@/public/data/entertainment.json";
import usArticles from "@/public/data/us.json";
import technologyArticles from "@/public/data/technology.json";
import puertoricoArticles from "@/public/data/puertorico.json";
import bancreditoArticles from "@/public/data/bancredito.json";
import politicsArticles from "@/public/data/politics.json";

function parseArticleDate(dateStr?: string): number {
  if (!dateStr) return 0;
  const normalized = dateStr.replace(/\./g, "").trim();
  const timestamp = Date.parse(normalized);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

const rawArticles: Article[] = [
  ...(businessArticles as Article[]),
  ...(worldArticles as Article[]),
  ...(entertainmentArticles as Article[]),
  ...(usArticles as Article[]),
  ...(technologyArticles as Article[]),
  ...(puertoricoArticles as Article[]),
  ...(bancreditoArticles as Article[]),
  ...(politicsArticles as Article[]),
];

const seenSlugs = new Set<string>();
const sortedArticles: Article[] = rawArticles
  .filter((article) => {
    if (!article?.slug || seenSlugs.has(article.slug)) return false;
    seenSlugs.add(article.slug);
    return true;
  })
  .sort((a, b) => parseArticleDate(b.date) - parseArticleDate(a.date));

const heroMain = sortedArticles[0];
const heroMini = sortedArticles.slice(1, 3);
const heroFeaturedTopic = sortedArticles[3];
const heroTopics = sortedArticles.slice(4, 8);
const heroHot = sortedArticles.slice(8, 13);

const editorialLead = sortedArticles[13];
const editorialMidStack = sortedArticles.slice(14, 17);
const editorialRightStack = sortedArticles.slice(17, 20);
const editorialStrip = sortedArticles.slice(20, 24);

const opinionList = sortedArticles.slice(24, 30);

const investigativeLead = sortedArticles[30];
const investigativeStack = sortedArticles.slice(31, 35);

const dispatchColumns: WorldDispatchColumn[] = [
  {
    header: "BUSINESS & FINANCE",
    leadArticle: sortedArticles[35],
    subArticles: sortedArticles.slice(36, 38),
  },
  {
    header: "POLITICS & POLICY",
    leadArticle: sortedArticles[38],
    subArticles: sortedArticles.slice(39, 41),
  },
  {
    header: "US & WORLD",
    leadArticle: sortedArticles[41],
    subArticles: sortedArticles.slice(42, 44),
  },
  {
    header: "TECH & CULTURE",
    leadArticle: sortedArticles[44],
    subArticles: sortedArticles.slice(45, 47),
  },
];

const visualLead = sortedArticles[47];
const visualSecondary = sortedArticles.slice(48, 52);

const specialFeatures = sortedArticles.slice(52, 56);

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main style={{ backgroundColor: "#ffffff" }}>
        <div className="fn-site-container">
          {/* Section 1: Hero Grid */}
          <HeroGridSection
            mainArticle={heroMain}
            miniArticles={heroMini}
            featuredTopicArticle={heroFeaturedTopic}
            topicArticles={heroTopics}
            hotArticles={heroHot}
          />

          {/* Section 2: Editorial Selection */}
          <EditorialSelectionSection
            leadArticle={editorialLead}
            midStackArticles={editorialMidStack}
            rightStackArticles={editorialRightStack}
            stripArticles={editorialStrip}
          />

          {/* Section 3: Opinion & Audio Carousel */}
          <OpinionCarouselSection articles={opinionList} />



          {/* Section 4: Investigative Reports */}
          <InvestigativeReportsSection
            leadArticle={investigativeLead}
            stackArticles={investigativeStack}
          />

          {/* Section 5: World Dispatches & Special Briefings */}
          <WorldDispatchesSection columns={dispatchColumns} />

          {/* Section 6: Photojournalism & Culture Visual Essays */}
          <VisualEssaysSection
            leadArticle={visualLead}
            secondaryArticles={visualSecondary}
          />

          {/* Section 7: Special Features & Industry Insights */}
          <SpecialFeaturesSection articles={specialFeatures} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
