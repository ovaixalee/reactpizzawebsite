import React from 'react'
import { Navbar } from '../components/Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, 
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn} from './HeroElements'

const Hero = () => {
    return (        
        <HeroContainer>
            <Navbar />
            <Sidebar/>
            <HeroContent>
             <HeroItems>
              <HeroH1>Best Pizza in Town</HeroH1>
              <HeroP>Deliver in 30 minutes</HeroP>
              <HeroBtn>Bestellen</HeroBtn>
             </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
