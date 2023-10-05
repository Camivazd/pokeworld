
import Item from "../Item/Item";

const ItemList = ({ productos }) => {

    return (
        <>
            {productos.map(productos => <Item key={productos.id} productos={productos} />)}
        </>
    )


}

export default ItemList