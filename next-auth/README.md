# AuthApp - Modern Authentication System

A beautiful Next.js application with modern authentication and component architecture, built with TypeScript, Tailwind CSS, and Radix UI components.

## 🚀 Features

- **Modern Authentication System** - Complete login/signup functionality with client-side state management
- **Beautiful UI Components** - Built with Radix UI and Tailwind CSS
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **TypeScript** - Full type safety throughout the application
- **Modern Stack** - Next.js 14 (App Router), React 18, Tailwind CSS 3
- **Component Library** - Comprehensive UI component system
- **Protected Routes** - Route protection with authentication context
- **Local Storage Persistence** - User session persistence across browser sessions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **State Management**: React Context API
- **Form Handling**: Controlled components with React state
- **Animations**: CSS transitions and Tailwind animations

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
│   │   └── AuthForm.tsx  # Main authentication form
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx # Main navigation
│   │   └── ProtectedRoute.tsx # Route protection wrapper
│   ├── sections/         # Page sections
│   │   └── HeroSection.tsx # Landing page hero
│   ├── typography/       # Text components
│   │   ├── Heading.tsx   # Heading components
│   │   └── Text.tsx      # Text components
│   └── ui/               # UI components (Radix-based)
│       ├── button.tsx    # Button component
│       ├── card.tsx      # Card component
│       ├── input.tsx     # Input component
│       └── label.tsx     # Label component
├── lib/                  # Utility functions
│   ├── auth-context.tsx  # Authentication context provider
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🎨 UI Components

The project includes a comprehensive set of UI components built with Radix UI:

- **Forms**: Input, Label, Button with password visibility toggle
- **Layout**: Card, CardHeader, CardContent, CardDescription
- **Typography**: Heading, Text components with variants
- **Navigation**: Navigation component with authentication state
- **Feedback**: Loading states with spinners
- **Interactive**: Button with loading states and animations

## 🔐 Authentication System

The authentication system includes:

- **AuthForm Component** - Unified login/signup form with mode switching
- **AuthContext** - Global authentication state management with localStorage persistence
- **ProtectedRoute** - Route protection wrapper for authenticated content
- **Navigation** - Dynamic navigation based on authentication state
- **Local Storage** - User session persistence across browser sessions

### Key Features:
- **Mode Switching** - Toggle between login and signup modes
- **Password Visibility** - Show/hide password functionality
- **Loading States** - Visual feedback during authentication
- **Form Validation** - Client-side validation with required fields
- **Responsive Design** - Mobile-friendly authentication forms

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

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Next.js](https://nextjs.org/) for the React framework
- [Lucide](https://lucide.dev/) for beautiful icons

---

Built with ❤️ using modern web technologies
