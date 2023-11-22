import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {IPost} from '../types'

export const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], { _limit: number, _start: number }>({
            query: ({_limit = 5, _start = 0}) => ({
                url: '/posts',
                params: {
                    _limit,
                    _start,
                }
            })
        }),
        getPostById: builder.query<IPost, number>({
            query: (id) => `/posts/${id}`,
        }),
    }),
})

export const {useGetPostByIdQuery, useGetPostsQuery} = postsApi
