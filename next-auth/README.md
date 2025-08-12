# AuthApp - Modern Authentication System

A beautiful Next.js application with modern authentication and component architecture, built with TypeScript, Tailwind CSS, and Radix UI components.

## 🚀 Features

- **Modern Authentication System** - Complete login/signup functionality with separate form components
- **Beautiful UI Components** - Comprehensive Radix UI component library (50+ components)
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **TypeScript** - Full type safety throughout the application
- **Modern Stack** - Next.js 14 (App Router), React 18, Tailwind CSS 3
- **Advanced Form Handling** - React Hook Form with Zod validation
- **Protected Routes** - Route protection with authentication context
- **Local Storage Persistence** - User session persistence across browser sessions
- **Enhanced UI Library** - Charts, calendars, data tables, and more interactive components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **UI Components**: Radix UI (50+ components)
- **Icons**: Lucide React
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Animations**: CSS transitions and Tailwind animations
- **Theming**: Next-themes for dark/light mode support

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd next-auth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
next-auth/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication page (/auth)
│   │   └── page.tsx       # Login/Signup form page
│   ├── globals.css        # Global styles with custom theme
│   ├── layout.tsx         # Root layout with AuthProvider
│   └── page.tsx           # Home page with conditional rendering
├── components/            # Reusable components
│   ├── forms/            # Form components
│   │   ├── AuthForm.tsx  # Form wrapper component
│   │   ├── SignInForm.tsx # Login form component
│   │   └── SignUpForm.tsx # Registration form component
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx # Main navigation
│   │   └── ProtectedRoute.tsx # Route protection wrapper
│   ├── sections/         # Page sections
│   │   └── HeroSection.tsx # Landing page hero
│   ├── typography/       # Text components
│   │   ├── Heading.tsx   # Heading components
│   │   └── Text.tsx      # Text components
│   ├── providers/        # Context providers
│   │   └── theme-provider.tsx # Theme provider
│   └── ui/               # UI components (Radix-based)
│       ├── accordion.tsx # Accordion component
│       ├── alert.tsx     # Alert component
│       ├── avatar.tsx    # Avatar component
│       ├── badge.tsx     # Badge component
│       ├── button.tsx    # Button component
│       ├── calendar.tsx  # Calendar component
│       ├── card.tsx      # Card component
│       ├── carousel.tsx  # Carousel component
│       ├── chart.tsx     # Chart component
│       ├── dialog.tsx    # Dialog component
│       ├── dropdown-menu.tsx # Dropdown menu
│       ├── form.tsx      # Form components
│       ├── input.tsx     # Input component
│       ├── label.tsx     # Label component
│       ├── navigation-menu.tsx # Navigation menu
│       ├── table.tsx     # Data table component
│       ├── tabs.tsx      # Tabs component
│       ├── toast.tsx     # Toast notifications
│       └── ... (40+ more components)
├── lib/                  # Utility functions
│   ├── auth-context.tsx  # Authentication context provider
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
│   └── use-toast.ts      # Toast hook
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🎨 UI Components

The project includes a comprehensive set of UI components built with Radix UI:

### Core Components
- **Forms**: Input, Label, Button with password visibility toggle
- **Layout**: Card, CardHeader, CardContent, CardDescription
- **Typography**: Heading, Text components with variants
- **Navigation**: Navigation component with authentication state

### Advanced Components
- **Data Display**: Table, Badge, Avatar, Progress
- **Interactive**: Accordion, Collapsible, Tabs, Carousel
- **Feedback**: Toast, Alert, Dialog, Tooltip
- **Input**: Select, Checkbox, Radio Group, Switch, Slider
- **Navigation**: Breadcrumb, Pagination, Menu Bar
- **Overlay**: Popover, Hover Card, Context Menu
- **Data Visualization**: Charts, Calendar
- **Layout**: Sheet, Drawer, Resizable Panels

## 🔐 Authentication System

The authentication system includes:

- **Separate Form Components** - Dedicated SignIn and SignUp forms with individual state management
- **AuthForm Wrapper** - Component that switches between login and signup modes
- **AuthContext** - Global authentication state management with localStorage persistence
- **ProtectedRoute** - Route protection wrapper for authenticated content
- **Navigation** - Dynamic navigation based on authentication state
- **Local Storage** - User session persistence across browser sessions

### Key Features:
- **Dedicated Forms** - Separate components for login and signup with specific validation
- **Password Visibility** - Show/hide password functionality for both forms
- **Loading States** - Visual feedback during authentication
- **Form Validation** - Client-side validation with required fields
- **Password Confirmation** - Signup form includes password confirmation
- **Responsive Design** - Mobile-friendly authentication forms
- **Smooth Transitions** - CSS transitions for form switching

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors and Themes

The project uses a custom purple and pink color scheme defined in `globals.css`:

```css
:root {
  --background: 260 15% 8%;
  --foreground: 300 20% 95%;
  --primary: 315 100% 70%;
  --secondary: 270 30% 20%;
  --muted: 270 25% 15%;
  /* ... more colors */
}
```

### Visual Features:
- **Gradient Backgrounds** - Beautiful gradient overlays
- **Grid Patterns** - Subtle background patterns
- **Animated Decorations** - Floating background elements
- **Smooth Transitions** - CSS transitions for all interactions
- **Custom Scrollbars** - Styled webkit scrollbars

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- **Responsive Navigation** - Adaptive navigation based on screen size
- **Mobile-Friendly Forms** - Touch-optimized form interactions
- **Flexible Layouts** - Responsive grid and flexbox layouts
- **Optimized Typography** - Scalable text sizes across devices

## 🔧 Development

### Adding New Components

1. Create your component in the appropriate directory under `components/`
2. Use the existing UI components as building blocks
3. Follow the established patterns for styling and structure
4. Add TypeScript types for props

### Form Development

The project uses React Hook Form with Zod validation:
- **SignInForm** - Handles user login with email/password
- **SignUpForm** - Handles user registration with name, email, password, and confirmation
- **Validation** - Client-side validation with proper error handling
- **State Management** - Local state for form data and UI states

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the established color scheme
- Maintain consistent spacing and typography
- Ensure accessibility with proper ARIA labels
- Add smooth transitions for interactive elements

## 🚀 Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

## 📄 License

This project is licensed under the MIT License.