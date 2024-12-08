export function Portfolio({items}) {




    let elem =[];

    items.forEach(e=> {
            elem.push (
                <div className="pBox" category={e.category}>
                    <img className="pBox__itme" src={e.img} alt="" />
                </div>
            )  
    });


    return (
        <>
        {elem}
        </>
    )
    
}