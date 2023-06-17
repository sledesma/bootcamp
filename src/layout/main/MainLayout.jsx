import "./MainLayout.scss";

const MainLayout = ({ children, titulo }) => (
    <>
        <header>
            <div className="titulo">
                {titulo}
            </div>
            Cabecera
        </header>
        <nav>
            Barra de navegación
        </nav>

        <main>{children}</main>

        <footer>
            Pie de página
        </footer>
    </>
)

export default MainLayout;
