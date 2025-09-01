import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Issue from "./components/Issue";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

const App=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};
const routerLayout=createBrowserRouter([
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"/",
                    element:<Body/>,
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/home",
                    element:<App/>
                }
            ],
            errorElement:<Issue/>,
        },
    ])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerLayout}/>);