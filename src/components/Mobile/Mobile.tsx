import {
    MantineReactTable,
    useMantineReactTable,
    type MRT_ColumnDef,
  } from 'mantine-react-table';
  import { data, type Boon } from '../../data';
  import { Box,Stack } from '@mantine/core';
  import  { useMemo } from 'react';

const Mobile = () => {
    const columns = useMemo<MRT_ColumnDef<Boon>[]>(
        () => [
          {
            header: 'Boons',
            grow: 100,
            filterFn:'customFilterFn',
            enableGrouping: false,
            accessorKey: 'name',
            Cell: ({ cell }) => (
              <>
              <Stack 
              align="stretch"
              justify="center"
              >
              <Box style={{ color: 'skyblue' }}>{cell.getValue<string>()}</Box>
              <Box>{cell.row.original.desc}</Box>
              {!cell.row.original.title ?  <></>: <Box><strong style={{ color: 'skyblue' }}>Title:</strong> {cell.row.original.title}</Box>}
              <Box><strong style={{ color: 'skyblue' }}>Prerequisite:</strong> {cell.row.original.pre}</Box>
              <Box><strong style={{ color: 'skyblue' }}>Boon Points:</strong> {cell.row.original.lvl}</Box>
            </Stack>
            </>
            ),
          }
        ],[]);

    const table = useMantineReactTable({
        columns,
        data,
        filterFns: {
          customFilterFn: (row, id, filterValue) => {
            let result = (row.original.name.toLowerCase().includes(filterValue.toLowerCase()) || row.original.desc.toLowerCase().includes(filterValue.toLowerCase())
            || row.original.pre.toLowerCase().includes(filterValue.toLowerCase()))
            return result;
          },
        },
        enableColumnResizing: true,
        enableGrouping: true,
        enableGlobalFilter: false,
        enableStickyHeader: true,
        enableStickyFooter: true,
        enableBottomToolbar: false,
        enableDensityToggle: false,
        layoutMode: 'grid-no-grow',
        initialState: {
          density: 'md',
          expanded: true,
          columnVisibility: { title: false, lvl: false, pre: false },
          pagination: { pageIndex: 0, pageSize: 200 },
          sorting: [{ id: 'lvl', desc: false }],
        },
        mantineToolbarAlertBannerBadgeProps: { color: 'blue', variant: 'outline' },
        mantineTableContainerProps: { style: { maxHeight: 700 } },
      });
    return <MantineReactTable table={table} />;
};

export default Mobile;