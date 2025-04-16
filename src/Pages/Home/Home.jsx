import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {

    const [category , setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed category={category}/>  {/*by this it should show that video based on category like home , game ,sports by using API*/}

      </div>
    </>
  )
}

export default Home
