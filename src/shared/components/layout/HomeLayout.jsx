import React from 'react'
import HeaderPage from '../partials/HeaderPage'
import FooterPage from '../partials/FooterPage'

const HomeLayout = ({children}) => {
  return (
    <div className='grid grid-rows-[auto,1fr,auto]'>
        <HeaderPage/>
        {children}
        <FooterPage/>

    </div>
  )
}

export default HomeLayout