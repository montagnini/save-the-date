  
import React, {useEffect, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import styled from 'styled-components';
import firebase from "firebase";

const Img = styled.img `
  max-height: 60vh;

  @media(max-width: 600px) {
    max-width: 100vw;
  }
`

export const Slider = ({folder}) => {
  
const [listSrc, setListSrc] = useState([]);

let itemArray = [];

async function  loadData(){
   await firebase.storage().ref(folder).listAll().then(function(ref){
    ref.items.forEach(function(item){
      item.getDownloadURL().then(function(url) {
        itemArray.push(<Img src={url}/>)
        setListSrc(itemArray)
      })
   })

 })
}

  useEffect(
    () => loadData()
  ,[])

  return (
    <AliceCarousel 
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={4000}
    animationDuration={1000}
    infinite
    touchTracking
    disableDotsControls
    disableButtonsControls={false}
    mouseTracking
    items={listSrc}/> 
  );
};
