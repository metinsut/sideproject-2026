import { IconFolder, IconHome } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { m } from "@/paraglide/messages";

export function NavPrimary() {
  const pages = [
    {
      title: m.home(),
      url: "/app/home",
      icon: IconHome,
    },
    {
      title: m.projects(),
      url: "/app/projects",
      icon: IconFolder,
    },
  ];

  return (
    <SidebarMenu>
      {pages.map((page) => (
        <SidebarMenuItem key={page.url}>
          <SidebarMenuButton
            render={
              <Link to={page.url} activeProps={{ className: "bg-primary text-primary-foreground" }}>
                <page.icon />
                {page.title}
              </Link>
            }
          />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
