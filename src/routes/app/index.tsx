import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/")({
  component: AppComponent,
});

function AppComponent() {
  return <p className="text-2xl font-bold">Hello "/app"!</p>;
}
