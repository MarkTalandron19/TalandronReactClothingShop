import { useContext } from "react"
import { ShopContext } from "../../context"
import { Product } from "../../models/Product";

export const CheckOut = () => {
    const { products, total } = useContext(ShopContext);

    return(
        <>
        <table>
            <th>
                Name
            </th>
            <th>
                Price
            </th>
            <th>
                Quantity
            </th>
            <th>
                Amount Due
            </th>
            {products.map((product: Product, index) => (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price * product.quantity}</td>
                </tr>
        ))}
        </table>
        <p>Total Due: {total}</p>
        </>
    )
}