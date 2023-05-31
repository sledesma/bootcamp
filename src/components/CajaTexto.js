export default function CajaTexto(props)
{
    const varEstado = React.useState("");    
    const texto = varEstado[0];
    const setTexto = varEstado[1];

    return (
        <div>
            <Texto titulo={texto} />
            <input 
                type="text" 
                value={texto}
                onChange={
                    (e) => setTexto(e.target.value)
                }
                />
        </div>
    )
}