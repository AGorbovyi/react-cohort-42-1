    // export const user = {
    //     avatarURL: "https://avatars.mds.yandex.net/i?id=b3c3038ea5f78114b7a104fa45bd097f501014cb-4216502-images-thumbs&n=13",
    //     firstName: 'Homer',
    //     lastName: 'Simpson',
    //     occupation: 'worker',
    //     hobby: 'doing nothing',
    // };
    
    // export const getFullname = () => {
    //     return `${user.firstName} ${user.lastName}`
    // };

    const user = {
        avatarURL: "https://avatars.mds.yandex.net/i?id=b3c3038ea5f78114b7a104fa45bd097f501014cb-4216502-images-thumbs&n=13",
        firstName: 'Homer',
        lastName: 'Simpson',
        occupation: 'worker',
        hobby: 'doing nothing',
    };
    
    const getFullname = () => {
        return `${user.firstName} ${user.lastName}`
    };

    const getHobby = () => {
        return user.hobby;
    }

    const sum = () => {
        return 100 + 200;
    }

    export {user, getFullname};

    export default getHobby;