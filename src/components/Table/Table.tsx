import {
    MantineReactTable,
    useMantineReactTable,
    type MRT_ColumnDef,
  } from 'mantine-react-table';
  import { data, type Boon } from '../../data';
  import { Box, Stack } from '@mantine/core';
  import { useMemo } from 'react';

const Table = () => {
    const columns = useMemo<MRT_ColumnDef<Boon>[]>(
        () => [
          {
            header: 'Boon Points',
            accessorKey: 'lvl',
            enableGrouping: true, 
            GroupedCell: ({ cell, row }) => (
                <Box style={{ color: 'skyblue' }}>
                  <strong>{cell.getValue<string>()} Boon Points </strong> ({row.subRows?.length})
                </Box>
              ),
          },
          {
            header: 'Boon Name',
            size: 250,
            accessorKey: 'name',
          },
          {
            header: 'Boon Description',
            accessorKey: 'desc',
            size: 250,
          },
        ],[]);


    const table = useMantineReactTable({
        columns,
        data,
        enableColumnResizing: true,
        enableGrouping: true,
        enableStickyHeader: true,
        enableStickyFooter: true,
        enableDensityToggle: false,
        initialState: {
          density: 'md',
          expanded: true,
          grouping: ['lvl'],
          pagination: { pageIndex: 0, pageSize: 200 },
          sorting: [{ id: 'lvl', desc: false }],
        },
        mantineToolbarAlertBannerBadgeProps: { color: 'blue', variant: 'outline' },
        mantineTableContainerProps: { style: { maxHeight: 700 } },
      });
    return <MantineReactTable table={table} />;
};

export default Table;