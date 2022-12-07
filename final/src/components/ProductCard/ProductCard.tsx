import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';

import { useState, useEffect, useContext } from 'react';
import { Product } from '../../models';
import { ShopContext } from '../../context';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const {addToCart, removeFromCart} = useContext(ShopContext);
  const [isInCart, setIsInCart] = useState(false);
  
  const handleClick = () => {
    const product = {name, imageUrl, price};
    if(isInCart){
      removeFromCart(product);
      setIsInCart(false);
    } else{
      addToCart(product);
      setIsInCart(true);
    }
  }
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
