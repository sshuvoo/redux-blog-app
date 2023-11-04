/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function PostItem({ blog }) {
   return (
      <div className="lws-card">
         <Link to={`blog/${blog.id}`}>
            <img src={blog.image} className="lws-card-image" alt="" />
         </Link>
         <div className="p-4">
            <div className="lws-card-header">
               <p className="lws-publishedDate">{blog.createdAt}</p>
               <p className="lws-likeCount">
                  <i className="fa-regular fa-thumbs-up"></i>
                  {blog.likes}
               </p>
            </div>
            <a href="post.html" className="lws-postTitle">
               {blog.title}
            </a>
            <div className="lws-tags">
               {blog.tags?.length > 0 &&
                  blog.tags.map((tag, index) => (
                     <span key={index}>
                        #{tag}
                        {blog.tags?.length - 1 === index ? '' : ','}
                     </span>
                  ))}
            </div>
            {blog.isSaved && (
               <div className="flex gap-2 mt-4">
                  <span className="lws-badge"> Saved </span>
               </div>
            )}
         </div>
      </div>
   );
}
