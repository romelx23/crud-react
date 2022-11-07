import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context'
import { useForm } from '../../hooks/useForm';
interface Form {
    name: string,
    age: number,
    phone: string
}
export const Form = () => {
    const { addUsers, user, selectedUser, updateUser } = useContext(UserContext);
    const { handleInputChange, values, reset, setValues } = useForm<Form>({
        name: '',
        age: 0,
        phone: ''
    });
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!user) {
            addUsers({
                id: Math.random().toString(),
                ...values
            });
            reset();
            return;
        }
        if (user) {
            updateUser({
                id: user.id,
                ...values
            })
            reset();
            selectedUser('0')
            return;
        }
    }
    useEffect(() => {
        if (user) {
            setValues({
                name: user.name,
                age: user.age,
                phone: user.phone
            })
            return;
        }
        if (!user) {
            reset();
        }
    }, [user])

    return (
        <div className='flex flex-col items-center p-10 sm:p-2 mb-10'>
            <h1 className='text-2xl'>{!user ? 'Crear Usuario' : 'Actualizar Usuario'}</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                    <input type="text" id="name"
                        name='name'
                        value={values.name}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="number" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edad</label>
                    <input type="number"
                        id="number"
                        name="age"
                        value={values.age}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" max={40} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teléfono</label>
                    <input type="string" id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={9} required />
                </div>
                <div className="flex flex-col gap-2">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                    {
                        user &&
                        <button type="button" onClick={() => selectedUser('0')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Cancelar</button>
                    }
                </div>
            </form>
        </div>
    )
}
