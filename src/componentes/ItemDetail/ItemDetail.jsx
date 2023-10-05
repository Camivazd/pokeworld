import { useState } from 'react';

import { useCartContext } from "../context/CartContext";
import Count from "../Count/Count";
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {

    const [IsCounter, setIsCounter] = useState(true);
    const { addToCart } = useCartContext()

    const onAdd = (contador) => {
        addToCart({ ...product, cantidad: contador })
        setIsCounter(false)
    }

    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-4/6 mx-auto"><img src={product.urlImagen} alt="imagenpokemon" /></figure>
                <div className="card-body ml-2">
                    <h2 className="card-title">{product.nombre}</h2>
                    <p>{product.detalle}</p>
                    <p className="font-semibold text-2xl">${product.precio}</p>
                    <div>
                        {
                            IsCounter ? <Count inicial={1} hasta={5} onAdd={onAdd} />
                                :
                                <>
                                    <Link to="/">
                                        <button className="btn btn-outline">Seguir comprando</button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="btn btn-outline m-2">Ir al carrito</button>
                                    </Link>
                                </>

                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail