# Resume Editor on the Landing Page — Placement Plan

## Context

The landing page (this repo) currently tells one product story end to end:
`Hero → HowItWorks (4-step interview flow) → Features (3 bento cards) →
Testimonials → Values (3 cards) → Pricing → CTA`. There is zero mention of the
Resume Editor anywhere — confirmed via `grep -ri resume src/` (no matches).

In-app, the Resume Editor already ships as a co-equal pillar:
- `main-sidebar.tsx` shows it with a `NEW` badge, above "Resume Feedback".
- `Home.jsx` (the in-app dashboard) splits the whole product into two parallel
  paths: **"I want to enhance my resume"** vs **"I want to practice
  interviews"** — same visual weight, side by side.

The landing page should reflect that same two-pillar story.

### What the feature actually does (from `ai-interviewer-frontend` / `-backend`)

1. Paste or upload a resume (PDF/DOCX/TXT) + paste a job description.
2. Get a **streamed Match Score**: overall /100 plus 4 dimensions (keyword
   match, skills coverage, outcomes, role fit).
3. **Hiring Manager's Take**: would-interview verdict, reason, biggest doubt,
   how to fix it.
4. **Missing Keywords** with priority + the fix.
5. **Weak Bullets**: original (struck through) → rewritten fix.
6. One-click **"Tell Me About Yourself"** grounded intro generator.
7. One-click **tailored resume rewrite + .docx export**.
8. History list of past analyses (`ResumeFeedbackList.jsx`).
9. Roadmap item (`RESUME_MATCHER_INTEGRATION.md` Phase 4, not yet shipped):
   resume gaps will feed directly into interview-question generation — the
   two products become one connected loop. Worth foreshadowing in copy once
   it ships, not before.

No tier-gating exists in the code today (`resumeController.js`,
`resume.js` API client) — it's available to any logged-in user. Flag this
before promising anything specific in Pricing copy.

---

## Recommended placements, highest impact first

### 1. New section: "AI Resume Coach" — appears under `HowItWorksContainer`

**Decided.** Lives directly under the How It Works section (same visual
block/rhythm, not a separate big standalone section) and `FeaturesContainer`.
Mirror the existing `HowItWorks.jsx` step-card pattern (icon chip + title +
description + screenshot, mobile/tablet/desktop breakpoints) so it feels like
a continuation, not bolted on. New file: `src/components/ResumeEditor.jsx`,
added to `App.jsx` right after `<HowItWorksContainer />`.

Copy:
- Title only (no separate headline/subhead): **"AI Resume Coach — Match your resume to the job description"**
- 4 step cards (same rhythm as the interview-practice steps):
  1. **Upload or paste your resume** — PDF, DOCX, or plain text, read in seconds.
  2. **Paste the job description** — score your fit against the actual role.
  3. **Get your match score & gaps** — a 0–100 score across 4 dimensions, plus a hiring manager's honest take on your experience match.
  4. **Get a tailored, exportable resume** — weak bullets rewritten, ATS keyword match improved, downloadable as a polished .docx.

### 2. Hero: no change

**Decided.** Leave `Hero.jsx` as is — no badge, no copy edit.

### 3. Values section: add a 4th card, as the first card

**Decided.** `Values.jsx` currently has 3 cards (`img1`/`img2`/`img3`, all
`aspect-[4/5]` photo + gradient + text overlay, in `cards` array order). Add a
4th card at the **front** of that array:
- Title: **"From resume to offer"**
- Body copy: **"Know exactly why you're not getting callbacks — then fix it in minutes."**

Needs a new photo/screenshot asset. The existing unused `value-4.png` /
`value-5.png` in `src/assets/values/` are pre-made social-ad creatives
(general interview-prep messaging, baked-in text/logo) and are **not**
suitable here — they'd conflict with `ValueCard`'s own text overlay. Treat
them as inspiration for tone/brand, not as drop-in assets.

### 4. Features bento: optional 4th card (lower priority)

`Features.jsx`'s 3-card bento ("anywhere", "feedback", "progress") could take
a 4th card, "Tailor your resume to any JD," with a new icon matching the
existing `IconAnywhere`/`IconFeedback`/`IconProgress` style (same SVG/brand
palette: `#fa6400`, `#fff0e6`, `#c44f00`). Layout currently assumes 3 cards in
a row/wrap — a 4th needs a quick check that the wrap behaves as 2x2 on
tablet/desktop. This duplicates section (1) somewhat, so treat as optional
reinforcement, not required.

### 5. Pricing: clarify inclusion, don't over-promise

Add a line to the Free/Standard feature lists (`Pricing.jsx`) noting resume
analysis + rewrite is included — but confirm with product first whether it's
meant to be unlimited/free-tier-eligible long-term, since the code currently
treats it as ungated. Don't word it in a way that creates a billing promise
that's not backed by an actual entitlement check.

### 6. Navbar / CTA: no change needed

`Get started` / `Sign up` already route to `/register`, and the in-app
`Home.jsx` already presents both paths post-login. No landing-page nav change
required.

---

## Asset gap

Zero resume-related images exist in this repo today. `HowItWorks.jsx` sets
the precedent of using **real app screenshots** (`imgGetStarted`,
`imgQuestions`, `imgInterview`, `imgFeedback`) rather than mockups — the new
section should follow the same approach:
- Screenshot of the Match Score panel (`ScorePanel` in `panels.jsx`) with a
  realistic score.
- Screenshot of Hiring Manager's Take + Missing Keywords.
- Before/after screenshot of a weak bullet rewrite.
- Screenshot or short screen-recording of the .docx download moment (Hero
  already hosts an mp4 demo via Cloudinary — same pattern works here).

---

## Open questions

1. Should Pricing explicitly call out Resume Editor access per tier, or leave
   it unstated until there's an actual entitlement/limit in the backend?
2. Want me to scaffold `ResumeEditor.jsx` now (copy + layout, using
   placeholder image slots), or hold until real screenshots are ready?
3. Screenshots — do you have any already, or should they be captured fresh
   from a logged-in account?
