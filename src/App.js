import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import FaklandiaRouter from './routes/FaklandiaRouter';
import ErrorFallback from './fallback/ErrorFallback';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <FaklandiaRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
