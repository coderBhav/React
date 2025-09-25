import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Issue from "./components/Issue";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

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
                    element:<Body/>
                },
                {
                    path:"/restaurant/:resId",
                    element:<RestaurantMenu/>
                }
            ],
            errorElement:<Issue/>,
        },
    ])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerLayout}/>);