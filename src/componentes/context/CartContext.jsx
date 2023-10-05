
import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (newPokemon) => {

        const index = cart.findIndex(pokemon => pokemon.id === newPokemon.id)

        if (index != -1) {
            cart[index].cantidad = cart[index].cantidad + newPokemon.cantidad
            setCart([...cart])
        } else {
            setCart([...cart, newPokemon])
        }
    }

    const deleteCart = () => {
        setCart([])
    }

    const deleteForProduct = (id) => setCart(cart.filter(producto => producto.id !== id));
    
    const precioTotal = () => cart.reduce(( count, objProduct ) => count += (objProduct.cantidad * objProduct.precio), 0);

    const cantidadTotal = () => cart.reduce(( count, objProduct ) => count += objProduct.cantidad , 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            deleteCart,
            deleteForProduct,
            cantidadTotal,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
} 