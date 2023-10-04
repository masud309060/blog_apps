import './App.css'
import {CssBaseline} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/common/layouts/RootLayout.tsx";
import PublicPage from "./components/public/PublicPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/dashboard',
                element:  <PublicPage />,
            },
            {
                path: '/*',
                element: <p>No Page Found!!</p>,
            },
        ],
    },
]);

function App() {

  return (
      <>
          <CssBaseline />
          <RouterProvider router={router} />
      </>
  )
}

export default App
