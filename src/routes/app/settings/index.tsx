import { createFileRoute } from "@tanstack/react-router";
import { Lang } from "./-lang";
import { Theme } from "./-theme";

export const Route = createFileRoute("/app/settings/")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="grid gap-3">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your app preferences.</p>
      </div>
      <Theme />
      <Lang />
    </div>
  );
}
