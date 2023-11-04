import { Link } from 'react-router-dom';

export default function GoHomeButton() {
   return (
      <div className="container mt-8">
         <Link
            to={'/'}
            className="inline-block text-gray-600 home-btn"
            id="lws-goHome"
         >
            <i className="mr-2 fa-solid fa-house"></i>Go Home
         </Link>
      </div>
   );
}
