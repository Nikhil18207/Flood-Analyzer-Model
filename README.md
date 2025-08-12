# 🌊 Flood Analyzer App

A comprehensive flood risk assessment application that combines **Next.js frontend** with **FastAPI backend** and **Google Gemini AI** for intelligent flood analysis.

## 🚀 Features

### 🗺️ **Interactive Map Analysis**
- **Google Maps Integration** with real-time coordinate selection
- **Visual Risk Assessment** with color-coded flood risk zones
- **Interactive Markers** for location analysis
- **Terrain Visualization** for better geographical understanding

### 🤖 **AI-Powered Analysis**
- **Google Gemini AI Integration** for intelligent flood risk assessment
- **Coordinate-based Analysis** using latitude and longitude
- **Image Analysis** for terrain and satellite imagery
- **Smart Recommendations** based on AI analysis

### 🎨 **Modern UI/UX**
- **Responsive Design** built with Next.js 15 and Tailwind CSS
- **Component Library** using shadcn/ui for consistent design
- **Dark/Light Theme Support** with CSS custom properties
- **Accessible Components** with proper ARIA labels

### 🔧 **Backend API**
- **FastAPI Server** with automatic API documentation
- **CORS Support** for frontend integration
- **File Upload Handling** for image analysis
- **Environment-based Configuration** for development/production

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **Google Maps API** - Interactive mapping

### **Backend**
- **FastAPI** - Modern Python web framework
- **Google Generative AI** - Gemini AI integration
- **Pillow** - Image processing
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### **Development Tools**
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundling

## 📁 Project Structure

```
flood-analyzer-app/
├── app/                    # Next.js frontend pages
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main application page
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
│       ├── button.tsx    # Button components
│       ├── card.tsx      # Card components
│       ├── input.tsx     # Input components
│       └── ...           # Other UI components
├── backend/               # FastAPI backend
│   ├── main.py           # Main API server
│   ├── start.py          # Startup script
│   └── requirements.txt  # Python dependencies
├── config/                # Configuration files
│   └── api.ts            # API endpoint configuration
├── lib/                   # Utility functions
│   └── utils.ts          # Common utilities
├── public/                # Static assets
└── start-dev.js          # Development startup script
```

## 🚀 Quick Start

### **Prerequisites**
- **Node.js 18+** and **npm**
- **Python 3.8+** and **pip**
- **Google Maps API Key**
- **Google Gemini AI API Key**

### **1. Clone the Repository**
```bash
git clone https://github.com/Nikhil18207/Flood-Analyzer-Model.git
cd Flood-Analyzer-Model
```

### **2. Install Dependencies**
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt
cd ..
```

### **3. Environment Setup**
Create a `.env.local` file in the root directory:
```env
# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Gemini AI API Key (for backend)
GEMINI_API_KEY=your_gemini_api_key_here
```

### **4. Start Development Environment**
```bash
# Start both frontend and backend
npm run dev:full

# Or start separately:
npm run backend    # Terminal 1: Backend
npm run dev        # Terminal 2: Frontend
```

### **5. Access the Application**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 📡 API Endpoints

### **Coordinate Analysis**
```http
POST /api/analyze/coordinates
Content-Type: application/json

{
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

### **Image Analysis**
```http
POST /api/analyze/image
Content-Type: multipart/form-data

[image file]
```

### **Health Check**
```http
GET /
```

## 🎯 How It Works

### **1. Coordinate Analysis**
1. **User Input**: Enter latitude and longitude coordinates
2. **Map Visualization**: Location appears on interactive Google Map
3. **AI Analysis**: Backend processes coordinates with Gemini AI
4. **Risk Assessment**: Returns flood risk level, elevation, and recommendations
5. **Visual Feedback**: Color-coded risk zones on the map

### **2. Image Analysis**
1. **Image Upload**: User uploads terrain or satellite imagery
2. **AI Processing**: Gemini AI analyzes the image for flood indicators
3. **Risk Assessment**: AI provides detailed flood risk analysis
4. **Recommendations**: Actionable advice based on image analysis

### **3. AI Integration**
- **Gemini AI** processes both coordinate and image data
- **Contextual Analysis** considers geographical factors
- **Smart Recommendations** based on multiple data points
- **Natural Language** responses for user-friendly output

## 🔧 Development

### **Available Scripts**
```bash
npm run dev          # Start frontend only
npm run dev:full     # Start both frontend and backend
npm run backend      # Start backend only
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### **Backend Development**
```bash
cd backend
python start.py      # Start FastAPI server
```

### **Frontend Development**
```bash
npm run dev          # Start Next.js with hot reload
```

## 🌐 Deployment

### **Frontend (Vercel/Netlify)**
```bash
npm run build
# Deploy the .next folder
```

### **Backend (Render/Railway)**
```bash
cd backend
pip install -r requirements.txt
python start.py
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Maps API** for mapping services
- **Google Gemini AI** for intelligent analysis
- **shadcn/ui** for beautiful components
- **Tailwind CSS** for utility-first styling
- **FastAPI** for high-performance backend

## 📞 Support

If you have any questions or need help:
- **Open an issue** on GitHub
- **Check the documentation** in the `/docs` folder
- **Review the integration guide** in `INTEGRATION.md`

---

**Built with ❤️ using Next.js, FastAPI, and Google AI**
