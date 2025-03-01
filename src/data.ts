import myData from './assets/boons.json';

export const data: Boon[] = myData;

export type Boon = {
  desc: string;
  name: string;
  lvl: number;
  title?: string;
  pre?: string;
};
