import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}
