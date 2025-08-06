import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Cabins from './pages/Cabins';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='account' element={<Account />} />
        <Route path='bookings' element={<Bookings />} />
        <Route path='cabins' element={<Cabins />} />
        <Route path='login' element={<Login />} />
        <Route path='settings' element={<Settings />} />
        <Route path='users' element={<Users />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
