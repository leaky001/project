import React from 'react';
import AllRoutes from './routes/AllRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App dark:bg-dark'>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
