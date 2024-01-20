import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from '../Index';
import Home from '../pages/Home';
import About from '../pages/About';
import Project_Info from '../pages/Project_Info';
import Contact from '../pages/Contact';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/About',
                element: <About />
            },
            {
                path: '/Project/:id/:name',
                element: <Project_Info />                           
            },
            {
                path: '/Contact',
                element: <Contact />
            }
        ]        
    },    
])

function Routes() {
    return (
        <RouterProvider router={router} />
    )
}

export default Routes