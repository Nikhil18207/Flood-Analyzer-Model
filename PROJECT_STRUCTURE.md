# Flood Analyzer App - Project Structure

## 🏗️ Architecture Overview

This is a full-stack flood risk assessment application built with modern web technologies:

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: FastAPI with Python and Google Gemini AI
- **UI Components**: shadcn/ui component library
- **Maps**: Google Maps API integration
- **AI**: Google Gemini AI for intelligent analysis

## 📁 Directory Structure

```
flood-analyzer-app/
├── app/                          # Next.js App Router
│   ├── favicon.ico              # App icon
│   ├── globals.css              # Global styles and Tailwind CSS
│   ├── layout.tsx               # Root layout with Toaster
│   └── page.tsx                 # Main application page
├── components/                   # React components
│   └── ui/                      # shadcn/ui components
│       ├── alert-dialog.tsx     # Alert dialog component
│       ├── badge.tsx            # Badge component
│       ├── button.tsx           # Button component
│       ├── card.tsx             # Card component
│       ├── input.tsx            # Input component
│       ├── label.tsx            # Label component
│       ├── loading.tsx          # Loading components
│       ├── select.tsx           # Select component
│       ├── separator.tsx        # Separator component
│       ├── tabs.tsx             # Tabs component
│       ├── textarea.tsx         # Textarea component
│       ├── toast.tsx            # Toast notification component
│       └── toaster.tsx          # Toast container
├── backend/                      # FastAPI backend
│   ├── main.py                  # Main API server
│   ├── requirements.txt         # Python dependencies
│   ├── runtime.txt              # Python runtime version
│   └── start.py                 # Startup script
├── config/                       # Configuration files
│   └── api.ts                   # API endpoint configuration
├── lib/                          # Utility functions
│   ├── utils.ts                 # Common utilities (cn function)
│   └── use-toast.ts             # Toast notification hook
├── public/                       # Static assets
│   ├── flood-analyzer-icon.svg  # Custom app icon
│   ├── globe.svg                # Globe icon
│   ├── next.svg                 # Next.js logo
│   └── vercel.svg               # Vercel logo
├── .env.example                  # Environment variables template
├── components.json               # shadcn/ui configuration
├── package.json                  # Node.js dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── next.config.ts                # Next.js configuration
├── start-dev.js                  # Development startup script
└── README.md                     # Project documentation
```

## 🔧 Key Components

### Frontend Components

#### 1. Main Page (`app/page.tsx`)
- **FloodDetectionSystem**: Main application component
- **Coordinate Analysis**: Input fields for latitude/longitude
- **Image Analysis**: File upload for terrain images
- **Interactive Map**: Google Maps integration
- **Risk Assessment**: Display flood risk results

#### 2. UI Components (`components/ui/`)
- **Button**: Various button styles and states
- **Card**: Content containers with headers
- **Input**: Form input fields
- **Tabs**: Tabbed interface for analysis methods
- **Loading**: Loading spinners and states
- **Toast**: Notification system
- **Alert Dialog**: Error and confirmation dialogs

#### 3. Layout (`app/layout.tsx`)
- **Root Layout**: HTML structure and metadata
- **Toaster**: Toast notification container
- **Fonts**: Geist Sans and Mono fonts
- **Global Styles**: Tailwind CSS and theme variables

### Backend API

#### 1. Main Server (`backend/main.py`)
- **FastAPI Application**: Main API server
- **CORS Middleware**: Cross-origin resource sharing
- **Gemini AI Integration**: Google AI for analysis
- **API Endpoints**: Coordinate and image analysis

#### 2. API Endpoints
- `POST /api/analyze/coordinates`: Analyze coordinates
- `POST /api/analyze/image`: Analyze uploaded images
- `GET /`: Health check endpoint

### Configuration

#### 1. API Configuration (`config/api.ts`)
- **Environment-based URLs**: Development vs production
- **Endpoint Definitions**: API route configuration
- **Base URL Management**: Automatic environment switching

#### 2. Environment Variables
- **Google Maps API Key**: For map functionality
- **Gemini AI API Key**: For AI analysis
- **Backend URL**: API server location

## 🎨 Styling & Theming

### Tailwind CSS v4
- **Utility-first CSS**: Rapid UI development
- **Custom Properties**: CSS variables for theming
- **Dark Mode Support**: Automatic theme switching
- **Responsive Design**: Mobile-first approach

