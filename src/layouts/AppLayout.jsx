import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
// import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function AppLayout() {
  return (
    <>
      <Navbar />
          <div className="p-4">
            <Outlet />
          </div>
      {/* <Footer /> */}
    </>
  )
}