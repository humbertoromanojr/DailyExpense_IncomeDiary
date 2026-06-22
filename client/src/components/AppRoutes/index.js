import { Routes, Route } from "react-router-dom";

import Dashboard from "../../screens/Dashboard";
import Add from "../../screens/Add";
import MyList from "../../screens/MyList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} exact />
      <Route path="/add" element={<Add />} exact />
      <Route path="/myList" element={<MyList />} exact />
    </Routes>
  );
}
