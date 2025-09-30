"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Squares2X2Icon as SquaresSolid,
  BookOpenIcon as BookSolid,
  FolderIcon as FolderSolid,
  TrophyIcon as TrophySolid,
  CalendarDaysIcon as CalendarSolid,
  Cog6ToothIcon as SettingsSolid,
  QuestionMarkCircleIcon as HelpSolid,
} from "@heroicons/react/24/solid";

import {
  Squares2X2Icon as SquaresOutline,
  BookOpenIcon as BookOutline,
  FolderIcon as FolderOutline,
  TrophyIcon as TrophyOutline,
  CalendarDaysIcon as CalendarOutline,
  Cog6ToothIcon as SettingsOutline,
  QuestionMarkCircleIcon as HelpOutline,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";

const routes = [
  {
    href: "/dashboard",
    label: "Dashboard",
    solid: SquaresSolid,
    outline: SquaresOutline,
  },
  {
    href: "/dashboard/courses",
    label: "Cursos",
    solid: BookSolid,
    outline: BookOutline,
  },
  {
    href: "/dashboard/submissions",
    label: "Misiones",
    solid: FolderSolid,
    outline: FolderOutline,
  },
  {
    href: "/dashboard/leaderboard",
    label: "Clasificación",
    solid: TrophySolid,
    outline: TrophyOutline,
  },
  {
    href: "/dashboard/calendar",
    label: "Calendario",
    solid: CalendarSolid,
    outline: CalendarOutline,
  },
];

const footerRoutes = [
  {
    href: "/dashboard/settings",
    label: "Settings",
    solid: SettingsSolid,
    outline: SettingsOutline,
  },
  {
    href: "/dashboard/help",
    label: "Help",
    solid: HelpSolid,
    outline: HelpOutline,
  },
];

const SideMenu = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => setCollapsed(!collapsed);

  const renderLinks = (links: typeof routes) =>
    links.map(({ href, label, solid: SolidIcon, outline: OutlineIcon }) => {
      const isActive = pathname === href;
      const Icon = isActive ? SolidIcon : OutlineIcon;

      return (
        <div key={href} className="flex gap-4 items-center">
          <div
            className={`transition-all ${
              isActive ? "border-r-6 border-accent rounded-r-lg h-10" : "h-8"
            }`}
            aria-hidden="true"
          />

          <Link
            href={href}
            title={label}
            aria-label={collapsed ? label : undefined}
            className={`flex items-center gap-5 p-2 ${
              collapsed ? null : "w-full"
            } rounded-lg transition-colors ${
              isActive
                ? "bg-white/30 text-white font-semibold"
                : "hover:bg-white/30 hover:text-white"
            }`}
          >
            <Icon className="size-6" aria-hidden="true" />
            {!collapsed && <p className="text-lg">{label}</p>}
          </Link>
        </div>
      );
    });

  return (
    <aside
      id="side-menu"
      className={`relative flex flex-col justify-between h-full transition-all duration-300 text-text-secondary ${
        collapsed ? "w-16" : "w-64"
      }`}
      aria-label="Menú lateral de navegación"
    >
      {/* Button */}
      <button
        onClick={toggleMenu}
        aria-label={collapsed ? "Abrir menú lateral" : "Cerrar menú lateral"}
        aria-expanded={!collapsed}
        aria-controls="side-menu"
        title={collapsed ? "Abrir menú lateral" : "Cerrar menú lateral"}
        className="absolute cursor-pointer -right-5 top-1/2 -translate-y-1/2 bg-brand text-accent p-2 rounded-full transition"
      >
        {collapsed ? (
          <ChevronRightIcon className="size-7" aria-hidden="true" />
        ) : (
          <ChevronLeftIcon className="size-7" aria-hidden="true" />
        )}
      </button>

      <div>
        <div className="flex items-center justify-center mb-4 h-1/2">
          {!collapsed && (
            <h1
              className="text-2xl font-bold truncate"
              aria-label="Onboard Pro"
            >
              Onboard Pro
            </h1>
          )}
        </div>
        <nav className="flex flex-col gap-3" aria-label="Navegación principal">
          {renderLinks(routes)}
        </nav>
      </div>

      <nav
        className="flex flex-col gap-3 mb-4"
        aria-label="Opciones de configuración"
      >
        {renderLinks(footerRoutes)}
      </nav>
    </aside>
  );
};

export default SideMenu;
