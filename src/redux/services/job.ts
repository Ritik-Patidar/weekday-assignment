import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "../../types/jobs";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.weekday.technology/adhoc/",
});

export const job = createApi({
  reducerPath: "job",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    fetchJds: builder.mutation<{ [key: string]: number }, Job[]>({
      query: (data) => ({
        url: "getSampleJdJSON",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useFetchJdsMutation,
} = job;
