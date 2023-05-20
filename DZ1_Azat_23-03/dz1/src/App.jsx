import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import PostList from "./pages/PostList/PostList";
import Layout from "./components/Layout/Layout";
import AboutUs from "./pages/AboutUs/AboutUs";
import AddPost from "./pages/AddPost/AddPost";
import Login from "./pages/Login/Login";

function App() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<PostList/>}/>
                    <Route path='/about' element={<AboutUs/>}/>
                    <Route path='/add' element={<AddPost/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
