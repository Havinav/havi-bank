
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Transfer from './components/Transfer';
import User from './components/User';
import NewAccount from './components/NewAccount';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
         <Route path='/login' element={<Login />} />
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/tarnsfer' element={<Transfer />} />
         <Route path='/user' element={<User />} />
         <Route path='/new-account' element={<NewAccount />} />
      </Routes>
    </div>
  );
}

export default App;
