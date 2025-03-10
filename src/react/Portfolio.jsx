import uniqid from 'uniqid';

export function Portfolio({items}) {


    return (
        <>
        {items.map( (item) => {
            return (
            <div className="pBox" category={item.category} key={uniqid()}>
                <img className="pBox__itme" src={item.img} alt="" />
            </div>
            );

        })}
        </>
    )
}