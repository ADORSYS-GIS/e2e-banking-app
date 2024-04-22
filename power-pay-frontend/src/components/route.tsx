import {
    createBrowserRouter
  } from "react-router-dom"
  ;
  import PaymentOptions from "./paymentoption";
import UserInfo from "./userinfo";
import QRScannerComponent
 from "./scan_rq";
const router = createBrowserRouter([
    {
      path: "/",
      element: <PaymentOptions/>,
    },
    {
        path: "/userinfo",
                      element: <UserInfo/>,
    },
    {
        path: "/qRScannerComponent",
                      element: <QRScannerComponent/>,
    }
  ]);
  export default router;