  import React from 'react';

  export class ShopItemClass extends React.Component {

/*     constructor(props) {
      super(props);
      this.props.brand,
      this.props.title, 
      this.props.description, 
      this.props.descriptionFull, 
      this.props.currency, 
      this.props.price
    } */

  render() {
    let {item} = this.props;
    return (
      <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description"> {item.descriptionFull} </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{item.currency}{item.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    )
  }

}