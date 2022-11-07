import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context"
import { User } from "../interfaces/users"

export const useUser = () => {
    const { listUsers, addUsers, updateUser: updateUers, deleteUser: deleteUsers } = useContext(UserContext);
    const getUsers = async () => {
        const data = await fetch('https://crudcrud.com/api/61ad0fd5924d4dbdb688a49e5c66b176/users')
        const usuarios: User[] = await data.json()
        console.log(usuarios);
        listUsers(usuarios);
    }
    const addUser = async (user: User) => {
        const data = await fetch('https://crudcrud.com/api/61ad0fd5924d4dbdb688a49e5c66b176/users', {
            method: 'POST',
            body: JSON.stringify(user)
        })
        const newUser: User = await data.json()
        addUsers(user)
    }
    const updateUser = async (user: User) => {
        const data = await fetch(`https://crudcrud.com/api/61ad0fd5924d4dbdb688a49e5c66b176/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user)
        })
        const newUser: User = await data.json();
        updateUers(user)
    }
    const deleteUser = async (id: string) => {
        await fetch(`https://crudcrud.com/api/61ad0fd5924d4dbdb688a49e5c66b176/users/${id}`, {
            method: 'DELETE'
        })
        deleteUsers(id)
    }
    return {
        addUser,
        updateUser,
        deleteUser,
        getUsers
    }
}