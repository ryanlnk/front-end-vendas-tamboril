import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
