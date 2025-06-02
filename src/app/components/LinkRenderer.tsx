// src\app\components\LinkRenderer.tsx

import React from "react";

export type LinkRendererProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    children?: React.ReactNode;
  };

export default function LinkRenderer({
  href,
  children,
  ...props
}: Readonly<LinkRendererProps>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="underline decoration-[var(--highlight-bg)] transition-colors duration-150 hover:decoration-[var(--primary-color)]"
    >
      {children}
    </a>
  );
}
