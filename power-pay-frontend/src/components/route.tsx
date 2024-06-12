import {
    createBrowserRouter
  } from "react-router-dom"
  ;
  import PaymentOptions from "./paymentoption";
import RecipientInfo from "./RecipientInfo";
import QRScannerComponent
 from "./scan_rq";
const router = createBrowserRouter([
    {
      path: "/",
      element: <PaymentOptions/>,
    },
    {
        path: "/RecipientInfo",
                      element: <RecipientInfo.tsx/>,
    },
    {
        path: "/qRScannerComponent",
                      element: <QRScannerComponent/>,
    }
  ]);
  export default router;
