import Home from './pages/Home/Home.jsx'
import Error404 from './pages/Errors/Error404.jsx'
import AppLayout from './layouts/AppLayout.jsx' 
import Contact from './pages/Contact/Contact.jsx'
import LockerTypes from './pages/Locker-Types/LockerTypes.jsx'

const routes = [
  {
    path: '/',
    element: <AppLayout />, 
    errorElement: <Error404 />,
    children: [
      { index:true, element: <Home /> },
      { path: 'contact-us', element: <Contact /> },
      { path: 'locker-types', element: <LockerTypes/> },
    ],
  },
]

export default routes