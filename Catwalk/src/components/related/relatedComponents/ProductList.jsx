import React from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      arrLeftVisible: false,
      arrRightVisible: false
    };
  }

  checkForArrow() {
    let slider = document.getElementById('productListSlider');
    setTimeout(() => {
      if (slider) {
        if (slider.scrollLeft <= 0) {
          this.setState({arrLeftVisible: false});
        } else {
          this.setState({arrLeftVisible: true});
        }
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) - 10) {
          this.setState({arrRightVisible: false});
        } else {
          this.setState({arrRightVisible: true});
        }
      }
      this.checkForArrow();
    }, 700);
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

  componentDidMount() {
    axios.get(`http://localhost:3001/api/products/${this.props.id ? this.props.id : '17070'}/related`)
      .then(res => {
        this.setState({
          relatedProducts: this.removeDuplicates(res.data)
        });
      })
      .catch(err => {
        console.log('failed to fetch data', err);
      });
    this.checkForArrow();
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

  render() {
    return (
      <div style={{position: 'relative', borderBottom: '1px solid black', paddingBottom: '2.6em'}}>
        <div id = 'productArrLeft' onClick = {() => {
          let slider = document.getElementById('productListSlider');
          slider.scrollLeft -= slider.scrollWidth / 7.3;
          if (slider.scrollLeft <= 0) {
            this.setState({arrLeftVisible: false});
          }
          if (slider.scrollLeft <= (slider.scrollWidth - slider.clientWidth) - 10) {
            this.setState({arrRightVisible: true});
          }
        }}  style={{display: this.state.arrLeftVisible ? 'inline-block' : 'none', fontSize: '4.5em', position: 'absolute', top: '0.85em', left: '-1em', zIndex: '10', cursor: 'pointer'}}>
          <AiFillCaretLeft />
        </div>
        <div id = 'productListSlider' style = {{scrollBehavior: 'smooth', display: 'flex', justifyContent: 'flex-start', width: '90%', overflow: 'hidden', paddingLeft: '3em'}}>
          {
            this.state.relatedProducts.slice(this.state.slice - 4, this.state.slice).map((prodId) => {
              return <ProductCard removeOutfit = {null} handleProductChange = {this.props.handleProductChange} key = {prodId} isStar = {true} id = {prodId} />;
            })
          }
        </div>
        <div id = 'productArrRight' onClick = {() => {
          let slider = document.getElementById('productListSlider');
          slider.scrollLeft += slider.scrollWidth / 7.3;
          if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) - 10) {
            this.setState({arrRightVisible: false});
          }
          if (slider.scrollLeft >= 0) {
            this.setState({arrLeftVisible: true});
          }
        }} style={{display: this.state.arrRightVisible ? 'inline-block' : 'none', fontSize: '4.5em', position: 'absolute', top: '0.85em', right: '-0.83em', zIndex: '10', cursor: 'pointer'}}>
          <AiFillCaretRight />
        </div>
      </div>
    );
  }
}

export default ProductList;