import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Medicine from './Pages/Medicine/Medicine';
import About from './Pages/About/About';
import NotFound from './components/NotFound/NotFound';
import Login from './Pages/Login/Login';
import NavBar from './Shared/Header/NavBar';
import Service from './Pages/Services/Service';
import ServiceDatails from './Pages/Services/ServiceDatails';
import HomeServices from './Pages/Home/HomeServices';
import Footer from './Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            {/* Pages Here */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/:name' element={<ServiceDatails></ServiceDatails>}></Route>
            <Route path='/home-services' element={<HomeServices></HomeServices>}></Route>
            <Route path='/services' element={<PrivateRoute><Services></Services></PrivateRoute>}></Route>
            <Route path='/services/:name' element={<ServiceDatails></ServiceDatails>}></Route>
            <Route path='/medicine' element={<PrivateRoute><Medicine></Medicine></PrivateRoute>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/Login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            {/* components here */}

            <Route path='/service' element={<Service></Service>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
