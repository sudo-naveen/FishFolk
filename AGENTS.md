# FishFolk — Agent Instructions

## 1. Project Overview

FishFolk is a voice-first community knowledge platform designed to help fishing communities preserve, organize, search, and share knowledge based on their lived experiences and local observations.

The goal is to make community knowledge easier to contribute and retrieve without requiring users to navigate complicated forms or technical interfaces.

For the initial MVP, support **English only**. The architecture should allow additional languages to be introduced later without requiring a major redesign.

## 2. Core Product Workflow

The primary user journey is:

1. A contributor creates a fishing-related observation.
2. The contributor can enter the observation as text or record audio.
3. The contributor reviews and confirms the observation before submitting it.
4. FishFolk stores the observation with relevant metadata.
5. Another user searches for observations or asks a question.
6. FishFolk retrieves relevant saved observations and presents an answer grounded in those records.
7. The interface clearly identifies the observations supporting the answer.

The application must distinguish between information reported by a firsthand observer and information repeated from another source.

FishFolk is a community knowledge platform, not an official marine weather service, navigation system, or emergency alert service.

## 3. Technology Stack

Use the following stack unless a documented technical limitation requires a change.

- Framework: Next.js with the App Router
- Language: TypeScript with strict type checking
- Styling: Tailwind CSS
- UI components: shadcn/ui when useful
- Database: Supabase PostgreSQL
- Authentication: Supabase Auth if required by the implemented user flows
- Database security: Supabase Row Level Security (RLS)
- Voice recording: Browser MediaRecorder API
- Audio storage: Supabase Storage if recordings need to be retained
- Validation: Zod
- Testing: Vitest and React Testing Library for unit and component tests; Playwright for critical end-to-end flows
- Deployment: Vercel with Supabase

Use Next.js Route Handlers and Server Actions for server-side operations when appropriate. Do not create a separate Express, FastAPI, or other backend service.

Do not add a technology or dependency without a clear requirement.

## 4. Architecture Rules

- Use the Next.js App Router.
- Keep database access and secret-bearing operations on the server.
- Use Server Components by default.
- Use Client Components only when browser APIs, local state, or direct user interaction requires them.
- Separate reusable UI components, domain logic, data access, validation, and external service integrations.
- Define shared TypeScript types for core domain entities.
- Validate untrusted input on the server, even if the frontend already validates it.
- Use Supabase's generated database types when practical.
- Keep database queries bounded and handle loading, empty, and error states.
- Never expose Supabase service-role keys or other server secrets to the browser.
- Use migrations for database schema changes.
- Enforce access controls in the database, not only in the UI.

Do not introduce microservices, a vector database, an event queue, or an agent framework without a demonstrated need.

## 5. Initial Features

### Observation Management

Users should be able to:

- Create an observation.
- Enter or edit its text before submission.
- Select a category.
- Record when the observation occurred, when known.
- Provide an approximate area when relevant.
- Identify whether the report is firsthand or secondhand.
- View saved observations.
- Search and filter observations.

Suggested initial categories include:

- Fishing conditions
- Gear and equipment
- Marine life observations
- Local knowledge
- Other

Categories must remain easy to extend.

### Voice Input

- Provide an accessible audio-recording interface.
- Request microphone permission only when needed.
- Display recording status and useful error messages.
- Allow the contributor to review and correct the transcript before saving.
- Handle unsupported browsers and denied permissions gracefully.
- Do not assume browser speech recognition supports every language or browser.
- Do not claim that speech transcription is available until a working transcription implementation has been integrated and tested.

### Knowledge Search

- Search saved observations using PostgreSQL full-text search initially.
- Support filtering by category and relevant metadata.
- Display matching observations and their timestamps.
- Make the evidence behind a generated answer visible.
- Return an honest no-results or insufficient-evidence response when appropriate.
- Never fabricate observations, locations, reports, or community consensus.

An LLM integration is optional and must be introduced only when its value, API requirements, and evaluation criteria are clear.

