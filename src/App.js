import React from 'react';
// components
// import Banner from './components/Banner';
// import Header from './components/Header';
// import Nav from './components/Nav';
// import About from './components/About';
// import Services from './components/Services';
// import Work from './components/Work';
// import Contact from './components/Contact';
import Projects from './components/Projects';
import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
import Container from './components/Container';
const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <BrowserRouter>
      
      <Routes>
           <Route path='/' element={<Container/> }/>
           <Route path='/Projects' element={<Projects/> }/>
           </Routes>
         </BrowserRouter> 
       
    </div>
  );
};

export default App;
