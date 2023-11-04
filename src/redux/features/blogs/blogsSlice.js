import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   blogs: [],
   isLoading: false,
   isError: false,
   error: '',
   filterType: 'All',
   sortType: 'default',
};

export const getAllBlogsAsync = createAsyncThunk('blogs/fetch', async () => {
   const response = await fetch('http://localhost:9000/blogs');
   const blogs = await response.json();
   return blogs;
});

const blogsSlice = createSlice({
   name: 'blogs',
   initialState,
   reducers: {
      setFilterType: (state, { payload }) => {
         state.filterType = payload;
      },
      setSortType: (state, { payload }) => {
         state.sortType = payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAllBlogsAsync.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getAllBlogsAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.blogs = payload;
            state.error = '';
         })
         .addCase(getAllBlogsAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error?.message;
         });
   },
});

export default blogsSlice.reducer;
export const { setFilterType, setSortType } = blogsSlice.actions;
