import { configureStore } from "@reduxjs/toolkit"
import { UsersReducer } from "./feutures/users/users.slice"

export const store = configureStore({
    reducer:UsersReducer
})
