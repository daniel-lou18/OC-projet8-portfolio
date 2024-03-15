import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route
          index
          element={
            <>
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
