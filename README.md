# KodNest Premium Build System

A premium SaaS design system for serious B2C products. Calm, intentional, coherent, and confident.

## Quick Start

1. **Open the design system:**
   ```bash
   open index.html
   # or right-click → Open with Browser
   ```

2. **View the full documentation:**
   - See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for complete specifications

3. **Reference components:**
   - All UI components are showcased on the main page
   - Copy-paste patterns from the source code

## What's Included

### Files
- `index.html` – Main design system showcase
- `styles.css` – Complete design system (1000+ lines)
- `script.js` – Minimal interactivity (copy buttons, forms)
- `DESIGN_SYSTEM.md` – Full design documentation

### Key Features

#### Design Foundation
- **4-Color Palette:** Off-white background, deep black text, deep red accent, muted green success
- **Two Typefaces:** EB Garamond (headlines), Inter (body)
- **Spacing Scale:** 8px, 16px, 24px, 40px, 64px
- **No Gradients, Glassmorphism, or Neon:** Clean, professional aesthetic

#### Layout Structure
```
┌── Top Bar (Project name, Progress, Status)
├── Context Header (Headline, Subtext)
├── Primary Workspace (70%) + Secondary Panel (30%)
└── Proof Footer (Persistent checklist)
```

#### Components
- **Buttons:** Primary, secondary, success, danger
- **Inputs:** Text fields, textareas with focus states
- **Cards:** Subtle borders, no shadows, accent variants
- **Badges:** Status indicators (Not Started, In Progress, Shipped, Error)
- **Checklists:** Proof checklist pattern

#### Typography
- Display Heading: 48px, EB Garamond, 700 weight
- Section Title: 32px, EB Garamond, 500 weight
- Body: 16px, Inter, 1.7 line-height, max-width 720px
- Small Text: 14px, for captions

#### Interactions
- Transitions: 150–200ms, ease-in-out
- Hover: Subtle lift + color changes
- Focus: 2px outline, 2px offset (accessibility)
- No animation noise, no bounce, no parallax

#### Responsive Design
- **Desktop (1200px+):** 70/30 grid layout
- **Tablet (768–1199px):** Single column
- **Mobile (<768px):** Full-width, stacked

## Design Philosophy

### Four Core Principles

1. **Calm** – No aggressive colors, no flashiness, no decoration
2. **Intentional** – Every choice serves a purpose
3. **Coherent** – Unified visual language throughout
4. **Confident** – Clear, direct, no hedging

### What We Avoid

- Gradients
- Glassmorphism
- Neon or highly saturated colors
- Decorative fonts or random sizing
- Animation noise or parallax
- Drop shadows (subtle borders instead)
- Playful or hackathon-style design

## Color System

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#F7F6F3` | Page backgrounds |
| Primary Text | `#111111` | All text content |
| Accent | `#8B0000` | Primary actions, emphasis |
| Success | `#4A7C59` | Positive feedback |
| Warning | `#B8860B` | Warnings, attention |

**Maximum 4 colors across the entire system.**

## Spacing Scale

Never use random spacing (no 13px, 27px, etc.).

- `8px` – Micro-spacing, icon gaps
- `16px` – Component padding, small gaps
- `24px` – Standard section spacing
- `40px` – Large sections, major spacing
- `64px` – Page-level spacing

**Whitespace is part of design.** Generous is better than cramped.

## Typography Scale

| Element | Size | Weight | Line-Height | Font |
|---------|------|--------|------------|------|
| h1 | 48px | 700 | 1.2 | Garamond |
| h2 | 32px | 500 | 1.4 | Garamond |
| h3 | 24px | 500 | 1.4 | Garamond |
| h4 | 18px | 600 | 1.4 | Garamond |
| Body | 16px | 400 | 1.7 | Inter |
| Small | 14px | 400 | 1.6 | Inter |

**No decorative fonts. No random sizes. Max-width 720px for text blocks.**

## Component Usage

### Buttons

```html
<!-- Primary (main action) -->
<button class="btn btn--primary">Primary Button</button>

<!-- Secondary (alternative action) -->
<button class="btn btn--secondary">Secondary Button</button>

<!-- Success (confirmation) -->
<button class="btn btn--success">Success Button</button>

<!-- Error (destructive action) -->
<button class="btn btn--danger">Error Button</button>
```

