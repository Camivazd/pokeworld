
import { useCartContext } from "../context/CartContext";

import {CartItems} from "./CartItems"
import { CartEmpty } from "./CartEmpty";

const CartContainer = () => {

    const { cart } = useCartContext()

    //2 componentes, CartItems y GenerateOrder

    return (
        <>
            {cart.length > 0 ? (
                <CartItems />
            ) : (
                <CartEmpty />
            )}
        </>
    )
}

export default CartContainer;
