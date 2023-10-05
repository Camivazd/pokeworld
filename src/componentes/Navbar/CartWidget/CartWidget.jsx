import { useCartContext } from "../../context/CartContext";

function CartWidget() {
    const {cantidadTotal} = useCartContext()
    return (
        <>
            <div><font></font>
                <button className="btn btn-ghost btn-circle"><font></font>
                    <div className="indicator"><font></font>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div><font></font>
                </button><font></font>

                <button className="btn btn-ghost btn-circle"><font></font>
                    <div className="indicator"><font></font>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{cantidadTotal()}</span>
                    </div><font></font>
                </button><font></font>

            </div><font></font>
        </>
    )

}

export default CartWidget;