### Input Fields

```html
<!-- Text input -->
<input type="text" class="input" placeholder="Placeholder text">

<!-- Textarea -->
<textarea class="input input--textarea" placeholder="Longer content..."></textarea>
```

### Cards

```html
<!-- Default card -->
<div class="card">
  <h4 class="card__title">Title</h4>
  <p class="card__text">Content goes here.</p>
</div>

<!-- Accent card (emphasized) -->
<div class="card card--accent">
  <h4 class="card__title">Important</h4>
  <p class="card__text">For important information.</p>
</div>
```

### Status Badges

```html
<span class="badge badge--not-started">Not Started</span>
<span class="badge badge--in-progress">In Progress</span>
<span class="badge badge--shipped">Shipped</span>
<span class="badge badge--error">Error</span>
```

### Checklists

```html
<div class="proof-checklist">
  <label class="checklist-item">
    <input type="checkbox" class="checklist-item__checkbox">
    <span class="checklist-item__label">UI Built</span>
  </label>
  <label class="checklist-item">
    <input type="checkbox" class="checklist-item__checkbox">
    <span class="checklist-item__label">Logic Working</span>
  </label>
</div>
```

## Interaction Patterns

### Buttons

- **Hover:** Slight lift (translateY -1px) + color transition
- **Focus:** 2px outline with 2px offset
- **Transitions:** 150ms ease-in-out

### Inputs

- **Idle:** Light border, white background
- **Hover:** Darker border
- **Focus:** Accent border, light red background
- **Placeholder:** #999999

### Cards

- **Hover:** Border darkens
- **No shadows, no scale changes**

### Checklists

- **Unchecked:** Standard appearance
- **Checked:** Accent color checkbox, label text opacity 0.7
- **Hover:** Light background

## Responsive Breakpoints

```css
/* Desktop (1200px+) */
.workspace-grid { grid-template-columns: 70% 30%; }

/* Tablet (768–1199px) */
.workspace-grid { grid-template-columns: 1fr; }

/* Mobile (<768px) */
/* Stacked layout, full-width elements */
```

## File Organization

```
index.html              – Main page (design system showcase)
styles.css              – All styling (design system + components)
script.js               – Minimal JavaScript (copy buttons, forms)
DESIGN_SYSTEM.md        – Complete design documentation
README.md               – This file
```

### CSS Organization

1. Reset & Base Styles
2. Design Tokens (CSS Variables)
3. Typography (All type scales)
4. Layout Components (Top bar, header, grid, footer)
5. UI Components (Buttons, inputs, cards, badges, checklists)
6. Responsive Design (Media queries)

## Development Notes

### This is a Design System, Not a Product

This foundation includes the design specifications and component library. **No product features have been added yet.**

The next phase will add:
- Product workflows
- User interactions
- Business logic
- Real data integration

All while maintaining this design system as the visual foundation.

### Key Design Principles

Everything in this system reflects four principles:

1. **Calm** – Restful to use, no anxiety
2. **Intentional** – Every element has purpose
3. **Coherent** – Unified visual language
4. **Confident** – Direct, clear, professional

When adding features, ask: "Does this feel calm, intentional, coherent, and confident?"

### Design Rules

**Colors:** Maximum 4 colors system-wide
- Background: `#F7F6F3`
- Primary Text: `#111111`
- Accent: `#8B0000`
- Success: `#4A7C59`

**Spacing:** Only use 8px, 16px, 24px, 40px, 64px

**Typography:** Only EB Garamond (headers) and Inter (body)

**Components:** Consistent border-radius (4px), transitions (150–200ms), no shadows

**Interactions:** No animation noise, no bounce, no parallax

## Fonts

Google Fonts links are included in index.html:

```html
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support
- CSS Variables support
- Baseline: IE 11 not supported (by design)

## Future Enhancements

- [ ] Dark mode support (with color token adjustments)
- [ ] Animation library (subtle, purposeful)
- [ ] Accessibility audit (WCAG AA)
- [ ] Print styles
- [ ] Component documentation site

## License

This design system is proprietary to KodNest Premium Build System.

---

**Version:** 1.0  
**Status:** Design System Complete & Ready for Development  
**Last Updated:** February 2026
