"use client";

import {
  Grid2X2,
  Users,
  Settings,
  LogOut,
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  ClipboardList,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SideMenuProps {
  role?: string;
}

const SideMenu = ({ role = "student" }: SideMenuProps) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menuConfig: Record<
    string,
    { label: string; icon: React.ElementType; href: string }[]
  > = {
    admin: [
      { label: "Dashboard", icon: Grid2X2, href: "/app/dashboard" },
      { label: "Usuarios", icon: Users, href: "/app/users" },
      { label: "Citas", icon: Calendar, href: "/app/appointments" },
      { label: "Reportes", icon: FileText, href: "/app/reports" },
    ],
    doctor: [
      { label: "Dashboard", icon: Grid2X2, href: "/app/dashboard" },
      { label: "Mis Citas", icon: Calendar, href: "/app/my-appointments" },
      { label: "Pacientes", icon: UserCircle2, href: "/app/patients" },
      {
        label: "Reportes Médicos",
        icon: ClipboardList,
        href: "/app/medical-reports",
      },
    ],
    patient: [
      { label: "Dashboard", icon: Grid2X2, href: "/app/dashboard" },
      { label: "Agendar Cita", icon: Calendar, href: "/app/book-appointment" },
      { label: "Mis Médicos", icon: Stethoscope, href: "/app/doctors" },
      { label: "Historial", icon: FileText, href: "/app/history" },
    ],
    student: [
      { label: "Dashboard", icon: Grid2X2, href: "/app/dashboard" },
      { label: "Cursos", icon: ClipboardList, href: "/app/courses" },
      { label: "Evaluaciones", icon: FileText, href: "/app/exams" },
    ],
  };

  const mainLinks = menuConfig[role] || menuConfig["student"];

  const bottomLinks = [
    { label: "Configuración", icon: Settings, href: "/app/settings" },
    { label: "Cerrar sesión", icon: LogOut, href: "/logout" },
  ];

  return (
    <aside
      className={cn(
        "flex flex-col justify-between h-full rounded-2xl p-4 transition-all duration-300 text-white",
        collapsed ? "w-[80px]" : "w-[240px]"
      )}
    >
      {/* === Header + Toggle === */}
      <div className="flex items-center justify-between mb-6 px-2">
        {!collapsed && (
          <h1 className="text-2xl font-semibold tracking-tight truncate">
            Onboard Pro
          </h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white/70 hover:text-white hover:bg-white/10"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* === Parte superior === */}
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1">
          {mainLinks.map(({ label, icon: Icon, href }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Button
                key={href}
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 text-left font-medium transition-all duration-150",
                  collapsed ? "px-2 justify-center" : "px-4",
                  "hover:bg-white/10 hover:text-white text-[15px]",
                  isActive
                    ? "bg-accent text-white font-semibold"
                    : "text-white/80"
                )}
              >
                <Link href={href} className="flex items-center">
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span className="truncate">{label}</span>}
                </Link>
              </Button>
            );
          })}
        </div>
      </ScrollArea>

      {/* === Inferior === */}
      <div className="pt-4">
        <Separator className="my-3 bg-white/20" />
        <div className="flex flex-col gap-1">
          {bottomLinks.map(({ label, icon: Icon, href }) => (
            <Button
              key={href}
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 text-left font-medium transition-colors duration-150",
                collapsed ? "px-2 justify-center" : "px-4",
                "text-white/80 hover:text-white hover:bg-white/10 text-[15px]"
              )}
            >
              <Link href={href}>
                <Icon className="h-5 w-5" />
                {!collapsed && <span>{label}</span>}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
