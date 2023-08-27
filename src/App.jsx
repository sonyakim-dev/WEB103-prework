import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index path="/" element={<ShowCreators />} />
        <Route path="create" element={<AddCreator />} />
        <Route path="edit/:id" element={<EditCreator />} />
        <Route path="detail/:id" element={<ViewCreator />} />
      </Route>
    </Routes>
  );
}

export default App;
