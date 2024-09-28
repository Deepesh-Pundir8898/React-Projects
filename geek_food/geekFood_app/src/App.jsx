import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './containers/Home/Home'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Quotes } from './containers/Quotes/Quotes'
import Restaurants from './containers/Restaurants/Restaurants'

function App() {
  const [currentPage, setCurrentPage] =useState('home');
  const renderComponent = (Page)=>{
    switch(Page){
      case 'home':
        return <Home />;

      case 'quote':
        return <Quotes />;

      case 'restaurant':
        return <Restaurants />

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
