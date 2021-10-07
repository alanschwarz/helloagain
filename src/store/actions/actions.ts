import { COLLECT_REWARD } from './types';

export const collectReward = (id: string) => (
  {
    type: COLLECT_REWARD,
    id: id
  }
);