### Component Library
- **shadcn/ui**: Modern, accessible components
- **Radix UI**: Headless component primitives
- **Consistent Design**: Unified visual language
- **Accessibility**: ARIA labels and keyboard navigation

## 🚀 Development Workflow

### 1. Development Environment
```bash
npm run dev:full    # Start both frontend and backend
npm run dev         # Start frontend only
npm run backend     # Start backend only
```

### 2. Building & Deployment
```bash
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

### 3. Backend Development
```bash
cd backend
python start.py     # Start FastAPI server
```

## 🔌 Integration Points

### 1. Google Maps API
- **Map Initialization**: Interactive map component
- **Coordinate Markers**: Location visualization
- **Risk Zones**: Color-coded flood risk areas
- **Terrain View**: Geographical context

### 2. Google Gemini AI
- **Coordinate Analysis**: Location-based risk assessment
- **Image Analysis**: Terrain image processing
- **Natural Language**: Human-readable responses
- **Smart Recommendations**: Actionable advice

### 3. FastAPI Backend
- **RESTful API**: Standard HTTP endpoints
- **File Upload**: Image processing support
- **CORS Support**: Frontend integration
- **Error Handling**: Graceful failure management

## 📱 User Experience Features

### 1. Analysis Methods
- **Coordinate Input**: Manual latitude/longitude entry
- **Image Upload**: Terrain and satellite imagery
- **Real-time Validation**: Input error checking
- **Progress Indicators**: Loading states and feedback

### 2. Results Display
- **Risk Levels**: Low, Medium, High, Very High
- **Visual Indicators**: Color-coded risk badges
- **Detailed Descriptions**: Comprehensive explanations
- **Actionable Recommendations**: Specific advice

### 3. Interactive Elements
- **Responsive Design**: Mobile and desktop optimized
- **Toast Notifications**: User feedback system
- **Error Handling**: Graceful error messages
- **Loading States**: Visual progress indicators

## 🛡️ Security & Performance

### 1. Security Features
- **Environment Variables**: Secure API key storage
- **Input Validation**: Client and server-side validation
- **CORS Configuration**: Controlled cross-origin access
- **Error Handling**: Secure error messages

### 2. Performance Optimizations
- **Next.js 15**: Latest React framework
- **Turbopack**: Fast bundling and development
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic bundle optimization

## 🔄 State Management

### 1. React Hooks
- **useState**: Local component state
- **useEffect**: Side effects and lifecycle
- **useRef**: DOM element references
- **Custom Hooks**: Toast notification system

### 2. Data Flow
- **Component State**: Local UI state
- **API Integration**: Backend communication
- **Error Handling**: User feedback
- **Loading States**: Progress indication

## 📊 Data Models

### 1. Frontend Types
```typescript
interface FloodRiskData {
  riskLevel: "Low" | "Medium" | "High" | "Very High";
  description: string;
  recommendations: string[];
  elevation: number;
  distanceFromWater: number;
}
```

### 2. API Responses
- **Success Responses**: Structured data with risk assessment
- **Error Responses**: Descriptive error messages
- **Validation**: Input validation and sanitization

## 🌐 Deployment Considerations

### 1. Frontend Deployment
- **Vercel**: Optimized for Next.js
- **Netlify**: Static site hosting
- **Environment Variables**: Production configuration
- **Build Optimization**: Production-ready bundles

### 2. Backend Deployment
- **Render**: Python hosting platform
- **Railway**: Alternative deployment option
- **Environment Variables**: Production API keys
- **CORS Configuration**: Production domain settings

## 🔍 Testing & Quality

### 1. Code Quality
- **TypeScript**: Type safety and IntelliSense
- **ESLint**: Code quality enforcement
- **Prettier**: Code formatting
- **Component Testing**: UI component validation

### 2. User Testing
- **Responsive Design**: Mobile and desktop testing
- **Accessibility**: Screen reader compatibility
- **Cross-browser**: Browser compatibility
- **Performance**: Loading time optimization

## 📈 Future Enhancements

### 1. Planned Features
- **User Authentication**: User accounts and history
- **Advanced Analytics**: Historical data and trends
- **Mobile App**: React Native application
- **Real-time Updates**: Live data integration

### 2. Technical Improvements
- **Database Integration**: Persistent data storage
- **Caching**: Performance optimization
- **Monitoring**: Application health tracking
- **CI/CD**: Automated deployment pipeline

---

This project structure provides a solid foundation for a modern, scalable flood analysis application with excellent user experience and maintainable code architecture.
