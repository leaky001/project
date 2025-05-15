import React from 'react'
import { AllRoutes } from './routes/AllRoutes'
import { Footer } from './components/Layout/Footer'
import { Header } from './components/Layout/Header'

const App = () => {
  return (
    <div className='App dark:bg-dark'>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
