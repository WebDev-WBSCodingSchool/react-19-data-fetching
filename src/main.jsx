import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from '@/components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback={<p>💀 The entire app went kaputt...</p>}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
