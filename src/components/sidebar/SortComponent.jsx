import { useDispatch, useSelector } from 'react-redux';
import { setSortType } from '../../redux/features/blogs/blogsSlice';

export default function SortComponent() {
   const dispatch = useDispatch();
   const { sortType } = useSelector((state) => state.blogs);

   return (
      <div className="sidebar-content">
         <h4>Sort</h4>
         <select
            onChange={(e) => dispatch(setSortType(e.target.value))}
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            value={sortType}
         >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
         </select>
      </div>
   );
}
