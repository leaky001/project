import React from 'react'
import {AllRoutes} from './routes/AllRoutes'
import {  Footer  } from './components'
import {Header} from './components'

const App = () => {
  return (
    <div className='App dark:bg-dark'>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
