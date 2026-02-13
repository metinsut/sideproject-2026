import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/app" });
  },
  component: App,
});

function App() {
  return <div className="flex flex-col gap-4 max-w-4xl">landing</div>;
}
