import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';
import axios from 'axios';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const YourOutfitList = ({id, handleProductChange}) => {
  let [outfitProducts, setOutfitProducts] = useState([]);
  let [arrLeftVisible, setArrLeftVisible] = useState(false);
  let [arrRightVisible, setArrRightVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/api/read')
      .then(res => {
        if (res.data) {
          setOutfitProducts(res.data.products);
          checkForArrow();
        } else {
          setOutfitProducts([]);
          checkForArrow();
        }
      });
  }, []);

  const checkForArrow = () => {
    let slider = document.getElementById('yourOutfitSlider');
    setTimeout(() => {
      if (slider) {
        if (slider.scrollLeft <= 0) {
          setArrLeftVisible(false);
        } else {
          setArrLeftVisible(true);
        }
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) - 10) {
          setArrRightVisible(false);
        } else {
          setArrRightVisible(true);
        }
      }
      checkForArrow();
    }, 700);
  };

  // useEffect(() => {
  //   let slider = document.getElementById('yourOutfitSlider');
  //   console.log('this is running');
  //   if (slider.scrollLeft <= 0) {
  //     setArrLeftVisible(false);
  //   }
  // });

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
      .then(() => {})
      .catch(err => {
        console.log('failed to post data', err);
      });
    setOutfitProducts(newProducts);
  };

  return (
    <div style={{position: 'relative', borderBottom: '1px solid black', paddingBottom: '2.6em'}}>
      <div id = 'outfitArrLeft'  onClick = {() => {
        let slider = document.getElementById('yourOutfitSlider');
        slider.scrollLeft -= slider.scrollWidth / 7.3;
        if (slider.scrollLeft <= 0) {
          setArrLeftVisible(false);
        }
        if (slider.scrollLeft <= (slider.scrollWidth - slider.clientWidth) - 10) {
          setArrRightVisible(true);
        }
      }}  style={{display: arrLeftVisible ? 'inline-block' : 'none', fontSize: '4.5em', position: 'absolute', top: '0.85em', left: '-1em', zIndex: '10', cursor: 'pointer'}}>
        <AiFillCaretLeft />
      </div>
      <div id = 'yourOutfitSlider' style = {{display: 'flex', justifyContent: 'flex-start', width: '90%', overflow: 'hidden', paddingLeft: '3em'}}>
        {
          outfitProducts.map((prodId) => {
            return <ProductCard handleProductChange = {handleProductChange} removeOutfit = {removeOutfit} isStar = {false} key = {prodId} id = {prodId}/>;
          })
        }
        <AddOutfitCard id = {id} addProductToOutfit = {addProductToOutfit}/>
      </div>
      <div id = 'outfitArrRight' onClick = {() => {
        let slider = document.getElementById('yourOutfitSlider');
        slider.scrollLeft += slider.scrollWidth / 7.3;
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) - 10) {
          setArrRightVisible(false);
        }
        if (slider.scrollLeft >= 0) {
          setArrLeftVisible(true);
        }
      }} style={{display: arrRightVisible ? 'inline-block' : 'none' ,fontSize: '4.5em', position: 'absolute', top: '0.85em', right: '-0.83em', zIndex: '10', cursor: 'pointer'}}>
        <AiFillCaretRight />
      </div>
    </div>
  );
};

export default YourOutfitList;