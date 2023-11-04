import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';

export default function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:blogID" element={<BlogPage />} />
         </Routes>
      </>
   );
}
