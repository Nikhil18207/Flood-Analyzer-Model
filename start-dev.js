#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Flood Analyzer Development Environment...\n');

// Start backend
console.log('🐍 Starting FastAPI Backend...');
const backend = spawn('python', ['start.py'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

// Wait a moment for backend to start
setTimeout(() => {
  console.log('\n⚛️  Starting Next.js Frontend...');
  const frontend = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down...');
    backend.kill();
    frontend.kill();
    process.exit();
  });

  frontend.on('close', (code) => {
    console.log(`\n❌ Frontend exited with code ${code}`);
    backend.kill();
    process.exit(code);
  });
}, 3000);

backend.on('close', (code) => {
  console.log(`\n❌ Backend exited with code ${code}`);
  process.exit(code);
});

console.log('✅ Both services are starting...');
console.log('📱 Frontend will be available at: http://localhost:3000');
console.log('🔧 Backend will be available at: http://localhost:8000');
console.log('📚 API docs will be available at: http://localhost:8000/docs');
console.log('\nPress Ctrl+C to stop both services\n');
