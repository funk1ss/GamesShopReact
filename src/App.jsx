import './App.css';
import Hat from './components/hat/Hat';
import Cardscontainer from './components/cardscontainer/Cardscontainer';

const GamesList = [
  {
    img: "./doom.jpg",
    title: "Doom Eternal",
    price: "10$",
  },
  {
    img: "./doom.jpg",
    title: "Doom Eternal",
    price: "10$",
  },
    {
    img: "./doom.jpg",
    title: "Doom Eternal",
    price: "10$",
  },
  {
    img: "./doom.jpg",
    title: "Doom Eternal",
    price: "10$",
  },
]
function App() {
  return (
    <div className="App">
      <Hat></Hat>
      <Cardscontainer GamesList={GamesList}></Cardscontainer>
    </div>
  );
}

export default App;
