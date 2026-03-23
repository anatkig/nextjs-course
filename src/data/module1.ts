import type { Module } from '../types';

export const module1: Module = {
  id: 'mod-1',
  title: 'Next.js Fundamentals',
  description: 'Project setup, folder structure, and core concepts that make Next.js different from plain React. Learn how the App Router works, understand the rendering strategies (SSR, SSG, ISR, CSR), and grasp the fundamental distinction between Server and Client Components.',
  topics: [
    {
      id: 'mod1-t1',
      title: 'What is Next.js & Why Use It',
      explanation: `## What is Next.js?

Next.js is a **React framework** built by Vercel that adds server-side rendering, static site generation, file-based routing, and many production-grade features on top of React. While React itself is a UI library focused on building component trees, Next.js adds the full infrastructure needed for production: routing, data fetching, rendering optimization, and deployment tooling.

### Why Not Just Use React?

With plain React (e.g., Create React App or Vite), you get a **client-side single-page application (SPA)**. The browser receives an empty HTML shell plus a JavaScript bundle. This approach works well for highly interactive dashboards or authenticated apps, but it has major drawbacks for SEO, initial load performance, and content accessibility. Next.js solves these issues by letting you choose the best rendering strategy per page.

### React vs Next.js

| Feature | React (CRA/Vite) | Next.js |
|---------|------------------|---------|
| Rendering | Client-side only | SSR, SSG, ISR, CSR |
| Routing | Manual (react-router) | File-based (automatic) |
| SEO | Poor (empty HTML) | Excellent (pre-rendered) |
| API Routes | Separate backend | Built-in API routes |
| Code Splitting | Manual | Automatic per-route |
| Image Optimization | Manual | Built-in \`next/image\` |
| Font Optimization | Manual | Built-in \`next/font\` |

### How SSR Solves the SPA Problem

A traditional React SPA sends an **empty HTML shell** to the browser:

\`\`\`html
<!-- SPA sends an empty shell — nothing visible until JS loads -->
<div id="root"></div>
<script src="/bundle.js"></script>
\`\`\`

The browser must download, parse, and execute JavaScript before any content appears. This causes:
- **Poor SEO** — search engine crawlers see an empty page and index nothing meaningful
- **Slow First Contentful Paint (FCP)** — users stare at a blank screen while JS downloads
- **No content without JavaScript** — if the script fails or is blocked, the page is empty
- **Slow Time to Interactive (TTI)** — large bundles take longer to parse and execute

Next.js **pre-renders** pages on the server, sending fully-formed HTML:

\`\`\`html
<!-- SSR sends fully-formed HTML — content is visible immediately -->
<div id="root">
  <h1>Welcome to My Site</h1>
  <p>This content is immediately visible!</p>
</div>
<!-- JS bundle hydrates the page after the initial render -->
<script src="/bundle.js"></script>
\`\`\`

After the HTML is displayed, React **hydrates** the page — it attaches event handlers and makes the page fully interactive. The user sees content immediately while React wires up interactivity in the background.

### Rendering Strategies

Next.js lets you pick different rendering strategies depending on your page's data requirements:

\`\`\`
SSR (Server-Side Rendering)
  → HTML generated on EVERY request
  → Always fresh data
  → Slower TTFB due to server computation
  → Best for: user-specific content, real-time dashboards

SSG (Static Site Generation)
  → HTML generated at BUILD time
  → Fastest possible response (served from CDN)
  → Data can become stale between builds
  → Best for: blogs, marketing pages, documentation

ISR (Incremental Static Regeneration)
  → SSG + background revalidation after N seconds
  → Combines speed of static with freshness of dynamic
  → Stale page served while new one generates in background
  → Best for: e-commerce product pages, news feeds

CSR (Client-Side Rendering)
  → Traditional React behavior — rendering happens in the browser
  → Good for authenticated/dynamic content behind a login
  → Best for: admin panels, interactive tools
\`\`\`

You can mix and match these strategies within the same application — for example, using SSG for your homepage, SSR for a user profile, and CSR for a settings dashboard.`,
      tasks: [{
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
      }],
    },
    {
      id: 'mod1-t2',
      title: 'Project Structure & Configuration',
      explanation: `## Next.js Project Structure (App Router)

When you create a new Next.js project with \`npx create-next-app@latest\`, you get the **App Router** layout by default (introduced in Next.js 13.4). The App Router uses the \`app/\` directory and is built around React Server Components. Here is a typical project layout:

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
│           └── page.tsx   # /blog/:slug (dynamic route)
├── public/                # Static assets (images, fonts, favicon)
├── next.config.js         # Next.js configuration
├── package.json
└── tsconfig.json
\`\`\`

The routing is entirely **file-system based** — every folder inside \`app/\` that contains a \`page.tsx\` becomes a URL route automatically. There's no need for a router configuration file.

### Key Files

**\`app/layout.tsx\`** — The root layout wraps every page. It must return \`<html>\` and \`<body>\` tags. Layouts persist across navigations — their state and React tree are preserved when the user navigates between child pages:

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

**\`next.config.js\`** — The central configuration file for your Next.js project. It controls image domains, redirects, headers, environment variables, and much more:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables stricter checks during development
  images: {
    domains: ['example.com'], // Whitelist external image domains for next/image
  },
};

module.exports = nextConfig;
\`\`\`

### Special Files in the App Router

The App Router recognizes a set of **convention-based file names** inside each route folder. Each filename has a specific purpose and is handled automatically by Next.js:

| File | Purpose |
|------|---------|
| \`page.tsx\` | The UI for a route — only pages make routes publicly accessible |
| \`layout.tsx\` | Shared layout that wraps children — persists across navigations |
| \`loading.tsx\` | Loading UI — creates an automatic Suspense boundary |
| \`error.tsx\` | Error UI — creates an automatic Error boundary |
| \`not-found.tsx\` | 404 UI — shown when \`notFound()\` is called |
| \`template.tsx\` | Like layout but re-mounts on every navigation (state resets) |
| \`route.ts\` | API endpoint (cannot coexist with \`page.tsx\` in the same folder) |
| \`default.tsx\` | Fallback UI for parallel route slots when no match is found |

### Layout vs Template

This is a common point of confusion. Both wrap child content, but they behave differently during navigation:

- **Layout**: Persists across navigations — state is preserved, component does not re-mount. This is ideal for navigation bars, sidebars, and any UI that should stay consistent.
- **Template**: Re-creates the component instance on every navigation — state resets. This is useful for entrance animations, per-page analytics logging, or when you need a fresh component on each visit.

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
\`\`\`

In practice, you'll use \`layout.tsx\` 95% of the time. Templates are only needed when you specifically want a fresh instance per navigation.`,
      tasks: [{
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
      }],
    },
    {
      id: 'mod1-t3',
      title: 'Server Components vs Client Components',
      explanation: `## React Server Components (RSC)

In Next.js App Router, **all components are Server Components by default**. This is a fundamental shift from traditional React, where every component runs in the browser. Server Components run exclusively on the server — their code is never sent to the client, which means they contribute zero bytes to your JavaScript bundle.

### Why Server Components Matter

Before RSC, all React code was shipped to the browser. If you imported a heavy markdown parser or a date library, it would all end up in the client bundle. With Server Components, heavy dependencies stay on the server. Only the rendered HTML output is sent to the client.

### Server Components

\`\`\`tsx
// This runs ONLY on the server — no "use client" directive needed
async function ProductList() {
  // Direct database access — this code never reaches the browser bundle
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
- Direct database/filesystem access — no API layer needed
- Zero bundle size impact — all code stays on the server
- Automatic code splitting — each component is split by default
- Can use \`async/await\` directly in the component body
- Sensitive data (API keys, tokens) never leave the server

**Limitations:**
- No \`useState\`, \`useEffect\`, or other React hooks
- No browser APIs (\`window\`, \`document\`, \`localStorage\`)
- No event handlers (\`onClick\`, \`onChange\`, \`onSubmit\`)
- Cannot use React Context (it requires client-side rendering)

### Client Components

When you need interactivity — forms, buttons, animations, real-time updates — you opt in by adding \`"use client"\` at the top of the file. This tells Next.js to include the component in the client JavaScript bundle:

\`\`\`tsx
"use client"; // Required directive to use hooks and event handlers

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0); // State lives in the browser

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
\`\`\`

Client Components are still **pre-rendered** on the server for the initial HTML (so they're still SEO-friendly), but they're also **hydrated** on the client so that event handlers and state work correctly.

### The Boundary Rule

This is one of the most important rules in the App Router:

> A Client Component can only import other Client Components. But a Server Component can render both Server and Client Components.

Once you mark a file with \`"use client"\`, everything it imports also becomes part of the client bundle. This is why you should push the \`"use client"\` boundary as deep in the component tree as possible — keep most of your app as Server Components and only wrap the specific interactive pieces with \`"use client"\`.

\`\`\`tsx
// app/page.tsx (Server Component) — can render both Server and Client Components
import { Counter } from './Counter';      // Client Component ✓
import { ProductList } from './Products'; // Server Component ✓

export default function Page() {
  return (
    <div>
      <ProductList />   {/* Server: fetches data, zero bundle cost */}
      <Counter />       {/* Client: handles user interaction */}
    </div>
  );
}
\`\`\`

### When to Use Each

| Use Server Component | Use Client Component |
|---------------------|---------------------|
| Fetch data from DB/API | Interactive UI (forms, buttons) |
| Access backend resources directly | useState / useEffect / useRef |
| Keep sensitive data on server | Browser APIs (localStorage, geolocation) |
| Reduce client bundle size | Event listeners (onClick, onChange) |
| Use heavy dependencies (markdown, etc.) | Real-time updates (WebSockets) |
| Render static or async content | Animations and transitions |

**Rule of thumb:** start with Server Components everywhere. Only add \`"use client"\` when you specifically need interactivity, hooks, or browser APIs.`,
      tasks: [{
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
      }],
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
