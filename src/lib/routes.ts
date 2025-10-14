import type { ComponentType, SVGProps } from "react";
import {
  Squares2X2Icon as SquaresSolid,
  BookOpenIcon as BookSolid,
  FolderIcon as FolderSolid,
  TrophyIcon as TrophySolid,
  CalendarDaysIcon as CalendarSolid,
  Cog6ToothIcon as SettingsSolid,
  QuestionMarkCircleIcon as HelpSolid,
  UsersIcon as UsersSolid,
  DocumentChartBarIcon as DocumentSolid,
} from "@heroicons/react/24/solid";

import {
  Squares2X2Icon as SquaresOutline,
  BookOpenIcon as BookOutline,
  FolderIcon as FolderOutline,
  TrophyIcon as TrophyOutline,
  CalendarDaysIcon as CalendarOutline,
  Cog6ToothIcon as SettingsOutline,
  QuestionMarkCircleIcon as HelpOutline,
  UsersIcon as UsersOutline,
  DocumentChartBarIcon as DocumentOutline,
} from "@heroicons/react/24/outline";

export type Role = "student" | "admin" | "teacher";

export type NavRoute = {
  href: string;
  label: string;
  solid: ComponentType<SVGProps<SVGSVGElement>>;
  outline: ComponentType<SVGProps<SVGSVGElement>>;
};

export const routesByRole: Partial<Record<Role, NavRoute[]>> = {
  student: [
    { href: "/app/dashboard", label: "Dashboard", solid: SquaresSolid, outline: SquaresOutline },
    { href: "/app/dashboard/courses", label: "Cursos", solid: BookSolid, outline: BookOutline },
    { href: "/app/dashboard/submissions", label: "Misiones", solid: FolderSolid, outline: FolderOutline },
    { href: "/app/dashboard/leaderboard", label: "Clasificación", solid: TrophySolid, outline: TrophyOutline },
    { href: "/app/dashboard/calendar", label: "Calendario", solid: CalendarSolid, outline: CalendarOutline },
  ],
  admin: [
    { href: "/app/dashboard", label: "Dashboard", solid: SquaresSolid, outline: SquaresOutline },
    { href: "/app/users", label: "Usuarios", solid: UsersSolid, outline: UsersOutline },
  ],
};

export const footerRoutes: NavRoute[] = [
  { href: "/dashboard/settings", label: "Settings", solid: SettingsSolid, outline: SettingsOutline },
  { href: "/dashboard/help", label: "Help", solid: HelpSolid, outline: HelpOutline },
];
