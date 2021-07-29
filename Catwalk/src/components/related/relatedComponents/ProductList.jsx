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

  componentDidMount() {
    axios.get('http://localhost:3001/api/products/17067/related')
      .then(res => {
        this.setState({
          relatedProducts: res.data
        });
      })
      .catch(err => {
        console.log('failed to fetch data', err);
      });
  }

  render() {
    return (
      <div style = {{display: 'flex', justifyContent: 'flex-start'}}>
        {
          this.state.relatedProducts.map((prodId) => {
            return <ProductCard key = {prodId} isStar = {true} id = {prodId} />;
          })
        }
      </div>
    );
  }
}

export default ProductList;