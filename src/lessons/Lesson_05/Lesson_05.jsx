import { v4 } from "uuid";
import { useState} from "react";
import Button from "../../components/Button/Button";

import "./styles.css";

// const number = [1, 2, 3, 4, 5];
// const newNumber = number.map((number) => {
//     return number * 2;
// });
// console.log(number);
// console.log(newNumber);

function Lesson_05() {
    const [ingredients, setIngedients] = useState([]);

    const ingredientButtonNames = [
        "Burger",
        "Fries",
        "Cola",
        "Salad",
        "Ketchup",
        "Ice-cream"
    ];

// в ingredientButtons мы будем хранить массив JSX компонентов
const ingredientButtons = ingredientButtonNames.map((ingredient) => {
    const addIngredient = () => {
        setIngedients((prevValue) => {
            return [...prevValue, ingredient]
        });
    };

    return (
        <div key={v4(4)} className="ingredient-button-control">
            <Button name={ingredient} onClick={addIngredient}/>
        </div>
    );
});

console.log(ingredientButtons);

const orderList = ingredients.map((ingr) => {
    return (
        <li key={v4()} className="ingredient">
            {ingr}
        </li>
    );
});

  return (
<div className="lesson05-wrapper">
    <div className="ingredient-buttons-container">
        {ingredientButtons}

        {/* <div className="ingredient-button-control">
          <Button name="Burger" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Fries" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Cola" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Salad" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Ketchup" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Ice-creem" />
        </div> */}
    </div>
    <div className="ingredients-container">
        <p className="ingredients-title">Your order</p>
            <ol>
                {orderList}
            </ol>
    </div>
</div>
  );
}

export default Lesson_05;