import { COLLECT_REWARD } from '../actions/types';

const initialState = {
  collectedRewards: <string[]>[]
}

const rewardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLECT_REWARD:
      return {
        ...state,
        collectedRewards: state.collectedRewards.concat(action.id)
      };
    default:
      return state;
  }
}

export default rewardsReducer;
