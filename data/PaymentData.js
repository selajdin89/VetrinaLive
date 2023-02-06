import CashIcon from "../assets/Icons/CashIcon";
import WireFarmIcon from "../assets/Icons/WireFarmIcon";
import StripeIcon from "../assets/Icons/StripeIcon";
import PayPallIcon from "../assets/Icons/PayPallIcon";
import RazoPayIcon from "../assets/Icons/RazoPayIcon";
import AlipayIcon from "../assets/Icons/AlipayIcon";
import PaystackIcon from "../assets/Icons/PaystackIcon";

export const payments = [
  {
    key: "1",
    icon: <CashIcon />,
    status: "Disable",
    method: "Cash",
  },
  {
    key: "2",
    icon: <WireFarmIcon />,
    status: "Disabled",
    method: "Wire Transfer",
  },
  {
    key: "3",
    icon: <StripeIcon />,
    status: "Disabled",
    method: "Stripe",
  },
  {
    key: "4",
    icon: <PayPallIcon />,
    status: "Disabled",
    method: "Paypall",
  },
  {
    key: "5",
    icon: <RazoPayIcon />,
    status: "Disable",
    method: "Razoplay",
  },
  {
    key: "6",
    icon: <AlipayIcon />,
    status: "Disable",
    method: "AliPay",
  },
  {
    key: "7",
    icon: <PaystackIcon />,
    status: "Disable",
    method: "Paystack",
  },
];
