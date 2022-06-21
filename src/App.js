import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className='"px-6 pt-6 2xl:container mx-auto"'>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
