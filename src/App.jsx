import MainPage from './pages/MainPage';
import Routing from './routes/Routing';
import { LangProvider } from './context/LangProvider';
import './App.css';

function App() {
  return (
    <>

      <LangProvider>

        <Routing>

          <MainPage />

        </Routing>

      </LangProvider>

    </>
  );
}

export default App;
