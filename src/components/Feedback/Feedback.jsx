import Button from '../../components/Button/Button';

import './styles.css';

function Feedback () {
    return (
        <div className="counter-wrapper">
        <div className="button-control">
          <Button type="submit" name="Like" onClick={onMinus} />
        </div>
        <p className="count">{count}</p>
        <div className="button-control">
          <Button type="submit" name="Dislike" onClick={onPlus}/>
        </div>
        <div className="button-control">
          <Button type="submit" name="Reset Results" onClick={onPlus}/>
        </div>
      </div>
    );
}

export default Feedback;