## 6. Data Integrity and Trust

- Preserve the original submitted text.
- Store corrected text separately when correction history is needed.
- Preserve the original language field even though the initial interface supports English only.
- Distinguish observation time from submission time.
- Represent unknown information as unknown instead of inventing values.
- Never treat secondhand reports as verified firsthand observations.
- Do not label a report verified without a defined verification process.
- Do not invent confidence scores or imply scientific certainty.
- Do not present anecdotes as official safety warnings or reliable predictions.

## 7. Privacy and Security

- Collect only the data required for the product's core workflow.
- Use approximate locations by default; precise coordinates require a clear purpose and explicit consent.
- Apply least-privilege access controls.
- Configure and test Supabase RLS policies.
- Protect private contributor information and restricted observations.
- Validate file types, file sizes, and upload permissions for audio.
- Never commit `.env` files, API keys, credentials, or private user data.
- Provide useful errors without exposing secrets or internal stack traces.
- Do not store audio recordings indefinitely without a defined retention policy.

## 8. UI and Accessibility

The interface should be:

- Mobile-first and responsive.
- Clear enough for users with limited technical experience.
- Accessible using a keyboard.
- Compatible with screen readers.
- Designed with readable typography and adequate contrast.
- Explicit about recording, saving, searching, and error states.

Prefer clear labels, familiar interactions, and meaningful feedback over decorative complexity.

Do not build a dashboard full of artificial metrics or placeholder charts.

## 9. Code Quality

- Use TypeScript strict mode.
- Avoid `any` unless there is a documented reason.
- Prefer small, reusable components with clear responsibilities.
- Keep business logic out of large UI components.
- Use Zod for runtime validation at appropriate trust boundaries.
- Handle asynchronous errors explicitly.
- Avoid duplicated logic and unnecessary abstractions.
- Do not leave fake API integrations or pretend that mock data is production data.
- Do not silently swallow errors.
- Remove unused imports, dead code, and temporary debugging statements.

Follow the repository's existing conventions unless they conflict with these instructions.

## 10. Agent Workflow

Before making changes:

1. Inspect the repository structure and existing implementation.
2. Read `agent.md` and all relevant project documentation.
3. Identify the actual task, affected files, dependencies, and acceptance criteria.
4. Check whether existing functionality can be reused.
5. Propose a small implementation plan for changes spanning multiple files.

While implementing:

1. Make focused, incremental changes.
2. Follow existing architectural boundaries.
3. Avoid unrelated refactors.
4. Never overwrite user work without understanding the impact.
5. Do not install dependencies or modify configuration without justification.
6. Do not invent environment variables, API capabilities, or undocumented endpoints.

After implementing:

1. Run the relevant tests.
2. Run linting and TypeScript checks when available.
3. Run a production build when feasible.
4. Report any failed checks or untested behavior honestly.
5. Update relevant documentation when behavior or architecture changes.

Do not claim a feature works solely because the code compiles.

## 11. Scope Control

The initial MVP prioritizes this complete workflow:

**Create observation → review and save → search observations → view evidence-grounded results.**

Voice recording and transcription should be integrated into this workflow without compromising the reliability of text-based observation entry.

Do not expand the MVP with social feeds, messaging, complex gamification, predictive fishing recommendations, or advanced AI agents unless explicitly requested.

Additional languages, advanced semantic retrieval, and sophisticated analytics are future extensions.

## 12. Definition of Done

A task is complete only when:

- The requested behavior is implemented.
- Existing relevant functionality remains intact.
- Input validation and error states are handled.
- Data access follows the intended security rules.
- Relevant tests and checks pass, or their limitations are documented.
- No secrets or unintended user data are committed.
- Documentation is updated when necessary.
- The implementation is described accurately, including known limitations.

## 13. Guiding Principle

Build a trustworthy, usable community knowledge product before adding complexity.

Prefer working functionality, transparent evidence, user consent, and maintainable code over impressive-looking but unreliable AI features.
