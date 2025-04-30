import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

interface DefaultLayoutContentProps {
  children: ReactNode;
  className?: string;
  hero?: boolean;
  fluid?: boolean;
}

export function DefaultLayout({ children, className }: DefaultLayoutProps) {
  return (
    <main
      data-component="DefaultLayout"
      className={cn(
        "flex flex-col items-center justify-start w-full mx-auto bg-white",
        "flex-1 overflow-y-auto overflow-x-clip no-scroll",
        className,
      )}
    >
      {children}
    </main>
  );
}

export function DefaultLayoutContent({
  children,
  className,
  hero = false,
  fluid = false,
}: DefaultLayoutContentProps) {
  return (
    <div
      data-component="DefaultLayoutContent"
      className={cn(
        "flex flex-col items-center w-full max-w-screen-desktop",
        hero ? "flex-1 justify-center" : "",
        fluid ? "" : "px-std-3 tablet:px-std-3-tablet",
        className,
      )}
    >
      {children}
    </div>
  );
}

// Attach Content as a property of DefaultLayout
(DefaultLayout as any).Content = DefaultLayoutContent;
