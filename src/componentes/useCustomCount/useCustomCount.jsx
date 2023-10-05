import { useState } from "react";

export const useCustomCount = (min, max) => {
    const [counter, setCounter] = useState(min, max)

    const incrementaCount = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    const decrementaCount = () => {
        if (counter > min) {
            setCounter(counter - 1)
        }
    }

    return { counter, incrementaCount, decrementaCount }
}