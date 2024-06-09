import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/main';
import Details from './components/details/details';

const GamesList = [
  {
    id: "1",
    img: "./doom.jpg",
    year: "2010",
    title: "Doom Eternal",
    description: "DOOM — это научно-фантастическая видеоигра в жанре ужасов от первого лица, впервые выпущенная в 1993 году и портированная на множество различных игровых консолей, включая Super Nintendo Entertainment System (SNES). Известный боевик с видом от первого лица.",
    price: "10$",
  },
  {
    id: "4",
    img: "./far-cry3.jpg",
    year: "2012",
    title: "Far Cry 3",
    description: "Far Cry 3 — шутер от первого лица с открытым миром, события которого происходят на острове, не похожем на другие. Там, где тяжело вооруженные военачальники обмениваются рабами. Там, где на нежеланных гостей охотятся за вознаграждение. И когда вы берете на себя отчаянную миссию по спасению своих друзей, приходит осознание того, что единственный способ избежать этой черни — встретиться с ней лицом к лицу.",
    price: "12$",
  },
  
]

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main GamesList={GamesList}/>} />
          <Route path="/details" element={<Details GamesList={GamesList}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
