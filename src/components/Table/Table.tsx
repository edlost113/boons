import {
    MantineReactTable,
    useMantineReactTable,
    type MRT_ColumnDef,
  } from 'mantine-react-table';
  import { data, type Boon } from '../../data';
  import { Box } from '@mantine/core';
  import './table.css';
  import { useMemo } from 'react';

const Table = () => {
    const columns = useMemo<MRT_ColumnDef<Boon>[]>(
        () => [
          {
            header: 'Boon Name',
            grow: true,
            accessorKey: 'name',
          },
          {
            header: 'Boon Description',
            accessorKey: 'desc',
            grow: true,
          },
          {
            header: 'Title Gained',
            accessorKey: 'title',
            grow: true,
          },
          {
            header: 'Prerequisite',
            accessorKey: 'pre',
            grow: true,
            GroupedCell: ({ cell, row }) => (
              <>
              <Box style={{ color: 'skyblue' }} lightHidden>
                <strong>{cell.getValue<string>()}</strong> ({row.subRows?.length})
              </Box>
              <Box darkHidden>
                <strong>{cell.getValue<string>()}</strong> ({row.subRows?.length})
              </Box>
              </>
            ),
          },
          {
            header: 'Boon Points',
            accessorKey: 'lvl',
            grow: true,
            enableGrouping: true, 
            GroupedCell: ({ cell, row }) => (
              <>
                <Box style={{ color: 'skyblue' }} lightHidden>
                  <strong>{cell.getValue<string>()} Boon Points </strong> ({row.subRows?.length})
                </Box>
                <Box darkHidden>
                <strong>{cell.getValue<string>()} Boon Points </strong> ({row.subRows?.length})
              </Box>
              </>
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
          grouping: ['lvl', 'pre'],
          columnVisibility: { title: false },
          pagination: { pageIndex: 0, pageSize: 200 },
          sorting: [{ id: 'lvl', desc: false }],
        },
        mantineToolbarAlertBannerBadgeProps: { color: 'blue', variant: 'outline' },
        mantineTableContainerProps: { style: { maxHeight: 700 } },
      });
    return <MantineReactTable table={table} />;
};

export default Table;