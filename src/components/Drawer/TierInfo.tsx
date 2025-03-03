import { Box, Anchor, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import './drawer.css';

function TierInfo({ content }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} title="Boon Info">
        <Stack gap="xs" justify="flex-start" lightHidden>
          <Box>
            <strong style={{ color: 'skyblue' }}>{content.name}</strong>
          </Box>
          <Box>
            {content.desc}
          </Box>
          <Box>
          <strong style={{ color: 'skyblue' }}>Tier:</strong> S tier
          </Box>
          <Box>
            some text why
          </Box>
          {!content.tier ? (
                <></>
              ) : (
                <Box>
                  <strong style={{ color: 'skyblue' }}>Tier:</strong> {content.title}
                </Box>
              )}
        </Stack>
        <Stack gap="xs" justify="flex-start" darkHidden>
          <Box>
            <strong>{content.name}</strong>
          </Box>
          <Box>
            {content.desc}
          </Box>
          <Box>
          <strong>Tier:</strong> S tier
          </Box>
          <Box>
            some text why
          </Box>
          {!content.tier ? (
                <></>
              ) : (
                <Box>
                  <strong>Tier:</strong> {content.title}
                </Box>
              )}
        </Stack>
      </Drawer>

      <Anchor variant="filled" onClick={open}>
        Laurel's Corner
      </Anchor>
    </>
  );
}

export { TierInfo };
