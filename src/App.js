import './App.css';
import Navbar from './components/Navbar';
import DeviceTable from './components/DeviceTable';

function App() {
  const data = require('./components/DeviceInfo');
  return (
    <div id="root">
      <Navbar />
    </div>
  );
}

export default App;
