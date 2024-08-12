import React from 'react'

import { DailyStats, FeatureOne, HeroSection } from '../components';


const Home = () => {
 

  return (
    <div className="hero">
      <HeroSection/>
      <br />
      <hr
        style={{
          background: '#D9D9D9',
          color: 'D9D9D9',
          borderColor: 'D9D9D9',
          height: '2px',
          width: '80%',
        }}
      />
      <DailyStats/>
      <br />
      <br />
      <hr
        style={{
          background: '#D9D9D9',
          color: 'D9D9D9',
          borderColor: 'D9D9D9',
          height: '2px',
          width: '80%',
        }}
      />
      <br />
      <FeatureOne/>
      
    </div>
  )
}

export default Home