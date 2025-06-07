import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from '../pages/CreateUser';
import EditUser from '../pages/EditUser';
import UserDetails from '../pages/UserDetails';
import './App.css';
import Home from '../pages/home';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
