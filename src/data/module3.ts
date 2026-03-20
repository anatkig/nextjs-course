import type { Module } from '../types';

export const module3: Module = {
  id: 'mod-3',
  title: 'Server-Side Rendering (SSR)',
  description: 'Deep dive into SSR with the App Router: async components, streaming, and request-time data fetching. Understand how Suspense boundaries enable progressive rendering, loading states, and error handling for a smoother user experience.',
  topics: [
    {
      id: 'mod3-t1',
      title: 'Async Server Components',
      explanation: `## Server Components Are Async

In the App Router, Server Components can be **async functions** that fetch data directly:

\`\`\`tsx
// app/users/page.tsx — this is a Server Component
// Data fetching runs on the server — result is sent as HTML
async function getUsers() {
  const res = await fetch('https://api.example.com/users');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

### How It Works

1. User requests \`/users\`
2. Next.js runs the component **on the server**
3. The \`await\` resolves with data
4. HTML is generated with the data
5. HTML is sent to the client
6. React hydrates for interactivity

### Fetch Caching Behavior

Next.js extends \`fetch\` with caching options:

\`\`\`tsx
// Cached by default (similar to SSG)
fetch('https://api.example.com/data');

// No cache — fresh data every request (SSR)
fetch('https://api.example.com/data', { cache: 'no-store' });

// Revalidate every 60 seconds (ISR)
fetch('https://api.example.com/data', { next: { revalidate: 60 } });
\`\`\`

### Dynamic Rendering

Using \`cache: 'no-store'\` or accessing dynamic functions makes a page dynamically rendered:

\`\`\`tsx
import { cookies, headers } from 'next/headers';

export default async function Page() {
  // Any of these make the page dynamic:
  const cookieStore = cookies();
  const headersList = headers();
  const data = await fetch(url, { cache: 'no-store' });

  return <div>Dynamic content</div>;
}
\`\`\``,
      task: {
        description: 'Create a Server Component that fetches a list of posts from a REST API (simulate with an async function). Display each post title and body. Use the no-cache fetch option to ensure fresh data on every request.',
        starterCode: `// app/posts/page.tsx

interface Post {
  id: number;
  title: string;
  body: string;
}

// TODO: Create an async function to fetch posts
// TODO: Create an async Server Component that renders the posts`,
        solution: `// app/posts/page.tsx

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}`,
        hints: [
          'Server Components can be async functions',
          'Use cache: "no-store" for SSR behavior',
          'Always handle the error case with res.ok',
        ],
      },
    },
    {
      id: 'mod3-t2',
      title: 'Loading & Error States',
      explanation: `## Built-in Loading UI

Create \`loading.tsx\` for automatic Suspense boundaries:

\`\`\`tsx
// app/dashboard/loading.tsx — automatically wraps the page in a Suspense boundary
export default function Loading() {
  return (
    <div className="loading-skeleton">
      <div className="skeleton-header" />
      <div className="skeleton-content" />
    </div>
  );
}
\`\`\`

This automatically wraps the page in a Suspense boundary:

\`\`\`tsx
// What Next.js does internally:
<Suspense fallback={<Loading />}>
  <Page />
</Suspense>
\`\`\`

### Error Handling

Create \`error.tsx\` for automatic error boundaries:

\`\`\`tsx
"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
\`\`\`

### Not Found

\`\`\`tsx
// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find the requested resource.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
\`\`\`

Trigger it programmatically:

\`\`\`tsx
import { notFound } from 'next/navigation';

export default async function UserPage({ params }) {
  const user = await getUser(params.id);

  if (!user) {
    notFound(); // Renders the nearest not-found.tsx
  }

  return <h1>{user.name}</h1>;
}
\`\`\`

### Hierarchy

\`\`\`
app/
├── error.tsx         → Catches errors in all child routes
├── loading.tsx       → Shows loading for all child routes
├── dashboard/
│   ├── error.tsx     → Overrides parent error for /dashboard/*
│   ├── loading.tsx   → Overrides parent loading for /dashboard/*
│   └── page.tsx
\`\`\``,
      task: {
        description: 'Create a loading.tsx skeleton UI with animated placeholders, and an error.tsx component that shows the error message with a retry button.',
        starterCode: `// app/dashboard/loading.tsx
// TODO: Create a skeleton loading UI

// app/dashboard/error.tsx
// TODO: Create an error boundary component
// Remember: error.tsx must be a Client Component`,
        solution: `// app/dashboard/loading.tsx
export default function Loading() {
  return (
    <div style={{ padding: 20 }}>
      <div style={{
        height: 32, width: 200, background: '#e0e0e0',
        borderRadius: 4, marginBottom: 16, animation: 'pulse 1.5s infinite'
      }} />
      <div style={{
        height: 200, background: '#e0e0e0',
        borderRadius: 8, animation: 'pulse 1.5s infinite'
      }} />
    </div>
  );
}

// app/dashboard/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>Something went wrong!</h2>
      <p style={{ color: '#666' }}>{error.message}</p>
      <button
        onClick={reset}
        style={{
          padding: '8px 16px', background: '#0070f3',
          color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  );
}`,
        hints: [
          'loading.tsx is a Server Component (no "use client" needed)',
          'error.tsx MUST be a Client Component — add "use client"',
          'The error component receives error and reset props',
        ],
      },
    },
    {
      id: 'mod3-t3',
      title: 'Streaming & Suspense',
      explanation: `## Streaming SSR

Instead of waiting for ALL data before sending HTML, streaming sends parts of the page as they become ready.

### Without Streaming

\`\`\`
Request → Wait for ALL data → Send complete HTML → Display
\`\`\`

### With Streaming

\`\`\`
Request → Send shell HTML immediately
        → Stream component 1 when ready
        → Stream component 2 when ready
        → All content displayed progressively
\`\`\`

### Using Suspense for Streaming

\`\`\`tsx
import { Suspense } from 'react';

// This component loads independently — Suspense shows a fallback while it resolves
async function SlowData() {
  const data = await fetch('/api/slow-endpoint');
  const json = await data.json();
  return <div>{json.result}</div>;
}

async function FastData() {
  const data = await fetch('/api/fast-endpoint');
  const json = await data.json();
  return <div>{json.result}</div>;
}

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This renders immediately */}
      <Suspense fallback={<p>Loading fast data...</p>}>
        <FastData />
      </Suspense>

      {/* This streams in when ready */}
      <Suspense fallback={<p>Loading slow data...</p>}>
        <SlowData />
      </Suspense>
    </div>
  );
}
\`\`\`

### Nested Suspense Boundaries

\`\`\`tsx
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Suspense fallback={<StatsSkeleton />}>
        <StatsPanel />

        <Suspense fallback={<ChartSkeleton />}>
          <RevenueChart />
        </Suspense>
      </Suspense>
    </div>
  );
}
\`\`\`

The outer Suspense resolves first (StatsPanel), then the inner one (RevenueChart) streams in. This creates a **progressive loading experience**.

### Benefits of Streaming

- **Faster TTFB** — shell renders immediately
- **Progressive rendering** — users see content as it becomes available
- **No waterfall** — parallel data fetching
- **Better user experience** — no blank screens`,
      task: {
        description: 'Build a dashboard page with three async data sections wrapped in their own Suspense boundaries. Each section should have different loading skeletons and simulate different fetch times.',
        starterCode: `// app/dashboard/page.tsx
import { Suspense } from 'react';

// TODO: Create 3 async components that simulate different load times
// TODO: Wrap each in Suspense with appropriate fallbacks`,
        solution: `// app/dashboard/page.tsx
import { Suspense } from 'react';

async function QuickStats() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return (
    <div>
      <h2>Quick Stats</h2>
      <p>Users: 1,234 | Revenue: $45,678</p>
    </div>
  );
}

async function RecentOrders() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return (
    <div>
      <h2>Recent Orders</h2>
      <ul>
        <li>Order #1001 — $99.99</li>
        <li>Order #1002 — $149.99</li>
        <li>Order #1003 — $29.99</li>
      </ul>
    </div>
  );
}

async function AnalyticsChart() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return (
    <div>
      <h2>Analytics</h2>
      <p>[Chart rendered with full data]</p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Suspense fallback={<p>Loading stats...</p>}>
        <QuickStats />
      </Suspense>

      <Suspense fallback={<p>Loading recent orders...</p>}>
        <RecentOrders />
      </Suspense>

      <Suspense fallback={<p>Loading analytics chart...</p>}>
        <AnalyticsChart />
      </Suspense>
    </div>
  );
}`,
        hints: [
          'Each async component can simulate delay with setTimeout in a Promise',
          'Wrap each section in its own Suspense boundary',
          'Suspense fallback shows while the async component is loading',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod3-q1',
      question: 'How do you make a fetch call in Next.js behave like SSR (fresh data every request)?',
      options: ['fetch(url)', 'fetch(url, { cache: "force-cache" })', 'fetch(url, { cache: "no-store" })', 'fetch(url, { mode: "ssr" })'],
      correctAnswer: 2,
      explanation: 'Using cache: "no-store" tells Next.js not to cache the response, resulting in fresh data on every request (SSR behavior).',
    },
    {
      id: 'mod3-q2',
      question: 'What kind of component must error.tsx be?',
      options: ['Server Component', 'Client Component', 'Async Component', 'Static Component'],
      correctAnswer: 1,
      explanation: 'error.tsx must be a Client Component (with "use client" directive) because it needs to use the reset function and handle user interactions.',
    },
    {
      id: 'mod3-q3',
      question: 'What is the benefit of Streaming SSR?',
      options: ['Smaller bundle size', 'Progressive rendering — users see content as parts become ready', 'Better TypeScript support', 'Automatic error handling'],
      correctAnswer: 1,
      explanation: 'Streaming sends parts of the HTML as async components resolve, so users see content progressively instead of waiting for everything.',
    },
    {
      id: 'mod3-q4',
      question: 'What does loading.tsx automatically create?',
      options: ['An error boundary', 'A Suspense boundary wrapping the page', 'A cache layer', 'A redirect'],
      correctAnswer: 1,
      explanation: 'loading.tsx automatically wraps the page in a React Suspense boundary, showing the loading UI while the page component is resolving.',
    },
    {
      id: 'mod3-q5',
      question: 'How do you trigger the nearest not-found.tsx in a Server Component?',
      options: ['throw new Error("404")', 'return null', 'notFound() from next/navigation', 'redirect("/404")'],
      correctAnswer: 2,
      explanation: 'Calling notFound() from next/navigation renders the nearest not-found.tsx boundary.',
    },
  ],
};
