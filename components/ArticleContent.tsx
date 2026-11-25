import Image from 'next/image';
import Link from 'next/link';

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  slug: string;
  email: string;
}

interface DescriptionBlock {
  subtitle: string;
  text: string;
}

interface Article {
  category: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  shortdescription: string;
  description: DescriptionBlock[];
  author: Author;
}

export const ArticleContent: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <article className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{article.title}</h1>
        <p className="text-sm text-gray-500">{article.date} • {article.category}</p>
        <p className="mt-4 text-lg text-gray-700">{article.shortdescription}</p>
        {article.image && (
          <div className="my-6">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        )}
      </header>

      {/* Author */}
      <section className="flex items-center mb-8 border-t border-b py-4">
        <div>
          <p className="font-medium">{article.author.name}</p>
          <p className="text-sm text-gray-600">{article.author.role}</p>
          <p className="text-sm text-gray-500">{article.author.bio}</p>
        </div>
      </section>

      {/* Body */}
      <section className="prose prose-lg max-w-none">
        {article.description.map((block, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{block.subtitle}</h2>
            <p>{block.text}</p>
          </div>
        ))}
      </section>
    </article>
  );
};
