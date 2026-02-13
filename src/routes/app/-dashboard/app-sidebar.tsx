"use client";

import { IconFolder, IconHome } from "@tabler/icons-react";
import { ClientOnly, Link } from "@tanstack/react-router";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { m } from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";
import { NavPrimary } from "./nav-primary";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

export function AppSidebar() {
  const locale = getLocale();

  const dir = locale === "ar" ? "rtl" : "ltr";
  const side = dir === "rtl" ? "right" : "left";

  return (
    <ClientOnly>
      <Sidebar variant="inset" dir={dir} side={side}>
        <SidebarHeader>
          <Link to="/app">{m.sideProject2026()}</Link>
        </SidebarHeader>
        <SidebarContent>
          <NavPrimary />
          <NavSecondary />
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </Sidebar>
    </ClientOnly>
  );
}
