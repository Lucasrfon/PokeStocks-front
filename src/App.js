import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/css/reset.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;