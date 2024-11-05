import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Add from './components/create/create';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Add/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
