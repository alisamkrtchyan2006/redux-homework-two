import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./users.api"

export const Users = () => {
    const users = useSelector(state => state.accounts)
    const status = useSelector(state => state.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return <>
        <h3> Users </h3>
        {users.map(user =>
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.salary}</p>
            </div>
        )}
    </>
}