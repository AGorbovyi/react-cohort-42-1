import { useState } from 'react';
import Button from '../../components/Button/Button';

import './styles.css';

function Feedback () {

    // const [count, setCount] = useState(0);
    // const [hover, setHover] = useState(false);

    // let className = 'counter';
    // if (hover) {
    //   className += ' hover';
    // }
    // return (
    //     <div
    //       className={className}
    //       onPointerEnter={() => setHover(true)}
    //       onPointerLeave={() => setHover(false)}
    //     >
    //       <h1>{score}</h1>
    //       <button onClick={() => setScore(score + 1)}>
    //         Add one
    //       </button>
    //     </div>
    //   );
    // const [isPaused, setIsPaused] = useState(false);
    // return (
    //   <div>
    //     {isPaused ? (
    //       <p>See you later!</p> 
    //     ) : (
    //       <Counter /> 
    //     )}
    //     <label>
    //       <input
    //         type="checkbox"
    //         checked={isPaused}
    //         onChange={e => {
    //           setIsPaused(e.target.checked)
    //         }}
    //       />
    //       Take a break
    //     </label>
    //   </div>
    // );


    const [likes, setLike] = useState(0);
    const like = () => {
        setLike((likes) => {
            return ++likes;
        });
    }

    const [dislikes, setDislike] = useState(0);
    const dislike = () => {
        setDislike((dislikes) => {
            return ++dislikes;
        });
    }

    // const [resetValue, setReset] = useState(0);
    // const reset = () => {
    //     setReset((previousValue) => {
    //         return ++previousValue;
    //     });
    // }
    const [resetValue, setReset] = useState(false);
    const reset = () => {
        setReset(() => {
            return null;
        });
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
                <Button name='Reset Results' onClick={reset} type='reset'/>
            </div>
        </div>
    );
}

export default Feedback;