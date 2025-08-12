# Frontend-Backend Integration Guide

## 🚀 Quick Start

### Option 1: Start Both Services Together (Recommended)
```bash
npm run dev:full
```

This will start both the FastAPI backend and Next.js frontend simultaneously.

### Option 2: Start Services Separately
```bash
# Terminal 1: Start Backend
npm run backend

# Terminal 2: Start Frontend  
npm run dev
```

## 🌐 Service URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:
```env
# Backend API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here

# Gemini AI API Key (for backend)
GEMINI_API_KEY=your_key_here
```

### API Endpoints
The frontend automatically switches between local and production backends based on the environment:
- **Development**: Uses local backend (localhost:8000)
- **Production**: Uses remote backend (flood-analyser.onrender.com)

## 📡 API Integration

### Coordinate Analysis
```typescript
POST /api/analyze/coordinates
Body: { latitude: number, longitude: number }
```

### Image Analysis
```typescript
POST /api/analyze/image
Body: FormData with image file
```

## 🐛 Troubleshooting

### Backend Won't Start
1. Check if Python packages are installed: `pip install -r backend/requirements.txt`
2. Verify Python version: `python --version` (should be 3.8+)
3. Check if port 8000 is available

### Frontend Can't Connect to Backend
1. Ensure backend is running on port 8000
2. Check CORS configuration in backend
3. Verify API_BASE_URL in frontend

### CORS Issues
The backend is configured to allow all origins in development. For production, update the CORS middleware in `backend/main.py`.

## 🔄 Development Workflow

1. **Start both services**: `npm run dev:full`
2. **Make changes** to frontend (Next.js) or backend (FastAPI)
3. **Auto-reload**: Both services will automatically reload on changes
4. **Test API**: Use the Swagger UI at http://localhost:8000/docs
5. **Stop services**: Press `Ctrl+C` in the terminal

## 📁 Project Structure
```
flood-analyzer-app/
├── app/                    # Next.js frontend
├── components/            # React components
├── backend/               # FastAPI backend
│   ├── main.py           # Main API server
│   ├── start.py          # Startup script
│   └── requirements.txt  # Python dependencies
├── config/                # API configuration
├── start-dev.js          # Development startup script
└── package.json          # Node.js dependencies
```
