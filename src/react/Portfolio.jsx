export function Portfolio({items, category}) {


    /* let elem = items.map((e) => {
        if (e.category === category) {
            return (
                <div className="pBox">
                    <img className="pBox__itme" src={e.img} alt="" />
                </div>
            )
        } else {
            return (
                <div className="pBox">
                    <img className="pBox__itme" src={e.img} alt="" />
                </div>
            )
        }
    }); */


    let elem =[];
    items.forEach(e=> {
        if (category === "All") {
            elem.push (
                <div className="pBox">
                    <img className="pBox__itme" src={e.img} alt="" />
                </div>
            )
        } else if (e.category === category) {
            elem.push (
                <div className="pBox">
                    <img className="pBox__itme" src={e.img} alt="" />
                </div>
            )
        }
         
    });


    return (
        <>
        {elem}
        </>
    )
    
}




/* = (
    <div className="pBox">
        <img className="pBox__itme" src={items[0].img} alt="" />
    </div>
) */