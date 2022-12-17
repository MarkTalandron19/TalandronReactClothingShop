import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { QuantityButton } from "../QuantityButton";
import { ProductsWrapper, Title } from "./Cart.styled";

export const Cart = () => {
  const { products, total } = useContext(ShopContext);
  return (
    <>
      <Title>Your cart total is {total}.00$</Title>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <>
          <ProductCard {...product} key={index} />
          <QuantityButton {...product} />
          </>
        ))}
      </ProductsWrapper>
      {products.length > 0 && <Link to="/checkout">
        <button>
          Checkout
        </button>
      </Link>}
    </>
  );
};
