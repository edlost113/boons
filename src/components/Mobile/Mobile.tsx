import { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';
import { Box, Stack, useMantineColorScheme } from '@mantine/core';
import { data, type Boon } from '../../data';
import './Mobile.css';
const Mobile = () => {
  const { setColorScheme } = useMantineColorScheme();

  function setStuff() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('scheme') === 'light') {
      setColorScheme('light');
    } else if (urlParams.get('scheme') === 'dark') {
      setColorScheme('dark');
    } else {
      setColorScheme('auto');
    }
  }
  setStuff();

  const columns = useMemo<MRT_ColumnDef<Boon>[]>(
    () => [
      {
        header: 'Boons',
        grow: 100,
        filterFn: 'customFilterFn',
        enableGrouping: false,
        accessorKey: 'name',
        Cell: ({ cell }) => (
          <>
            <Stack align="stretch" justify="center" lightHidden>
              <Box style={{ color: 'skyblue' }}>{cell.getValue<string>()}</Box>
              <Box>{cell.row.original.desc}</Box>
              {!cell.row.original.title ? (
                <></>
              ) : (
                <Box>
                  <strong style={{ color: 'skyblue' }}>Title:</strong> {cell.row.original.title}
                </Box>
              )}
              <Box>
                <strong style={{ color: 'skyblue' }}>Prerequisite:</strong> {cell.row.original.pre}
              </Box>
              <Box>
                <strong style={{ color: 'skyblue' }}>Boon Points:</strong> {cell.row.original.lvl}
              </Box>
            </Stack>
            <Stack align="stretch" justify="center" darkHidden>
              <Box>{cell.getValue<string>()}</Box>
              <Box>{cell.row.original.desc}</Box>
              {!cell.row.original.title ? (
                <></>
              ) : (
                <Box>
                  <strong>Title:</strong> {cell.row.original.title}
                </Box>
              )}
              <Box>
                <strong>Prerequisite:</strong> {cell.row.original.pre}
              </Box>
              <Box>
                <strong>Boon Points:</strong> {cell.row.original.lvl}
              </Box>
            </Stack>
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
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    filterFns: {
      customFilterFn: (row, filterValue) => {
        const result =
          row.original.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          row.original.desc.toLowerCase().includes(filterValue.toLowerCase()) ||
          row.original.pre.toLowerCase().includes(filterValue.toLowerCase());
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
