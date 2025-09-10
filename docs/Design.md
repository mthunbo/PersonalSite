This section outlines the visual and interaction design choices that will shape the user experience of the portfolio site. The design should reflect both my personal values and practical UX considerations.
## Design Goals
The overall design should:
- Be **professional**, but not cold or overly serious
- Communicate **credibility**, but with a sense of **lightheartedness and approachability**
- Be **dynamic and modern**, without becoming overwhelming
- Prioritize **smooth, refined animations** over flashy distractions
- Be **calm, clean, and minimal**, especially on first load
I want the site to feel like an **invitation into my way of thinking**: curious, grounded, kind, focused, and a little whimsical.

### Design Identity: "The Dreamer-Citadel"
My design vision is shaped by two core passions:
1. **Science Fiction** – the pursuit of knowledge, the mystery of space, sleek interfaces and imagined futures
2. **Ancient Civilizations** – the power of structured thought, timeless forms, and philosophical roots
This blend influences my typography, layout, color, and tone. I want visitors to feel like they’re stepping into a mind that reveres both **what was** and **what could be**, a temple of logic, creativity, and code.
✨ A digital Pantheon forged from C, caffeine and dreams ✨
## Layout Principles
- Layout should be **structured and intuitive**, to avoid clutter or overload
- Content should be **separated into clear sections** with visual breathing room
- Navigation should be **sticky**, minimal and responsive
- Page transitions should be **smooth and subtle**, not too performance heavy

