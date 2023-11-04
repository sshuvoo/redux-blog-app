import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   relatedBlogs: [],
   isLoading: false,
   isError: false,
   error: '',
};

export const getRelatedBlogsAsync = createAsyncThunk(
   'relatedBlogs/fetch',
   async ({ tags, currentBlogID }) => {
      const queryString =
         tags?.length > 0
            ? tags.map((tag) => `tags_like=${tag}`).join('&') +
              `&id_ne=${currentBlogID}&_limit=3`
            : `id_ne=${currentBlogID}&_limit=3`;
      const response = await fetch(
         `http://localhost:9000/blogs?${queryString}`
      );
      const relatedBlogs = await response.json();
      return relatedBlogs;
   }
);

const relatedBlogsSlice = createSlice({
   name: 'relatedBlogs',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(getRelatedBlogsAsync.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getRelatedBlogsAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.relatedBlogs = payload;
            state.error = '';
         })
         .addCase(getRelatedBlogsAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error?.message;
         });
   },
});

export default relatedBlogsSlice.reducer;
