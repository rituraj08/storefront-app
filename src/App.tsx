import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import CheckoutScreen from "./pages/CheckoutScreen";
import OrderSummaryScreen from "./pages/OrderSummaryScreen";
import "./styles/index.css";
import "./App.css";

const RoutePath = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/Checkout",
    element: <CheckoutScreen />,
  },
  {
    path: "/OrderSummary",
    element: <OrderSummaryScreen/>
  }
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={RoutePath}>
      </RouterProvider>
    </Provider>
  );
}

export default App;
