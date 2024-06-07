import './Cardscontainer.css'
import Card from "../card/Card";

function Cardscontainer ({GamesList}){
    return(
        <div className="main-background">
            <div className="container">
                <div className="main">
                    <div className="cards-container">
                        {GamesList.map(item =>(
                            <Card 
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