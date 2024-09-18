import './styles.css'

// function Button() {
//     return <button className='button-component'>Login</button>
// }

// export default Button;

function Button({type = "button", name}) {
    return (
        <button className='button-component' type={type}>
            {name}
        </button>
    );
}

export default Button;