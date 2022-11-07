import { User } from '../interfaces/users';
import { UserState } from './';

type UserActionType = 
| {type:'[User] - List Users', payload:{users:User[]}}
| {type:'[User] - Add User', payload:{user:User}}
| {type:'[User] - Delete User', payload:{id:string}}
| {type:'[User] - Update User', payload:{user:User}}
|{type:'[User] - Selected User', payload:{id:string}}

export const UserReducer = (state:UserState,action:UserActionType):UserState => { 
    switch (action.type) {
        case '[User] - List Users':
            return {
                ...state,
                users:action.payload.users
            };
        case '[User] - Add User':
            return {
                ...state,
                users:[...state.users,action.payload.user]
            };
        case '[User] - Delete User':
            return {
                ...state,
                users:state.users.filter(user => user.id !== action.payload.id)
            }
        case '[User] - Selected User':
            return{
                ...state,
                user:state.users.find(user => user.id === action.payload.id) || null
            }
        case '[User] - Update User':
            return{
                ...state,
                users:state.users.map(
                    user=>user.id===action.payload.user.id?
                    action.payload.user:
                    user
                )
            }
    
        default:
            return state;
    }
 }