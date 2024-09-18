import './styles.css'

function Button({type = "button", name}) {
    return (
        <button className='button-component' type={type}>
            {name}
        </button>
    );
}

export default Button;