import Container from "../../components/Container/Container";
import {getRequest} from "../../api/fetchPosts";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";


const PostList = ({}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getRequest().then((data) => {
            setPosts([...data])
        })
    }, [])


    return (
        <Container sectionName="posts">
            <NavLink to={'/add'}>
                <button>Add New Post</button>
            </NavLink>
            <div className="postList">
                {posts.map((data) => {
                    return (
                        <div className={"postCard"} key={data.id}>
                            <p>{data.title}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}


export default PostList