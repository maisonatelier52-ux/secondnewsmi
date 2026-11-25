import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import puertoricoData from '@/public/data/puertorico.json';
import Head from 'next/head';

const category = "puerto rico";

const PuertoRicoCategoryPage: React.FC = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
    <Header activeCategory={category} />
    <main style={{ backgroundColor: "#ffffff", flexGrow: 1 }}>
      <div className="fn-category-container mx-auto max-w-4xl p-6">
        <Head>
          <title>Puerto Rico – News</title>
        </Head>
        <h1 className="fn-category-title text-4xl font-bold mb-6">Puerto Rico</h1>
        <p className="fn-category-intro mb-8 prose prose-lg">
          Latest analysis, investigations and opinion pieces covering Puerto Rico’s political, economic and regulatory landscape.
        </p>
        <div className="grid gap-8">
          {puertoricoData.map((article, idx) => (
            <article key={idx} className="fn-category-article border-b pb-4">
              <Link href={`/puerto-rico/${article.slug}`}> 
                <h2 className="fn-category-article-title text-2xl font-semibold text-blue-600 hover:underline">
                  {article.title}
                </h2>
              </Link>
              <p className="fn-category-article-excerpt mt-2 text-gray-700">
                {article.shortdescription}
              </p>
              <div className="fn-category-meta mt-2 text-sm text-gray-500">
                <span>By {article.author?.name || "Staff Writer"}</span>
                <span className="mx-2">·</span>
                <span>{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PuertoRicoCategoryPage;
