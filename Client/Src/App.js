import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './Component/Auth/Register';

import HomePage from './Component/Pages/HomePage';
import AdminLogin from './Component/AdminPanel/pages/login';
import AdminHome from './Component/AdminPanel/pages/AdminHome';
import AddUniversity from './Component/AdminPanel/pages/AddUniversity';
import ViewUniversity from './Component/AdminPanel/pages/ViewUniversity';
import EditUniversity from './Component/AdminPanel/pages/EditUniversity';
import AddEvent from './Component/AdminPanel/pages/AddEvents';
import ViewEvents from './Component/AdminPanel/pages/ViewEvents';
import EditEvents from './Component/AdminPanel/pages/EditEvent';
import PortalLogin from './Component/UniversityMembership/auth/login';
import UniversityMainPage from './Component/Pages/universityMainPage';
import UniversityIndividualPage from './Component/Pages/UniversityIndividualPage';
import Events from './Component/Pages/Events';
import PortalRequests from './Component/AdminPanel/pages/PortalRequests';
import HomePagePortal from './Component/UniversityMembership/Pages/HomePage';
import AddEventPortal from './Component/UniversityMembership/Pages/AddEvent';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/adminHome' element={<AdminHome />} />
        <Route path='/addUniversities' element={<AddUniversity />} />
        <Route path='/ViewUniversities' element={<ViewUniversity />} />
        <Route path='/EditUniversity/:id' element={<EditUniversity />} />
        <Route path='/addEvent' element={<AddEvent />} />
        <Route path='/viewEvents' element={<ViewEvents />} />
        <Route path='/editEvents/:id' element={<EditEvents />} />
        <Route path='/portalLogin' element={<PortalLogin />} />
        <Route path='/filteredUniversities' element={<UniversityMainPage />} />
        <Route
          path='/viewUniversity/:id'
          element={<UniversityIndividualPage />}
        />
        <Route path='/events' element={<Events />} />
        <Route path='/ViewRequests' element={<PortalRequests />} />
        <Route path='/portalHome' element={<HomePagePortal />} />
        <Route path='/AddEventPortal' element={<AddEventPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
