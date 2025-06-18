import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import './Layout.css'; 

const Layout = () => {
    return (
                <div className="Layout">
                    <Header />
                    <main >
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            );
        };

export default Layout;