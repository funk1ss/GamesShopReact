import Hat from "../hat/Hat";
import Cardscontainer from "../cardscontainer/Cardscontainer";


function Main({GamesList}) {
  return (
    <div className="Main">
    
      <Hat></Hat>
      <Cardscontainer GamesList={GamesList}></Cardscontainer>
    </div>
    
  );
}

export default Main;
