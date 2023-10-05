import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";

import ItemList from "../ItemList/ItemList";
import Loading from "../ItemListContainer/Loading"

import './estiloGreeting.css';

function ItemListContainer() {
    const [listProductos, setListProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaid } = useParams();

    useEffect(() => {
        const dataBase = getFirestore()
        const queryCollection = collection(dataBase, 'productos')
        const queryFilter = categoriaid ? query(queryCollection, where('categoria', '==', categoriaid)) : queryCollection

        if (categoriaid) {
            getDocs(queryFilter)
                .then(respuesta => setListProductos(respuesta.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))

        } else {
            getDocs(queryCollection)
                .then(respuesta => setListProductos(respuesta.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [categoriaid])

    return (
        <>
            <div>

                <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4 mb-5 mt-5">
                    {loading ? <Loading /> : <ItemList productos={listProductos} />
                    }
                </div>

            </div>
        </>
    )

}

export default ItemListContainer