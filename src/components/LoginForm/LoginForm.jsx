import Button from "../Button/Button"
import Input from "../Input/Input"

import "./styles.css"

function LoginForm() {
    return (
        <form action="login-form-container">
            <p className="title">Login form</p>
            <div className="input-container">
                <input 
                    id="login-email"
                    label="Email"
                    placeholder="Enter your email"
                    name="email" />
                <input 
                    id="login-password"
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    type="password" />
            </div>
            <Button type="submit" name="Login"></Button>
        </form>
    );
}

export default LoginForm;