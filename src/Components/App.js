import React from 'react'
import Navbar from './Navbar'
import Journal from './Journal'
import Footer from './Footer'
import data from '../data'

const App = () => {
    const journals = data.map(item => {
        return <Journal 
        key={item.id}
        item={item} 
        
        />
    })
    
  return (
    <div>
        <Navbar />
        {journals}
        <Footer />    
    </div>
  )
}

export default App