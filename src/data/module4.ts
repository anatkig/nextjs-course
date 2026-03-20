import type { Module } from '../types';

export const module4: Module = {
  id: 'mod-4',
  title: 'Static Site Generation (SSG)',
  description: 'Pre-render pages at build time for maximum performance: generateStaticParams, revalidation, and ISR. Learn when to choose static generation over SSR, how to combine both strategies in a single app, and how to manage SEO metadata dynamically.',
  topics: [
    {
      id: 'mod4-t1',
      title: 'Static Rendering & Build-Time Data',
      explanation: `## Static Site Generation

By default, Next.js **statically renders** pages that don't use dynamic functions. The HTML is generated at **build time** and reused on every request.

\`\`\`tsx
// This page is statically rendered by default
export default async function AboutPage() {
  const content = await fetch('https://cms.example.com/about', {
    cache: 'force-cache', // default behavior
  });
  const data = await content.json();

  return <div>{data.text}</div>;
}
\`\`\`

### Static vs Dynamic Determination

Next.js automatically determines rendering strategy:

| Condition | Strategy |
|-----------|----------|
| No dynamic functions used | Static (SSG) |
| \`cookies()\` or \`headers()\` called | Dynamic (SSR) |
| \`cache: 'no-store'\` fetch | Dynamic (SSR) |
| \`searchParams\` accessed | Dynamic (SSR) |
| \`revalidate: N\` set | ISR |

### generateStaticParams

Pre-render dynamic routes at build time:

\`\`\`tsx
// app/blog/[slug]/page.tsx
// Runs at build time to pre-generate all possible route params
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

### dynamicParams

Control what happens for paths not returned by \`generateStaticParams\`:

\`\`\`tsx
// Allow dynamic rendering for unknown slugs
export const dynamicParams = true; // default

// Return 404 for unknown slugs
export const dynamicParams = false;
\`\`\``,
      task: {
        description: 'Create a statically generated blog page with generateStaticParams. Define 3 blog posts and pre-render their pages. Set dynamicParams to false so unknown slugs return 404.',
        starterCode: `// app/blog/[slug]/page.tsx
// TODO: Set dynamicParams to false
// TODO: Implement generateStaticParams with 3 posts
// TODO: Create the page component`,
        solution: `// app/blog/[slug]/page.tsx
export const dynamicParams = false;

const posts = [
  { slug: 'getting-started', title: 'Getting Started with Next.js', content: 'Next.js is a React framework...' },
  { slug: 'ssr-vs-ssg', title: 'SSR vs SSG', content: 'Understanding rendering strategies...' },
  { slug: 'deployment', title: 'Deploying Next.js', content: 'Deploy to Vercel or self-host...' },
];

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug)!;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`,
        hints: [
          'generateStaticParams must return an array of param objects',
          'Set dynamicParams = false to 404 on unknown slugs',
          'Each param object should have the same keys as the dynamic segment',
        ],
      },
    },
    {
      id: 'mod4-t2',
      title: 'Incremental Static Regeneration (ISR)',
      explanation: `## ISR: Best of SSG + SSR

ISR lets you serve **static pages** but **update them** after a specified time interval.

### Route Segment Config

\`\`\`tsx
// app/products/page.tsx
export const // ISR: page is static but regenerates in the background after this interval
revalidate = 60; // Revalidate every 60 seconds

export default async function Products() {
  const products = await fetch('https://api.example.com/products');
  const data = await products.json();

  return (
    <ul>
      {data.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}
\`\`\`

### How ISR Works

\`\`\`
1. First request → serve static page (built at build time)
2. Subsequent requests within revalidate window → serve cached static page
3. After revalidate time expires:
   a. Next request still serves stale page (instant response)
   b. Background regeneration starts
   c. Once regeneration succeeds, future requests get the new page
\`\`\`

### Per-Fetch Revalidation

\`\`\`tsx
export default async function Page() {
  // Each fetch can have its own revalidation
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }, // 1 hour
  });

  const categories = await fetch('https://api.example.com/categories', {
    next: { revalidate: 86400 }, // 1 day
  });

  // Page revalidates at the shortest interval (1 hour)
}
\`\`\`

### On-Demand Revalidation

Revalidate specific pages programmatically:

\`\`\`tsx
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const { path, tag } = await request.json();

  if (path) {
    revalidatePath(path); // Revalidate a specific path
  }

  if (tag) {
    revalidateTag(tag); // Revalidate all fetches with this tag
  }

  return Response.json({ revalidated: true });
}
\`\`\`

### Cache Tags

\`\`\`tsx
// Tag your fetches
const products = await fetch('https://api.example.com/products', {
  next: { tags: ['products'] },
});

// Later, revalidate all fetches tagged 'products'
revalidateTag('products');
\`\`\``,
      task: {
        description: 'Create a products page with ISR that revalidates every 5 minutes. Also create an API route that can trigger on-demand revalidation using revalidateTag.',
        starterCode: `// app/products/page.tsx
// TODO: Set revalidate to 300 (5 minutes)
// TODO: Fetch products with a cache tag

// app/api/revalidate/route.ts
// TODO: Create an API route for on-demand revalidation`,
        solution: `// app/products/page.tsx
export const revalidate = 300;

async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { tags: ['products'] },
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <p>Updated every 5 minutes or on-demand</p>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - \${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { tag } = await request.json();

  if (!tag) {
    return Response.json({ error: 'Tag is required' }, { status: 400 });
  }

  revalidateTag(tag);
  return Response.json({ revalidated: true, tag });
}`,
        hints: [
          'Export revalidate as a number (seconds) from the page',
          'Use next: { tags: [...] } in fetch options for cache tagging',
          'revalidateTag() purges all fetches with that tag',
        ],
      },
    },
    {
      id: 'mod4-t3',
      title: 'generateMetadata & SEO',
      explanation: `## Dynamic Metadata

Next.js provides a powerful metadata API for SEO:

### Static Metadata

\`\`\`tsx
// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our company',
  openGraph: {
    title: 'About Us',
    description: 'Learn about our company',
    images: ['/og-about.png'],
  },
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}
\`\`\`

### Dynamic Metadata

\`\`\`tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return <article><h1>{post.title}</h1></article>;
}
\`\`\`

### Metadata Inheritance

Child layouts/pages inherit and override parent metadata:

\`\`\`tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'My Site',
    template: '%s | My Site', // %s replaced by child title
  },
  description: 'The best site ever',
};

// app/about/page.tsx
export const metadata: Metadata = {
  title: 'About', // Renders as "About | My Site"
};
\`\`\`

### Sitemap & Robots

\`\`\`tsx
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://example.com', lastModified: new Date() },
    { url: 'https://example.com/about', lastModified: new Date() },
    { url: 'https://example.com/blog', lastModified: new Date() },
  ];
}

// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://example.com/sitemap.xml',
  };
}
\`\`\``,
      task: {
        description: 'Create a dynamic blog post page with generateMetadata that sets the title, description, and Open Graph tags based on the fetched post data.',
        starterCode: `// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

// TODO: Implement generateMetadata
// TODO: Implement the page component`,
        solution: `// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

interface Post {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
}

async function getPost(slug: string): Promise<Post> {
  const res = await fetch(\`https://api.example.com/posts/\${slug}\`);
  return res.json();
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`,
        hints: [
          'generateMetadata is an async function that receives the same props as the page',
          'Next.js deduplicates fetch calls — the same URL is only fetched once',
          'Return a Metadata object matching the Next.js Metadata type',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod4-q1',
      question: 'When does Static Site Generation (SSG) generate HTML?',
      options: ['On every request', 'At build time', 'On the client side', 'When the CDN cache expires'],
      correctAnswer: 1,
      explanation: 'SSG generates HTML at build time. The pre-rendered HTML is then served from CDN on every request for maximum performance.',
    },
    {
      id: 'mod4-q2',
      question: 'What does ISR (Incremental Static Regeneration) do?',
      options: ['Renders on every request', 'Serves static pages but regenerates them after a specified time interval', 'Only renders on the client', 'Rebuilds the entire site'],
      correctAnswer: 1,
      explanation: 'ISR serves cached static pages but regenerates them in the background after a revalidation period, combining speed with freshness.',
    },
    {
      id: 'mod4-q3',
      question: 'What does dynamicParams = false do?',
      options: ['Disables all dynamic routes', 'Returns 404 for paths not in generateStaticParams', 'Makes all pages static', 'Removes URL parameters'],
      correctAnswer: 1,
      explanation: 'Setting dynamicParams = false makes Next.js return 404 for any dynamic route path not included in generateStaticParams.',
    },
    {
      id: 'mod4-q4',
      question: 'How do you trigger on-demand revalidation for tagged fetches?',
      options: ['revalidateCache(tag)', 'revalidateTag(tag)', 'clearCache(tag)', 'invalidate(tag)'],
      correctAnswer: 1,
      explanation: 'revalidateTag() from next/cache purges all cached fetch responses that were tagged with the specified tag name.',
    },
    {
      id: 'mod4-q5',
      question: 'What does the metadata title template "%s | My Site" do?',
      options: ['Sets all page titles to "My Site"', 'Replaces %s with the child page title', 'Adds a suffix to the URL', 'Creates a dynamic sitemap'],
      correctAnswer: 1,
      explanation: 'The title template uses %s as a placeholder that gets replaced by the child page\'s title, e.g., "About | My Site".',
    },
  ],
};
