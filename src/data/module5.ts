import type { Module } from '../types';

export const module5: Module = {
  id: 'mod-5',
  title: 'Data Fetching Patterns',
  description: 'Master data fetching in Next.js: parallel fetching, sequential fetching, request deduplication, and caching.',
  topics: [
    {
      id: 'mod5-t1',
      title: 'Parallel & Sequential Data Fetching',
      explanation: `## Parallel vs Sequential Fetching

### Sequential (Waterfall)

\`\`\`tsx
// ❌ Sequential — each await blocks the next
export default async function Page() {
  const user = await getUser(); // 500ms
  const posts = await getPosts(user.id); // 300ms — waits for user
  // Total: 800ms
}
\`\`\`

### Parallel

\`\`\`tsx
// ✅ Parallel — both start simultaneously
export default async function Page() {
  const userPromise = getUser();
  const postsPromise = getPosts();

  const [user, posts] = await Promise.all([
    userPromise,
    postsPromise,
  ]);
  // Total: max(500ms, 300ms) = 500ms
}
\`\`\`

### Preloading Data

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

Next.js automatically deduplicates \`fetch\` calls with the same URL and options during a single render:

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
\`\`\``,
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

Server Actions let you run server-side code from Client or Server Components. They replace API routes for mutations.

\`\`\`tsx
// app/actions.ts
"use server";

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

- **Non-fetch data access** (database queries, file reads)
- fetch() is already deduplicated automatically
- Useful when passing data between components without prop drilling

### Unstable_cache (Data Cache)

For caching non-fetch data across requests:

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

\`\`\`tsx
// Pattern 1: Fetch in the component that needs data
// ✅ Recommended — simple, declarative
async function UserProfile({ id }) {
  const user = await getUser(id);
  return <h1>{user.name}</h1>;
}

// Pattern 2: Fetch in parent, pass as props
// ✅ Also fine — explicit data dependencies
async function Page({ params }) {
  const user = await getUser(params.id);
  return <UserProfile user={user} />;
}

// Pattern 3: Fetch in layout
// ⚠️ Use with caution — layouts can't pass data to pages
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
