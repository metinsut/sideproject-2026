import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    redirect({ to: "/app" });
  },
  component: App,
});

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <Label>
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <p>Checkbox</p>
      </Label>
    </div>
  );
}
