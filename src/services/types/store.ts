import { ThunkAction } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import { store } from '../..';
import { TCardsActions } from '../actions/cards';

export type RootState = ReturnType<typeof store.getState>

export type TApplicationActions = 
    TCardsActions;

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>
// export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>
export type AppDispatch = <TReturnType>(action: TApplicationActions | AppThunk) => TReturnType

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 

export const useDispatch = () => dispatchHook<AppDispatch>(); 