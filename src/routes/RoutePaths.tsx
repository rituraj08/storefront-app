import { createBrowserRouter } from "react-router-dom";
import Checkout from './../features/Checkout';

import App from './../App';

export const RoutePath = createBrowserRouter([
    {
        path: "/",
        element : <App/>,


    },
    {
        path: "/Checkout",
        element : <Checkout/>,
        

    },
    // {
    //     path: "/OrderSummary",
    //     element : <OrderSummary/>,
        

    // }

  
]
   

)

