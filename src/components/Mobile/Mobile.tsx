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
            grow: true,
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
              <Box><strong>Title:</strong> {cell.row.original.title}</Box>
              <Box><strong>Prerequisite:</strong> {cell.row.original.pre}</Box>
              <Box><strong>Boon Points:</strong> {cell.row.original.lvl}</Box>
            </Stack>
            </>
            ),
          },
          {
            header: 'Prerequisite',
            accessorKey: 'pre',
            grow: true,
            GroupedCell: ({ cell, row }) => (
              <Box style={{ color: 'skyblue' }}>
                <strong>{cell.getValue<string>()}</strong> ({row.subRows?.length})
              </Box>
            ),
          },
          {
            header: 'Boon Points',
            accessorKey: 'lvl',
            enableGrouping: true, 
            GroupedCell: ({ cell, row }) => (
                <Box style={{ color: 'skyblue' }}>
                  <strong>{cell.getValue<string>()} Boon Points </strong> ({row.subRows?.length})
                </Box>
              ),
          }
        ],[]);

    const table = useMantineReactTable({
        columns,
        data,
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
          //grouping: ['lvl', 'pre'],
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