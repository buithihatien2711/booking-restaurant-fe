import Home from '../routes/Home';
import './App.scss';
import Login from './Auth/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import { path } from '../utils/constant';
import RestaurantItem from '../components/Restaurant/RestaurantItem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.HOME} element={<Home/>} >
            <Route index element={<HomePage/>} />
          </Route>
          <Route path='/test' element={<RestaurantItem/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
