import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
