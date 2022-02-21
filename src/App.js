import './App.css';
import StartHome from './pages/StartHome';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DetailFilm from './components/DetailFilm';
import Account from './pages/Account';
import TvShow from './pages/TvShow';
import Movie from './pages/Movie';
import Favorite from './pages/Favorite';
import Loading from './components/Loading'
import { useSelector } from 'react-redux';
import TrailerModal from './components/TrailerModal';
function App() {
  const loading = useSelector((state) => state.user.isLoading)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartHome />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
          <Route path="home" element={<Home />}>
            <Route path="movie-detail/:id/:type" element={<DetailFilm />}></Route>
          </Route>
          <Route path="account" element={<Account />}>
            <Route path="movie-detail/:id/:type" element={<DetailFilm />}></Route>
          </Route>
          <Route path="tvshow" element={<TvShow />}>
            <Route path="movie-detail/:id/:type" element={<DetailFilm />}></Route>
          </Route>
          <Route path="movie" element={<Movie />}>
            <Route path="movie-detail/:id/:type" element={<DetailFilm />}></Route>
          </Route>
          <Route path="favorite" element={<Favorite />}>
            <Route path="tv/:id" element={<DetailFilm />}></Route>
            <Route path="movie-detail/:id/:type" element={<DetailFilm />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {loading && <Loading />}
      <TrailerModal />
    </div>
  );
}

export default App;
