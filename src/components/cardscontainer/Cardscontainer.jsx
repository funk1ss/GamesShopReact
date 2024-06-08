import './Cardscontainer.css';
import Card from "../card/Card";

function Cardscontainer({ GamesList, InputValue }) {
    
    // Фильтрация списка игр по значению InputValue
    const filteredGames = GamesList.filter(item => 
        item.title.toLowerCase().startsWith(InputValue.toLowerCase())
    );

    return (
        <div className="main-background">
            <div className="container">
                <div className="main">
                    <div className="cards-container">
                        {filteredGames.map(item => (
                            <Card
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardscontainer;
