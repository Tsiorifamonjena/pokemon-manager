import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";
import AddPokemonPage from "./pages/add/AddPokemonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "add",
    element: <AddPokemonPage />,
  },
]);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Pokemon Manager</p>
      </header>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
