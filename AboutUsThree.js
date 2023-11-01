import React from 'react'
import secTwo from '../assets/Rectangle 99.png'
import AboutUsThreeJSPointsOne from '../subSections/AboutUsThreeJSPointsOne'
import AboutUsThreeJSPointsTwo from '../subSections/AboutUsThreeJSPointsTwo'
import AboutUsThreeJSPointsThree from '../subSections/AboutUsThreeJSPointsThree'

function AboutUsThree() {
    return (
        <div className='AboutUsThree'>

   
        <div className='AboutUsThreeLeft'> 
        <div className='ImageContLeft'>
            <img src={secTwo} alt=''/>
            </div>    
            </div>
            <div className='PointsOfRightSide'>
 <AboutUsThreeJSPointsOne/>
 <AboutUsThreeJSPointsTwo/>
 <AboutUsThreeJSPointsThree/>
            </div>
            
            </div>
  )
}

export default AboutUsThree