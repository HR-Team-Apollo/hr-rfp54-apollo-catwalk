import React from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

// const ProductList = () => {
//   let [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {

//   });

//   return (

//   );
// };

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    };
  }

  removeDuplicates(array) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
      let isUnique = true;
      for (let j = i+1; j < array.length; j++) {
        if (array[i] === array[j] || results.includes(array[i])) {
          isUnique = false;
        }
      }
      if (isUnique) { results.push(array[i]); }
    }
    return results;
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      axios.get(`http://localhost:3001/api/products/${this.props.id ? this.props.id : '17070'}/related`)
        .then(res => {
          this.setState({
            relatedProducts: this.removeDuplicates(res.data)
          });
        })
        .catch(err => {
          console.log('failed to fetch data', err);
        });
    }
  }

  componentDidMount() {
    // document.getElementById('productArrLeft').style.display = 'none';
    // document.getElementById('productArrRight').style.display = 'none';
  }

  render() {
    return (
      <div style={{position: 'relative', borderBottom: '1px solid black', paddingBottom: '2.6em'}}>
        <div id = 'productArrLeft' onClick = {() => {

        }}  style={{fontSize: '4.5em', position: 'absolute', top: '0.85em', left: '0', zIndex: '10', cursor: 'pointer'}}>
          <AiFillCaretLeft />
        </div>
        <div id = 'productListSlider' style = {{display: 'flex', justifyContent: 'flex-start', width: '90%', overflow: 'hidden', paddingLeft: '3em'}}>
          {
            this.state.relatedProducts.slice(this.state.slice - 4, this.state.slice).map((prodId) => {
              return <ProductCard removeOutfit = {null} handleProductChange = {this.props.handleProductChange} key = {prodId} isStar = {true} id = {prodId} />;
            })
          }
        </div>
        <div id = 'productArrRight' onClick = {() => {

        }} style={{fontSize: '4.5em', position: 'absolute', top: '0.85em', right: '2.7%', zIndex: '10', cursor: 'pointer'}}>
          <AiFillCaretRight />
        </div>
      </div>
    );
  }
}

export default ProductList;