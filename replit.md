# BlueLoop Intelligence

## Overview

BlueLoop Intelligence is an AI-assisted dashboard for visualizing and simulating ocean-based carbon sequestration potential in coastal ecosystems. The application combines satellite environmental data, interactive mapping, and machine learning predictions to help researchers and policymakers understand blue carbon potential in coastal zones like kelp forests, seagrass meadows, and mangroves.

The platform enables users to explore real oceanographic data, run AI-powered simulations with adjustable environmental parameters, upload custom datasets, and generate comprehensive reports on carbon sequestration potential.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React with TypeScript as the core framework
- Vite for development server and production builds
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query for server state management and API communication

**UI Component System:**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom ocean-themed color palette
- Custom design system following glassmorphism aesthetic with scientific dashboard principles
- Responsive design with mobile-first approach

**State Management:**
- TanStack Query for server state with configured query client
- Local React state for UI interactions and form handling
- Custom hooks for reusable stateful logic

**Data Visualization:**
- Recharts library for environmental data charts (line charts, area charts, gauges)
- Interactive map component for coastal region visualization
- Custom carbon potential gauge with SVG animations

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server
- TypeScript for type safety across the stack
- Custom middleware for request logging and error handling
- Modular route registration system

**Development Environment:**
- Vite middleware integration for HMR in development
- Static file serving in production
- Separate build processes for client and server code

**Storage Layer:**
- In-memory storage implementation (MemStorage) as the current data persistence layer
- Interface-based storage design (IStorage) allowing easy swap to database implementation
- User management with basic CRUD operations

### Data Schema & Validation

**Database Schema (Drizzle ORM):**
- PostgreSQL as the target database dialect
- Schema defined in shared/schema.ts for type sharing between client and server
- User table with UUID primary keys and unique username constraints
- Zod schemas for runtime validation derived from Drizzle schemas

**Type Safety:**
- Shared types between frontend and backend via @shared path alias
- Drizzle-zod integration for schema validation
- TypeScript strict mode enabled across the project

### Design System

**Color Palette:**
- Ocean-themed colors (teal/navy/coral) with light and dark mode support
- HSL color values for programmatic manipulation
- CSS custom properties for theme variables
- Glassmorphism effects with backdrop blur

**Typography:**
- Inter font family for UI and general text
- JetBrains Mono for numerical data and scientific notation
- Responsive font scaling with mobile optimization

**Component Patterns:**
- Consistent card-based layouts with glass effects
- Hover and active state elevations
- Accessible form controls with Radix UI primitives

## External Dependencies

### Core Libraries
- **@tanstack/react-query** - Server state management and data fetching
- **drizzle-orm** - Type-safe ORM for PostgreSQL
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- **express** - Backend HTTP server framework
- **vite** - Frontend build tool and dev server

### UI Component Libraries
- **@radix-ui/** (multiple packages) - Accessible component primitives for dialogs, dropdowns, tooltips, etc.
- **recharts** - Data visualization and charting library
- **lucide-react** - Icon library
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** & **clsx** - Dynamic className composition

### Form & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Schema validation resolvers
- **zod** - Runtime schema validation
- **drizzle-zod** - Zod schema generation from Drizzle schemas

### Database & Session Management
- **connect-pg-simple** - PostgreSQL session store for Express
- **drizzle-kit** - Database migration and schema management CLI

### Development Tools
- **@replit/vite-plugin-*** - Replit-specific development plugins
- **tsx** - TypeScript execution for development
- **esbuild** - JavaScript bundler for server code

### Planned Integrations
- Mapbox or Google Maps API for interactive coastal region mapping
- External ML API endpoint for carbon sequestration predictions
- PDF generation library for report exports
- CSV parsing library for data uploads
- Authentication provider (Supabase Auth or Replit Auth)