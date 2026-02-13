import { createFileRoute } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";

export const Route = createFileRoute("/app/")({
  component: AppComponent,
});

function AppComponent() {
  return <p className="text-2xl font-bold">{m.helloApp()}</p>;
}
