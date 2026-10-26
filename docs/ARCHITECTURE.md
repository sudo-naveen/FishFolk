# FishFolk — Architecture

## 1. Architecture decision

Use a single Next.js application with Supabase as the managed database and optional authentication/storage provider. Do not create a separate Express or FastAPI service for the MVP.

## 2. Stack

- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS
- shadcn/ui where useful
- Supabase PostgreSQL
- Supabase Auth if user accounts are included
- Supabase Storage only if audio recordings need to be retained
- Zod for runtime validation
- Vitest and React Testing Library for unit/component tests
- Playwright for critical end-to-end tests
- Vercel for deployment

Do not add a dependency unless it solves an identified requirement.

## 3. High-level data flow

### Create an observation
Browser form → Next.js Server Action or Route Handler → Zod validation → authorization → Supabase insert → success/error response → updated UI.

### Search observations
Search form → Next.js server-side query → validated filters and bounded database search → observation results → UI renders source metadata.

### Voice contribution
User action → browser MediaRecorder → audio/transcription integration → transcript review and correction → normal observation submission path.

Audio capture and speech recognition are separate capabilities. MediaRecorder records audio; it does not transcribe it. Browser SpeechRecognition is not consistently available across browsers or languages. A real transcription provider must be chosen and tested before claiming voice transcription works.

### Evidence-grounded answers (optional)
Question → retrieve relevant records → construct a bounded prompt using those records → model response → validate/display answer with the supporting record IDs. If retrieval finds insufficient evidence, return an insufficient-evidence response.

## 4. Server/client boundaries

- Use Server Components by default.
- Use Client Components only for interactive state and browser-only APIs.
- Keep Supabase service-role credentials and external API secrets on the server.
- Never import secret-bearing server modules into Client Components.
- Treat every browser-supplied ID, filter, text value, and file as untrusted.
- Validate inputs on the server, even when client validation exists.
- Use database RLS as a security boundary, not as a substitute for thoughtful server authorization.

## 5. Suggested project structure

```text
app/
  (main)/
    page.tsx
    observations/
      page.tsx
      new/
        page.tsx
      [id]/
        page.tsx
    search/
      page.tsx
  api/
    observations/
      route.ts
    search/
      route.ts
  layout.tsx
  globals.css
components/
  observations/
  search/
  voice/
  ui/
lib/
  supabase/
    server.ts
    client.ts
  validation/
  domain/
  services/
  utils/
types/
  database.types.ts
supabase/
  migrations/
docs/
```

Adjust this structure to fit the existing repository; do not move files just to match this example.

## 6. Data access conventions

- Centralize Supabase client creation.
- Use a server client for server-side operations and a browser client only when browser access is actually needed.
- Generate and use database TypeScript types when practical.
- Prefer explicit selected columns over unrestricted selects.
- Bound result counts and paginate if the dataset grows.
- Handle errors explicitly; never silently return fabricated data.
- Use migrations for schema changes.
- Keep local demo seed data separate from production records and label it clearly.

## 7. Search strategy

Start with PostgreSQL full-text search and filters for category, event date, and approximate area when those fields exist. Use parameterized query mechanisms and validated inputs.

Do not introduce embeddings or a vector database until evaluation shows ordinary search is inadequate.

## 8. AI integration rules

AI answers are optional and should follow retrieval, not replace it.

- Retrieve records before generating an answer.
- Supply only relevant, authorized records to the model.
- Require the answer to distinguish reported observations from verified facts.
- Display the supporting observations.
- Do not allow model-generated content to create or modify records without user confirmation.
- Return an insufficient-evidence response when the retrieved records do not support an answer.
- Never present community observations as official safety or weather guidance.

## 9. Security and deployment

- Configure environment variables in the local environment and deployment provider.
- Commit `.env.example` with placeholder names only, never secrets.
- Enable and test RLS for exposed Supabase tables.
- Use least-privilege policies and test unauthorized access.
- Validate uploaded audio MIME type, size, and ownership.
- Use private storage buckets for private audio.
- Configure production environment variables separately from local development.
- Verify production build and critical flows before submission.

## 10. Architecture decisions

- **No separate backend:** Next.js server-side functionality is sufficient for this MVP.
- **PostgreSQL first:** relational metadata and full-text search are enough to start.
- **Text-first fallback:** voice features must not prevent core observation entry.
- **Multilingual later:** store a language code from the start, but launch the UI in English.
- **Evidence before generation:** answers must be traceable to saved observations.
