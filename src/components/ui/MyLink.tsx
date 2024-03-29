import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type MyLinkProps = PropsWithChildren<{
  to: string;
  onClick?: () => void;
}> &
  ComponentPropsWithoutRef<"a">;

function MyLink({ children, ...otherProps }: MyLinkProps) {
  return <Link {...otherProps}>{children}</Link>;
}

export default MyLink;
