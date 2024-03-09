

import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'


// images and data from Data.js

import { Gents, Ladies } from '../data/Data'
import { WomenCollection } from '../components/WomenCollection'


console.log(Gents)

const MainPage = () => {


  const [gentsFashion, setGentsGashion] = useState(Gents);

  const[ladiesFashion, setLadiesFashion] = useState(Ladies);

  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion = {gentsFashion}/>
        <WomenCollection ladiesFashion = {ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage