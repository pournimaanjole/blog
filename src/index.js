
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Postblog from './views/Postblog/Postblog';
import Readblog from './views/Readblog/Readblog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router= createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/postblog",
        element:<Postblog/>,
    },
    {
        path:"/postblog/readblog/:id",
        element:<Readblog/>,
    }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);



