import React, {useEffect, useState} from 'react';
import ProductInfo from './ProductInfo.jsx';
import ActionButton from './ActionButton.jsx';
import axios from 'axios';

// class ProductCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       card: null
//     };
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:3001/api/products/${this.props.id}/related/all`)
//       .then(res => {
//         this.setState({card: res.data});
//       });
//   }

//   render() {
//     if (this.props.isStar && this.state.card) {
//       return (
//         <div style = {{border: '1.5px solid black', flexBasis: '10.5em', minWidth: '10.5em', margin: '0 1.4%', position: 'relative'}}>
//           <ActionButton isStar = {this.props.isStar}/>
//           <img src={this.state.card.url} style={{width: '100%', height: '9em'}}></img>
//           <ProductInfo card = {this.state.card} />
//         </div>
//       );
//     } else  if (this.state.card) {
//       return (
//         <div style = {{border: '1.5px solid black', flexBasis: '10.5em', minWidth: '10.5em', margin: '0 1.4%', position: 'relative'}}>
//           <ActionButton isStar = {this.props.isStar}/>
//           <img src={this.state.card.url} style={{width: '100%', height: '9em'}}></img>
//           <ProductInfo card = {this.state.card} />
//         </div>
//       );
//     } else {
//       return (
//         <h4>Loading...</h4>
//       );
//     }
//   }
// }


const ProductCard = ({id, isStar, handleProductChange, removeOutfit}) => {
  let [card, setCard] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products/${id}/related/all`)
      .then(res => {
        setCard(res.data);
      });
  }, []);

  if (isStar && card) {
    return (
      <div style = {{border: '1.5px solid black', flexBasis: '14em', minWidth: '14em', margin: '0 1.4%', position: 'relative'}}>
        <ActionButton isStar = {isStar} chars = {card}/>
        <img onClick = {() => handleProductChange(id)}  src={card.url ? card.url : 'https://bcn85ztt.tinifycdn.com/wp-content/themes/karibik-shop/img/platzhalter-bild.png'} style={{width: '100%', height: '13em', cursor: 'pointer'}}></img>
        <ProductInfo card = {card} />
      </div>
    );
  } else  if (card) {
    return (
      <div style = {{border: '1.5px solid black', flexBasis: '14em', minWidth: '14em', margin: '0 1.4%', position: 'relative'}}>
        <ActionButton removeOutfit = {removeOutfit} isStar = {isStar} chars = {id} />
        <img onClick = {() => handleProductChange(id)}  src={card.url ? card.url : 'https://bcn85ztt.tinifycdn.com/wp-content/themes/karibik-shop/img/platzhalter-bild.png'} style={{width: '100%', height: '13em', cursor: 'pointer'}}></img>
        <ProductInfo card = {card} />
      </div>
    );
  } else {
    return (
      <h4>Loading...</h4>
    );
  }
};

export default ProductCard;