import Home from './pages/Home/Home.jsx'
// import AboutUs from './pages/AboutUs.jsx'
import Error404 from './pages/Errors/Error404.jsx'
import AppLayout from './layouts/AppLayout.jsx' // optional layout wrapper
import Contact from './pages/Contact/Contact.jsx'

const routes = [
  {
    path: '/',
    element: <AppLayout />, 
    errorElement: <Error404 />,
    children: [
      { index:true, element: <Home /> },
      { path: 'contact-us', element: <Contact /> },
    ],
  },
]

export default routes