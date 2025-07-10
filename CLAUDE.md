# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DigiCAP.tv is a simple Next.js 15 landing page for NextGEN broadcasting products. This is a minimal React application using TypeScript, Tailwind CSS, and Next.js App Router.

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
- **Client Components**: HomeClient.tsx contains client-side React functionality with time-based greetings
- **Server Components**: Main page.tsx is server-rendered with links to external documentation
- **Styling**: Uses Tailwind CSS with custom Geist fonts
- **Authentication**: next-auth is installed but not currently implemented

## Key Files

- `src/app/page.tsx` - Main server component with static links
- `src/app/HomeClient.tsx` - Client component with interactive greeting and search UI
- `src/app/layout.tsx` - Root layout with font configuration
- `src/app/globals.css` - Global Tailwind CSS styles

## Node Version

Requires Node.js ^22.0.0 (configured with Volta at 22.14.0)