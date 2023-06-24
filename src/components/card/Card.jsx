import { Link } from "react-router-dom";

/**
 * Contextos: RouterProvider
 */
const Card = ({ item }) => (
    <div>
        {item.titulo}

        <p>{item.descripcion}</p>

        <img src={item.imagen} />
        
        <Link to={`/detalle/${item.id}`}>Ver mas</Link>
    </div>
)

export default Card;
