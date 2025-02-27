import '@mantine/core/styles.css';
import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { MantineProvider, Box } from '@mantine/core';
import { theme } from './theme';
import Table from './components/Table/Table'
import ColorSchemeToggle from './components/ColorSchemeToggle/ColorSchemeToggle'
import Mobile from './components/Mobile/Mobile'
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
    <MantineProvider theme={theme} defaultColorScheme='dark'>
    <Box><strong>These boons are extraordinary powerful and represent the gradual transformation of a character into something resembling a demigod. They are designed for your group to continue their journey past level 20 and challenge CR 30+ enemies
    Note: these are designed to be extremely broken and make your characters insanely powerful The acquisition of a boon might visibly transform a character. For example, the eyes of a character with the Boon of True Sight might glow when he or she feels strong emotion, and a character who has the Boon of High Magic might have faint motes of light glimmering around his or her head
    Each boon can be picked multiple times unless stated otherwise.</strong></Box>
    {!isMobile ? <Table /> : <Mobile  />}
    </MantineProvider>
  );
}
