export function Portfolio({items}) {




    let elem =[];

    items.forEach(e=> {
        let k = Math.random();
            elem.push (
                <div className="pBox" category={e.category} key={k}>
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