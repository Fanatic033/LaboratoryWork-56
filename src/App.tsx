import React, {useState} from 'react';
import {Ingredient} from './Components/types.ts';
import IngredientBtn from './Components/IngredientBtn/IngredientBtn.tsx';
import {INGREDIENTS} from './Components/Ingridients.ts';
import Burger from './Components/BurgerConstructor/BurgerConstructor.tsx';
import './Burger.css'
import Total from './Components/Total.tsx';

const App: React.FC = () => {
  const [Ingredients, setIngredients] = useState<Ingredient[]>([]);

  const removeIngredient = (index:number) => {
    setIngredients(prevIngredients => prevIngredients.filter((_, i) => i !== index));
  };

  const totalCount = () =>{
    return Ingredients.reduce((acc, i)=> acc += i.price,30)
  }
  return (
    <div >
      <div>
        <Burger ingredients={Ingredients}>
        </Burger>
        <Total total={totalCount()} />
      {INGREDIENTS.map((ingredient,index) => (
        <IngredientBtn
          key={ingredient.name}
          ingredient={ingredient}
          count={Ingredients.filter(i => i === ingredient).length}
          OnClick={() => setIngredients([...Ingredients, ingredient])}
          removeIngredient={() => removeIngredient(index)}
        />
      ))}
      </div>
    </div>
  );
};

export default App
