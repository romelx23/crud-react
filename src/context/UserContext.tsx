import { createContext } from 'react';
import { User } from '../interfaces/users';

interface ContextProps {
    users: User[],
    user: User | null,
    listUsers: (users: User[]) => void
    addUsers: (user: User) => void
    updateUser: (user: User) => void
    deleteUser: (id: string) => void
    selectedUser: (id: string) => void
}

export const UserContext = createContext({} as ContextProps)