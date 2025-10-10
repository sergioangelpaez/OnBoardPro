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
    { href: "/dashboard", label: "Dashboard", solid: SquaresSolid, outline: SquaresOutline },
    { href: "/dashboard/courses", label: "Cursos", solid: BookSolid, outline: BookOutline },
    { href: "/dashboard/submissions", label: "Misiones", solid: FolderSolid, outline: FolderOutline },
    { href: "/dashboard/leaderboard", label: "Clasificación", solid: TrophySolid, outline: TrophyOutline },
    { href: "/dashboard/calendar", label: "Calendario", solid: CalendarSolid, outline: CalendarOutline },
  ],
  admin: [
    { href: "/dashboard", label: "Dashboard", solid: SquaresSolid, outline: SquaresOutline },
    { href: "/users", label: "Usuarios", solid: UsersSolid, outline: UsersOutline },
    { href: "/reports", label: "Reportes", solid: DocumentSolid, outline: DocumentOutline },
  ],
};

export const footerRoutes: NavRoute[] = [
  { href: "/dashboard/settings", label: "Settings", solid: SettingsSolid, outline: SettingsOutline },
  { href: "/dashboard/help", label: "Help", solid: HelpSolid, outline: HelpOutline },
];
