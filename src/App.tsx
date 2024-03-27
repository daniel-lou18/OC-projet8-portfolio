import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
