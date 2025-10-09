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
} from "@heroicons/react/24/outline";

export const routesByRole = {
  student: [
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
  ],
  admin: [
    {
      href: "/admin/overview",
      label: "Overview",
      solid: SquaresSolid,
      outline: SquaresOutline,
    },
    {
      href: "/admin/users",
      label: "Usuarios",
      solid: BookSolid,
      outline: BookOutline,
    },
    {
      href: "/admin/reports",
      label: "Reportes",
      solid: FolderSolid,
      outline: FolderOutline,
    },
  ],
};

export const footerRoutes = [
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
