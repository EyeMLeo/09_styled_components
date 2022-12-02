import './App.css';
import Cta from './components/cta/Cta';
import GainMore from './components/gainMore/GainMore';
import Nav from './components/Nav/Nav';
import NotePad_left_cta from './components/NotePad_left_cta/NotePad_left_cta';
import NotePad_Right_cta from './components/NotePad_Right_Icons/NotePad_Right_Icons';
import PowerData from './components/PowerData/PowerData';

function App() {
  return (
    <div className="App">
      <Nav />
      <GainMore />
      <Cta />
      <PowerData />
      <NotePad_left_cta />
      <NotePad_Right_cta />
    </div>
  );
}

export default App;
