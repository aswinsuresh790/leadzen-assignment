import { Routes, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Components/Box'
import ViewDetails from './Components/ViewDetails';
import Footer from './Components/Footer';

import Home from './Pages/Home';
function App() {
  return (
    <div className="App">


  <Routes>
    <Route path='/'element={<Home/>} ></Route>
    <Route path='/:id'element={<Home/>} ></Route>
    
  </Routes>

    </div>
  );
}

export default App;
