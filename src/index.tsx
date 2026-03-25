import ReactDOM from 'react-dom/client';
import App from './App';
import CatsProvider from './app/providers/CatsProvider';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <CatsProvider>
      <App />
    </CatsProvider>
  </BrowserRouter>
);
