import Home from '../routes/Home';
import './App.scss';
import Login from './Auth/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import { path } from '../utils/constant';
import RestaurantDetail from '../components/Restaurant/RestaurantDetail';
import NotFound from './NotFound/NotFound';
import Reservation from '../components/Reservation/Reservation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.HOME} element={<Home/>} >
            <Route index element={<HomePage/>} />
            <Route path="/restaurants/:id" element={<RestaurantDetail/>} />
            
          </Route>
          <Route path={path.NOTFOUND} element={<NotFound/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
