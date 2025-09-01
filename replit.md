# Replit Configuration

## Overview

This is a full-stack web application built as a personal portfolio/resume website for an AI Engineer. The application showcases professional experience, projects, skills, and achievements through a modern, responsive web interface. It's built using React with TypeScript for the frontend, Express.js for the backend API, and includes a database schema using Drizzle ORM with PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API structure with a contact form endpoint
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom middleware for API request logging and performance monitoring
- **Storage**: In-memory storage implementation with interface for future database integration

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Schema**: User table with basic authentication fields (username, password)
- **Migrations**: Drizzle Kit for database migrations and schema management

### UI Component System
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Theming**: CSS custom properties with light mode configuration
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Radix UI ensures WCAG compliance and keyboard navigation

### Development & Build Architecture
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking across client, server, and shared code
- **Code Organization**: Monorepo structure with shared types and utilities
- **Hot Reload**: Vite HMR for frontend and tsx for backend development

### Key Features
- **Portfolio Sections**: Hero, About, Experience, Projects, Skills, Volunteer work, Achievements, Contact
- **Interactive Elements**: Skill progress bars, project carousels, contact forms
- **Performance**: Intersection Observer for lazy loading and animations
- **Mobile Experience**: Responsive navigation with mobile menu

## External Dependencies

### Core Runtime Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: Web application framework for Node.js
- **react & react-dom**: UI library and DOM renderer
- **@tanstack/react-query**: Server state management

### UI & Styling
- **@radix-ui/***: Accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library for React
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Conditional CSS classes

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **drizzle-kit**: Database migration tool
- **esbuild**: JavaScript bundler for production builds

### Form & Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Integration with validation libraries
- **zod**: TypeScript-first schema validation

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: Unique string ID generator
- **wouter**: Minimalist routing for React

### Replit-Specific
- **@replit/vite-plugin-***: Replit-specific Vite plugins for development experience
- **@replit/vite-plugin-shadcn-theme-json**: Theme configuration for shadcn/ui components