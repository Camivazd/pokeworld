import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [productoDetalle, setProductoDetalle] = useState({})
    const { productoid } = useParams();

    useEffect(() => {
        const dataBase = getFirestore()
        const queryDoc = doc(dataBase, 'productos', productoid)
        getDoc(queryDoc)
            .then(respuesta => ({ id: respuesta.id, ...respuesta.data() }))
            .then(respuesta => setProductoDetalle(respuesta))
    }, [])
    return (
        <div>
            <ItemDetail product={productoDetalle} />
        </div>
    )
}

export default ItemDetailContainer
