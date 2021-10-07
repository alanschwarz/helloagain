import { createStore, combineReducers } from 'redux';
import rewardsReducer from './reducers/reducer';

const rootReducer = combineReducers({
    rewardsReducer: rewardsReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;
export type RootState = ReturnType<typeof rootReducer>