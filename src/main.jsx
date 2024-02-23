import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Resume from './pages/Resume';
import Contact from "./pages/Contactform";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import "./index.css"

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/portfolio',
        element: <Portfolio/>,
      },
      {
        path: '/resume',
        element: <Resume/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
