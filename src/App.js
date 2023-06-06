import logo from './logo.svg';
import './App.css';
import Blog from './Component/Blog';
import Readmore from './Component/Readmore'
import Addblog from './Component/Addblog'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Blog/>}></Route>
            <Route path='/blog/:id' element={<Readmore/>}></Route>
            <Route path='/addblog' element={<Addblog/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
