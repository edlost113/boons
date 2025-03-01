import '@mantine/core/styles.css';
import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { MantineProvider, Box, Group, Image } from '@mantine/core';
import { theme } from './theme';
import Table from './components/Table/Table'
import Mobile from './components/Mobile/Mobile'
import dancingWizard from './assets/dancingwizard.gif'
import { useEffect, useState } from 'react';
export default function App() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    let urlParams = new URLSearchParams(window.location.search);
    let isMobile = mediaQuery.matches || ('mobile' === urlParams.get("device"));
    setIsMobile(isMobile);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);


  return (
    <MantineProvider theme={theme}>
    <Group gap="lg" align="center">
    <Image  src={dancingWizard} style={{ width: '32px', height: '32px', transform: 'scaleX(-1)' }}></Image>
    <Box my="sm" style={{width:'90%',}}><strong>These boons are extraordinary powerful and represent the gradual transformation of a character into something resembling a demigod. They are designed for your group to continue their journey past level 20 and challenge CR 30+ enemies
    Note: these are designed to be extremely broken and make your characters insanely powerful The acquisition of a boon might visibly transform a character. For example, the eyes of a character with the Boon of True Sight might glow when he or she feels strong emotion, and a character who has the Boon of High Magic might have faint motes of light glimmering around his or her head
    Each boon can be picked multiple times unless stated otherwise.</strong></Box>
    <Image  src={dancingWizard} style={{width: '32px', height:'32px'}}></Image>
    </Group>
    {!isMobile ? <Table /> : <Mobile  />}
    </MantineProvider>
  );
}
