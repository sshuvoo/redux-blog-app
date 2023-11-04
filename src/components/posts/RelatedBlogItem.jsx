import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function RelatedBlogItem({ blog }) {
   return (
      <div className="card">
         <Link to={`/blog/${blog.id}`}>
            <img src={blog.image} className="card-image" alt="" />
         </Link>
         <div className="p-4">
            <Link
               to={`/blog/${blog.id}`}
               className="text-lg post-title lws-RelatedPostTitle"
            >
               {blog.title}
            </Link>
            <div className="mb-0 tags">
               {blog.tags?.length > 0 &&
                  blog.tags.map((tag, index) => (
                     <span key={index}>
                        #{tag}
                        {blog.tags?.length - 1 === index ? '' : ', '}
                     </span>
                  ))}
            </div>
            <p>{blog.createdAt}</p>
         </div>
      </div>
   );
}
