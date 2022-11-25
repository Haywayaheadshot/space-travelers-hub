import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/missions" element={<Missions />} />
          <Route exact path="/" element={<Rockets />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
