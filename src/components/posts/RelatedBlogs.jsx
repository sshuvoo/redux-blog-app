/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedBlogsAsync } from '../../redux/features/related_blogs/relatedBlogsSlice';
import RelatedBlogItem from './RelatedBlogItem';

export default function RelatedBlogs({ currentBlogID, tags }) {
   const { relatedBlogs } = useSelector((state) => state.relatedBlogs);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getRelatedBlogsAsync({ currentBlogID, tags }));
   }, [dispatch, currentBlogID, tags]);

   return (
      <aside>
         <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
            Related Posts
         </h4>
         <div className="space-y-4 related-post-container">
            {relatedBlogs?.length > 0 &&
               relatedBlogs.map((blog) => (
                  <RelatedBlogItem key={blog.id} blog={blog} />
               ))}
         </div>
      </aside>
   );
}
