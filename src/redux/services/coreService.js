import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rnmAPI = createApi({
  reducerPath: 'rnmAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  // i guess there is no need to put them in .env cause it's a SPA project
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: (page) => `/character?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getLoc: builder.query({ query: (locId) => `/location/${locId}` }),
    getChapter: builder.query({ query: (chapterId) => `/episode/${chapterId}` }),

  }),
});

export const { useGetAllCharactersQuery, useGetLocQuery, useGetChapterQuery } = rnmAPI; // must use_____Query
