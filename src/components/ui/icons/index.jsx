import Paypal from "./IconPaypal";
import Visa from "./IconVisa";
import Mastercard from "./IconMastercard"

const icons = {
  paypal: Paypal,
  visa: Visa,
  mastercard: Mastercard,
}

const Icon = ({name, ...props}) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 60}
      width={props.size || 36}
      strokeWidth={props.strokeWidth || 1.9}
      color={props.color || "#7c7c7c"}
      {...props}
    />
  )
}

export default Icon;