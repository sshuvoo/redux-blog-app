import { useDispatch, useSelector } from 'react-redux';
import PostItem from '../components/posts/PostItem';
import Sidebar from '../components/sidebar/Sidebar';
import { useEffect } from 'react';
import { getAllBlogsAsync } from '../redux/features/blogs/blogsSlice';

export default function Home() {
   const { blogs, isLoading, isError, error, filterType, sortType } =
      useSelector((state) => state.blogs);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllBlogsAsync());
   }, [dispatch]);

   if (isLoading) return <h1>Loading...</h1>;
   if (!isLoading && isError) return <h1>Error: {error}</h1>;
   if (!isLoading && !isError && blogs?.length === 0)
      return <h1>No Blogs Found</h1>;

   const filteredBlog = blogs
      .filter((blog) => {
         if (filterType === 'All') return true;
         else {
            if (filterType === 'Saved' && blog.isSaved) return true;
            else return false;
         }
      })
      .sort((a, b) => {
         if (sortType === 'most_liked') {
            return b.likes - a.likes;
         } else if (sortType === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
         } else return 0;
      });

   return (
      <section className="wrapper">
         <Sidebar />
         <main className="post-container" id="lws-postContainer">
            {filteredBlog.map((blog) => (
               <PostItem key={blog.id} blog={blog} />
            ))}
         </main>
      </section>
   );
}
