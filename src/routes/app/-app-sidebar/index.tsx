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
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/tanstack-circle-logo.png",
  },
  pages: [
    {
      title: "Home",
      url: "/app",
      icon: IconHome,
    },
    {
      title: "Projects",
      url: "/app/projects",
      icon: IconFolder,
    },
  ],
};

export function AppSidebar() {
  return (
    <ClientOnly>
      <Sidebar variant="inset">
        <SidebarHeader>
          <Link to="/app">Side Project 2026</Link>
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
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
    </ClientOnly>
  );
}
