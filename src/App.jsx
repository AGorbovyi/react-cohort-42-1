import './App.css';

// 3. Импортировать компонент Lesson_02 в App.js
import Lesson_02 from './lessons/lesson_02/Lesson_02';
import Lesson_03 from './lessons/lesson_03/Lesson_03';
import Lesson_04 from './lessons/Lesson_04/Lesson_04';
import Lesson_05 from './lessons/Lesson_05/Lesson_05';

//Homeworks:
import Homework02 from './homeworks/hw02/Homework02';
import Homework03 from './homeworks/hw03/Homework03';

//Consultations:
import Consultation_02 from './consultation/consultation02/Consultation_02';

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
      {/* <Homework03 /> */}
      {/* <Lesson_04/> */}
      {/* <Consultation_02/> */}
      <Lesson_05/>
    </div>
  );
}

export default App;
