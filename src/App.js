import './App.css';
import MainComponent from './components/MainComponent';
import CatNav from './components/catnav/CatNav';
import TopNav from './components/topnav/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </div>
  );
}

export default App;
