# FishFolk — Product Requirements Document

**Status:** MVP draft 
**Initial language:** English 
**Product:** FishFolk, a voice-first community knowledge platform for fishing communities

## 1. Summary

FishFolk helps fishing communities preserve, organize, and retrieve practical knowledge from local observations. Contributors can submit observations as text and, where transcription is configured, voice. Other users can search saved observations and inspect the records behind results.

FishFolk is a community knowledge archive. It is not an official marine weather service, navigation system, emergency alert service, or source of guaranteed fishing predictions.

## 2. Problem

Useful local knowledge is often shared informally and can be difficult to preserve, search, or pass between people. FishFolk provides a simple way to record observations with context and retrieve them later.

This MVP should demonstrate a complete, trustworthy workflow rather than a broad set of unfinished features.

## 3. Goals

- Make it easy to create and review an observation.
- Store observations with useful metadata.
- Make saved observations searchable.
- Show the source records supporting search results and answers.
- Establish a secure, maintainable foundation for future voice and multilingual features.
- Deliver a responsive demo suitable for a hackathon presentation.

## 4. Non-goals for the MVP

- Predicting where fish will be found.
- Issuing marine safety or weather alerts.
- Replacing official fisheries, weather, or navigation services.
- Public messaging, social networking, or gamification.
- Complex AI agents, vector databases, or microservices.
- Supporting multiple UI languages in the first release.
- Treating unverified community reports as established facts.

## 5. Target users

### Contributor
A fisher or community member who wants to preserve an observation about fishing conditions, equipment, marine life, or local experience.

### Knowledge seeker
A community member who wants to find relevant observations and understand when, where, and by whom they were reported, subject to privacy settings.

### Maintainer
A trusted project or community administrator who manages categories, handles reports of inappropriate content, and supports the platform's safe operation.

## 6. Core user journeys

### Journey A: Create an observation
1. Open the create-observation form.
2. Enter observation text.
3. Select a category.
4. Optionally provide when the event occurred and an approximate area.
5. Mark whether the report is firsthand or secondhand.
6. Review and submit.
7. See a clear success state and the saved observation.

### Journey B: Find knowledge
1. Open the knowledge search page.
2. Enter a search query and optionally choose a category.
3. View matching observations.
4. Inspect each observation's text, report type, event date if known, submission date, and available location precision.
5. See a useful empty state when no matches exist.

### Journey C: Voice contribution (only when implemented)
1. Grant microphone permission.
2. Record a short observation.
3. Stop and review the recording/transcript.
4. Correct the transcript.
5. Confirm the content before saving.
6. See clear errors if recording or transcription fails.

### Journey D: Evidence-grounded answer (optional MVP enhancement)
1. Ask a question about community observations.
2. Retrieve relevant saved records.
3. Generate an answer only from those records.
4. Show the source observations used.
5. If evidence is insufficient, say so instead of guessing.

## 7. Functional requirements

### Observation management
- Users can create and view observations.
- Required fields are validated on the server.
- Unknown event dates and locations remain unknown rather than being invented.
- The original submitted text is preserved.
- Reports are clearly labelled as firsthand or secondhand.
- Categories are configurable without restructuring the entire application.

### Search
- Search is performed against stored records, not hard-coded sample responses.
- Results are bounded and sorted consistently.
- Filters are validated on the server.
- The interface shows loading, error, empty, and success states.
- Search results disclose the available context for each report.

### Voice
- Audio recording is optional and must not block text submission.
- Microphone permission is requested only after a user action.
- The user can review and correct any transcript before submission.
- Unsupported browser capabilities and provider failures are explained clearly.
- The UI must not claim that transcription works until a real integration is configured and tested.

### Trust and privacy
- Firsthand and secondhand reports are distinguished.
- The app does not imply that a report has been independently verified unless a real verification process has occurred.
- Precise location is not required by default.
- Private information and restricted observations must be protected by server-side authorization and database policies.

## 8. UX requirements

- Mobile-first, responsive layout.
- Plain language and clear action labels.
- Accessible keyboard navigation, focus states, and form labels.
- Adequate contrast and readable text.
- No decorative dashboard metrics that do not represent real data.
- No fake live activity, fabricated reports, or placeholder AI answers presented as real.

## 9. Success criteria

The MVP is successful when a reviewer can:
- Create an observation and receive validation feedback.
- See the saved record after submission or refresh.
- Search for a known observation and retrieve it.
- Distinguish firsthand from secondhand reports.
- Understand when information is missing or unverified.
- Use the core flow on a mobile-sized viewport.
- Complete the workflow without exposing secret keys or bypassing authorization.

For voice, success additionally requires a tested record → transcribe → review/correct → save flow on the target browser(s).

## 10. MVP priority

**P0:** project setup, observation schema, secure database access, create/view/search observations, responsive UI, validation and errors.  
**P1:** browser audio recording, real transcription provider, transcript review and correction.  
**P2:** evidence-grounded natural-language answers, speech output, advanced filters.  
**Future:** additional languages, semantic search, richer analytics, moderation workflows.

## 11. Risks and mitigations

- **Unreliable speech recognition:** keep text entry available and require transcript review.
- **Unsupported language or accent:** validate provider support with real test recordings before promising coverage.
- **Misleading AI answers:** ground answers in retrieved records and show citations to those records.
- **Sensitive locations:** use approximate areas by default and make precise location optional with explicit consent.
- **Scope creep:** complete P0 before adding optional AI features.
