import type { Module } from '../types';

export const module5: Module = {
  id: 'mod-5',
  title: 'Data Fetching Patterns',
  description: 'Master data fetching in Next.js: parallel fetching, sequential fetching, request deduplication, and caching. Discover how React cache() and Server Actions streamline server-side logic, reducing client-side complexity and improving performance.',
  topics: [
    {
      id: 'mod5-t1',
      title: 'Parallel & Sequential Data Fetching',
      explanation: `## Parallel vs Sequential Fetching

One of the most impactful performance patterns in server-side rendering is how you organize your data fetching calls. Sequential fetching creates a "waterfall" where each request waits for the previous one, while parallel fetching fires all requests simultaneously.

### Sequential (Waterfall)

In a waterfall pattern, each \`await\` blocks execution until it completes before the next one starts. This is the default behavior when you write async/await code linearly. It's only necessary when one request depends on the result of another (e.g., you need the user ID before fetching their posts):

\`\`\`tsx
// ❌ Sequential — each await blocks the next
export default async function Page() {
  const user = await getUser(); // 500ms
  const posts = await getPosts(user.id); // 300ms — waits for user
  // Total: 800ms
}
\`\`\`

### Parallel

When requests are independent, use \`Promise.all\` to fire them simultaneously. The total wait time equals the **slowest** single request, not the sum of all requests. This can dramatically improve page load times:

\`\`\`tsx
// ✅ Parallel — both start simultaneously
export default async function Page() {
  const userPromise = getUser();
  const postsPromise = getPosts();

  // Both requests fire simultaneously — total wait = slowest request, not sum
  const [user, posts] = await Promise.all([
    userPromise,
    postsPromise,
  ]);
  // Total: max(500ms, 300ms) = 500ms
}
\`\`\`

### Preloading Data

You can start fetching data early in a layout or parent component, so that by the time a child component needs it, the result is already cached. React's \`cache()\` ensures the function only executes once per request:

\`\`\`tsx
import { cache } from 'react';

export const getUser = cache(async (id: string) => {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
});

// Preload in layout
export default function Layout({ children }) {
  // Start fetching early — component that needs it
  // will use the cached result
  getUser('123');
  return <>{children}</>;
}
\`\`\`

### Request Deduplication

Next.js automatically deduplicates \`fetch\` calls with the same URL and options during a single server render. This means multiple components can independently fetch the same data without worrying about redundant network requests:

\`\`\`tsx
// Both components call the same URL — only ONE network request is made
async function Header() {
  const user = await fetch('/api/user').then(r => r.json());
  return <h1>Hi, {user.name}</h1>;
}

async function Sidebar() {
  const user = await fetch('/api/user').then(r => r.json());
  return <aside>Role: {user.role}</aside>;
}
\`\`\`

> **Key insight:** Automatic deduplication means you can fetch data at the component level without prop drilling, and Next.js ensures each unique URL is only requested once.`,
      task: {
        description: 'Refactor a sequential data fetching page to use parallel fetching with Promise.all. The page should fetch user data, posts, and stats simultaneously.',
        starterCode: `// app/dashboard/page.tsx
async function getUser() {
  return fetch('/api/user').then(r => r.json());
}

async function getPosts() {
  return fetch('/api/posts').then(r => r.json());
}

async function getStats() {
  return fetch('/api/stats').then(r => r.json());
}

export default async function Dashboard() {
  // TODO: Fetch all three in parallel
  // Currently sequential (slow):
  const user = await getUser();
  const posts = await getPosts();
  const stats = await getStats();

  return <div>{/* render data */}</div>;
}`,
        solution: `// app/dashboard/page.tsx
async function getUser() {
  return fetch('/api/user').then(r => r.json());
}

async function getPosts() {
  return fetch('/api/posts').then(r => r.json());
}

async function getStats() {
  return fetch('/api/stats').then(r => r.json());
}

export default async function Dashboard() {
  const [user, posts, stats] = await Promise.all([
    getUser(),
    getPosts(),
    getStats(),
  ]);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>{posts.length} posts</p>
      <p>{stats.views} total views</p>
    </div>
  );
}`,
        hints: [
          'Use Promise.all to run multiple async operations in parallel',
          'Destructure the result array to get each value',
          'This reduces total wait time to the slowest request',
        ],
      },
    },
    {
      id: 'mod5-t2',
      title: 'Server Actions & Mutations',
      explanation: `## Server Actions

Server Actions let you run server-side code directly from Client or Server Components. They replace the need for manual API routes for data mutations (create, update, delete). Under the hood, Next.js creates a secure endpoint for each Server Action, and the client calls it automatically via a POST request.

\`\`\`tsx
// app/actions.ts
"use server"; // This function runs on the server, even when called from client code

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await db.post.create({
    data: { title, content },
  });

  revalidatePath('/posts');
}
\`\`\`

### Using in a Form

The simplest way to use Server Actions is with the native \`<form>\` element's \`action\` prop. When submitted, Next.js serializes the form data and sends it to the server — no JavaScript is needed on the client for basic form submissions (progressive enhancement):

\`\`\`tsx
// app/posts/new/page.tsx
import { createPost } from '../actions';

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Title" required />
      <textarea name="content" placeholder="Content" required />
      <button type="submit">Create Post</button>
    </form>
  );
}
\`\`\`

### Using in Client Components

For programmatic invocations (not from a form), use \`useTransition\` to call Server Actions with a pending state. This gives you full control over when the action runs and lets you show loading indicators:

\`\`\`tsx
"use client";
import { useTransition } from 'react';
import { deletePost } from '../actions';

export function DeleteButton({ postId }: { postId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => deletePost(postId))}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
\`\`\`

### useFormState & useFormStatus

For enhanced form UX, \`useFormStatus\` provides pending state information for submit buttons, and \`useFormState\` lets you track the result of form submissions (success/error messages). Note that \`useFormStatus\` must be used in a component **nested inside** the form:

\`\`\`tsx
"use client";
import { useFormState, useFormStatus } from 'react-dom';
import { submitForm } from '../actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitForm, { message: '' });

  return (
    <form action={formAction}>
      <input name="email" type="email" required />
      <SubmitButton />
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
\`\`\``,
      task: {
        description: 'Create a Server Action for adding a todo item and a form component that uses it with useFormStatus for a pending state indicator.',
        starterCode: `// app/actions.ts
"use server";
// TODO: Create addTodo server action

// app/todos/page.tsx
// TODO: Create a form with a submit button that shows pending state`,
        solution: `// app/actions.ts
"use server";

import { revalidatePath } from 'next/cache';

const todos: { id: number; text: string }[] = [];
let nextId = 1;

export async function addTodo(formData: FormData) {
  const text = formData.get('text') as string;
  if (!text) return { error: 'Text is required' };

  todos.push({ id: nextId++, text });
  revalidatePath('/todos');
  return { success: true };
}

export async function getTodos() {
  return todos;
}

// components/SubmitButton.tsx
"use client";
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Adding...' : 'Add Todo'}
    </button>
  );
}

// app/todos/page.tsx
import { addTodo, getTodos } from '../actions';
import { SubmitButton } from '../../components/SubmitButton';

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todos</h1>
      <form action={addTodo}>
        <input name="text" placeholder="New todo..." required />
        <SubmitButton />
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`,
        hints: [
          'Server Actions must have "use server" at the top',
          'useFormStatus must be in a component INSIDE the form',
          'Use revalidatePath to refresh page data after mutation',
        ],
      },
    },
    {
      id: 'mod5-t3',
      title: 'React Cache & Deduplication',
      explanation: `## React cache() Function

The \`cache()\` function from React memoizes the result of an async function for the duration of a single server request. This means if the same function is called multiple times with the same arguments during one render, it only executes once and returns the cached result for subsequent calls.

Wrap data fetching functions with \`cache()\` to ensure they run only once per request:

\`\`\`tsx
import { cache } from 'react';

export const getUser = cache(async (id: string) => {
  console.log('Fetching user', id); // Logs only once per request
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
});
\`\`\`

### When to Use cache()

- **Non-fetch data access** — database queries, file system reads, or any data source that isn't the native \`fetch\` API
- fetch() is already deduplicated automatically by Next.js, so wrapping it in \`cache()\` is redundant
- **Sharing data between components** without prop drilling — multiple components can call the same cached function independently
- **Preloading** in layouts — start a fetch early so child components get instant results

### Unstable_cache (Data Cache)

While React \`cache()\` is per-request (cleared after each render), \`unstable_cache\` persists data **across requests** — similar to how \`fetch\` caching works but for non-fetch data sources like direct database queries:

\`\`\`tsx
import { unstable_cache } from 'next/cache';

const getCachedUser = unstable_cache(
  async (id: string) => {
    return db.user.findUnique({ where: { id } });
  },
  ['user-cache'], // cache key
  {
    revalidate: 3600, // 1 hour
    tags: ['users'],  // for on-demand revalidation
  }
);
\`\`\`

### Data Access Patterns

There are multiple valid patterns for fetching data in Server Components. The right choice depends on whether data is shared, how complex the component tree is, and whether you want explicit or implicit data flow:

\`\`\`tsx
// Pattern 1: Fetch in the component that needs data
// ✅ Recommended — simple, declarative, components are self-contained
async function UserProfile({ id }) {
  const user = await getUser(id);
  return <h1>{user.name}</h1>;
}

// Pattern 2: Fetch in parent, pass as props
// ✅ Also fine — explicit data dependencies, easy to test
async function Page({ params }) {
  const user = await getUser(params.id);
  return <UserProfile user={user} />;
}

// Pattern 3: Fetch in layout
// ⚠️ Use with caution — layouts can't pass data to pages directly
\`\`\``,
      task: {
        description: 'Use the React cache() function to create a cached getUser function, then use it in two different Server Components that render on the same page without duplicating the database call.',
        starterCode: `// lib/data.ts
// TODO: Create a cached getUser function using React cache()

// components/UserHeader.tsx
// TODO: Use getUser to display the user's name

// components/UserSidebar.tsx
// TODO: Use getUser to display the user's role`,
        solution: `// lib/data.ts
import { cache } from 'react';

interface User {
  id: string;
  name: string;
  role: string;
  email: string;
}

export const getUser = cache(async (id: string): Promise<User> => {
  // This only runs ONCE even if called multiple times
  const res = await fetch(\`https://api.example.com/users/\${id}\`);
  return res.json();
});

// components/UserHeader.tsx
import { getUser } from '../lib/data';

export async function UserHeader({ userId }: { userId: string }) {
  const user = await getUser(userId); // Uses cached result
  return <header><h1>Welcome, {user.name}</h1></header>;
}

// components/UserSidebar.tsx
import { getUser } from '../lib/data';

export async function UserSidebar({ userId }: { userId: string }) {
  const user = await getUser(userId); // Same cached result
  return <aside><p>Role: {user.role}</p><p>{user.email}</p></aside>;
}`,
        hints: [
          'Import cache from "react", not from "next/cache"',
          'cache() returns a memoized version of the function',
          'The cached result is per-request — cleared between requests',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod5-q1',
      question: 'What is the benefit of using Promise.all for data fetching?',
      options: ['It makes requests smaller', 'It runs multiple requests in parallel, reducing total wait time', 'It caches all responses', 'It retries failed requests'],
      correctAnswer: 1,
      explanation: 'Promise.all starts all requests simultaneously, so total time equals the slowest single request rather than the sum of all request times.',
    },
    {
      id: 'mod5-q2',
      question: 'Where must "use server" be placed for Server Actions?',
      options: ['At the bottom of the file', 'In the function body', 'At the top of the file or at the top of the function', 'In the import statement'],
      correctAnswer: 2,
      explanation: '"use server" goes at the top of a file to make all exports Server Actions, or at the top of an individual async function.',
    },
    {
      id: 'mod5-q3',
      question: 'How does Next.js handle duplicate fetch calls in the same render?',
      options: ['It throws an error', 'It deduplicates them — same URL makes only one request', 'It runs them all separately', 'It queues them'],
      correctAnswer: 1,
      explanation: 'Next.js automatically deduplicates fetch calls with the same URL and options during a single server render, making only one network request.',
    },
    {
      id: 'mod5-q4',
      question: 'What does useFormStatus provide?',
      options: ['Form validation errors', 'The pending state of the parent form submission', 'Form field values', 'HTTP status code'],
      correctAnswer: 1,
      explanation: 'useFormStatus returns an object with a pending boolean indicating whether the form (that the component is nested inside) is currently being submitted.',
    },
    {
      id: 'mod5-q5',
      question: 'What is the scope of React cache() deduplication?',
      options: ['Global — across all requests', 'Per-request — cleared between requests', 'Per-component', 'Per-session'],
      correctAnswer: 1,
      explanation: 'React cache() memoizes function results for the duration of a single server request. Each new request starts with a fresh cache.',
    },
  ],
};
