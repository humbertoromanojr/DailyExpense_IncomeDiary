import { Routes, Route } from "react-router-dom";

import Dashboard from "../../screens/Dashboard";
import AddItem from "../../screens/AddItem";
import EditItem from "../../screens/EditItem";
import MyList from "../../screens/MyList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} exact />
      <Route path="/addItem" element={<AddItem />} exact />
      <Route path="/editItem:iditem" element={<EditItem />} exact />
      <Route path="/myList" element={<MyList />} exact />
    </Routes>
  );
}
