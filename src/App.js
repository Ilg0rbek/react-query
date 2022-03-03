import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Character from './components/Character';


function App() {

  const queryCilent = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryCilent}>
        <Character />
      </QueryClientProvider>
    </div>
  );
}

export default App;
