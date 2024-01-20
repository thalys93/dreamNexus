import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from '../Index';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
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
                path: '/Projects',
                element: <Projects />                           
            },
            {
                path: '/Contact',
                element: <Contact />
            }
        ]        
    },
    {
        path: '/Project',
        children: [
            {
                path: ':id/:name',
                element: <Project_Info />
            }
        ]
    }
])

function Routes() {
    return (
        <RouterProvider router={router} />
    )
}

export default Routes