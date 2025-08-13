import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy } from "react";
import userContext from "./utils/userContext";
// import Grocery from "./components/Grocery";
import { useState, useEffect } from "react";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy (()=> import("./components/Grocery"))

const App = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name : "sid"
        }
        setUserName(data.name);
    }, [])
    

    return (
        <Provider store={appStore}>
        <userContext.Provider value={{loggedinuser: userName , setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </userContext.Provider>
        </Provider>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />
        },
        {
            path: "/grocery",
            element: <Suspense><Grocery/></Suspense>
        },
        {
            path: "/cart",
            element: <Cart/>
        }],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);