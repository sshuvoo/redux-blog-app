import FilterComponent from './FilterComponent';
import SortComponent from './SortComponent';

export default function Sidebar() {
   return (
      <aside>
         <div className="sidebar-items">
            <SortComponent />
            <FilterComponent />
         </div>
      </aside>
   );
}
