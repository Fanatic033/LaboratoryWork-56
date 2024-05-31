import meatImg from '../assets/meat.png';
import cheeseImg from '../assets/cheese.png';
import saladImg from '../assets/salad.png';
import baconImg from '../assets/bacon.png';

import {Ingredient} from './types';

export const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 50, image: meatImg},
  {name: 'Cheese', price: 50, image: cheeseImg},
  {name: 'Salad', price: 50, image: saladImg},
  {name: 'Bacon', price: 50, image: baconImg},
];