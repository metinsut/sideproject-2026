import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app/")({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({ to: "/app/home" });
  },
});

function RouteComponent() {
  return <Outlet />;
}
