const Card = ({ item }) => (
    <div>
        {item.titulo}

        <p>{item.descripcion}</p>

        <img src={item.imagen} />

        <a href={`/detalle/${item.id}`}>Ver mas</a>
    </div>
)

export default Card;
