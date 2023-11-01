import React from 'react'
import AboutUsHero from './sections/AboutUsHero'
import AboutUsTwo from './sections/AboutUsTwo'
import AboutUsThree from './sections/AboutUsThree'
import AboutUsFour from './sections/AboutUsFour'

function AboutUs() {
  return (
    <>
<AboutUsHero/>
    <div className='AboutUs'>
<AboutUsTwo/>
<AboutUsThree/>
<AboutUsFour/>
    </div>
    </>
  )
}

export default AboutUs