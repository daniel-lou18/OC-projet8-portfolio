import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

type MyNavLinkProps = PropsWithChildren<{ to: string; onClick: () => void }>;

function MyNavLink({ children, to, onClick }: MyNavLinkProps) {
  return (
    <li className="h-full relative">
      <NavLink className={`h-full flex items-center`} to={to} onClick={onClick}>
        {children}
      </NavLink>
    </li>
  );
}

export default MyNavLink;
