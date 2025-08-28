# AuthApp - Modern Authentication & State Management

A **Next.js 14** application featuring **modern authentication**, **Zustand-powered state management** (counter & todo), and a scalable **component-driven architecture**. Built with **TypeScript, Tailwind CSS, and Radix UI**.

---

## Features

* **Authentication System**

  * Login & Signup with separate forms
  * AuthContext with localStorage persistence
  * Protected routes with `ProtectedRoute`

* **State Management with Zustand**

  * **Counter**: increment, decrement, reset
  * **Todo Manager**: add, toggle, delete tasks
  * Global stores under `lib/store/`

* **Beautiful UI Components**

  * Radix UI (50+ accessible components)
  * Tailwind-powered theming and responsive layouts

* **Modern Stack**

  * Next.js 14 (App Router)
  * React 18 + TypeScript
  * Zustand for state management
  * React Hook Form + Zod validation

* **Responsive Design**

  * Mobile-first layouts
  * Adaptive navigation & forms
  * Smooth transitions and custom theming

---

## Tech Stack

* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS 3
* **UI**: Radix UI + Lucide Icons
* **State Management**: Zustand + Context API
* **Forms**: React Hook Form + Zod
* **Animations**: Tailwind transitions
* **Charts**: Recharts (data visualization)
* **Theming**: Next-themes (light/dark mode)

---

## Installation

1. Clone repository:

   ```bash
   git clone <your-repo-url>
   cd next-auth
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

---

##  Project Structure

```bash
next-auth/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication (/auth)
│   │   └── page.tsx              # Login/Signup form
│   ├── counter/                  # Counter & Todo manager (/counter)
│   │   └── page.tsx              # Uses Zustand for state management
│   ├── globals.css               # Global styles + Tailwind theme
│   ├── layout.tsx                # Root layout (AuthProvider + ThemeProvider)
│   └── page.tsx                  # Home page with conditional rendering
│
├── components/                   # Reusable components
│   ├── common/                   # Shared small utilities
│   ├── counter/                  # CounterCard
│   ├── todo/                     # AddTodoCard, TodoList
│   ├── forms/                    # AuthForm, SignInForm, SignUpForm
│   ├── layout/                   # Navigation, ProtectedRoute
│   ├── sections/                 # Hero, feature sections
│   ├── typography/               # Heading, Text
│   ├── providers/                # Context providers
│   └── ui/                       # Radix-based UI components
│
├── lib/                          # Core logic
│   ├── store/                    # Zustand stores
│   │   ├── counter-store.ts      # Counter logic
│   │   └── todo-store.ts         # Todo logic
│   ├── auth-context.tsx          # Auth provider
│   └── utils.ts                  # Helper utilities
│
├── hooks/                        # Custom React hooks
│   └── use-toast.ts              # Toast hook
│
├── public/                       # Static assets
└── tailwind.config.ts            # Tailwind configuration
```

---

## Authentication System

* **Separate Forms**: `SignInForm`, `SignUpForm`
* **Wrapper**: `AuthForm` for switching between modes
* **Context**: `auth-context.tsx` for login/logout
* **Protected Routes**: `ProtectedRoute` wrapper
* **Persistence**: LocalStorage keeps user logged in

 Features:

* Password visibility toggle
* Signup password confirmation
* Client-side Zod validation
* Loading & error states
* Mobile-first forms

---

## State Management with Zustand

### Counter Store (`counter-store.ts`)

* `count`: number state
* `increment`, `decrement`, `reset`

### Todo Store (`todo-store.ts`)

* `todos`: array of tasks
* `addTodo`, `toggleTodo`, `removeTodo`

**UI Components**:

* `CounterCard` → Display & control counter
* `AddTodoCard` → Add new todo
* `TodoList` → List, toggle, delete todos

---

## UI & Theming

* **Custom Colors**: defined in `globals.css`
* **Radix Components**: Accordion, Dialog, Tabs, etc.
* **Responsive Layouts**: Flex & grid-based
* **Dark Mode Support** via `next-themes`

---

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint checks
```

---

## 🚀 Deployment

Deploy easily with **Vercel**:

```bash
npm run build
```

Push to GitHub and import repo into [Vercel](https://vercel.com).

---

## 📄 License

Licensed under the **MIT License**. Free to use & modify.
