import type { Module } from '../types';

export const module2: Module = {
  id: 'mod-2',
  title: 'File-Based Routing',
  description: 'Master Next.js automatic routing: nested routes, dynamic segments, route groups, and parallel routes.',
  topics: [
    {
      id: 'mod2-t1',
      title: 'Basic & Nested Routes',
      explanation: `## File-Based Routing

Next.js uses the **file system** to define routes. Each folder in \`app/\` becomes a URL segment.

\`\`\`
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
├── blog/
│   ├── page.tsx          → /blog
│   └── categories/
│       └── page.tsx      → /blog/categories
└── dashboard/
    ├── page.tsx          → /dashboard
    ├── settings/
    │   └── page.tsx      → /dashboard/settings
    └── analytics/
        └── page.tsx      → /dashboard/analytics
\`\`\`

### Rules

1. **Only \`page.tsx\` makes a route accessible** — folders without \`page.tsx\` are just organizational
2. **Layouts cascade** — each segment can have its own \`layout.tsx\`
3. **Colocation** — you can put components, tests, styles alongside pages

### Nested Layouts

\`\`\`tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <aside>
        <nav>
          <a href="/dashboard">Overview</a>
          <a href="/dashboard/settings">Settings</a>
          <a href="/dashboard/analytics">Analytics</a>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
\`\`\`

The layout wraps all child pages under \`/dashboard/*\`.

### Navigation with \`next/link\`

\`\`\`tsx
import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog" prefetch={false}>Blog</Link>
    </nav>
  );
}
\`\`\`

> \`Link\` automatically prefetches linked pages in production for instant navigation.`,
      task: {
        description: 'Create a dashboard layout with a sidebar navigation containing links to /dashboard, /dashboard/settings, and /dashboard/analytics. The layout should wrap children in a flex container.',
        starterCode: `// app/dashboard/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Create a flex layout with:
  // - sidebar with 3 navigation links
  // - main area showing {children}
  return null;
}`,
        solution: `// app/dashboard/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: 240, borderRight: '1px solid #ccc', padding: 16 }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/settings">Settings</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 16 }}>
        {children}
      </main>
    </div>
  );
}`,
        hints: [
          'Use Link from next/link for client-side navigation',
          'The layout receives children as a prop',
          'Layouts persist across child page navigations',
        ],
      },
    },
    {
      id: 'mod2-t2',
      title: 'Dynamic Routes & Params',
      explanation: `## Dynamic Route Segments

Use **square brackets** to create dynamic routes:

\`\`\`
app/
├── blog/
│   ├── page.tsx              → /blog
│   └── [slug]/
│       └── page.tsx          → /blog/hello-world, /blog/my-post
├── users/
│   └── [id]/
│       └── page.tsx          → /users/1, /users/42
└── shop/
    └── [...categories]/
        └── page.tsx          → /shop/a, /shop/a/b, /shop/a/b/c
\`\`\`

### Accessing Parameters

\`\`\`tsx
// app/blog/[slug]/page.tsx
interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  return <h1>Post: {params.slug}</h1>;
}
\`\`\`

### Catch-All Segments

\`\`\`tsx
// app/docs/[...slug]/page.tsx
// Matches /docs/a, /docs/a/b, /docs/a/b/c

interface Props {
  params: { slug: string[] };
}

export default function Docs({ params }: Props) {
  // /docs/react/hooks → params.slug = ['react', 'hooks']
  return <p>Path: {params.slug.join(' / ')}</p>;
}
\`\`\`

### Optional Catch-All

\`\`\`tsx
// app/docs/[[...slug]]/page.tsx
// Also matches /docs (slug = undefined)
\`\`\`

### generateStaticParams

Pre-render dynamic routes at build time:

\`\`\`tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>{params.slug}</h1>;
}
\`\`\``,
      task: {
        description: 'Create a dynamic product page at `app/products/[id]/page.tsx` that displays the product ID from params and a "Back to Products" link. Also implement `generateStaticParams` to pre-render products with IDs 1-5.',
        starterCode: `// app/products/[id]/page.tsx

// TODO: Add generateStaticParams for IDs 1-5

// TODO: Create the product page component
// Display "Product #ID" as heading
// Show a link back to /products`,
        solution: `// app/products/[id]/page.tsx
import Link from 'next/link';

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5].map(id => ({
    id: String(id),
  }));
}

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  return (
    <div>
      <h1>Product #{params.id}</h1>
      <p>Detailed information about product {params.id}.</p>
      <Link href="/products">← Back to Products</Link>
    </div>
  );
}`,
        hints: [
          'Dynamic parameters are always strings',
          'generateStaticParams returns an array of param objects',
          'Each param object should match the dynamic segment name',
        ],
      },
    },
    {
      id: 'mod2-t3',
      title: 'Route Groups & Parallel Routes',
      explanation: `## Route Groups

Use **parentheses** to organize routes without affecting the URL:

\`\`\`
app/
├── (marketing)/
│   ├── layout.tsx         # Layout for marketing pages
│   ├── about/page.tsx     # /about
│   └── pricing/page.tsx   # /pricing
├── (dashboard)/
│   ├── layout.tsx         # Layout for dashboard pages
│   ├── overview/page.tsx  # /overview
│   └── settings/page.tsx  # /settings
└── page.tsx               # /
\`\`\`

The parenthesized folder name is **not included in the URL**.

### Multiple Root Layouts

Route groups can have their own root layouts:

\`\`\`tsx
// app/(marketing)/layout.tsx
export default function MarketingLayout({ children }) {
  return (
    <html>
      <body className="marketing">{children}</body>
    </html>
  );
}

// app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <html>
      <body className="dashboard">{children}</body>
    </html>
  );
}
\`\`\`

### Parallel Routes

Render multiple pages simultaneously in the **same layout** using **named slots**:

\`\`\`
app/
├── layout.tsx
├── page.tsx
├── @analytics/
│   └── page.tsx
├── @team/
│   └── page.tsx
└── @revenue/
    └── page.tsx
\`\`\`

\`\`\`tsx
// app/layout.tsx
export default function Layout({
  children,
  analytics,
  team,
  revenue,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="grid">
        {analytics}
        {team}
        {revenue}
      </div>
    </div>
  );
}
\`\`\`

### Intercepting Routes

Use \`(.)\`, \`(..)\`, \`(...)\` to intercept navigation:

\`\`\`
app/
├── feed/
│   └── page.tsx
├── photo/[id]/
│   └── page.tsx           # Full page view
└── @modal/
    └── (..)photo/[id]/
        └── page.tsx       # Modal view when navigating from feed
\`\`\``,
      task: {
        description: 'Create a route group structure with (marketing) and (app) groups. The marketing group should have its own layout with a public navbar, and the app group should have a layout with an authenticated sidebar.',
        starterCode: `// app/(marketing)/layout.tsx
// TODO: Create marketing layout with public navbar

// app/(app)/layout.tsx
// TODO: Create app layout with authenticated sidebar`,
        solution: `// app/(marketing)/layout.tsx
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

// app/(app)/layout.tsx
import Link from 'next/link';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <aside>
        <nav>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/settings">Settings</Link>
        </nav>
      </aside>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}`,
        hints: [
          'Route groups use parentheses: (groupName)',
          'The group name does not appear in the URL',
          'Each group can have its own layout.tsx',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod2-q1',
      question: 'Which file makes a route accessible in the Next.js App Router?',
      options: ['index.tsx', 'route.tsx', 'page.tsx', 'view.tsx'],
      correctAnswer: 2,
      explanation: 'In the App Router, only page.tsx files create accessible routes. Folders without page.tsx only serve as organizational structure.',
    },
    {
      id: 'mod2-q2',
      question: 'How do you create a dynamic route segment in Next.js?',
      options: ['Using :param syntax', 'Using [param] folder name', 'Using {param} syntax', 'Using $param syntax'],
      correctAnswer: 1,
      explanation: 'Dynamic route segments use square brackets in folder names, like [id] or [slug].',
    },
    {
      id: 'mod2-q3',
      question: 'What does a Route Group (parenthesized folder) do?',
      options: ['Creates a new URL segment', 'Organizes routes without affecting the URL path', 'Makes routes private', 'Adds authentication'],
      correctAnswer: 1,
      explanation: 'Route groups use parentheses like (marketing) to organize files without adding the group name to the URL path.',
    },
    {
      id: 'mod2-q4',
      question: 'What is [...slug] in a folder name?',
      options: ['Spread operator', 'Catch-all segment matching multiple path parts', 'Optional parameter', 'Regex pattern'],
      correctAnswer: 1,
      explanation: '[...slug] is a catch-all segment that matches one or more path segments. /docs/a/b/c would give slug: ["a", "b", "c"].',
    },
    {
      id: 'mod2-q5',
      question: 'What does the Link component from next/link do in production?',
      options: ['Creates anchor tags only', 'Prefetches linked pages automatically for instant navigation', 'Reloads the page', 'Downloads the page as PDF'],
      correctAnswer: 1,
      explanation: 'The Link component automatically prefetches linked pages when they appear in the viewport, enabling instant client-side navigation.',
    },
  ],
};
