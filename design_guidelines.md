# BlueLoop Intelligence Design Guidelines

## Design Approach
**System-Based with Scientific Dashboard References**: Drawing from Material Design's data visualization principles and professional scientific dashboards (NASA Earth Observatory, NOAA Climate), while maintaining ocean-inspired aesthetics for environmental credibility and engagement.

## Core Design Principles
- **Scientific Credibility**: Clean, professional interface that establishes trust with researchers and policymakers
- **Data Clarity**: Prioritize readability and comprehension of complex environmental data
- **Ocean Connection**: Subtle oceanic theming that reinforces the blue carbon mission without overwhelming functionality
- **Educational Transparency**: Every metric includes context and explanation

---

## Color Palette

### Light Mode
- **Primary Ocean**: 186 70% 45% (deep teal - navigation, primary actions, data highlights)
- **Navy Depth**: 215 65% 25% (navy blue - headers, important text, secondary elements)
- **Coral Accent**: 16 85% 62% (coral - alerts, CTA buttons, important callouts) *use sparingly*
- **Surface**: 200 20% 98% (light blue-gray - backgrounds, cards)
- **Data Visualization**: Sequential blues from 200 85% 85% to 200 85% 35% for heat maps and gradients

### Dark Mode
- **Primary Ocean**: 186 60% 55% (lighter teal for contrast)
- **Navy Background**: 215 40% 12% (dark navy base)
- **Surface Elevated**: 215 35% 18% (card backgrounds)
- **Coral Accent**: 16 75% 65% (slightly muted for dark mode)

### Semantic Colors
- **Success/Growth**: 158 65% 45% (ocean green - positive carbon metrics)
- **Warning**: 38 85% 55% (amber - uncertainty indicators)
- **Error**: 4 75% 50% (muted red - errors, offline states)
- **Info**: 186 60% 50% (teal - educational tooltips)

---

## Typography

### Font Stack
- **Primary**: 'Inter' (Google Fonts) - Clean, scientific readability for UI and data
- **Data/Metrics**: 'JetBrains Mono' (Google Fonts) - Monospaced for numerical data, codes, scientific notation
- **Headings**: Inter with increased letter-spacing (0.02em) for authority

### Scale
- **Hero/H1**: text-5xl md:text-6xl font-bold (scientific impact)
- **H2**: text-3xl md:text-4xl font-semibold (section headers)
- **H3**: text-xl md:text-2xl font-semibold (card headers, subsections)
- **Body**: text-base leading-relaxed (optimal readability for scientific content)
- **Data Labels**: text-sm font-medium tracking-wide uppercase (chart labels, metrics)
- **Metrics/Numbers**: text-2xl md:text-3xl font-mono font-bold (carbon scores, predictions)
- **Caption**: text-xs text-gray-600 (units, footnotes, sources)

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm

- **Component padding**: p-6 (cards), p-8 (sections on desktop)
- **Section gaps**: gap-8 md:gap-12 (between dashboard elements)
- **Page margins**: py-12 md:py-20 (vertical page spacing)
- **Card spacing**: space-y-6 (internal card elements)

### Grid Systems
- **Dashboard**: 12-column grid with gap-6, allowing flexible 4+8, 3+9, or 6+6 splits for map + data panels
- **Data Cards**: Grid of 2-4 columns (grid-cols-1 md:grid-cols-2 lg:grid-cols-4) for metrics overview
- **Charts**: Full-width or 2-column layouts with max-w-7xl containers

### Containers
- **Full Dashboard**: max-w-[1920px] (utilize wide screens for data)
- **Content Pages**: max-w-6xl (home, reports, upload)
- **Text Content**: max-w-3xl (educational sections)

---

## Component Library

### Navigation
- **Top Nav**: Fixed backdrop-blur-md bg-white/90 dark:bg-navy-900/90 with subtle shadow
- **Logo**: Ocean wave icon + "BlueLoop Intelligence" in Inter semibold
- **Nav Items**: Subtle hover with teal underline animation, active state with bg-ocean-50
- **User Profile**: Avatar in top-right with dropdown for saved simulations and logout

### Cards & Surfaces
- **Dashboard Cards**: bg-white dark:bg-surface rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm
- **Data Cards**: Elevated with shadow-md, hover:shadow-lg transition
- **Metric Cards**: Compact with large monospace numbers, labels above, subtle gradient background
- **Simulation Results**: Bordered with left accent (border-l-4 border-l-ocean-500)

### Interactive Map
- **Mapbox**: Dark water style for dark mode, light ocean style for light mode
- **Region Markers**: Teal circular markers with pulse animation on active region
- **Selected Region**: Highlight with teal stroke, elevated z-index, sidebar panel appears

### Data Visualization
- **Charts (Recharts)**: 
  - Line charts for time-series (SST, Chlorophyll) with teal/navy gradient fills
  - Bar charts for comparative data with ocean color palette
  - Smooth curves, subtle grid lines (opacity-20), responsive tooltips
- **Carbon Gauge**: Circular progress (react-circular-progressbar) with gradient from navy to teal, large center metric display
- **Uncertainty Bars**: Horizontal bars with gradient opacity showing confidence ranges

