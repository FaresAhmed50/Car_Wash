import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Booking from './components/Booking/Booking.jsx';
import Payment from './components/Payment/Payment.jsx';
import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';


function App() {



    useEffect(() => {
        initFlowbite();
    },[]);


    const Routes = createBrowserRouter([
        // Routes for the main layout
        {
            path: '',
            element: <LayOut />,
            children: [
                { index: true, element: <Home /> }, // Main components
                { path: 'booking', element: <Booking /> },
                { path: 'cart', element: <Cart /> },
                { path: 'about-us', element: <AboutUs /> },
                { path: 'payment', element: <Payment /> },

                { path: '*', element: <NotFound /> }, // Not Found page
            ],
        },
        // Routes outside the main layout
        { path:"signin", element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
    ]);

    return (
        <>
            <RouterProvider router={Routes}></RouterProvider>
        </>
    );
}

export default App;
