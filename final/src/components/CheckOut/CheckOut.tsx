import { useContext } from "react"
import { ShopContext } from "../../context"
import { Product } from "../../models/Product";
import { Title } from "../Cart";
import { Cell, CheckOutHeader, CheckOutTable, ItemWrapper } from "./CheckOut.styled";

export const CheckOut = () => {
    const { products, total } = useContext(ShopContext);

    return(
        <>
        <CheckOutTable>
            <CheckOutHeader>
                Item
            </CheckOutHeader>
            <CheckOutHeader>
                Name
            </CheckOutHeader>
            <CheckOutHeader>
                Price
            </CheckOutHeader>
            <CheckOutHeader>
                Quantity
            </CheckOutHeader>
            <CheckOutHeader>
                Amount Due
            </CheckOutHeader>
            {products.map((product: Product, index) => (
                <tr>
                    <Cell><ItemWrapper background={product.imageUrl}></ItemWrapper></Cell>
                    <Cell><p>{product.name}</p></Cell>
                    <Cell><p>{product.price}</p></Cell>
                    <Cell><p>{product.quantity}</p></Cell>
                    <Cell><p>{product.price * product.quantity}</p></Cell>
                </tr>
        ))}
        </CheckOutTable>
        <Title>Total Due: {total}</Title>
        </>
    )
}