### Forms & Inputs
- **Input Fields**: border-gray-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 rounded-lg px-4 py-3
- **Sliders**: Custom range inputs with teal track, navy thumb, real-time value display above
- **File Upload**: Dashed border drag-drop zone with ocean-blue on hover, icon + "Drop CSV here" text
- **Buttons**:
  - **Primary CTA**: bg-coral-500 hover:bg-coral-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md
  - **Secondary**: bg-ocean-500 hover:bg-ocean-600 text-white
  - **Outline**: border-2 border-ocean-500 text-ocean-600 hover:bg-ocean-50
  - **Ghost**: text-ocean-600 hover:bg-ocean-50 (for less emphasis)

### Overlays & Modals
- **Modal**: Centered with backdrop-blur-sm bg-black/50, content in white card with rounded-2xl
- **Tooltips**: Dark bg-navy-800 text-white text-sm px-3 py-2 rounded-md with arrow pointer
- **Educational Popovers**: Light bg-ocean-50 border-l-4 border-ocean-500 with icon + explanation text

### Reports & PDF
- **Report Summary**: Grid layout with chart thumbnails, map snapshot image, key metrics in card format
- **Export Button**: Prominent coral CTA with download icon, "Generate PDF Report" text
- **PDF Styling**: Match on-screen design with Inter fonts, teal headers, embedded chart images

---

## Page-Specific Layouts

### Home Page
- **Hero Section**: h-[85vh] with subtle animated ocean wave SVG background (opacity-10), centered content
  - Large H1: "Model Ocean Carbon Sequestration with AI"
  - Subtitle explaining blue carbon ecosystems
  - Two CTAs: "Explore Dashboard" (coral) + "Learn More" (outline)
- **Education Section**: 3-column grid explaining kelp forests, seagrass, mangroves with icons and stats
- **Features Showcase**: 2-column alternating layout showing dashboard preview + simulation interface screenshots

### Dashboard Page
- **Layout**: Sidebar (w-80) with region list + filters, main area with map (60%) + data panel (40%) horizontal split on desktop, stacked on mobile
- **Map**: Full-height with coastal California regions as clickable polygons
- **Data Panel**: Tabbed interface (SST / Chlorophyll / Turbidity) with chart, current value, and gauge
- **Date Range Picker**: Floating control above map with preset ranges (7d, 30d, 90d, 1yr)

### AI Simulation Page
- **Two-Column**: Left panel with sliders + inputs (Temperature, Turbidity, Nutrients, Permanence), right panel with prediction display
- **Prediction Card**: Large carbon potential number, CO₂e conversion, uncertainty visualization, confidence bar
- **"Calculate" CTA**: Prominent coral button that triggers API call with loading state

### Data Upload
- **Drop Zone**: Large centered area (h-64) with dashed border, file icon, "Drop CSV or click to upload"
- **Preview Table**: After upload, show data in striped table with pagination, column headers sortable
- **Visualization Options**: Toggle to "Add to Charts" or "Run Simulation with Data"

### Reports Page
- **Summary Grid**: 2x2 grid showing Carbon Potential, CO₂e, Region Map, Time-Series chart
- **Simulation History**: List of saved simulations with expand/collapse, date, region name
- **Export Section**: PDF preview + "Download Report" button with options (include charts, full data, etc.)

---

## Images

**Hero Image**: Use a stunning aerial photograph of coastal kelp forest or mangrove ecosystem (teal-blue water, vibrant green vegetation) as full-width background with overlay gradient (from transparent to navy-900 at 60% opacity) for text readability. Position: Cover background of hero section (h-[85vh]).

**Dashboard Map**: Mapbox satellite imagery showing California coastline in natural colors, overlaid with data visualization layers.

**Education Section Icons/Images**: Small illustrative images or high-quality photos (300x200px) of kelp forests, seagrass beds, and mangroves in each feature card.

**Chart Placeholders**: If backend data unavailable, use gradient placeholder rectangles with "Loading data..." text in Inter.

---

## Animations & Interactions
- **Map Regions**: Subtle scale(1.05) on hover, smooth transition to selected state
- **Gauge Updates**: Animated count-up when Carbon Potential Score changes (0.8s ease-out)
- **Chart Transitions**: Smooth data updates with 300ms transitions when filters change
- **Button Interactions**: Scale(0.98) on active, subtle shadow expansion on hover
- **Page Transitions**: Fade-in content (opacity 0→1, 200ms) when switching pages
- **Slider Feedback**: Real-time value display that follows thumb, immediate calculation preview

---

## Accessibility & Dark Mode
- **Contrast**: All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- **Dark Mode Toggle**: Icon in nav, smooth transition of all colors via Tailwind dark: classes
- **Focus States**: Visible ring-2 ring-ocean-400 on all interactive elements
- **Chart Labels**: High contrast text, patterns in addition to colors for colorblind users
- **Tooltips**: Keyboard accessible, appear on focus as well as hover
- **Screen Readers**: Proper ARIA labels for charts ("Sea Surface Temperature chart showing 18.5°C average"), map regions, and data points