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
    id: "2",
    img: "./doom.jpg",
    year: "2010",
    title: "Doom Eternal",
    description: "",
    price: "10$",
  },
    {
    id: "3",
    img: "./doom.jpg",
    year: "2010",
    title: "Doom Eternal",
    description: "",
    price: "10$",
  },
  {
    id: "4",
    img: "./doom.jpg",
    year: "2010",
    title: "Doom Eternal",
    description: "",
    price: "10$",
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
