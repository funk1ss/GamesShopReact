import React from 'react';
import { useLocation } from 'react-router-dom';
import './details.css';
import Swal from 'sweetalert2';

function Details({ GamesList }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const game = GamesList.find(item => item.id === id);

  const BuyAllert = () => {
    Swal.fire({
      title: 'Ура!',
      text: 'Вы приобрели игру',
      icon: 'success',
      confirmButtonText: 'Спасибо'
    });
  };

  if (game) {
    return (
      <div className="details-back">
        <div className="container">
          <div className="details">

            <div className="left-block">
              <img src={game.img} alt="" width={400} />

              <h2>{game.title}</h2>

              <p>Год выпуска: {game.year}</p>

              <p>Цена: {game.price}</p>

              <button onClick={BuyAllert}>Оформить покупку</button> 
            </div>

            <div className="right-block">
              <p>{game.description}</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Details;
