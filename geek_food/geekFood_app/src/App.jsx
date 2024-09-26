import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './containers/Home/Home'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'

function App() {
  const [currentPage, setCurrentPage] =useState('home');
  const renderComponent = (Page)=>{
    switch(Page){
      case 'home':
        return <Home />;

      case 'quote':
        return <div>Page not Found</div>;

      default:
        return <Home />; 
    }
  }

  return (
    <>
      <Header setCurrentPage={setCurrentPage} page={currentPage} />
      {renderComponent(currentPage)}
      <Footer />
    </>
  )
}

export default App
