
import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";

const FinalizeOrder = ({ finalizePurchase }) => {

    const { precioTotal } = useCartContext();

    return (
        <>

            <div>
                <p className="ml-20 mt-5 text-lg text-pink-950 font-semibold">Envío: $0</p>
                <p className="ml-16 mt-2 mb-2 text-lg text-pink-950 font-semibold">Total: ${precioTotal()}</p>
                <Link className="" to={"/order"}>
                    <button className="btn btn-neutral rounded-full w-60" onClick={finalizePurchase}>Finalizar compra ❤️</button>
                </Link>
            </div>

        </>
    )
}
export default FinalizeOrder;