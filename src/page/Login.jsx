export default function Login() {
    return (
        <div className="bgSection">
            <div className="mainLoginSection">
                <div className="loginImg">
                    <img src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="loginInput">
                    <button>/</button>
                    <div className="inputText">
                        <h2>Log in and Stay Connected</h2>
                        <p>Our secure login process ensures the confidentiality of your information. Log in today and stay connected to your finances, anytime and anywhere.</p>
                        <form className="loginForm">
                            <input type="email" />
                            <input type="password" />
                            <p>Forgot Password?</p>
                            <button className="themeBtn">Login</button>
                        </form>
                        <h5>Don't Have An Account?  <p>Register Now</p></h5>
                        <p>By clicking Login you are agreeing with our</p>
                        <h5>Terms of feature</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}