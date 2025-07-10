import React, { useEffect } from 'react';
import { Navigate, useParams, Outlet } from 'react-router-dom';
import i18n from './utils/i18n.js';
import Home from './pages/Home/Home.jsx';
import Error404 from './pages/Errors/Error404.jsx';
import AppLayout from './layouts/AppLayout.jsx';
import Contact from './pages/Contact/Contact.jsx';
import LockerTypes from './pages/Locker-Types/LockerTypes.jsx';

// Wrapper to sync i18n language with URL param
const LanguageLayout = () => {
  const { lng } = useParams();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  // Render your main layout with nested routes
  return <AppLayout />;
};

// Your route config
const routes = [
  // Redirect root path to /en
  {
    path: '/',
    element: <Navigate to="/en" replace />,
  },
  {
    path: '/:lng',
    element: <LanguageLayout />,
    errorElement: <Error404 />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact-us', element: <Contact /> },
      { path: 'locker-types', element: <LockerTypes /> },
    ],
  },
];

export default routes;
