import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';
import axios from 'axios';

const YourOutfitList = ({id}) => {
  let [outfitProducts, setOutfitProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/read')
      .then(res => {
        setOutfitProducts(res.data.products);
      });
  }, []);

  const addProductToOutfit = (id) => {
    let newProducts = outfitProducts.slice();
    newProducts.push(id);
    let data = {products: newProducts};
    axios.post('http://localhost:3001/api/write', data)
      .then(() => {
        axios.get('http://localhost:3001/api/read')
          .then(res => {
            setOutfitProducts(res.data.products);
          })
          .catch(err => {
            console.log('failed to retrieve data', err);
          });
      })
      .catch(err => {
        console.log('failed to post data', err);
      });
  };

  const removeOutfit = (id) => {
    let newProducts = outfitProducts.slice();
    newProducts.splice(newProducts.indexOf(id), 1);
    axios.post('http://localhost:3001/api/write', {products: newProducts})
      .then(() => {
        // axios.get('http://localhost:3001/api/read')
        //   .then(res => {
        //     setOutfitProducts(res.data.products);
        //   })
        //   .catch(err => {
        //     console.log('failed to retrieve data', err);
        //   });
      })
      .catch(err => {
        console.log('failed to post data', err);
      });
    setOutfitProducts(newProducts);
  };

  return (
    <div style = {{display: 'flex', justifyContent: 'flex-start'}}>
      {
        outfitProducts.map((prodId) => {
          return <ProductCard removeOutfit = {removeOutfit} isStar = {false} key = {prodId} id = {prodId}/>;
        })
      }
      <AddOutfitCard id = {id} addProductToOutfit = {addProductToOutfit}/>
    </div>
  );
};

export default YourOutfitList;