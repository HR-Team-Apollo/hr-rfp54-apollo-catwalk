import React from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';

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

  // componentDidMount() {
  //   axios.get('http://localhost:3001/api/products/17067/related')
  //     .then(res => {
  //       this.setState({
  //         relatedProducts: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log('failed to fetch data', err);
  //     });
  // }

  render() {
    return (
      <div style = {{display: 'flex', justifyContent: 'flex-start'}}>
        {
          this.state.relatedProducts.map((prodId) => {
            return <ProductCard removeOutfit = {null} handleProductChange = {this.props.handleProductChange} key = {prodId} isStar = {true} id = {prodId} />;
          })
        }
      </div>
    );
  }
}

export default ProductList;