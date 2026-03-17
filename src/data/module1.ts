import type { Module } from '../types';

export const module1: Module = {
  id: 'mod-1',
  title: 'Next.js Fundamentals',
  description: 'Project setup, folder structure, and core concepts that make Next.js different from plain React.',
  topics: [
    {
      id: 'mod1-t1',
      title: 'What is Next.js & Why Use It',
      explanation: `## What is Next.js?

Next.js is a **React framework** built by Vercel that adds server-side rendering, static site generation, file-based routing, and many production-grade features on top of React.

### React vs Next.js

| Feature | React (CRA/Vite) | Next.js |
|---------|------------------|---------|
| Rendering | Client-side only | SSR, SSG, ISR, CSR |
| Routing | Manual (react-router) | File-based (automatic) |
| SEO | Poor (empty HTML) | Excellent (pre-rendered) |
| API Routes | Separate backend | Built-in API routes |
| Code Splitting | Manual | Automatic |
| Image Optimization | Manual | Built-in \`next/image\` |

### How SSR Solves the SPA Problem

A traditional React SPA sends an **empty HTML shell** to the browser:

\`\`\`html
<div id="root"></div>
<script src="/bundle.js"></script>
\`\`\`

The browser must download, parse, and execute JavaScript before any content appears. This causes:
- **Poor SEO** — search engines see an empty page
- **Slow First Contentful Paint** — users see a blank screen
- **No content without JavaScript**

Next.js **pre-renders** pages on the server, sending fully-formed HTML:

\`\`\`html
<div id="root">
  <h1>Welcome to My Site</h1>
  <p>This content is immediately visible!</p>
</div>
<script src="/bundle.js"></script>
\`\`\`

### Rendering Strategies

\`\`\`
SSR (Server-Side Rendering)
  → HTML generated on EVERY request
  → Always fresh data
  → Slower TTFB

SSG (Static Site Generation)
  → HTML generated at BUILD time
  → Fastest possible response
  → Data can become stale

ISR (Incremental Static Regeneration)
  → SSG + revalidation after N seconds
  → Best of both worlds

CSR (Client-Side Rendering)
  → Traditional React behavior
  → Good for authenticated/dynamic content
\`\`\``,
      task: {
        description: 'Create a simple Next.js page component that would be placed at `app/page.tsx`. It should render an h1 with "Welcome to Next.js", a paragraph explaining SSR benefits, and a list of 3 rendering strategies.',
        starterCode: `// app/page.tsx
export default function HomePage() {
  // TODO: Return JSX with:
  // - h1: "Welcome to Next.js"
  // - p: explaining SSR benefits
  // - ul with 3 li items for SSR, SSG, ISR
  return null;
}`,
        solution: `// app/page.tsx
export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <p>
        Next.js pre-renders pages on the server, providing excellent SEO,
        fast initial page loads, and content visible without JavaScript.
      </p>
      <ul>
        <li>SSR — Server-Side Rendering: Fresh HTML on every request</li>
        <li>SSG — Static Site Generation: Pre-built HTML at build time</li>
        <li>ISR — Incremental Static Regeneration: Static + revalidation</li>
      </ul>
    </main>
  );
}`,
        hints: [
          'Next.js page components are default exports',
          'In the App Router, pages go in app/page.tsx',
          'No special imports needed for a basic server component',
        ],
      },
    },
    {
      id: 'mod1-t2',
      title: 'Project Structure & Configuration',
      explanation: `## Next.js Project Structure (App Router)

\`\`\`
my-app/
├── app/
│   ├── layout.tsx        # Root layout (wraps all pages)
│   ├── page.tsx           # Home page (/)
│   ├── globals.css        # Global styles
│   ├── about/
│   │   └── page.tsx       # /about
│   └── blog/
│       ├── page.tsx       # /blog
│       └── [slug]/
│           └── page.tsx   # /blog/:slug
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── package.json
└── tsconfig.json
\`\`\`

### Key Files

**\`app/layout.tsx\`** — The root layout wraps every page:

\`\`\`tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

**\`next.config.js\`** — Configuration file:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
};

module.exports = nextConfig;
\`\`\`

### Special Files in the App Router

| File | Purpose |
|------|---------|
| \`page.tsx\` | The UI for a route |
| \`layout.tsx\` | Shared layout that wraps children |
| \`loading.tsx\` | Loading UI (Suspense boundary) |
| \`error.tsx\` | Error UI (Error boundary) |
| \`not-found.tsx\` | 404 UI |
| \`template.tsx\` | Like layout but re-mounts on navigation |
| \`route.ts\` | API endpoint |

### Layout vs Template

- **Layout**: Persists across navigations, state is preserved
- **Template**: Re-creates on every navigation, state resets

\`\`\`tsx
// app/dashboard/layout.tsx — state persists
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      {children}
    </div>
  );
}

// app/dashboard/template.tsx — re-mounts each time
export default function DashboardTemplate({ children }) {
  return <div className="fade-in">{children}</div>;
}
\`\`\``,
      task: {
        description: 'Create a root layout component (`app/layout.tsx`) that includes an HTML structure with a header containing navigation links (Home, About, Blog), a main area for children, and a footer.',
        starterCode: `// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Return <html> with <body> containing:
  // - <header> with <nav> containing links to /, /about, /blog
  // - <main> wrapping {children}
  // - <footer> with copyright text
  return null;
}`,
        solution: `// app/layout.tsx
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}`,
        hints: [
          'Use next/link for client-side navigation instead of <a> tags',
          'The layout must return <html> and <body> tags',
          'children prop contains the page content',
        ],
      },
    },
    {
      id: 'mod1-t3',
      title: 'Server Components vs Client Components',
      explanation: `## React Server Components (RSC)

In Next.js App Router, **all components are Server Components by default**. This is a fundamental shift from traditional React.

### Server Components

\`\`\`tsx
// This runs ONLY on the server — no "use client" directive
async function ProductList() {
  const products = await db.query('SELECT * FROM products');

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} - \${p.price}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Benefits:**
- Direct database/filesystem access
- Zero bundle size (code stays on server)
- Automatic code splitting
- Can use \`async/await\` directly

**Limitations:**
- No \`useState\`, \`useEffect\`, or other hooks
- No browser APIs (\`window\`, \`document\`)
- No event handlers (\`onClick\`, \`onChange\`)

### Client Components

Add \`"use client"\` at the top of the file:

\`\`\`tsx
"use client";

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
\`\`\`

### The Boundary Rule

> A Client Component can only import other Client Components. But a Server Component can render both Server and Client Components.

\`\`\`tsx
// app/page.tsx (Server Component)
import { Counter } from './Counter';      // Client Component ✓
import { ProductList } from './Products'; // Server Component ✓

export default function Page() {
  return (
    <div>
      <ProductList />   {/* Server: fetches data */}
      <Counter />       {/* Client: handles interaction */}
    </div>
  );
}
\`\`\`

### When to Use Each

| Use Server Component | Use Client Component |
|---------------------|---------------------|
| Fetch data | Interactive UI (forms, buttons) |
| Access backend resources | useState / useEffect |
| Keep sensitive data on server | Browser APIs |
| Reduce client bundle | Event listeners |
| Heavy dependencies | Real-time updates |`,
      task: {
        description: 'Create a page that uses both a Server Component (to display a list of items fetched from an async function) and a Client Component (an interactive search filter with useState).',
        starterCode: `// components/SearchFilter.tsx
// TODO: Make this a Client Component with useState
// Accept items[] and render filtered results

// app/page.tsx
// TODO: Fetch items (simulate with async function)
// Render both the static list and the SearchFilter`,
        solution: `// components/SearchFilter.tsx
"use client";

import { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

export function SearchFilter({ items }: { items: Item[] }) {
  const [query, setQuery] = useState('');
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search items..."
      />
      <ul>
        {filtered.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// app/page.tsx
import { SearchFilter } from '../components/SearchFilter';

async function getItems() {
  return [
    { id: 1, name: 'Next.js' },
    { id: 2, name: 'React' },
    { id: 3, name: 'TypeScript' },
  ];
}

export default async function Page() {
  const items = await getItems();

  return (
    <main>
      <h1>Items</h1>
      <SearchFilter items={items} />
    </main>
  );
}`,
        hints: [
          'Client Components need "use client" at the top of the file',
          'Server Components can be async functions',
          'Pass data from Server to Client Components via props',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod1-q1',
      question: 'What is the primary advantage of Server-Side Rendering (SSR) over Client-Side Rendering?',
      options: ['Faster JavaScript execution', 'Pre-rendered HTML for better SEO and faster FCP', 'Smaller bundle sizes', 'No need for a server'],
      correctAnswer: 1,
      explanation: 'SSR sends fully-rendered HTML from the server, which search engines can index immediately and users can see before JavaScript loads.',
    },
    {
      id: 'mod1-q2',
      question: 'In the Next.js App Router, what is the purpose of layout.tsx?',
      options: ['Defines API routes', 'Provides shared UI that wraps child pages and persists across navigations', 'Handles error boundaries', 'Configures the build process'],
      correctAnswer: 1,
      explanation: 'layout.tsx defines shared UI structure that wraps child segments. Unlike templates, layouts persist state across navigations.',
    },
    {
      id: 'mod1-q3',
      question: 'By default, components in the Next.js App Router are:',
      options: ['Client Components', 'Server Components', 'Static Components', 'Hybrid Components'],
      correctAnswer: 1,
      explanation: 'In the App Router, all components are Server Components by default. You must add "use client" to make them Client Components.',
    },
    {
      id: 'mod1-q4',
      question: 'Which directive turns a Server Component into a Client Component?',
      options: ['"use strict"', '"use client"', '"use browser"', '"use interactive"'],
      correctAnswer: 1,
      explanation: 'The "use client" directive at the top of a file marks it as a Client Component, enabling hooks and browser APIs.',
    },
    {
      id: 'mod1-q5',
      question: 'What can a Server Component do that a Client Component cannot?',
      options: ['Use useState', 'Directly access databases and the filesystem', 'Handle click events', 'Use browser APIs'],
      correctAnswer: 1,
      explanation: 'Server Components run only on the server, so they can directly access databases, file systems, and other server-only resources.',
    },
  ],
};
