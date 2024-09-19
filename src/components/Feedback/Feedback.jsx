import { useState } from 'react';
import Button from '../../components/Button/Button';

import './styles.css';

function Feedback () {

    
    return (
        <div className='feedback-form-wrapper'>
            <div className='button-control'>
                <Button name='Like' onClick={like}/>
                <div className='counter'>{count}</div>
            </div>
            <div className='button-control'>
                <Button name='Dislike' onClick={dislike}/>
                <div className='counter'>{count}</div>
            </div>
            <div className='button-control'>
                <Button name='Reset Results' onClick={reset}/>
            </div>
        </div>
    );
}

export default Feedback;