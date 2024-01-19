import { apiSlice } from "./apiSlice";

//Comme le nom l'indique, ca rajoute un élément à l'endpoint d'un élément donné
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${process.env.USERS_URL}/auth`,
                method: 'POST',
                body: data 
            })
        })
    })
})

//Convention de nommage use + fonction + mutation
export const { useLoginMutation } = usersApiSlice

