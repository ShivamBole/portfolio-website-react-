import React from 'react'
import Banner from './Banner';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';
//import Projects from './Projects';
function Container() {
  return (
<div>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <BrowserRouter>
      <Routes>
           <Route path='/Projects' element={<Projects/>}/>
           </Routes>
         </BrowserRouter>  */}
    </div> 
     )
}

export default Container
