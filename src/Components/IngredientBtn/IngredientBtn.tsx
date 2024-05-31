import React from 'react';
import {Ingredient} from '../types.ts';

interface Props{
  ingredient: Ingredient;
  OnClick(): void;
}
const IngredientBtn:React.FC<Props> = ({ingredient,OnClick}) => {
  return (
    <div>
    <button onClick={OnClick}>
      <img src={ingredient.image} alt={ingredient.name} style={{ width: '100px' }} />
      <p>{ingredient.name}</p>
    </button>
    </div>
  );
};

export default IngredientBtn;