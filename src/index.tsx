import { render } from 'react-dom';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/theme/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
