import { apiSlice } from "./apiSlice";

//Comme le nom l'indique, ca rajoute un élément à l'endpoint d'un élément donné
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${process.env.USERS_URL}/auth`,
                method: 'POST',
                body: data 
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
            })
        })  
    })
})

//Convention de nommage use + fonction + mutation
export const { useLoginMutation, useLogoutMutation } = usersApiSlice

