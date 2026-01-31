import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Checkbox } from "@/components/animate-ui/components/base/checkbox";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({ component: App });

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
