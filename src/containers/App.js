import Home from '../routes/Home';
import './App.scss';
import Login from './Auth/UserLogin/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import { path } from '../utils/constant';
import RestaurantDetail from '../components/Restaurant/RestaurantDetail';
import NotFound from './NotFound/NotFound';
import Reservation from '../components/Reservation/Reservation';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeOwner from '../routes/HomeOwner';
import OwnerHomepage from './OwnerHomepage/OwnerHomepage';
import OwnerLogin from './Auth/OwnerLogin/OwnerLogin';
import OwnerNavBar from '../components/OwnerNavBar/OwnerNavBar';
import ManageReservation from './System/Owner/Reservation/ManageReservation';
import ReservationDetail from './System/Owner/ReservationDetail/ReservationDetail'
import OwnerRegister from './Auth/OwnerRegister/OwnerRegister';
import RestaurantRegister from './Auth/OwnerRegister/RestaurantRegister';
import UploadImage from '../components/UploadImage/UploadImage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path={path.OWNERLOGIN} element={<OwnerLogin />} />
          <Route path={path.OWNERREGISTER} element={<OwnerRegister />} />
          <Route path={'/register/restaurant'} element={<RestaurantRegister/>} />

          <Route path={path.HOMEOWNER} element={<HomeOwner />}>
            <Route index element={<OwnerHomepage />} />
            <Route
              path="/business/reservation/:id"
              element={<ReservationDetail />}
            />
            {/* <Route path="/business/reservationdetail" element={<ReservationDetail/>} /> */}
          </Route>

          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.HOME} element={<Home />}>
            <Route index element={<HomePage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetail />} />
          </Route>

          <Route path={path.NOTFOUND} element={<NotFound />} />

          <Route path="/reservation" element={<Reservation />} />
          <Route path="/navbar" element={<OwnerNavBar />} />
          <Route path="/uploadimage" element={<UploadImage/>} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
