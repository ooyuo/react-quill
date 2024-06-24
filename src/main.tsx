import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SpinnerProvider } from './context/spinner/SpinnerContext.tsx';
import GlobalSpinner from './components/spinner/GlobalSpinner.tsx';
import App from './routes/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpinnerProvider>
      <React.Suspense fallback={<GlobalSpinner />}>
        <App />
      </React.Suspense>
    </SpinnerProvider>
  </React.StrictMode>
);
