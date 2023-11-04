import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './features/blogs/blogsSlice';
import singleBlogSlice from './features/single_blog/singleBlogSlice';
import relatedBlogsSlice from './features/related_blogs/relatedBlogsSlice';

const store = configureStore({
   reducer: {
      blogs: blogsSlice,
      blog: singleBlogSlice,
      relatedBlogs: relatedBlogsSlice,
   },
});

export default store;
