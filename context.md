## Project Context: Ignite Portfolio Studio

This document provides a high-level overview of the `ignite-portfolio-studio-main` codebase.

### 1. Project Overview

This project is a modern web application, likely a personal portfolio or studio website. It's built using React with Vite as the build tool and TypeScript for static typing. The UI is styled with Tailwind CSS and utilizes Shadcn/ui components, which are built on Radix UI primitives. The application features client-side routing, data fetching capabilities, and potentially incorporates AI-driven features.

### 2. Technology Stack

*   **Frontend Framework:** React 18.x
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS, CSS Modules (implied by `App.css`, `index.css`)
*   **UI Components:** Shadcn/ui, Radix UI
*   **Routing:** React Router DOM v6
*   **Data Fetching/State Management:** Tanstack Query v5
*   **Forms:** React Hook Form, Zod (for validation)
*   **Charting/Visualization:** Recharts
*   **AI/ML:** Hugging Face Transformers.js (suggests client-side AI model integration)
*   **Linting:** ESLint
*   **Package Manager:** npm (implied by `package-lock.json`, though `bun.lockb` is also present, suggesting Bun might be an alternative or used for specific tasks)

### 3. Project Structure

```
ignite-portfolio-studio-main/
├── .gitignore
├── CV.md
├── README.md
├── bun.lockb
├── components.json       # Shadcn/ui configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML entry point
├── node_modules/
├── package-lock.json
├── package.json          # Project metadata, dependencies, and scripts
├── postcss.config.js     # PostCSS configuration (for Tailwind)
├── public/               # Static assets (e.g., images, fonts)
│   └── ...
├── src/                  # Main application source code
│   ├── App.css           # Global styles for App component
│   ├── App.tsx           # Root React component, defines routing
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Layout components (e.g., Navbar, Footer)
│   │   └── ui/           # Shadcn/ui generated components
│   ├── hooks/            # Custom React hooks
│   ├── index.css         # Global stylesheets
│   ├── lib/              # Utility functions and libraries (e.g., cn for classnames)
│   ├── main.tsx          # Application entry point
│   ├── pages/            # Page-level components corresponding to routes
│   │   ├── AIPlayground.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── vite-env.d.ts     # Vite environment type definitions
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.app.json     # TypeScript configuration for the application
├── tsconfig.json         # Base TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node.js environment (e.g., build scripts)
└── vite.config.ts        # Vite build tool configuration
```

### 4. Key Configuration Files

*   **`package.json`**: Defines project dependencies, scripts (dev, build, lint, preview), and metadata.
*   **`vite.config.ts`**: Configures the Vite build process, including plugins (React SWC, `lovable-tagger` for development), server options (port 8080), and path aliases (`@` for `src/`).
*   **`tailwind.config.ts`**: Configures Tailwind CSS, including themes, plugins (e.g., `tailwindcss-animate`), and content paths.
*   **`tsconfig.json` (and variants)**: Configure TypeScript compiler options.
*   **`eslint.config.js`**: Configures ESLint for code linting.
*   **`components.json`**: Configuration for Shadcn/ui, specifying how components are added and structured.

### 5. Application Entry Point & Routing

*   **Entry Point**: `src/main.tsx` initializes the React application and renders the root `App` component into the `div#root` element in `index.html`.
*   **Root Component**: `src/App.tsx` sets up global providers (`QueryClientProvider`, `TooltipProvider`, `Toaster`) and defines the application's routing structure using `react-router-dom`.
*   **Routes Defined in `App.tsx`**:
    *   `/`: `Home` page
    *   `/projects`: `Projects` page
    *   `/skills`: `Skills` page
    *   `/experience`: `Experience` page
    *   `/blog`: `Blog` page
    *   `/playground`: `AIPlayground` page
    *   `/contact`: `Contact` page
    *   `*`: `NotFound` page (for any unmatched paths)
    All main pages are wrapped within a common `Layout` component (`src/components/layout/Layout.tsx`).

### 6. Build and Development Scripts (from `package.json`)

*   `npm run dev`: Starts the Vite development server (typically on `http://localhost:8080`).
*   `npm run build`: Builds the application for production using Vite.
*   `npm run build:dev`: Builds the application in development mode using Vite.
*   `npm run lint`: Runs ESLint to check for code quality and style issues.
*   `npm run preview`: Serves the production build locally to preview it.

### 7. Notable Features & Libraries

*   **Shadcn/ui & Radix UI**: Provides a set of accessible and customizable UI components.
*   **Tanstack Query**: Manages server state, caching, and background updates, simplifying data fetching.
*   **React Hook Form & Zod**: For robust and type-safe form handling and validation.
*   **Hugging Face Transformers.js**: Indicates the potential for integrating client-side AI models for tasks like NLP, image analysis, etc., within the `AIPlayground` or other sections.
*   **Recharts**: For creating interactive charts and visualizations.
*   **`lovable-tagger`**: A development-only plugin, possibly for component analytics or visual debugging during development.

This document should serve as a good starting point for understanding the codebase. For more detailed information, refer to the specific files and directories mentioned.
