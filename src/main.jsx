import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pcaccess from './components/Pcaccess';
import Foodorder from './components/Foodorder';
import BillingPage from './components/BillingPage';
import OrderInfo from './components/OrderInfo';
import ThankYouPage from './components/Thanks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pcaccess></Pcaccess>,
  },
  {
    path: "/food",
    element: <Foodorder></Foodorder>,
  },
  {
    path: "/foodbill",
    element: <BillingPage></BillingPage>,
  },
  {
    path: "/orderinfo",
    element: <OrderInfo></OrderInfo>,
  },
  {
    path: "/thanks",
    element: <ThankYouPage></ThankYouPage>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
