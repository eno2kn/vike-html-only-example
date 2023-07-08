// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { createContext, useContext } from "react";
import type { PageContextValue } from "./types";

const PageContext = createContext<PageContextValue>(
  undefined as unknown as PageContextValue
);

export function PageContextProvider({
  value,
  children,
}: {
  value: PageContextValue;
  children: React.ReactNode;
}) {
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  const pageContext = useContext(PageContext);
  return pageContext;
}
