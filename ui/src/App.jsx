
import './App.css';
import AdminPage from './pages/AdminPage';

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
