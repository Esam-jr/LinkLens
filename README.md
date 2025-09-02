# LinkLens — Video Chat & Language Exchange Platform

LinkLens is a modern web application that helps language learners connect via HD video calls and real‑time chat. It features onboarding, friends management, notifications, and a polished marketing landing page with theme customization.


## Features
- Landing page with professional design, responsive layout, and theme selector
- Authentication: signup, login, logout, persistent sessions (cookies)
- Onboarding flow (profile setup and preferences)
- Friends:
  - View existing friends
  - Discover recommended learners
  - Send/accept friend requests
- Chat & Calls:
  - Real-time chat token generation
  - Dedicated chat/call routes
- Notifications page for friend requests and activity
- Mobile-friendly layout including a slide-in sidebar on small screens


## Tech Stack
- Frontend: React, Vite, TypeScript, React Router, TanStack Query, DaisyUI/Tailwind, Lucide Icons, react-hot-toast, Zustand
- Backend: Node.js, Express, Mongoose (MongoDB), JWT, cookie-parser, CORS, dotenv
- Realtime/Chat: Stream Chat SDK (token generation on the backend)


## Monorepo Structure
- frontend/ — React app (Vite)
- backend/  — Express API server


## Quick Start

### Prerequisites
- Node.js (LTS recommended)
- npm or yarn
- MongoDB connection string

### 1) Backend Setup
1. Create backend environment file: `backend/.env`
   Example values:
   - PORT=5000
   - MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
   - JWT_SECRET=replace_with_a_strong_secret
   - STREAM_API_KEY=your_stream_api_key
   - STREAM_API_SECRET=your_stream_api_secret

2. Install and run:
   - cd backend
   - npm install
   - npm run dev

   The API will run by default on http://localhost:5000 with a base path `/api` (as referenced by the frontend).

### 2) Frontend Setup
1. Create frontend environment file: `frontend/.env`
   - VITE_API_URL=http://localhost:5000/api
   - VITE_STREAM_API_KEY=your_stream_api_key

2. Install and run:
   - cd frontend
   - npm install
   - npm run dev

   The app will run on http://localhost:5173


## Development URLs
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api


## Key Routes (Frontend)
- / — Landing page (public)
- /home — Main app home (authenticated + onboarded)
- /login — Login (public)
- /signup — Signup (public)
- /onboarding — Complete profile (authenticated)
- /friends — Friends list (authenticated + onboarded)
- /notifications — Friend requests and updates
- /chat/:id — Chat view
- /call/:id — Call view


## API Overview (Selected Endpoints)
- Auth
  - POST /api/auth/signup
  - POST /api/auth/login
  - POST /api/auth/logout
  - GET  /api/auth/me
  - POST /api/auth/onboarding

- Users & Friends
  - GET  /api/users          (recommended users)
  - GET  /api/users/friends  (current friends)
  - GET  /api/users/outgoing-friend-requests
  - GET  /api/users/friend-request
  - POST /api/users/friend-request/:userId
  - PUT  /api/users/friend-request/:userId/accept

- Chat
  - GET  /api/chat/token     (Stream chat token)


## Project Scripts (Typical)
- Backend
  - npm run dev — start server with auto-reload (nodemon)
- Frontend
  - npm run dev — start Vite dev server

Your actual scripts are defined in the respective package.json files in frontend and backend.


## Implementation Notes
- Axios base URL is configured via `VITE_API_URL`; ensure it points to your backend (e.g., http://localhost:5000/api)
- Cookies are used for auth; CORS needs `credentials: true` on both client (axios withCredentials) and server (CORS configured with origin + credentials)
- Theme preferences are persisted in localStorage (Zustand store)
- The landing page includes a theme selector in the header (desktop and mobile)
- The sidebar is mobile-friendly and implemented as a slide-in drawer


## Troubleshooting
- 404 on login (or other API calls)
  - Cause: Frontend calling http://localhost:5173/... (frontend origin) instead of backend
  - Fix: Ensure `frontend/.env` contains `VITE_API_URL=http://localhost:5000/api` and restart the dev server

- Cookies not set / Unauthorized
  - Ensure backend CORS is configured with your frontend origin and `credentials: true`
  - Axios instance must use `withCredentials: true`

- Landing page not updating theme
  - Confirm localStorage is available (not blocked) and that the selected theme appears in `data-theme` attribute

- Sidebar seems to refresh on Home
  - Use `/home` route directly instead of `/` to avoid redirect flows


## Folder Highlights
- frontend/src/pages/LandingPage.tsx — Marketing page with hero, features, how-it-works, testimonials, CTA
- frontend/src/components/Sidebar.tsx — Desktop sidebar + mobile drawer integration
- frontend/src/components/Navbar.tsx — Global top nav with theme selector and mobile menu
- frontend/src/pages/FriendsPage.tsx — Friends list (uses existing FriendCard and API)
- frontend/src/lib/api.ts — Client API wrappers
- backend/src/server.js — Express server entry point (mounts routes under /api)
- backend/src/routes/*.js — Feature routes
- backend/src/controller/*.js — Route controllers


## Security
- Never commit real secrets. Use environment variables for JWT, Stream API credentials, and database URIs
- Use strong JWT secrets and HTTPS in production


## Contributing
- Fork the repo and create a feature branch
- Commit changes with clear messages
- Open a pull request with a summary of changes


## License
MIT License.
