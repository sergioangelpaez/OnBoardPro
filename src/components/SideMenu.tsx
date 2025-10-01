"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Squares2X2Icon as SquaresSolid,
  BookOpenIcon as BookSolid,
  FolderIcon as FolderSolid,
  TrophyIcon as TrophySolid,
  CalendarDaysIcon as CalendarSolid,
  Cog6ToothIcon as SettingsSolid,
  QuestionMarkCircleIcon as HelpSolid,
  Bars3Icon,
  XMarkIcon,
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
  const [floatingOpen, setFloatingOpen] = useState(false);

  const toggleMenu = () => setCollapsed(!collapsed);
  const toggleFloating = () => setFloatingOpen(!floatingOpen);

  useEffect(() => {
    setFloatingOpen(false);
  }, [pathname]);

  const renderLinks = (links: typeof routes, isMobile = false) =>
    links.map(({ href, label, solid: SolidIcon, outline: OutlineIcon }) => {
      const isActive = pathname === href;
      const Icon = isActive ? SolidIcon : OutlineIcon;

      return (
        <div key={href} className="flex gap-4 items-center">
          {!isMobile && (
            <div
              className={`transition-all ${
                isActive ? "border-r-6 border-accent rounded-r-lg h-10" : "h-8"
              }`}
              aria-hidden="true"
            />
          )}

          <Link
            href={href}
            title={label}
            aria-label={collapsed ? label : undefined}
            className={`flex items-center gap-5 p-2 ${
              collapsed ? null : "w-full"
            } rounded-lg transition-colors ${
              isActive
                ? "bg-accent text-white font-semibold"
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
    <>
      {/* Menú escritorio */}
      <aside
        id="side-menu"
        className={`hidden md:flex relative flex-col justify-between h-full transition-all duration-300 text-white/80 ${
          collapsed ? "w-16" : "w-64"
        }`}
        aria-label="Menú lateral de navegación"
      >
        <button
          onClick={toggleMenu}
          aria-label={collapsed ? "Abrir menú lateral" : "Cerrar menú lateral"}
          aria-expanded={!collapsed}
          aria-controls="side-menu"
          title={collapsed ? "Abrir menú lateral" : "Cerrar menú lateral"}
          className="absolute cursor-pointer -right-5 top-1/2 -translate-y-1/2 bg-brand text-white p-2 rounded-full transition"
        >
          {collapsed ? (
            <ChevronRightIcon
              className="size-7 text-white"
              aria-hidden="true"
            />
          ) : (
            <ChevronLeftIcon className="size-7 text-white" aria-hidden="true" />
          )}
        </button>

        <div>
          <div className="flex items-center justify-center mb-4 h-[100px]">
            <h1
              className={`text-2xl font-bold truncate ${
                collapsed ? "pl-4" : null
              }`}
              aria-label="Onboard Pro"
            >
              {collapsed ? "OP" : "Onboard Pro"}
            </h1>
          </div>
          <nav
            className="flex flex-col gap-3"
            aria-label="Navegación principal"
          >
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

      {/* Botón móvil */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleFloating}
          aria-label={
            floatingOpen ? "Cerrar menú flotante" : "Abrir menú flotante"
          }
          aria-expanded={floatingOpen}
          aria-controls="floating-menu"
          className="bg-brand text-white p-3 rounded-full shadow-lg transition"
        >
          {floatingOpen ? (
            <XMarkIcon className="size-7" />
          ) : (
            <Bars3Icon className="size-7" />
          )}
        </button>
      </div>

      {/* Overlay + Menú flotante con fade */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          floatingOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleFloating}
        aria-hidden="true"
      />

      <div
        id="floating-menu"
        className={`fixed bottom-20 right-6 z-50 bg-brand text-white rounded-2xl p-4 shadow-2xl w-64 transition-all duration-300 ${
          floatingOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-3 mb-4">
          {renderLinks(routes, true)}
        </nav>
        <hr className="border-black/20 my-2" />
        <nav className="flex flex-col gap-3">
          {renderLinks(footerRoutes, true)}
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
