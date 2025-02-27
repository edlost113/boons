import '@mantine/core/styles.css';
import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import Table from './components/Table/Table'
export default function App() {
  return (
    <MantineProvider theme={theme}>
    <Table ></Table>
    </MantineProvider>
  );
}
