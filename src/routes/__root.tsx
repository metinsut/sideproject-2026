import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getThemeServerFn } from "@/functions/theme/theme-server";
import type { ThemeTypes } from "@/functions/theme/types";
import { getLocale } from "@/paraglide/runtime";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => <div>Not Found</div>,
  shellComponent: RootComponent,
  loader: async () => {
    const theme = await getThemeServerFn();
    return { theme };
  },
});

function RootComponent() {
  const { theme } = Route.useLoaderData();
  return (
    <RootDocument theme={theme}>
      <Outlet />
    </RootDocument>
  );
}

type RootDocumentProps = {
  children: React.ReactNode;
  theme: ThemeTypes;
};

function RootDocument(props: RootDocumentProps) {
  const { children, theme } = props;
  const locale = getLocale();

  return (
    <html lang={locale} className={theme} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <TooltipProvider>
          {children}
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </TooltipProvider>
      </body>
    </html>
  );
}
