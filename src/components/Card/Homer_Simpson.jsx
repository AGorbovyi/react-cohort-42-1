import './style/styles.css'

function Homer_Simpson() {

    const user = {
        avatarURL: "https://avatars.mds.yandex.net/i?id=b3c3038ea5f78114b7a104fa45bd097f501014cb-4216502-images-thumbs&n=13",
        fullName: 'Homer Simpson',
        occupation: 'worker',
        hobby: 'doing nothing',
    };
    
    return (
        <div className='card-container'>
            <p className='card-info'><u>User Card</u></p>
            <img className='user_card_avatar' src={user.avatarURL} alt="User avatar" />
            <p className='card-info'>Full name: {user.fullName}</p>
            <p className='card-info'>occupation: {user.occupation}</p>
            <p className='card-info'>hobby: {user.hobby}</p>
        </div>
        );





}

export default Homer_Simpson;