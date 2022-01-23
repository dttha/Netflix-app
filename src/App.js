import logo from './logo.svg';
import './App.css';
import StartHome from './pages/StartHome';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartHome />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
