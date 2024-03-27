import { PropsWithChildren } from "react";

function Line({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full">
      <div className="h-px w-full bg-neutral-300"></div>
      {children}
    </div>
  );
}

export default Line;
