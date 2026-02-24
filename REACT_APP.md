# Placement Readiness Platform - React Application

A comprehensive placement preparation platform built with React, Tailwind CSS, and React Router.

## Features

### Landing Page
- **Hero Section**: Eye-catching headline "Ace Your Placement" with call-to-action button
- **Features Grid**: 3-column layout showcasing key features
  - **Practice Problems** (Code icon): Solve hundreds of curated coding problems
  - **Mock Interviews** (Video icon): Practice with realistic interview scenarios
  - **Track Progress** (Chart icon): Monitor improvement with detailed analytics
- **Footer**: Company information and copyright

### Dashboard (Protected Area)
- **Sidebar Navigation**:
  - Dashboard (home)
  - Practice (coding problems)
  - Assessments (tests and quizzes)
  - Resources (learning materials)
  - Profile (user account)
- **Dynamic Navigation**: Active link highlighting based on current route
- **Collapsible Sidebar**: Toggle sidebar visibility on smaller screens
- **Header**: Brand name, toggle button, and user avatar

### Dashboard Pages

#### Dashboard
- Statistics cards showing:
  - Problems solved (24/150)
  - Interviews completed (5)
  - Current streak (12 days)
- Recent activity feed

#### Practice
- Problems list with difficulty levels (Easy, Medium, Hard)
- Status indicators (solved/unsolved)
- Filter options
- Interactive table layout

#### Assessments
- Assessment overview with completion status
- Score tracking
- Assessment details (type, duration, question count)
- Performance statistics

#### Resources
- Curated learning materials (tutorials, guides, articles, courses, books, workshops)
- Categorized by type and difficulty level
- Search and filter functionality

#### Profile
- User information display
- Contact details
- Statistics summary
- Notification preferences

## Design System

### Color Scheme
- **Primary Color**: `hsl(245, 58%, 51%)` - Deep indigo/purple
- **Primary Light**: `hsl(245, 58%, 60%)`
- **Primary Dark**: `hsl(245, 58%, 42%)`
- **Backgrounds**: White, light gray
- **Text**: Dark gray, black

### Typography
- Modern sans-serif font stack
- Clear hierarchy with consistent sizing
- Optimized for readability

### Components
- Rounded cards with subtle shadows
- Smooth hover transitions
- Responsive grid layouts
- Interactive buttons with animated states

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Router configuration
├── index.css            # Tailwind CSS imports
├── pages/
│   ├── LandingPage.jsx       # Landing page with hero & features
│   ├── DashboardLayout.jsx    # App shell with sidebar & header
│   ├── Dashboard.jsx          # Dashboard home
│   ├── Practice.jsx           # Practice problems
│   ├── Assessments.jsx        # Assessments
│   ├── Resources.jsx          # Learning resources
│   └── Profile.jsx            # User profile
package.json              # Dependencies and scripts
vite.config.js            # Vite configuration
tailwind.config.js        # Tailwind CSS configuration
postcss.config.js         # PostCSS configuration
index.html.react          # React entry HTML
```

## Technology Stack

- **React 18.2.0** - UI library
- **React Router 6.20.0** - Client-side routing
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Vite 5.0.8** - Build tool and dev server
- **lucide-react 0.294.0** - Icon library

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm (or yarn)

### Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   - Opens automatically at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Routing

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | LandingPage | Public landing page |
| `/dashboard` | Dashboard | Main dashboard home |
| `/practice` | Practice | Coding problems list |
| `/assessments` | Assessments | Assessment management |
| `/resources` | Resources | Learning materials |
| `/profile` | Profile | User account settings |

## Navigation Flow

1. Users land on the public **Landing Page**
2. Click "Get Started" button to navigate to **Dashboard**
3. Use sidebar to navigate between different sections
4. All dashboard routes are within the app shell layout

## Key Features

### Landing Page
- Responsive hero section with gradient background
- Feature cards with icons from lucide-react
- Hover effects and transitions
- Footer with copyright

### Sidebar Navigation
- Collapsible/expandable with animated transitions
- Active route highlighting
- Icons for each navigation item
- Smooth user experience on all screen sizes

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Flexible grid layouts
- Hamburger menu on smaller screens

### User Experience
- Smooth page transitions
- Clear visual feedback on interactions
- Consistent styling across all pages
- Accessible color contrasts

## Future Enhancements

- Authentication and login
- User data persistence
- Real problem database
- Live coding editor
- Video interview platform
- Progress analytics
- Notifications system
- Mobile app version

## Git Repository

- Repository: https://github.com/patilvidya28/placementreadiness.git
- Branch: main
- Initial commit: React app with all components

## Notes

This React application integrates with the KodNest Premium Build System design philosophy:
- Calm, intentional design
- Clear visual hierarchy
- Consistent spacing and typography
- No unnecessary animations
- Professional, B2C quality

The indigo/purple color scheme provides a modern, trustworthy appearance suitable for an educational platform.
