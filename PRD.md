1. Project Objective
Create a fast, responsive, single-page developer portfolio to showcase full-stack React and Node.js projects, and provide a functional contact form for potential clients or employers to reach out.

2. Core Pages & Layout
The application will be a single-page scrolling application with a sticky navigation bar.

Navigation Bar: Links to 'Home', 'Projects', and 'Contact'. Smooth scroll to respective sections.

Hero Section: * A headline introducing the developer.

A short sub-headline summarizing full-stack capabilities (MERN, UI integration).

Two Calls to Action (CTAs): "View My Work" (scrolls to Projects) and "Contact Me" (scrolls to Contact).

Projects Showcase (Grid Layout):

Cards displaying key projects. Each card must include:

Project Title (e.g., Ladli Collection E-commerce, Everything Satis Business Site)

Brief description of the problem solved.

Tech stack badges (React, Node.js, etc.).

Links to Live Demo and GitHub Repo.

Contact Section:

A form with the following fields: Name (required), Email (required, validate format), and Message (required).

Submit button with loading state.

Success/Error toast notification upon submission.

Footer: Social links (LinkedIn, GitHub) and copyright text.

3. Backend & API Requirements

POST /api/contact: * Accepts JSON payload { name, email, message }.

Validates the incoming data.

Saves the submission to a messages collection in MongoDB.

Returns a 200 OK status on success or 400/500 on validation/server errors.

4. Stitch UI/Agent Guidelines

Aesthetic: Clean, modern, developer-focused. Use a dark mode theme by default.

Components: Rely heavily on Stitch skills for generating the Navigation, Project Cards, and Form UI.

Responsiveness: Ensure all components stack correctly on mobile screens (especially the Projects grid).

5. Security & Environment Configuration

CORS: Strictly configure CORS in Express to only accept requests from the deployed frontend URL (and localhost during development). Do not allow wildcard * origins.

Rate Limiting: Apply express-rate-limit to the /api/contact route (e.g., maximum 3 requests per 15 minutes per IP) to prevent spam and abuse.

Data Sanitization: Sanitize all incoming payload data (name, email, message) to strip out any potential NoSQL injection or XSS attacks before saving the document to MongoDB.

Environment Variables: All secrets (like MONGO_URI and allowed CORS origins) must be strictly managed via .env. Generate a .env.example file so the required keys are documented.