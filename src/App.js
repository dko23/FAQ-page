
import './App.css';
import Main from './Pages/Main';
import Pack from './Pages/Pack';
import Navbar from './Pages/Navbar';
import answer from './images/questions.jpg'
import search from './images/search.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App main-body">
      
      <Router>
        {<Navbar/>}
        <Routes>
          <Route path='/Home' element={<Main answer={answer} />} />
          <Route path='/FAQ' element={<Pack search={search} />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
