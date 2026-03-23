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

By default, Next.js **statically renders** pages that don't use dynamic functions. The HTML is generated at **build time** and reused on every request — served directly from the CDN with no server computation needed. This is the fastest rendering strategy because the response is pre-built and can be cached at the edge globally.

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

Next.js **automatically determines** the rendering strategy based on what your component does. You don't need to explicitly choose between SSG and SSR — the framework infers it from your code:

| Condition | Strategy | Why |
|-----------|----------|-----|
| No dynamic functions used | Static (SSG) | All data known at build time |
| \`cookies()\` or \`headers()\` called | Dynamic (SSR) | Depends on request-specific data |
| \`cache: 'no-store'\` fetch | Dynamic (SSR) | Needs fresh data every request |
| \`searchParams\` accessed | Dynamic (SSR) | URL query string varies per request |
| \`revalidate: N\` set | ISR | Static but refreshes periodically |

### generateStaticParams

Pre-render **dynamic routes** at build time by telling Next.js which parameter values exist. Without \`generateStaticParams\`, dynamic routes like \`/blog/[slug]\` would be rendered on-demand. With it, Next.js generates all the HTML at build time for the specified parameter values:

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

Control what happens when a user visits a path **not returned** by \`generateStaticParams\`. By default, unknown paths trigger on-demand rendering (and the result is cached). Setting it to \`false\` returns a 404 for any unknown path, which is useful for finite content sets like blog posts:

\`\`\`tsx
// Allow dynamic rendering for unknown slugs (default)
export const dynamicParams = true;

// Return 404 for unknown slugs — only pre-rendered paths are valid
export const dynamicParams = false;
\`\`\``,
      tasks: [{
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
      }],
    },
    {
      id: 'mod4-t2',
      title: 'Incremental Static Regeneration (ISR)',
      explanation: `## ISR: Best of SSG + SSR

ISR lets you serve **static pages** while still keeping them **fresh** by updating them in the background after a specified time interval. Think of it as "SSG with an expiration date" — you get the speed of static pages with the freshness of server-rendered pages, without rebuilding your entire site.

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

ISR uses a **stale-while-revalidate** strategy. The key insight is that the user always gets an instant response — regeneration happens asynchronously in the background:

\`\`\`
1. First request → serve static page (built at build time)
2. Subsequent requests within revalidate window → serve cached static page (instant)
3. After revalidate time expires:
   a. Next request still serves the stale page (instant response — no waiting)
   b. Background regeneration starts (server re-renders the page)
   c. Once regeneration succeeds, the cache is updated
   d. Future requests get the new page
\`\`\`

### Per-Fetch Revalidation

Different data sources on the same page can have **different revalidation intervals**. The page's effective revalidation period is the **shortest interval** among all fetches:

\`\`\`tsx
export default async function Page() {
  // Each fetch can have its own revalidation
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }, // 1 hour — products change infrequently
  });

  const categories = await fetch('https://api.example.com/categories', {
    next: { revalidate: 86400 }, // 1 day — categories rarely change
  });

  // Page revalidates at the shortest interval (1 hour)
}
\`\`\`

### On-Demand Revalidation

Revalidate specific pages **programmatically** without waiting for the timer. This is essential for CMS webhooks, admin panels, or any event that should immediately update a cached page:

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

Tags let you group related fetch calls and revalidate them all at once. This is more precise than \`revalidatePath\` — you can invalidate all product data across every page that uses it:

\`\`\`tsx
// Tag your fetches
const products = await fetch('https://api.example.com/products', {
  next: { tags: ['products'] },
});

// Later, revalidate all fetches tagged 'products'
revalidateTag('products');
\`\`\``,
      tasks: [{
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
      }],
    },
    {
      id: 'mod4-t3',
      title: 'generateMetadata & SEO',
      explanation: `## Dynamic Metadata

Next.js provides a powerful, built-in metadata API for SEO that works seamlessly with both static and dynamic pages. Metadata is defined at the route segment level and supports title templates, Open Graph, Twitter cards, and more.

### Static Metadata

For pages where the metadata is known at build time, export a \`metadata\` object. Next.js automatically generates the corresponding \`<head>\` tags including \`<title>\`, \`<meta>\`, and Open Graph tags:

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

For pages where metadata depends on route parameters or fetched data, use the async \`generateMetadata\` function. This function receives the same props as the page component (including \`params\`) and returns a \`Metadata\` object. Next.js automatically deduplicates fetch calls, so fetching the same URL in both \`generateMetadata\` and the page component only results in one actual request:

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

Child layouts/pages inherit and override parent metadata. The \`template\` feature lets you create consistent title patterns without repeating the site name on every page:

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

Next.js also provides typed APIs for generating \`sitemap.xml\` and \`robots.txt\` files. These help search engines discover and index your pages correctly:

\`\`\`tsx
// app/sitemap.ts — generates /sitemap.xml
export default function sitemap() {
  return [
    { url: 'https://example.com', lastModified: new Date() },
    { url: 'https://example.com/about', lastModified: new Date() },
    { url: 'https://example.com/blog', lastModified: new Date() },
  ];
}

// app/robots.ts — generates /robots.txt
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://example.com/sitemap.xml',
  };
}
\`\`\``,
      tasks: [{
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
      }],
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
