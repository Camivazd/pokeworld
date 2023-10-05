
import { Link } from 'react-router-dom';

import { useCartContext } from "../context/CartContext"
import FinalizeOrder from './FinalizeOrder';

export const CartItems = () => {

    const { cart, deleteCart, deleteForProduct } = useCartContext()

    function finalizePurchase() {
        return (
            <Link to="/order"></Link>
        )
    }

    return (
        <>
            <div className="flex flex-col modal-box w-9/12 max-w-5xl mx-auto h-auto items-center justify-between mb-10">
                <div className="grid gap-28 grid-cols-3">
                    <p className="mt-2 font-semibold text-lg">Producto</p>
                    <p className="mt-2 font-semibold text-lg">Cantidad</p>
                    <p className="mt-2 font-semibold text-lg">Precio</p>
                </div>
                {cart.map((prod) => (
                    <div key={prod.id} className="grid gap-6 grid-cols-5 border-b-4 border-color: rgb(243 244 246)">
                        <img src={prod.urlImagen} className="w-36 ml-14" alt="pokemon" />
                        <p className="mt-10 ml-6">{prod.nombre}</p>
                        <p className="mt-10 ml-20">{prod.cantidad}</p>
                        <p className="mt-10 ml-10">${prod.precio}</p>
                        <button className="btn btn-circle btn-outline mt-7" onClick={() => deleteForProduct(prod.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                ))}

                <div className="flex gap-x-96">
                    <div className="mt-24">
                        <button className="btn bg-white border-slate-300 hover:bg-transparent rounded-full w-60" onClick={deleteCart}> 🧹 Vaciar carrito</button>
                    </div>

                    <FinalizeOrder finalizePurchase={finalizePurchase} />

                </div>
            </div>

        </>

    )
}
