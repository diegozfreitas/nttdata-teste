import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../Pages/Dashboard";
import { Register } from "../Pages/Register";
import { Farms } from "../Pages/Farms";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/edit" element={<Register />}>
        <Route index element={<Register />} />
        <Route path=":idfarm" element={<Register />} />
      </Route>
      <Route path="/farms" element={<Farms />} />

      {/* <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route> */}
    </Routes>
  );
};
