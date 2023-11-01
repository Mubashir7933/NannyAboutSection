import React from 'react'
import imgRight from '../assets/Rectangle 84.png'

function AboutUsTwo() {
  return (
    <div className='SecTwoCont'>
    <div className='AboutUsTwo'>
        <div className='AboutUsTwoLeft'>
            <h2 className='AboutUsHeading'>We are a Mission Driven<br/>Company</h2>
            <p className='AboutUsParagraph'>likeNATIVE agency is a trustworthy and <br/> experianced team offering a 
            professional <br/>service to the families in the UK and worldwide. You can count on us to be<br/> your trusted childcare and 
            tution <br/> agency</p>
        </div>
        <div className='AboutUsRight'>
            <div className='AboutImage'>
              <img src={imgRight} alt='image'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUsTwo