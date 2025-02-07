import { ToastContainer } from "react-toastify";
import Header from "./header";
import Navbar from "./navbar";

function Layout({children}) {
    return (
        <div>
            <Header/>
            <main className="py-4">
                {children}
            </main>
            <ToastContainer/>
            <Navbar/>
        </div>
     );
}

export default Layout;
