import './Card.css'
import { Link } from 'react-router-dom';
function Card({id,img,title,price}){
    return(
        <div className="card">
            <img src={img} alt="" width={300}/>
            <div className="title"><h2>{title}</h2></div>
            <div className="price"><h3>{price}</h3></div>

            <div className="card-buy">

                    <div className="button-container">
                        <Link to={{
                            pathname: '/details',
                            search: `?id=${encodeURIComponent(id)}`,
                        }}><button>Подробнее</button></Link>
                    </div>

            </div>

        </div>
    );
}
export default Card;