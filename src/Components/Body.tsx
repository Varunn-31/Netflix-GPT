import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.tsx";
import Authentication from "./Login2.tsx";

const approute = createBrowserRouter([
    {
        path: "/",
        element: <Authentication />
    },
    {
        path: "/browse",
        element: <Browse />
    }
]);

const Body = () => {
    return (
        <div>
            <RouterProvider router={approute} />
        </div>
    );
};

export default Body;