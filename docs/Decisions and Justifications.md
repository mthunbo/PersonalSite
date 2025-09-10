## Architecture: Single-Page Application (SPA) with Scroll-to-Section
Initially, a multi-page architecture was considered to enable page-to-page animations. However, after developing the initial prototype and receiving feedback, the decision was made to pivot to a **single-page application (SPA)** layout.

The justifications for this are:
- **Improved User Experience:** Recruiters and HR personnel often prefer to review a portfolio in a single, seamless flow. An SPA allows them to see the full picture without clicking through multiple pages, increasing engagement.
- **Cohesive Narrative:** The SPA format allows the portfolio to tell a linear story, guiding the user through the Hero, About, Projects, and other sections in a controlled manner.
- **Leveraging Existing Features:** The scroll-progress navbar is a key interactive feature that is fundamentally tied to an SPA structure. Committing to the SPA allows us to enhance this and similar scroll-based animations.
- **Performance:** For a content-focused site of this scale, a well-built SPA can feel extremely fast and fluid after the initial load.
## Framework: Why Next.js?
Next.js was selected as the foundation of the project because:
- It is a **widely used and respected framework** in the industry.
- It provides excellent **documentation** and developer experience.
- It integrates smoothly with tools like Tailwind CSS and Framer Motion.
- It offers **server-side rendering (SSR)** and static generation
- As someone building their **first real website**, it strikes the right balance between power and simplicity.
## Animation: Why Framer Motion?
Framer Motion was picked to handle animations because:
- It allows for **smooth, declarative animations** in React components.
- It’s an **industry-standard** for modern frontend animation.
- It’s **easy to learn, but powerful**, and integrates well with Tailwind and Next.js.
- I want to **practice building fluid, polished UI**, which is an important skill in user-facing development.

## Project Philosophy: Why take it seriously?
During a recent 10-week project, I learned the hard way that a lack of planning, documentation, and structure led to:
- Confusion and loss of time
- Messy code
- Last-minute compromises on tech/design choices

To avoid repeating those mistakes and **develop full-stack DevOps discipline**, I’m treating this project like a professional product. That includes:
- Design planning
- Documentation
- Modular architecture
- Version control
- A deploy pipeline (via GitHub + Vercel)

I want to carry these habits into future projects and employment.

## Brand & Personality: The design I’m aiming for
While specific branding decisions are still in progress, I want my design to reflect **who I am**:
> I’m 30, starting over in life with a newfound purpose through programming, curiosity, and family. I believe life is full of wonder, and that we don’t need to take ourselves so seriously to be professional. I’m goofy and light-hearted, but serious about doing meaningful work. I've been through challenges, and carry a quiet strength mixed with kindness and passion. My brand should reflect that. Grounded but open, professional but playful.
### Favorite colors:
- Deep green tones (e.g., `#004225`, emerald, hunter green)
- Warm accent tones like orange or deep red (burgundy, bordeaux)

The overall visual language should:
- Feel trustworthy and grounded
- Carry a bit of whimsy
- Avoid sterile or overly “corporate” design
- Reflect a love for learning, depth, and humanity

> TL;DR: “Professional, but still goofy. Tried and tested, but open and full of love for life.”
