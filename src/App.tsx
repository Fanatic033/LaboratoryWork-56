import React, {useState} from 'react';
import {Ingredient} from './Components/types.ts';
import IngredientBtn from './Components/IngredientBtn/IngredientBtn.tsx';
import {INGREDIENTS} from './Components/Ingridients.ts';

const App: React.FC = () => {
  const [Ingredients, setIngredients] = useState<Ingredient[]>([]);

  return (
    <>
      {INGREDIENTS.map((ingredient) => (
        <IngredientBtn
          key={ingredient.name}
          ingredient={ingredient}
          OnClick={() => setIngredients([...Ingredients, ingredient])}
        />
      ))}
    </>
  );
};

export default App
