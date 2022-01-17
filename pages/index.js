
import Header from "./components/Header"
import Container from './components/Container'
import React, {useState, useEffect} from 'react';

export default function Home() {

  return (
    <div>
      <div className="flex w-screen h-screen" >
        
        <div className="w-screen ">
          <Header />
          <Container />
        </div>
      </div>

    </div>
  )
}
