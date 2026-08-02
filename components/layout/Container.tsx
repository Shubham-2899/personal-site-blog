import type { ReactNode } from "react";

/** The single 680px column every page lives in. */
export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[680px] px-6 pt-14 pb-10">
      {children}
    </div>
  );
}
