import Home from '../routes/Home';
import './App.scss';
import Login from './Auth/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import { path } from '../utils/constant';
import RestaurantItem from '../components/Restaurant/RestaurantItem';
import RestaurantDetail from '../components/Restaurant/RestaurantDetail';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.HOME} element={<Home/>} >
            <Route index element={<HomePage/>} />
          </Route>
          <Route path='/test' element={<RestaurantDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
