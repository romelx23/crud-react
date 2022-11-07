import { FC, useReducer } from 'react'
import { User } from '../interfaces/users'
import { UserContext, UserReducer } from './'
// import { useUser } from '../hooks/useUser';

interface Props {
    children: React.ReactNode
}

export interface UserState {
    users: User[],
    user: User | null
}

export const Users_INITIAL_STATE: UserState = {
    users: [],
    user: null
}

export const UsersProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, Users_INITIAL_STATE)
    const listUsers = (users: User[]) => {
        dispatch({
            type: "[User] - List Users",
            payload: {
                users
            }
        })
    }
    const addUsers = (user: User) => {
        dispatch({
            type: "[User] - Add User",
            payload: {
                user
            }
        })
    }
    const deleteUser = (id: string) => {
        dispatch({
            type: "[User] - Delete User",
            payload: {
                id
            }
        })
    }
    const selectedUser = (id: string) => {
        dispatch({
            type: "[User] - Selected User",
            payload: {
                id
            }
        })
    }
    const updateUser = (user: User) => {
        dispatch({
            type: "[User] - Update User",
            payload: {
                user
            }
        })
    }
    return (
        <UserContext.Provider
            value={{
                ...state,
                listUsers,
                addUsers,
                deleteUser,
                selectedUser,
                updateUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
