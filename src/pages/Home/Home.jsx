import { Trans ,useTranslation } from 'react-i18next';

function Home() {
   const { t } = useTranslation();




  return (
    <>
 
  <h1>Home</h1>
   {/* <h1>{t('Storage unit solutions')}</h1> */}
   
    </>
  )
}

export default Home
