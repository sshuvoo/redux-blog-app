import { useDispatch, useSelector } from 'react-redux';
import GoHomeButton from '../components/breadcrumbs/GoHomeButton';
import SingleBlog from '../components/posts/SingleBlog';
import RelatedBlogs from '../components/posts/relatedBlogs';
import { useEffect } from 'react';
import { getSingleBlogAsync } from '../redux/features/single_blog/singleBlogSlice';
import { useParams } from 'react-router-dom';

export default function BlogPage() {
   const { blog, isLoading, isError, error } = useSelector(
      (state) => state.blog
   );
   const dispatch = useDispatch();
   const { blogID } = useParams();

   useEffect(() => {
      dispatch(getSingleBlogAsync(blogID));
   }, [dispatch, blogID]);

   let content;
   if (isLoading) content = <h1>Loading...</h1>;
   if (!isLoading && isError) content = <h1>Error: {error}</h1>;
   if (!isLoading && !isError && !blog?.id) content = <h1>Blog not found</h1>;
   if (!isLoading && !isError && blog?.id) content = <SingleBlog blog={blog} />;
   return (
      <>
         <GoHomeButton />
         <section className="post-page-container">
            {content}
            <RelatedBlogs tags={blog.tags} currentBlogID={blog.id} />
         </section>
      </>
   );
}
