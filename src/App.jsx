
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LayOut from "./components/LayOut/LayOut.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Booking from './components/Booking/Booking.jsx';



function App() {


    const Routs = createBrowserRouter([
        {path: '', element: <LayOut/> , children: [

                {index: true , element : <SignIn/> },

                // Main component
                {path: 'home', element : <Home/> },
                {path: 'booking' , element : <Booking/> },
                {path: 'cart', element : <Cart/> },
                {path: 'about-us', element : <AboutUs/> },

                //Register routeing
                {path : 'signing', element : <SignIn /> },
                {path : 'sighup' , element: <SignUp/>},



                //Not Found page
                {path: '*' , element: <NotFound/>}






            ]},
    ])


  return (
    <>

        <RouterProvider router={Routs}>

        </RouterProvider>

    </>
  )
}

export default App
