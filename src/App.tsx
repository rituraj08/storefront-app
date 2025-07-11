import "./App.css";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import "./styles/index.css";
import Checkout from "./features/Checkout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import OrderSummary from "./features/OrderSummary";

const RoutePath = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/Checkout",
    element: <Checkout />,
  },
  {
    path: "/OrderSummary",
    element: <OrderSummary/>
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
