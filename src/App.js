import { Fragment } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Singlehotel from './pages/Singlehotel/Singlehotel';
import { Route,Routes } from 'react-router-dom';
import Searchresult from './pages/SearchResults/Searchresult';
function App() {
  return (
    <Fragment>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels/:hotelname/:hotelId' element={<Singlehotel/>}/>
      <Route path='/hotels/:address' element={<Searchresult/>}/>
      <Route />
    </Routes>
     
    </Fragment>
  );
}

export default App;
