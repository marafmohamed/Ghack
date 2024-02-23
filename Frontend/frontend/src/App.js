import Accueil from './pages/accueil';
import Login from './pages/login';
import Sidebar from './components/sidebar';
import Mails from './pages/Mails'

function App() {
  return (
    <div className="App flex">
      <Sidebar/>
      <Mails></Mails>
    </div>
  );
}

export default App;
