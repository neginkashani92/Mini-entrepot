import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../components/layout/Footer'

export default function AppLayout() {
  return (
    <>
      <Navbar />
          <div>
            <Outlet />
          </div>
      <Footer />
    </>
  )
}