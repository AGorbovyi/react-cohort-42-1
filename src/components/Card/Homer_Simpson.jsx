import './styles.css'
// import {user, getFullname} from './data'
// import getHobby from './data';
import getHobby, {user, getFullname} from './data';

// import всего что экспортируется из файла
import * as simpsonData from './data';

function Homer_Simpson() {

    const userHobby = getHobby();
    console.log(userHobby);
    console.log(simpsonData.default);

    // Вынесли эту информацию в отдельный файл data.js
    // const user = {
    //     avatarURL: "https://avatars.mds.yandex.net/i?id=b3c3038ea5f78114b7a104fa45bd097f501014cb-4216502-images-thumbs&n=13",
    //     firstName: 'Homer',
    //     lastName: 'Simpson',
    //     occupation: 'worker',
    //     hobby: 'doing nothing',
    // };
    
    // const getFullname = () => {
    //     return `${user.firstName} ${user.lastName}`
    // };

    return (
        <div className='card-container'>
            <p className='card-info'><u>User Card</u></p>

{/* {user.avatarURL ? (
        <img className="user_card_avatar" src={user.avatarURL} alt="Avatar" />
      ) : (
        <img
          className="user_card_avatar"
          src={
            "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"
          }
          alt="Avatar"
        />
      )} */}
      {/* Условный рендеринг */}
      {user.avatarURL && <img className="user_card_avatar" src={user.avatarURL} alt="Avatar" />}

            {/* <img className='user_card_avatar' src={user.avatarURL} alt="User avatar" /> */}
            <p className='card-info'>Full name: {getFullname()}</p>
            <p className='card-info'>occupation: {user.occupation}</p>
            <p className='card-info'>hobby: {user.hobby}</p>
        </div>
    );
}

export default Homer_Simpson;