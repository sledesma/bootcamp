import "./MainLayout.scss";

import { NavLink } from 'react-router-dom';

const MainLayout = ({ children }) => (
    <>
        <header>
            <div className="titulo">
                Mi App
            </div>
            Cabecera
        </header>
        <nav>
            <ul>
                <li><NavLink className="link" to='/'>Home</NavLink></li>
                <li><NavLink className="link" to='/alta'>Alta</NavLink></li>
                <li><NavLink className="link" to='/contacto'>Contacto</NavLink></li>
                <li><NavLink className="link" to='/nosotros'>Nosotros</NavLink></li>
            </ul>
        </nav>

        <main>{children}</main>

        <footer>
            Pie de página
        </footer>
    </>
)

export default MainLayout;
