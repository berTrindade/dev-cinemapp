
import GlobalStyle from './styles/global';
import Routes from './routes/routes'
import { MoviesProvider } from './context/MoviesContext';
import { ToastProvider } from './context/ToastContext';

const App: React.FC = () => {
  return (
    <>
      <ToastProvider>
        <MoviesProvider>
          <Routes />
        </MoviesProvider>
      </ToastProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
