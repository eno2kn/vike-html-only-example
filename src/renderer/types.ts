type PageProps = Record<string, unknown>;

declare global {
  namespace Vike {
    interface PageContext {
      Page: (pageProps: PageProps) => JSX.Element;
      pageProps?: PageProps;
      config: {
        title?: string;
      };
    }
  }
}
// Tell TypeScript this file isn't an ambient module
export {};
