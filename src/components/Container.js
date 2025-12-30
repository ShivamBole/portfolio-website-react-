import React from 'react'
import Banner from './Banner';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';  
import Certifications from './certifications';
import AdditionalDetails from './Interestssection ';

function Container({ themeHandler }) {
  return (
<div>
      <Nav />
      <Header themeHandler={themeHandler} />
      <Banner />  
      <About />
      <Skills />
      <Experience/>
       <Work />
      <Services />
      <Education />

      <Certifications />
     <AdditionalDetails/>
      <Contact />
              {/* Floating Particles Animation */}

      {/* <BrowserRouter>
      <Routes>
           <Route path='/Projects' element={<Projects/>}/>
           </Routes>
         </BrowserRouter>  */}
    </div> 
     )
}

export default Container
