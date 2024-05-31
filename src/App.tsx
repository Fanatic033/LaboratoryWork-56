import React, {useState} from 'react';
import {Ingredient} from './Components/types.ts';
import IngredientBtn from './Components/IngredientBtn/IngredientBtn.tsx';
import {INGREDIENTS} from './Components/Ingridients.ts';
import Burger from './Components/BurgerConstructor/BurgerConstructor.tsx';
import './Burger.css'

const App: React.FC = () => {
  const [Ingredients, setIngredients] = useState<Ingredient[]>([]);

  return (
    <div >
      <div>
        <Burger ingredients={Ingredients} />
      {INGREDIENTS.map((ingredient) => (
        <IngredientBtn
          key={ingredient.name}
          ingredient={ingredient}
          OnClick={() => setIngredients([...Ingredients, ingredient])}
        />
      ))}
      </div>
    </div>
  );
};

export default App
