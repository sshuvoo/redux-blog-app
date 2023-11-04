import { useDispatch, useSelector } from 'react-redux';
import { setFilterType } from '../../redux/features/blogs/blogsSlice';

export default function FilterComponent() {
   const { filterType } = useSelector((state) => state.blogs);
   const dispatch = useDispatch();

   return (
      <div className="sidebar-content">
         <h4>Filter</h4>
         <div className="radio-group">
            <div>
               <input
                  onChange={() => dispatch(setFilterType('All'))}
                  type="radio"
                  name="filter"
                  id="lws-all"
                  checked={filterType === 'All'}
                  className="radio"
               />
               <label htmlFor="lws-all">All</label>
            </div>
            <div>
               <input
                  onChange={() => dispatch(setFilterType('Saved'))}
                  checked={filterType === 'Saved'}
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
               />
               <label htmlFor="lws-saved">Saved</label>
            </div>
         </div>
      </div>
   );
}