## Color Philosophy
- The color will represent my personality and values:
	- Deep green tones (#005225, emerald, hunter green) for groundedness and growth
	- warm reds (burgundy, bordeaux) to reflect depth and resilience
	- orange accents for energy and curiosity
- Design will support or be **dark mode** by default
- Colors will be defined in Tailwind's `theme.extend.colors` for reusability

## Font Strategy
Typography is a key part of the site’s identity, blending classical structure with modern clarity:
- **Body Font:** `Marcellus` – A Roman-style serif that adds elegance and timelessness, reinforcing the theme of ancient civilization
- **Heading Font:** `Orbitron` – A futuristic, all-caps typeface designed to evoke technology, command interfaces, and sci-fi titles
- **Signature Font (optional):** `Great Vibes` – A cursive typeface reserved for branding elements like my name or footer to convey personality and warmth
This contrast between body and heading fonts reverses the usual pattern (usually sans for body, serif for headers), but aligns with the design theme: a structured, elegant foundation (Marcellus) guiding users through a futuristic interface (Orbitron).
The final font stack will be reusable across future personal and professional projects as part of my dev brand.

## Inspiration & Influence
Design references:
- [**Zach Jordan’s site**](https://www.zachjordan.io/):  
    I admire the card hover effects, bounce animation, and visual clarity.
- [**olivervalente.dk**](https://olivervalente.dk/):  
    A clean, well-balanced layout that communicates professionalism with personality.
- https://nootfolio.ca/
	The animation and mixture between fun and professionel has been a great source of  inspiration. 

## Accessibility & Neurodivergent UX Considerations
As someone with ADHD and autism, I’m intentionally designing the site to avoid common UX pitfalls:
- **No autoplay animations**, loud transitions, or visual “explosions” on load
- **No popups, auto-play videos, or flashing UI**
- **Dark mode** will be prioritized to reduce eye strain
- Interactions should feel **calm, predictable, and responsive**
- Minimal use of color shifts and motion on hover — just enough to show interactivity

The user should feel welcomed, not overwhelmed. Performance and visual comfort are more important than fancy effects.

## Color Palette
This project uses a carefully selected set of colors to reflect my personality, ensure accessibility, and provide visual consistency across components. The palette was chosen based on color theory, contrast requirements, and emotional tone alignment.

| Role              | Color                     | Why it was chosen                                                                                                     |
| ----------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `Primary`         | `#800020` Burgundy        | The foundational brand color. Represents authority, depth, and the classical Roman world. Used for core UI elements.  |
| `Primary Hover`   | `#9A1E30` Old Brick       | A brighter red for interactive feedback on primary elements.                                                          |
| `Primary Dark`    | `#5b0016` Darker Red      | A darker shade for specific states or borders.                                                                        |
| `Accent`          | `#004225` Kaitoke Green   | A deep, grounded green used sparingly for secondary calls-to-action. Represents growth and calm.                      |
| `Accent Hover`    | `#1D593B` Green Pea       | A lighter green for hover states on accent elements.                                                                  |
| `Highlight`       | `#A68A64` Muted Gold      | The primary color for headings and key visual elements. Provides energy, curiosity, and a touch of imperial elegance. |
| `Royal`           | `#4B0082` Imperial Purple | Historically reserved for emperors; used sparingly to represent the creator *me*, with significance and restraint.    |
| `Background Dark` | `#121212` Charcoal Gray   | Main background color, dark enough to protect eyes without being harsh.                                               |
| `Card Background` | `#1E1E1E` Cod Gray        | Slightly lighter dark used for cards and sections to establish visual hierarchy.                                      |
| `Text Light`      | `#E5E5E5` Mercury         | Soft light gray for readable text on dark backgrounds.                                                                |
| `Border`          | `#2A2A2A` Mine Shaft      | A neutral gray border for low-contrast UI separation.                                                                 |
### Design Goals:
- The colors avoid overstimulation and support neurodivergent-friendly UX.
- All primary UI interactions are contrast-checked and accessible.
- The palette is both professional and emotionally expressive — aligning with my story and brand identity.
### Color palette sheet
![[ChatGPT Image 30. jun. 2025, 14.05.43.png]]

## Wireframe
### Overview
Single-page React + Tailwind site with sticky UI elements, animated accents, and section-based navigation.  
Main content scrolls vertically while background and side banners remain fixed.
>[!info]- Wireframe Sketch
>![[Wireframe.jpg]]
### Sticky Corner Buttons
#### Left: Home Button
- **Shape:** Circular
- **Content:** Favicon (Roman "M", gold on red)
- **Hover:** Spins
- **Click:**
    - "Black hole" collapse animation (scale down, fade, blur)
    - Scroll to top (Hero section)
#### Right: Contact Button
- **Shape:** Circular
- **Hover:** Spins
- **Content:** @ That creates a spiral
- **Click:**
    - "Black hole" collapse animation
    - Open popup contact form
- **Form:**
    - Fields: Name, Email, Message
    - Submission: EmailJS or backend endpoint
>[!info]- Contact Button Wireframe Sketch
>![[contact 1.jpg]]

### Sticky Bottom Navbar
- **Sections:**
    1. About
    2. Journey
    3. Skills
    4. Projects
    5. RUN!!! (Game)
- **Behavior:**
    - Transparent on Hero section
    - Progressively fills background color on scroll
    - Fully opaque at last section
    - Icons + text per item
    - Smooth scroll to section on click
### Side Banners (Left & Right)
- **Style:** Animated vertical designs
- **Ideas:**
    - Roman column morphing into futuristic structure
    - Dripping paint animation
    - Subtle parallax scrolling
- **Behavior:** Fixed position, does not scroll with content
### Main Content Sections
#### 1. Hero
- Big headline (your role/vibe)
- Short intro tagline
- Background: Static or looping video/GIF
- CTA: Scroll down indicator
#### 2. About
- Bio
- Values
- Portrait or personal signature
- Optional quote
#### 3. Journey
- Timeline of projects/experience
- Scroll-triggered reveal animations
#### 4. Skills
- Icons/badges for tech stack
- Possible interactive element (Star Wars–style UI)
- Group by category (Frontend, Backend, Tools)
#### 5. Projects
- Grid layout: 3×2 on desktop, single column on mobile
- Each project card:
    - Project image or screenshot
    - Title
    - Short description
    - Hover: subtle lift, shadow, scale
    - Click: open modal with more details or external link
- Only most recent or highlighted projects displayed
#### 6. RUN!!!
- Embedded mini-game (iframe or canvas)
- Option to open in separate window
- Full-screen button
### Footer
- Motto or personal phrase
- Social media icons
- Copyright notice
### Background
- Fixed position behind all content
- Options:
    - Looping, optimized video
    - Still image + animated overlay (particles, light streaks)
- Subtle enough to not distract from text
### Animation Libraries / Tools
- **Framer Motion** → smooth section transitions
- **GSAP** → advanced effects (black hole, morphing banners)
- **IntersectionObserver** → scroll-triggered navbar effects
- **react-scroll** or custom → smooth anchor scrolling

## Style Guide
### 1. Colors
- **Background**: `#121212` _(dark base)_
- **Surface**: `#2A2A2A` _(cards, modals, sticky header background)_
- **Border**: `#3A3A3A`
- **Text Primary**: `#E5E5E5`
- **Text Muted**: `#A0A0A0`
- **Primary**:
    - Default: `#004225` _(deep green)_
    - Light: `#3F7F62`
    - Hover: `#4F9D7B`
- **Accent**:
    - Default: `#800020` _(burgundy)_
    - Hover: `#9A1E30`
- **Royal**:
    - Default: `#4B0082` _(indigo/purple)_
    - Hover: `#6A0DAD`
- **Highlight**: `#A68A64` _(golden brown)_
### 2. Typography
- **Headings**: `Orbitron`, sans-serif _(futuristic, bold)_
    - H1 – 3rem, bold
    - H2 – 2rem, semi-bold
    - H3 – 1.5rem, semi-bold
- **Body Text**: `Marcellus`, serif _(classical, refined)_
    - Regular: 1rem
    - Small: 0.875rem
- **Signature**: `Great Vibes`, cursive _(for decorative use, e.g., footer motto or callouts)_
### 3. Buttons
**Base Style:**
- Rounded corners: `1.5rem` radius
- Padding: `0.75rem 1.5rem`
- **Border**: `2px solid` in a slightly darker tone of button background.
- **Hover Animation**: Subtle bounce with `transform: scale(1.05)` + shadow glow in brand color.
- **States**:
    - **Primary**: `bg-primary` with `border-primary-light`, text in `text-text`.
    - **Secondary**: Transparent background, gold (`highlight`) border & text.
    - **Disabled**: Greyed out, no bounce effect.
### 4. Layout Rules
- **Max Width**: 1200px container.
- **Section Padding**: 4rem top/bottom.
- **Grid Gap**: 1.5rem–2rem.
- **Rounded Corners**: 0.75rem for cards, 1.5rem for buttons.
- **Shadows**: Light drop shadow for surface elements.
### 5. Sections
#### **Header**
- Sticky, `bg-surface`, subtle shadow.
- Left: Favicon home button (spins on hover).
- Right: Contact button (spins on hover, black-hole animation on click).
#### **Hero**
- Full-width, 70–80vh height.
- Large headline (highlight color), subtitle (muted text).
- Call-to-action button.
#### **About**
- Two-column layout: Image left, text right.
- Optional pull-quote in signature font.
#### **Projects**
- **3×2 grid** (desktop) or single-column (mobile).
- Each card:
    - Top: Image (project screenshot).
    - Bottom: Title + short description.
    - Hover: Lift with shadow & slight scale.
    - Click: Modal with more info or link to live/demo.
- Only 6 most recent or highlighted projects
#### **Skills**
- Icon/badge layout.
- Hover: scale-up animation.
#### **Contact**
- Popup modal form from sticky button.
- Include socials in footer.
#### **Footer**
- Motto in signature font.
- Copyright
### 6. Animation Guidelines
- Buttons: Bounce + spin on hover, black-hole shrink on click.
- Cards: Subtle lift on hover.
- Section Fade-in: Slide from bottom on scroll.
