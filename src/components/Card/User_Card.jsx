import './styles.css'

// function User_Card(props) {
//     // PROPS
//     // 1. props - это объект
//     // 2. props - возможность передавать данные из одного компонента (родительского компонента) в другой (дочерний)

//     const getUserName = () => {
//         return `${props.firstName} ${props.lastName}`;
//     };
    
//     console.log(props);

//     return (
//         <div className='card-container'>
//             <p className='card-info'><u>User Card</u></p>
//             <img className='user_card_avatar' src={props.avatarURL} alt="User avatar" />
//             <p className='card-info'>Full name: {getUserName()}</p>
//             <p className='card-info'>job: {props.job}</p>
//             <p className='card-info'>hobby: {props.hobby}</p>
//         </div>
//     );
// }


// вариант без props, с указанием ключей
    function User_Card({firstName, lastName, avatarURL, job, hobby = "No Hobby"}) {
    
        const getUserName = () => {
            return `${firstName} ${lastName}`;
        };
    
        return (      
            <div className='card-container'>
                <p className='card-info'><u>User Card</u></p>
                <img className='user_card_avatar' src={avatarURL} alt="User avatar" />
                <p className='card-info'>Full name: {getUserName()}</p>
                <p className='card-info'>job: {job}</p>
                <p className='card-info'>hobby: {hobby}</p>
            </div>
        );
    }
    
export default User_Card;