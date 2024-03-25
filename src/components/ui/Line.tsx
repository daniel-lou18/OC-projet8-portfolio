import { PropsWithChildren } from "react";

function Line({ children }: PropsWithChildren) {
  return (
    <div className="w-full relative">
      <div className="w-full h-px bg-neutral-300"></div>
      {children}
    </div>
  );
}

export default Line;
