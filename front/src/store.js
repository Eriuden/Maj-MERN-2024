import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {},
    middleware: (getDefauyltMiddleware) => getDefauyltMiddleware(),
    devTools: true 
})

export default store