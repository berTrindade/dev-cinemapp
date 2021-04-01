
import './styles/global.css'
import Routes from './routes/routes'
import { MoviesProvider } from './context/MoviesContext';

function App() {
  return (
      <MoviesProvider>
        <Routes />
      </MoviesProvider>
  );
}

export default App;
