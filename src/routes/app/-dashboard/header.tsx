import { ClientOnly } from "@tanstack/react-router";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <ClientOnly>
      <header className="pt-3 px-3">
        <SidebarTrigger />
      </header>
    </ClientOnly>
  );
}
