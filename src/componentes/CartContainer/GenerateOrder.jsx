
import { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

import { useCartContext } from "../context/CartContext";

export const GenerateOrder = () => {
    const { cart, deleteCart, precioTotal } = useCartContext();
    const [validationErrors, setValidationErrors] = useState({});
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleAddOrder = async (event) => {
        event.preventDefault()

        const newErrors = {};

        if (dataForm.name.trim() === '' || dataForm.name.trim().length < 5) {
            newErrors.name = 'El nombre debe tener al menos 5 caracteres y no debe tener espacios';
        }

        if (!/^[0-9]{1,10}$/.test(dataForm.phone)) {
            newErrors.phone = 'El teléfono debe contener entre 1 y 10 dígitos numéricos';
        }

        if (!/^[^\s@]+@gmail\.com$/.test(dataForm.email)) {
            newErrors.email = 'El correo electrónico debe ser de la forma "@gmail.com"';
        }

        if (Object.keys(newErrors).length === 0) {
            const order = {}
            order.buy = dataForm
            order.items = cart.map(prod => {
                return { id: prod.id, cantidad: prod.cantidad, precio: prod.precio, nombre: prod.nombre }
            })
            order.total = precioTotal()

            const queryDataBase = getFirestore()
            const orderCollection = collection(queryDataBase, 'order')
            addDoc(orderCollection, order)
                .then(({ id }) => {
                    setConfirmationMessage(`¡Tu compra fue enviada! Número de ID: ${id} 🥳`);
                    setId(id);
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setDataForm({
                        name: '',
                        phone: '',
                        email: ''
                    })
                    deleteCart()
                })

        } else {
            setValidationErrors(newErrors);
        }

    }

    const handleOnChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <div className='flex modal-box w-9/12 max-w-5xl mx-auto items-start m-10 h-96'>
                <form className="flex flex-col gap-5 ml-8 m-5" onSubmit={handleAddOrder}>
                    {confirmationMessage && (
                        <div className="text-center bg-green-300 rounded-lg">
                            <p className="font-bold text-zinc-600">{confirmationMessage}</p>
                        </div>
                    )}
                    <input
                        className={`h-12 w-96 border border-slate-300 rounded-md ${validationErrors.name ? 'border-red-500' : ''
                            }`}
                        type="text"
                        name="name"
                        placeholder="  Nombre"
                        value={dataForm.name}
                        onChange={handleOnChange}
                    />
                    {validationErrors.name && (
                        <span className="text-red-500">{validationErrors.name}</span>
                    )}

                    <input
                        className={`h-12 w-96 border border-slate-300 rounded-md ${validationErrors.phone ? 'border-red-500' : ''
                            }`}
                        type="text"
                        name="phone"
                        placeholder="  Teléfono"
                        value={dataForm.phone}
                        onChange={handleOnChange}
                    />
                    {validationErrors.phone && (
                        <span className="text-red-500">{validationErrors.phone}</span>
                    )}

                    <input
                        className={`h-12 w-96 border border-slate-300 rounded-md ${validationErrors.email ? 'border-red-500' : ''
                            }`}
                        type="text"
                        name="email"
                        placeholder="  Email"
                        value={dataForm.email}
                        onChange={handleOnChange}
                    />
                    {validationErrors.email && (
                        <span className="text-red-500">{validationErrors.email}</span>
                    )}

                    <button className="btn btn-neutral rounded-full w-96">Comprar 😍</button>
                </form>

                <div className='ml-auto m-10'>
                    <img className='h-64' src="https://i.ibb.co/ZJt1g45/Gracias.png" alt="gracias-por-tu-compra" />
                </div>
            </div>

        </>
    )
}    