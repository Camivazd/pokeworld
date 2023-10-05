
import { useCustomCount } from "../useCustomCount/useCustomCount";

function Count({ inicial, hasta, onAdd }) {
    const { counter, incrementaCount, decrementaCount } = useCustomCount(inicial, hasta);

    return (
        <div>

            <div className=" flex flex-row justify-around btn rounded-full border-black w-40 mt-2 ml-1">
                <button className="text-xl" onClick={decrementaCount}>-</button>
                <label>
                    <strong>{counter}</strong>
                </label>
                <button className="text-xl" onClick={incrementaCount}>+</button>
            </div>

            <div className="card-actions justify-start mt-5">
                <button className="btn btn-outline" onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>

        </div>
    )

}

export default Count