import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import BackToTopButton from './BackToTop';

// Stable, shareable CV address (the same redirect is also set in vercel.json for production).
const CvRedirect = () => {
     window.location.replace(`${process.env.PUBLIC_URL}/Subham_Shome_CV.pdf`);
     return null;
};

const AppRoutes = () => (
     <div>
          <BackToTopButton />
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/cv" element={<CvRedirect />} />
               <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
     </div>
);

export default AppRoutes;
