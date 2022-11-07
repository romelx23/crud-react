import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context'
import { useUser } from '../../hooks/useUser';

export const Table = () => {
    const { users, selectedUser, deleteUser } = useContext(UserContext);
    // const { deleteUser, getUsers } = useUser();
    // useEffect(() => {
    //     getUsers();
    // }, [])
    return (
        <div className="w-full flex justify-center">
            <div className="overflow-x-auto relative">
                <table className="w-full max-w-md text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nombre
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Edad
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Teléfono
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length === 0 ?
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        No hay datos
                                    </th>
                                    <td className="py-4 px-6">
                                        -
                                    </td>
                                    <td className="py-4 px-6">
                                        -
                                    </td>
                                    <td className="py-4 px-6">
                                        -
                                    </td>
                                    <td className="py-4 px-6">
                                        <button type='button' disabled className='text-white font-medium disabled:cursor-not-allowed bg-red-600 hover:bg-red-700 rounded-md disabled:opacity-50'>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                                :
                                users.map(user => (
                                    <tr
                                        key={user.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 animation-enter">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.id}
                                        </th>
                                        <td className="py-4 px-6">
                                            {user.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            {user.age}
                                        </td>
                                        <td className="py-4 px-6">
                                            {user.phone}
                                        </td>
                                        <td className="py-4 px-6">
                                            <button type='button'
                                                onClick={() => deleteUser(user.id)}
                                                className='text-white font-medium bg-red-600 hover:bg-red-700 rounded-md'>
                                                Eliminar
                                            </button>
                                            <button type='button'
                                                onClick={() => selectedUser(user.id)}
                                                className='mt-2 text-white font-medium bg-emerald-600 hover:bg-emerald-700 rounded-md'>
                                                Actualizar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
