import { useDispatch } from 'react-redux';
import {
   patchBlogLikesAsync,
   patchBlogSavedAsync,
} from '../../redux/features/single_blog/singleBlogSlice';

/* eslint-disable react/prop-types */
export default function SingleBlog({ blog }) {
   const dispatch = useDispatch();

   return (
      <main className="post">
         <img
            src={blog.image}
            alt="githum"
            className="w-full rounded-md"
            id="lws-megaThumb"
         />
         <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
               {blog.title}
            </h1>
            <div className="tags" id="lws-singleTags">
               {blog.tags?.length > 0 &&
                  blog.tags.map((tag, index) => (
                     <span key={index}>
                        #{tag}
                        {blog.tags?.length - 1 === index ? '' : ', '}
                     </span>
                  ))}
            </div>
            <div className="btn-group">
               <button
                  onClick={() =>
                     dispatch(
                        patchBlogLikesAsync({
                           id: blog.id,
                           likes: blog.likes + 1,
                        })
                     )
                  }
                  className="like-btn"
                  id="lws-singleLinks"
               >
                  <i className="fa-regular fa-thumbs-up"></i> {blog.likes}
               </button>
               <button
                  onClick={() =>
                     dispatch(
                        patchBlogSavedAsync({
                           id: blog.id,
                           isSaved: !blog.isSaved,
                        })
                     )
                  }
                  className={`${blog.isSaved && 'active'} save-btn`}
                  id="lws-singleSavedBtn"
               >
                  <i className="fa-regular fa-bookmark"></i>
                  {blog.isSaved ? ' Saved' : ' Save'}
               </button>
            </div>
            <div className="mt-6">
               <p>{blog.description}</p>
            </div>
         </div>
      </main>
   );
}
