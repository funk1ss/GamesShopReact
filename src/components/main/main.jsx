import Hat from "../hat/Hat";
import Cardscontainer from "../cardscontainer/Cardscontainer";
import React, { useState } from 'react';

function Main({GamesList}) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(value) {
    setInputValue(value);
  };
  
  return (
    <div className="Main">
      <Hat onInputChange={handleInputChange}></Hat>
      <Cardscontainer GamesList={GamesList} InputValue={inputValue}></Cardscontainer>
    </div>
    
  );
}

export default Main;
