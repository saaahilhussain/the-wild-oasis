import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Cabins from './pages/Cabins';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='dashboard' />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='account' element={<Account />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='cabins' element={<Cabins />} />
            <Route path='settings' element={<Settings />} />
            <Route path='users' element={<Users />} />
          </Route>

          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
