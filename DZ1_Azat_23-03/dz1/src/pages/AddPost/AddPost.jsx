import Container from "../../components/Container/Container";
import {useEffect, useState} from "react";
import {getRequest, postRequest} from "../../api/fetchPosts";
import {useNavigate} from "react-router-dom";


const AddPost = ({  }) => {

    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')
    const [ lastId, setLastId ] = useState(101)
    const navigate = useNavigate()

      useEffect(() => {
        getRequest().then((data) => {
            setLastId(data.length + 1)
        })
    }, [])


    const handleInputTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleInputBody = (event) => {
        setBody(event.target.value)
    }

    const handleClick = () => {
        const json = {
            userId: 11,
            id: lastId,
            title: title,
            body: body
        }
        setLastId(prevState => prevState += 1)
        setTitle('')
        setBody('')

        postRequest(json)
        navigate('/')

    }

    return(
        <Container sectionName={"add-post"}>
            <input type="text" placeholder={"Title"} value={title} onInput={handleInputTitle} />
            <input type="text" placeholder={"Body"} value={body} onInput={handleInputBody}/>
            <button onClick={handleClick}>Submit</button>
        </Container>
    )
}


export default AddPost