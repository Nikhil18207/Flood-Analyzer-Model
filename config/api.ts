// API Configuration
export const API_CONFIG = {
  // Development - Local backend
  development: {
    baseUrl: 'http://localhost:8000',
    endpoints: {
      coordinates: '/api/analyze/coordinates',
      image: '/api/analyze/image',
      health: '/'
    }
  },
  // Production - Remote backend
  production: {
    baseUrl: 'https://flood-analyser.onrender.com',
    endpoints: {
      coordinates: '/api/analyze/coordinates',
      image: '/api/analyze/image',
      health: '/'
    }
  }
};

// Get current environment
const isDevelopment = process.env.NODE_ENV === 'development';

// Export current config
export const CURRENT_API_CONFIG = isDevelopment 
  ? API_CONFIG.development 
  : API_CONFIG.production;

export const API_BASE_URL = CURRENT_API_CONFIG.baseUrl;
export const API_ENDPOINTS = CURRENT_API_CONFIG.endpoints;
