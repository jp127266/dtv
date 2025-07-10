# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DigiCAP.tv is a Next.js 15 landing page for NextGEN broadcasting products. This React application features an interactive AI model selection interface, time-based greetings, and fully responsive design using TypeScript, Tailwind CSS, and Next.js App Router.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production version  
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting

## Production Deployment

To run in production:

```bash
npm run build
nohup npm start > dtv.log 2>&1 &
```

## Architecture

- **Next.js App Router**: Uses the new `src/app/` directory structure
- **Client Components**: HomeClient.tsx contains interactive React functionality with time-based greetings and AI model selection
- **Server Components**: Main page.tsx is server-rendered with links to external documentation
- **Styling**: Uses Tailwind CSS with custom Geist fonts and responsive design
- **Authentication**: next-auth is installed but not currently implemented

## Key Features

- **Interactive AI Model Selection**: Dropdown with popular AI models (Upthere AI, OpenAI GPT-4.1, Claude models, Gemini models)
- **Time-based Greetings**: Dynamic greeting that changes based on time of day
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **NextGEN Broadcasting Focus**: Content and placeholder text tailored for broadcasting industry

## Key Files

- `src/app/page.tsx` - Main server component with responsive layout and footer links
- `src/app/HomeClient.tsx` - Interactive client component with AI model selection and greeting logic
- `src/app/layout.tsx` - Root layout with font configuration and metadata
- `src/app/globals.css` - Global Tailwind CSS styles

## UI Components

### HomeClient Component
- **State Management**: Uses React hooks for greeting, dropdown visibility, and selected AI model
- **AI Models**: Predefined list with icons for Upthere AI, OpenAI, Claude, and Gemini models
- **Responsive Design**: Adaptive textbox width (100% mobile → 70% desktop)
- **Interactive Elements**: Click-to-select AI models with visual feedback

### Layout Structure
- **Top Positioning**: Content positioned at top 20% of viewport
- **Mobile-First**: Responsive padding, typography, and spacing
- **Fixed Footer**: Persistent access to documentation and external links

## Responsive Breakpoints

- **Mobile (default)**: Full width textbox, smaller typography, compact spacing
- **Small screens (sm)**: 90% textbox width, medium typography
- **Medium screens (md)**: 80% textbox width, larger typography
- **Large screens (lg+)**: 70% textbox width, full typography scale

## Node Version

Requires Node.js ^22.0.0 (configured with Volta at 22.14.0)