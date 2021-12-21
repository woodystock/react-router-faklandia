import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import FaklandiaRouter from './routes/FaklandiaRouter';
import ErrorFallback from './fallback/ErrorFallback';
import { MisdemeanersProvider } from './context/MisdemeanoursContext';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MisdemeanersProvider>
        <BrowserRouter>
          <FaklandiaRouter />
        </BrowserRouter>
      </MisdemeanersProvider>
    </ErrorBoundary>
  );
}

export default App;
