import './App.css';
import Cta from './components/cta/Cta';
import GainMore from './components/gainMore/GainMore';
import Nav from './components/Nav/Nav';
import PowerData from './components/PowerData/PowerData';

function App() {
  return (
    <div className="App">
      <Nav />
      <GainMore />
      <Cta />
      <PowerData />
    </div>
  );
}

export default App;
