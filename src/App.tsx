import '@mantine/core/styles.css';
import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { MantineProvider, Box } from '@mantine/core';
import { theme } from './theme';
import Table from './components/Table/Table'
export default function App() {
  return (
    <MantineProvider theme={theme}>
    <Box><strong>These boons are extraordinary powerful and represent the gradual transformation of a character into something resembling a demigod. They are designed for your group to continue their journey past level 20 and challenge CR 30+ enemies
    Note: these are designed to be extremely broken and make your characters insanely powerful The acquisition of a boon might visibly transform a character. For example, the eyes of a character with the Boon of True Sight might glow when he or she feels strong emotion, and a character who has the Boon of High Magic might have faint motes of light glimmering around his or her head
    Each boon can be picked multiple times unless stated otherwise.</strong></Box>
    <Table ></Table>
    </MantineProvider>
  );
}
