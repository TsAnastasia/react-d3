import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface I extends ButtonProps {
  to?: string;
}

const AppButton = styled(({ to, ...props }: I) => {
  const linkProps = to ? { component: Link, to } : {};

  return <Button {...props} {...linkProps} />;
})({
  textTransform: "none",
});

export default AppButton;
