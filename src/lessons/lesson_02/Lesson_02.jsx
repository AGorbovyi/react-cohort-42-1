// Алгоритм действий
// 1. создание компонента
// 2. экспортировать компонент из файлу наружу
// 3. Импортировать компонент Lesson_02 в App.js
// 4. Возвращаем компонент Lesson_02 из компонента App.js

import './styles.css';
import Button from '../../components/Button/Button';

function Lesson_02() {
    // Объект пользователя пришел с сервера
    const user = {
        firstName: 'John',
        lastName: 'Johnson',
        age: '40',
        job: 'Frontend Developer',
        isAdmin: false,
        avatarURL: "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg"
    };

    const getFullName = () => {
        return `${user.firstName} ${user.lastName}`

    }


    return (
    <div className="lesson02_wrapper">
        <h1 className="page-title">Lesson 02</h1>
        
        <div className='.button-control'><Button /></div>
        <div className='.button-control'><Button /></div>
        <div className='.button-control'><Button /></div>

        <div className='card-container'>
            <p className='card-info'><u>User Card</u></p>
            <img className='avatar' src={user.avatarURL} alt="User avatar" />
            <p className='card-info'>Full name: {getFullName()}</p>
            <p className='card-info'>Age: {user.age}</p>
            <p className='card-info'>Job: {user.job}</p>
            <p className='card-info'>Role: {user.isAdmin ? 'Admin' : 'Not Admin'}</p>
        </div>
    </div>
    );
}

export default Lesson_02;