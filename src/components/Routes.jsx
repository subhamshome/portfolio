import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import BackToTopButton from './BackToTop';

const AppRoutes = () => (
     <div>
          <BackToTopButton />
          <Routes>
               <Route exact path="/" element={<Home />} />
          </Routes>
     </div>

   );
   
   export default AppRoutes;