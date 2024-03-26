import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

type MyNavLinkProps = PropsWithChildren<{
  to: string;
  onClick: () => void;
  id?: string;
}>;

function MyNavLink({ children, to, onClick, id }: MyNavLinkProps) {
  return (
    <li className="h-full relative">
      <NavLink
        className={`h-full flex items-center`}
        to={id ? id : to}
        onClick={onClick}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default MyNavLink;
