import Button from "../Button/Button";
import { useState } from "react";

import "./styles.css";

function Counter() {
    // useState() - функция-хук, которая позволяет следить за состоянием компонента
    // useState() возвращает массив из 2 элементов:
    // - первый элемент - это переменная состояния
    // - второй элемент - это функция, которая изменяет это состояние
    // !!! По умолчанию первый элемент равен undefined, для того, чтобы задать значение по умолчанию, 
    // нам нужно передать нужное нам значение как атрибут в useState

    
    const [count, setCount] = useState(0);

    const onPlus = () => {
        // prevValue - это значение, которое лежит в count на момент вызова функции setCount
        setCount((prevValue) => {
            return prevValue + 1;
        })
        // console.log(count);
    };

    const onMinus = () => {
        setCount((prevValue) => {
            return --prevValue;
        })
        // console.log(count);
    };

    console.log(count);

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus}/>
      </div>
    </div>
  );
}

export default Counter;