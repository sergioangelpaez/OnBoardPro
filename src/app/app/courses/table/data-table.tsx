import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import * as React from "react";
import { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { PlusIcon, Columns, DownloadIcon, TrashIcon } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setIsUserDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  setIsUserDialogOpen,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [isMassiveDeletionDialogOpen, setIsMassiveDeletionDialogOpen] =
    useState(false);

  const handleMassiveDeletion = () => {
    setIsMassiveDeletionDialogOpen(false);
    window.location.reload();
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4 gap-3">
        <div className="flex items-center py-4 space-x-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => setIsUserDialogOpen(true)}
          >
            <PlusIcon className="w-4 h-4" />
            <span className="hidden md:block">Nuevo Curso</span>
          </Button>

          <Button variant="outline" size="sm">
            <DownloadIcon className="w-4 h-4" />
            <span className="hidden md:block">
              {table.getFilteredSelectedRowModel().rows.length > 0
                ? "Exportar seleccionados"
                : "Exportar todos"}
            </span>
          </Button>

          {table.getFilteredSelectedRowModel().rows.length > 0 && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setIsMassiveDeletionDialogOpen(true)}
            >
              <TrashIcon className="w-4 h-4" />
              <span className="hidden md:block">Borrar seleccionados</span>
            </Button>
          )}
        </div>

        <Input
          placeholder="Filtra cursos por nombre..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <Columns className="w-4 h-4" />
              Columnas
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No se encontraron resultados para tu búsqueda.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex space-x-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          {Array.from({ length: table.getPageCount() }).map((_, i) => (
            <Button
              key={i}
              variant={
                table.getState().pagination.pageIndex === i
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>

        {isMassiveDeletionDialogOpen && (
          <Dialog
            open={isMassiveDeletionDialogOpen}
            onOpenChange={setIsMassiveDeletionDialogOpen}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Eliminar usuario</DialogTitle>
                <DialogDescription>
                  ¿Estás seguro que quieres eliminar{" "}
                  {table.getFilteredSelectedRowModel().rows.length} usuarios?
                  <ul className="mt-2 space-y-1">
                    {table.getFilteredSelectedRowModel().rows.map((row) => (
                      <li
                        key={row.getValue("email")}
                        className="list-disc list-inside"
                      >
                        {row.getValue("email")}
                      </li>
                    ))}
                  </ul>
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsMassiveDeletionDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  onClick={handleMassiveDeletion}
                  variant="destructive"
                >
                  Eliminar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
