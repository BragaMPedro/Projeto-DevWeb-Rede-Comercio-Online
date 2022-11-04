import { useContext, useState } from "react"
import AuthContext from "../../context/Auth"
import { Container } from "./LoginStyled"

export function Login() {
    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(){
        signIn(email, password)
    }

    return (
        <Container>
            <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">             
                    <input type="text" name="" required=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <label>E-mail</label> 
                </div>

                <div class="user-box">
                    <input type="password" name="" required=""
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}/> 
                        <label>Password</label>
                </div>

                <div class="button-form">
                    <a id="submit" onClick={handleSignIn}>
                        Entrar
                    </a>
                </div>

                <div id="register">
                    Ainda não tem uma conta ?
                    <a href="#">
                        Registre-se
                    </a>
                </div>
            </form>
            </div>
        </Container>
    )
}