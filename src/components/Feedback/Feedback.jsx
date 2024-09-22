import { useState } from 'react';
import Button from '../../components/Button/Button';

import './styles.css';

function Feedback () {

    const [likes, setLike] = useState(0);
    const like = () => {
        setLike((prevValue) => {
            return ++prevValue;
        });
    }

    const [dislikes, setDislike] = useState(0);
    const dislike = () => {
        setDislike((prevValue) => {
            return ++prevValue;
        });
    }

    const reset = () => {
        setLike(0);
        setDislike(0);
        }
    
    return (
        <div className='feedback-form-wrapper'>
            <div className='button-control'>
                <Button name='Like' onClick={like}/>
                <div className='counter'>{likes}</div>
            </div>
            <div className='button-control'>
                <Button name='Dislike' onClick={dislike}/>
                <div className='counter'>{dislikes}</div>
            </div>
            <div className='button-control'>
                <Button name='Reset Results' onClick={reset}/>
            </div>
        </div>
    );
}

export default Feedback;