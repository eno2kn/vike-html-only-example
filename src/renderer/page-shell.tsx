import React from "react";
import { PageContextProvider } from "./use-page-context";
import type { PageContextValue } from "./types";

export function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContextValue;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider value={pageContext}>{children}</PageContextProvider>
    </React.StrictMode>
  );
}
