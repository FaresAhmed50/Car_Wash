import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Home from "./components/Home/Home.jsx";
import Booking from "./components/Booking/Booking.jsx";
import Cart from "./components/Cart/Cart.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
    const Routes = createBrowserRouter([
        // Routes for the main layout
        {
            path: '',
            element: <LayOut />,
            children: [
                { path: 'home', element: <Home /> }, // Main components
                { path: 'booking', element: <Booking /> },
                { path: 'cart', element: <Cart /> },
                { path: 'about-us', element: <AboutUs /> },
                { path: '*', element: <NotFound /> }, // Not Found page
            ],
        },
        // Routes outside the main layout
        { index: true, element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
    ]);

    return (
        <>
            <RouterProvider router={Routes}></RouterProvider>
        </>
    );
}

export default App;
