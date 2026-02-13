"use client";

import { IconFolder, IconHome } from "@tabler/icons-react";
import { ClientOnly, Link } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { m } from "@/paraglide/messages";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

const getNavData = () => ({
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/tanstack-circle-logo.png",
  },
  pages: [
    {
      title: m.home(),
      url: "/app",
      icon: IconHome,
    },
    {
      title: m.projects(),
      url: "/app/projects",
      icon: IconFolder,
    },
  ],
});

export function AppSidebar() {
  const data = getNavData();
  return (
    <ClientOnly>
      <Sidebar variant="inset">
        <SidebarHeader>
          <Link to="/app">{m.sideProject2026()}</Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {data.pages.map((page) => (
              <SidebarMenuItem key={page.url}>
                <SidebarMenuButton
                  render={
                    <Link to={page.url}>
                      <page.icon />
                      {page.title}
                    </Link>
                  }
                />
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <NavSecondary />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
    </ClientOnly>
  );
}
