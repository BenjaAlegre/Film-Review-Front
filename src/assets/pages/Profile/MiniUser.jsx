const MiniUser = ({id, name, role}) =>
{
    const handleClick = (e) =>
    {
        e.preventDefault();
        console.log(id);  
    }

    return (
        <div style={{display: "flex", flexFlow: "row"}}>
            <h3>{name}</h3>
            <p>{id}</p>
            <p>{role}</p>
            <button onSubmit={handleClick}>Eliminar</button>
        </div>
    )
}

export default MiniUser;