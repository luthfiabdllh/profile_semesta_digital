# Semesta Data Digital - Corporate Website

A modern corporate website for Semesta Data Digital, providing Big Data, AI, and Digital Transformation solutions to drive business growth in Indonesia.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Apache ECharts
- **Data Fetching**: SWR
- **Fonts**: Geist & Geist Mono
- **Linting**: ESLint
- **Deployment**: Vercel

## 📁 Project Structure

```
profile_semesta_digital/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/             # About company page
│   │   ├── services/          # Services pages
│   │   ├── statistic/         # Statistics dashboard
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── sitemap.ts         # Sitemap generator
│   ├── components/            # UI Components
│   │   ├── ui/               # Shadcn/ui components
│   │   └── components/       # Custom components
│   ├── hooks/                # Custom React hooks
│   │   └── use-statistics-data.ts
│   ├── lib/                  # Utilities & configurations
│   │   ├── utils.ts          # Common utilities
│   │   ├── data.ts           # Static data
│   │   └── chart-options.ts  # Chart configurations
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── .env.local               # Environment variables
└── README.md               # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/profile_semesta_digital.git
   cd profile_semesta_digital
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Setup environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Testing (if configured)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 🌟 Key Features

### 🏠 Homepage
- Modern hero section with animated elements
- Services carousel showcasing company offerings
- Partnership logos and call-to-action sections
- Responsive design with dark/light theme support

### 📊 Statistics Dashboard
- Real-time data visualization using ECharts
- Sentiment analysis charts (pie & doughnut charts)
- Timeline charts for sentiment trends
- News article display with content preview
- Error handling and loading states

### 🛡️ Services Pages
- Detailed service descriptions
- Interactive service cards
- Benefits and features showcase
- Custom ICT solutions information

### 📱 Components
- **Floating Action Button**: Quick access to contact options
- **Resizable Navbar**: Responsive navigation with theme toggle
- **Footer**: Company information and location map
- **Theme Provider**: Dark/light mode switching

## 🔧 Key Utilities

### Data Fetching Hook
The [`useStatisticsData`](src/hooks/use-statistics-data.ts) hook provides:
- Sentiment analysis data
- Timeline data for trends
- News article data
- Loading states and error handling

### Utility Functions
Located in [`src/lib/utils.ts`](src/lib/utils.ts):
- `cn()`: Class name merging utility
- `extractDomain()`: Extract domain from URL
- `formatDate()`: Format dates to Indonesian locale
- `truncateText()`: Text truncation utility

### Chart Configurations
The [`src/lib/chart-options.ts`](src/lib/chart-options.ts) provides:
- Timeline chart options for sentiment trends
- Pie chart options for sentiment distribution
- Customizable color schemes and styling

## 🌐 API Integration

The application integrates with external APIs for:
- Sentiment analysis data
- Timeline trend data
- News article content

API endpoints are configured in [`src/hooks/use-statistics-data.ts`](src/hooks/use-statistics-data.ts):
```typescript
const SENTIMENT_API_URL = `${API_BASE_URL}/search/sentiment-analysis`;
const TIMELINE_API_URL = `${API_BASE_URL}/search/timeline`;
const NEWS_API_URL = `${API_BASE_URL}/search/news-details`;
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Tailwind CSS breakpoints
- Adaptive typography and spacing
- Touch-friendly interface elements

## 🎨 Theming

Built-in dark/light mode support with:
- System preference detection
- Manual theme switching
- Consistent color schemes
- Smooth theme transitions

## 🚀 Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **SWR Caching**: Efficient data fetching with caching
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Geist font family with `next/font`
- **SEO Optimization**: Meta tags, sitemap, and structured data

## 📝 SEO Features

- Dynamic meta tags for each page
- Automatic sitemap generation
- OpenGraph tags for social sharing
- Structured data markup
- Canonical URLs

## 🔍 Type Safety

Full TypeScript implementation with:
- Strict type checking
- Custom type definitions in `src/types/`
- Proper interface definitions
- Type-safe API responses

## 📍 Company Information

- **Address**: Jl Persatuan UH III/549, Jl. Celeban, Tahunan, Kec. Umbulharjo, Kota Yogyakarta, DIY 55167
- **Website**: [semestadatadigital.com](https://profile-semesta-digital.vercel.app/)
- **Services**: Big Data, AI Solutions, Digital Transformation, Custom ICT Solutions

## 📄 License

This project is proprietary software of Semesta Data Digital.

## 📞 Support

For support or questions, please contact:
- Email: info@semestadatadigital.com
- Website: [semestadatadigital.com](https://profile-semesta-digital.vercel.app/)

---

Built with ❤️ by Semesta Data Digital Team