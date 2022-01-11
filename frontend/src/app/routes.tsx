import { Routes, Route } from "react-router-dom";

import { FormView, ListingView } from "./views";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListingView />} caseSensitive />
        <Route path="/form/:movieId" element={<FormView />} caseSensitive />
      </Routes>
    </>
  );
};

export default AppRoutes;
