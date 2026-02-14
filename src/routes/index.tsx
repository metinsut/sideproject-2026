import { createFileRoute, redirect } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/app/home" });
  },
  component: App,
});

function App() {
  return <div className="flex flex-col gap-4 max-w-4xl">{m.landing()}</div>;
}
