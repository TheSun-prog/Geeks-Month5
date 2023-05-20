import Container from "../../components/Container/Container";
import {useNavigate} from "react-router-dom";


const Login = ({  }) => {

    const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        navigate('/profile')
    }

    return(
        <Container sectionName={"login"}>
            <form onSubmit={submitForm}>
                <input type="text" placeholder={"username"}/>
                <input type="password" placeholder={"password"}/>
                <button type={"submit"}>Submit</button>
            </form>
        </Container>
    )
}

export default Login