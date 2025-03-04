import { Box, Anchor, Drawer, Stack, HoverCard, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import './drawer.css';

function TierInfo({ content, info, person }: { content: any; info: any, person: any }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} title="Boon Info">
        <Stack gap="xs" justify="flex-start" lightHidden>
          <HoverCard width={280} shadow="md">
            <Box>
              How Boons are Ranked: 
            </Box>
            <HoverCard.Target>
            <Box>
              <strong style={{ color: 'skyblue' }}>S tier (game-breaking)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
                These boons are simply game-breaking, and excellent on a wide range of character builds/classes. Boons in this tier either remove a game-balancing resource cost, break expected action economy, or provide an incredible boost to damage, reliability, and/or versatility.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={280} shadow="md">
            <HoverCard.Target>
            <Box>
              <strong style={{ color: 'skyblue' }}>A tier (excellent)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
              These boons are also excellent but are not necessarily game-breaking on most characters. Boons in this tier may synergize well with many powerful builds or build-archetypes, or they may provide a solid benefit to most characters.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={280} shadow="md">
            <HoverCard.Target>
            <Box>
              <strong style={{ color: 'skyblue' }}>B tier (build-around)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
              These boons are usable in a wide variety of situations on a narrower subset of character builds. If you optimize your character around this boon (or two), then it will be excellent and can get toward game-breaking or make a previously lackluster strategy in DnD much better.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={280} shadow="md">
            <HoverCard.Target>
            <Box>
              <strong style={{ color: 'skyblue' }}>C tier (situational)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
              These boons are either very useful in a subset of situations or decent in a larger number of situations. If your campaign or table features a common problem, specific mechanic, or enemy-type very often, then these boons may be worth taking.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={280} shadow="md">
            <HoverCard.Target>
            <Box>
              <strong style={{ color: 'skyblue' }}>D tier (out-classed)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
              This tier is for boons that are simply inferior to boons of the same level or lower levels. Also included are boons whose effects are comparable or worse than relatively easily-obtained spells or magic items. If you can’t take the same boon twice, this may come in handy to double-up, but otherwise, you’ll have better options.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
        </Stack>
        <Stack gap="xs" justify="flex-start" darkHidden>
          <HoverCard width={280} shadow="md">
            <Box>
              How Boons are Ranked: 
            </Box>
            <HoverCard.Target>
            <Box>
              <strong>S tier (game-breaking)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
                These boons are simply game-breaking, and excellent on a wide range of character builds/classes. Boons in this tier either remove a game-balancing resource cost, break expected action economy, or provide an incredible boost to damage, reliability, and/or versatility.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={280} shadow="md">
            <HoverCard.Target>
            <Box>
              <strong>A tier (excellent)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
              These boons are also excellent but are not necessarily game-breaking on most characters. Boons in this tier may synergize well with many powerful builds or build-archetypes, or they may provide a solid benefit to most characters.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={280} shadow="md">
            <HoverCard.Target>
            <Box>
              <strong>B tier (build-around)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
              These boons are usable in a wide variety of situations on a narrower subset of character builds. If you optimize your character around this boon (or two), then it will be excellent and can get toward game-breaking or make a previously lackluster strategy in DnD much better.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={280} shadow="md">
            <HoverCard.Target>
            <Box>
              <strong>C tier (situational)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
              These boons are either very useful in a subset of situations or decent in a larger number of situations. If your campaign or table features a common problem, specific mechanic, or enemy-type very often, then these boons may be worth taking.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={280} shadow="md">
            <HoverCard.Target>
            <Box>
              <strong>D tier (out-classed)</strong>
            </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
              This tier is for boons that are simply inferior to boons of the same level or lower levels. Also included are boons whose effects are comparable or worse than relatively easily-obtained spells or magic items. If you can’t take the same boon twice, this may come in handy to double-up, but otherwise, you’ll have better options.
              </Text>
            </HoverCard.Dropdown>
            </HoverCard>
        </Stack>
        <br />
        <Stack gap="xs" justify="flex-start" lightHidden>
          <Box>
            <strong style={{ color: 'skyblue' }}>{content.name}</strong>
          </Box>
          <Box>
            {content.desc}
          </Box>
          {!info.tier ? (
                <></>
              ) : (
                <Box>
                  <strong style={{ color: 'skyblue' }}>Tier:</strong> {info.tier}
                </Box>
              )}
          {!info.why ? (
                <></>
              ) : (
                <Box>
                 {info.why}
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
        </Stack>
      </Drawer>

      <Anchor variant="filled" onClick={open}>
      {person} Corner
      </Anchor>
    </>
  );
}

export { TierInfo };
