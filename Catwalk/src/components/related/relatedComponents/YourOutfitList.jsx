import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';
import axios from 'axios';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const YourOutfitList = ({id, handleProductChange}) => {
  let [outfitProducts, setOutfitProducts] = useState([]);
  let [slice, setSlice] = useState(4);
  let [arrLeftVisible, setArrLeftVisible] = useState(true);
  let [arrRightVisible, setArrRightVisible] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/read')
      .then(res => {
        setOutfitProducts(res.data.products);
      });
  }, []);

  // useEffect(() => {
  //   document.getElementById('outfitArrLeft').style.display = 'none';
  // }, []);

  const addProductToOutfit = (id) => {
    let newProducts = outfitProducts.slice();
    if (!newProducts.includes(id)) {
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
    }
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
    <div style={{position: 'relative', borderBottom: '1px solid black', paddingBottom: '2.6em'}}>
      <div id = 'outfitArrLeft'  onClick = {(e) => {
        if (!(slice <= 4)) {
          setSlice(slice - 1);
        }
      }}  style={{fontSize: '6em', position: 'absolute', top: '0.85em', left: '0', zIndex: '10', cursor: 'pointer'}}>
        <AiFillCaretLeft />
      </div>
      <div id = 'yourOutfitSlider' style = {{display: 'flex', justifyContent: 'center', width: '90%', overflow: 'hidden', paddingLeft: '3em'}}>
        {
          outfitProducts.slice(slice - 4, slice).map((prodId) => {
            return <ProductCard handleProductChange = {handleProductChange} removeOutfit = {removeOutfit} isStar = {false} key = {prodId} id = {prodId}/>;
          })
        }
        <AddOutfitCard id = {id} addProductToOutfit = {addProductToOutfit}/>
      </div>
      <div id = 'outfitArrRight' onClick = {(e) => {
        if (!(slice >= outfitProducts.length - 1)) {
          setSlice(slice + 1);
        }
      }} style={{fontSize: '6em', position: 'absolute', top: '0.85em', right: '2.7%', zIndex: '10', cursor: 'pointer'}}>
        <AiFillCaretRight />
      </div>
    </div>
  );
};

export default YourOutfitList;