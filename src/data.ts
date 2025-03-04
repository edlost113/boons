import myData from './assets/boons.json';
import boonData from './assets/tierlist.json';

export const data: Boon[] = myData;
export const dataBoonInfo: BoonInfo[] = boonData;

export type Boon = {
  desc: string;
  name: string;
  lvl: number;
  title?: string;
  pre?: string;
};

export type BoonInfo = {
  name: string;
  tier?: string;
  why?: string;
};