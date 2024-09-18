import './App.css';

// 3. Импортировать компонент Lesson_02 в App.js
import Lesson_02 from './lessons/lesson_02/Lesson_02';
import Lesson_03 from './lessons/lesson_03/Lesson_03';

//Homeworks:
import Homework02 from './homeworks/hw02/Homework02';
import Homework03 from './homeworks/hw03/Homework03';

//Consultations:

// Правила компонентов:
// 1. Название пишем с большой буквы
// 2. Компонент - это функция и она должна возвращать JSX
// 3. JSX - синтаксический сахар, позволяющий возвращать HTML элементы из компонента, а также прописать логику прямо в HTML

function App() {
  return (
    <div className="App">
      {/* <Lesson_02 /> */}
      {/* <Homework02 /> */}
      {/* <Lesson_03 /> */}
      <Homework03 />
    </div>
  );
}

export default App;
