# Portfolio Project TODOs

## Frontend (React + Vite + Tailwind + Stitch)
- [x] Initialize global styles and Tailwind configuration.
- [x] Create Navigation Bar component with smooth scrolling to sections.
- [x] Create Hero Section with headline, sub-headline, and CTAs.
- [x] Create Projects Grid showcase component.
- [x] Create individual Project Card components (Title, Description, Tech Badges, Links).
- [x] Create Contact Section with form (Name, Email, Message).
- [x] Implement form validation on the frontend.
- [x] Integrate with backend API (`POST /api/contact`) including loading states and toast notifications.
- [x] Create Footer component with social links.
- [x] Ensure fully responsive layout across mobile and desktop.
- [x] Implement Dark Mode aesthetic standard.

## Backend (Node.js + Express + MongoDB)
- [x] Initialize backend structure and basic server setup with security middlewares (`cors`, `helmet`, `express-rate-limit`, `express-mongo-sanitize`).
- [x] Connect to MongoDB using `mongoose`.
- [x] Define Mongoose Schema and Model for Contact Messages (`name`, `email`, `message`).
- [x] Implement `POST /api/contact` route.
- [x] Add backend validation for incoming contact form data.
- [x] Handle server errors and response formatting.
- [x] Finalize environment variables for Production (`MONGO_URI`, `CORS_ORIGIN`).

## Deployment
- [ ] Deploy Frontend to Vercel.
- [ ] Deploy Backend to Render or Railway.
- [ ] Configure environment variables securely on host platforms.
