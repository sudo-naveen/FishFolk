# FishFolk — Implementation Plan

## Guiding rule

Finish and verify one vertical slice at a time. Do not build advanced AI features before observation creation and search work reliably.

## Milestone 0 — Repository and setup

### Tasks
- Inspect existing files and project conventions.
- Confirm Next.js App Router and TypeScript configuration.
- Configure Tailwind and UI primitives.
- Add `.env.example` with placeholder variable names only.
- Add lint, type-check, test, and build scripts as appropriate.
- Add a basic responsive application shell.

### Acceptance criteria
- App starts locally using documented commands.
- Lint/type checks run.
- Production build succeeds.
- No secrets are committed.

## Milestone 1 — Supabase foundation

### Tasks
- Create the Supabase project.
- Define the chosen public/authenticated access model.
- Add SQL migrations for the initial schema.
- Configure server-side Supabase access.
- Enable and test RLS.
- Generate TypeScript database types if practical.

### Acceptance criteria
- Schema can be applied from migrations.
- Unauthorized reads/writes are blocked according to the chosen policy.
- Secrets remain server-side.
- No permissive write policy is present without justification.

## Milestone 2 — Create and view observations

### Tasks
- Build the create-observation form.
- Validate fields with Zod on the server.
- Add categories and firsthand/secondhand source selection.
- Store timestamps and optional approximate area.
- Build observation list and detail views.
- Implement loading, empty, success, and error states.

### Acceptance criteria
- A valid observation can be created and retrieved after refresh.
- Invalid data is rejected server-side.
- Missing event time/location is not fabricated.
- Source type is visible in the UI.
- Mobile layout is usable.

## Milestone 3 — Search

### Tasks
- Add PostgreSQL full-text search.
- Add category filters.
- Bound and consistently order results.
- Show record details and available context.
- Add no-results and error states.

### Acceptance criteria
- A known saved observation can be found by relevant words.
- Search does not use hard-coded result data.
- Inputs are validated and queries are bounded.
- Results do not expose private records.

## Milestone 4 — Voice recording and transcription

### Tasks
- Implement browser audio recording.
- Check browser support and microphone permissions.
- Select and document a real transcription provider or explicitly document the browser-only choice.
- Add a server-side integration if an external provider is used.
- Build transcript review and correction.
- Submit confirmed text through the existing observation flow.

### Acceptance criteria
- Recording works on documented target browsers.
- Transcript can be corrected before saving.
- Provider failures allow manual text entry.
- No secret key is exposed.
- Audio access and retention match the privacy policy.

This milestone must not block a working text-based MVP.

## Milestone 5 — Evidence-grounded answers (optional)

### Tasks
- Retrieve relevant observations for a question.
- Return results directly when a generated answer is unnecessary.
- If an LLM is used, supply only relevant authorized records.
- Display the source observations used.
- Add insufficient-evidence behavior.
- Test unsupported questions and conflicting reports.

### Acceptance criteria
- Every generated answer displays its supporting records.
- Unsupported claims are not presented as established facts.
- Conflicting or secondhand reports remain labelled.
- Insufficient evidence produces a clear response.
- No answer is framed as official weather, navigation, or emergency guidance.

## Milestone 6 — Polish and submission

### Tasks
- Test the complete workflow at desktop and mobile sizes.
- Add accessible labels, keyboard navigation, focus states, and contrast checks.
- Run lint, type-check, tests, and production build.
- Deploy the app.
- Verify production environment variables and database policies.
- Prepare a short demo using clearly identified demo records.
- Update README with setup instructions, features, limitations, and architecture.

### Acceptance criteria
- Deployed demo is accessible.
- Core flow works from create to search.
- No critical console or server errors remain.
- Demo data is clearly labelled.
- README setup steps work on a clean clone.

## Priority order

1. Setup and database security.
2. Create/view observations.
3. Search observations.
4. Voice recording and real transcription.
5. Evidence-grounded answers if time allows.
6. Polish, deployment, and demo.

## Out of scope until the core flow works

- Multi-language UI and automatic translation.
- Vector database or embedding pipeline.
- Complex agent orchestration.
- Predictive fishing recommendations.
- Social feeds, messaging, and gamification.
- Elaborate analytics dashboards.
