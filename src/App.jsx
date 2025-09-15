import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home, About, Recipes, Ingredients  } from "./pages";
import MainLayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        { path: "/ingredients/:id", 
          element: <Ingredients /> ,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
