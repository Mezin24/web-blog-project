import { render } from 'react-dom';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/theme/ThemeProvider';

render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
