import { render } from 'react-dom';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/theme/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
