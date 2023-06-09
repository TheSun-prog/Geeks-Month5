import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout = ({  }) => {
    return(
        <>
            <Header />
            <div className="section">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}


export default Layout