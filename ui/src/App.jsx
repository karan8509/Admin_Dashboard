
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import Navbar from './component/Navbar';
import "./App.css"
import HomePage from './pages/HomePage';
const App = () => {
  return (
    <div className="app-container">
      {/* <Navbar />
      <div className="main-contain">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/secret-dashboard' element={<AdminPage />} />
      </Routes> */}
   
      {/* </div> */}
   <AdminPage />
    </div>
  );
};

export default App;
