# FishFolk

<p align="center">
  <strong>Community knowledge, carried by every voice.</strong>
</p>

<p align="center">
  A voice-first knowledge platform built to preserve local wisdom, connect communities, and make shared experiences accessible.
</p>

---

## Overview

FishFolk is a community-centered knowledge platform designed to help fishing communities document, discover, and share the knowledge rooted in their everyday experiences.

Local knowledge is valuable. Observations about changing conditions, seasonal patterns, fishing practices, and life at sea are often passed between people through conversations and personal experience. Preserving this knowledge in a form that others can access and learn from remains a challenge.

FishFolk brings these experiences into a shared digital space, combining voice-first interaction with structured knowledge storage and discovery.

The platform is being developed with an emphasis on accessibility, practical usability, and the people whose experiences give community knowledge its value.

## Core Capabilities

- **Voice-first knowledge capture**  
  Make documenting observations more natural through speech-based interaction.

- **Structured community knowledge**  
  Organize contributions into records that retain their context and can be revisited later.

- **Knowledge discovery**  
  Find relevant community observations through a searchable, shared knowledge space.

- **Human-reviewed transcription**  
  Give contributors control over their words by allowing transcription review before submission.

- **Multilingual accessibility**  
  Build toward supporting communities that communicate in different languages.

## Product Philosophy

FishFolk is built around a simple principle: knowledge should remain connected to the people and experiences that produce it.

**Community over complexity.** Technology should make sharing easier, not introduce unnecessary barriers.

**Voice as an interface.** Speaking should be a practical alternative to typing, especially when recording observations on mobile devices.

**Context matters.** An individual experience should remain distinguishable from verified information. Community contributions are valuable, but they are not automatically authoritative.

**Privacy by design.** Personal information and location data should be collected conservatively and protected appropriately.

## Technology

| Layer | Technology |
|---|---|
| Application | Next.js |
| Language | TypeScript |
| Interface | Tailwind CSS |
| Data platform | Supabase |
| Database | PostgreSQL |
| Voice capture | Web MediaRecorder APIs |
| Speech transcription | Speech-to-text integration |
| Validation | Zod |
| Deployment | Vercel |

The architecture uses Next.js server-side capabilities alongside Supabase, avoiding an unnecessary standalone backend service.

## Architecture

FishFolk follows a web application architecture in which the user interface, application logic, and data access work together within a single application.

```text
Community Member
       |
       v
 Next.js Application
       |
       +---- Voice Capture
       |
       +---- Knowledge Discovery
       |
       +---- Server-side Validation
                    |
                    v
              Supabase
                    |
                    v
              PostgreSQL
```

Voice transcription is handled through a compatible speech-to-text service. Audio capture and transcription are separate operations, allowing the application to use appropriate transcription providers while retaining a text-entry alternative.

## Responsible Knowledge Sharing

FishFolk is intended to preserve and surface community experiences, not replace official marine forecasts, safety advisories, or emergency services.

Contributions should retain their source and relevant context. Where information has not been independently verified, the platform should communicate that distinction clearly.

Location information should be limited to what is necessary, with more precise location sharing requiring appropriate user consent.

## Project Status

FishFolk is under active development. Its architecture and product direction are being established around a focused, reliable knowledge-sharing experience, with voice interaction as a central part of the design.

Implementation details and supported capabilities will evolve as the application develops.

## Built With Purpose

FishFolk explores how voice-first technology can help communities preserve knowledge that might otherwise remain undocumented.

**Every fisher has a story. Every story has value.**


