
import { Link } from 'react-router-dom';

export const Item = ({ productos }) => {
    return (
        <div key={productos.id} className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={productos.urlImagen} /></figure>
            <div className="card-body">
                <h2 className="leading-10 text-lg font-bold text-center">{productos.nombre}</h2>
                <p className="text-center font-medium text-gray-500">${productos.precio}</p>
                <p className="text-center font-extralight">{productos.descripcion}</p>
                <div className="card-actions justify-center">
                    <Link to={`/detalle/${productos.id}`}>
                        <button className="btn btn-outline">Ver detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item