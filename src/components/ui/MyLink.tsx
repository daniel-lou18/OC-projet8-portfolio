import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type MyLinkProps = PropsWithChildren<{
  to: string;
  onClick?: () => void;
  target?: string;
}>;

function MyLink({ children, ...restProps }: MyLinkProps) {
  return <Link {...restProps}>{children}</Link>;
}

export default MyLink;
