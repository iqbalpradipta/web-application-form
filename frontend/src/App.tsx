import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homePages';
import Layout from './layout';
import FormPages from './pages/formPages';


function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/form",
          element: <FormPages />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={Router} />
  )

}

export default App
