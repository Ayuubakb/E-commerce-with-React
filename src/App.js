import './App.css';
import Nav from './Components/Nav';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { useEffect, useState } from 'react';
import contextShare from './Fonction/contextShare';

function App() {
  const [addedItems,setAddedItems] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <contextShare.Provider value={{addedItems,setAddedItems}}>
      <Routes>
          <Route  element={<Nav/>}>
              <Route index element={<Home />}></Route>
              <Route path='/Register' element={<Register/>}></Route>
              <Route path='/Cart' element={<Cart />}></Route>
          </Route>
        </Routes>
        </contextShare.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
