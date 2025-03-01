export function Filter({filterName, onClick}) {



    return (
        <div  className="fItem" onClick = {onClick} >{filterName}</div>
    )
    
}