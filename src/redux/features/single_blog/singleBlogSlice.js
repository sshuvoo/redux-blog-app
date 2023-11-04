import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   blog: {},
   isLoading: false,
   isError: false,
   error: '',
};

export const getSingleBlogAsync = createAsyncThunk(
   'singleBlog/fetch',
   async (id) => {
      const response = await fetch(`http://localhost:9000/blogs/${id}`);
      const blog = await response.json();
      return blog;
   }
);

export const patchBlogLikesAsync = createAsyncThunk(
   'blog/liked',
   async ({ id, likes }) => {
      const response = await fetch(`http://localhost:9000/blogs/${id}`, {
         method: 'PATCH',
         body: JSON.stringify({ likes }),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const updatedBlog = await response.json();
      return updatedBlog;
   }
);

export const patchBlogSavedAsync = createAsyncThunk(
   'blog/likedSaved',
   async ({ id, isSaved }) => {
      const response = await fetch(`http://localhost:9000/blogs/${id}`, {
         method: 'PATCH',
         body: JSON.stringify({ isSaved }),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const updatedBlog = await response.json();
      return updatedBlog;
   }
);

const singleBlogsSlice = createSlice({
   name: 'blog',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(getSingleBlogAsync.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getSingleBlogAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.blog = payload;
            state.error = '';
         })
         .addCase(getSingleBlogAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error?.message;
         })
         .addCase(patchBlogLikesAsync.fulfilled, (state, { payload }) => {
            state.blog = payload;
         })
         .addCase(patchBlogSavedAsync.fulfilled, (state, { payload }) => {
            state.blog = payload;
         });
   },
});

export default singleBlogsSlice.reducer;
