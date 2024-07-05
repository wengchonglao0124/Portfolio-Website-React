import './stylesheets/App.css';
import Home from "./components/mainComponents/Home";
import Resume from "./components/mainComponents/Resume";
import Projects from "./components/mainComponents/Projects";
import About from "./components/mainComponents/About";
import LetsConnect from "./components/mainComponents/LetsConnect";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./components/mainComponents/Root";
import { ProjectsProvider } from "./components/subComponents/ProjectsProvider";
import ProjectDetailedView from "./components/subComponents/ProjectDetailedView";
import {ErrorProvider} from "./components/subComponents/ErrorProvider";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,

        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/resume",
                element: <Resume />,
            },

            {
                path: "/projects",
                element: <Projects />,
            },

            {
                path: "/about",
                element: <About />,
            },

            {
                path: "/connect",
                element: <LetsConnect />,
            },

            {
                path: "/project/details",
                element: <ProjectDetailedView />,
            },
        ],
    },
]);

function App() {
    return (
        <ErrorProvider>
            <ProjectsProvider>
                <div className="App">
                    <RouterProvider router={router} />
                </div>
            </ProjectsProvider>
        </ErrorProvider>
    );
}

export default App;