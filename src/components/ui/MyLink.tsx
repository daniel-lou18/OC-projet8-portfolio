import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type MyLinkProps = PropsWithChildren<{
  to: string;
  onClick?: () => void;
  target?: string;
}>;

function MyLink({ children, ...otherProps }: MyLinkProps) {
  return <Link {...otherProps}>{children}</Link>;
}

export default MyLink;
