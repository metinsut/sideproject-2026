import { IconSettings } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { m } from "@/paraglide/messages";

export function NavSecondary() {
  return (
    <SidebarMenu className="mt-auto">
      <SidebarMenuItem>
        <SidebarMenuButton
          render={
            <Link to="/app/settings">
              <IconSettings />
              {m.settings()}
            </Link>
          }
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
