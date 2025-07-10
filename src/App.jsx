import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Trans ,useTranslation } from 'react-i18next';
import i18n from './utils/i18n';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
function App() {
 
  const { t } = useTranslation();



  return (
    <>
    {/* <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    <button onClick={() => i18n.changeLanguage('fr')}>FR</button> */}

{/* 
   <br />
   <h1>{t('Storage unit solutions')}</h1>
   <br /> */}
   
    {/* <p>
      <Trans i18nKey="StorageIntro" components={{
        strong: <strong />,
        }} 
      /> 
    </p> */}
    {/* <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='contact-us' element={<Contact/>} />
    </Routes> */}
  
    </>
  )
}

export default App
