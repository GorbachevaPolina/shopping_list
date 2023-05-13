import { buyCardRequest, createCardRequest, deleteCardRequest } from "../api/fakeApi";
import { BUY_CARD_FAILED, BUY_CARD_REQUEST, BUY_CARD_SUCCESS, CREATE_CARD_FAILED, CREATE_CARD_REQUEST, CREATE_CARD_SUCCESS, DELETE_CARD_FAILED, DELETE_CARD_REQUEST, DELETE_CARD_SUCCESS, SET_NOTIFICATION } from "../constants/cards";
import { TCard } from "../types/card";
import { AppDispatch, AppThunk } from "../types/store";

interface ICreateCardAction {
    readonly type: typeof CREATE_CARD_SUCCESS;
    readonly card: TCard
}
interface ICreateCardFailedAction {
    readonly type: typeof CREATE_CARD_FAILED
}
interface ICreateCardRequestAction {
    readonly type: typeof CREATE_CARD_REQUEST
}
interface IDeleteCardAction {
    readonly type: typeof DELETE_CARD_SUCCESS,
    readonly id: string
}
interface IDeleteCardFailedAction {
    readonly type: typeof DELETE_CARD_FAILED
}
interface IDeleteCardRequestAction {
    readonly type: typeof DELETE_CARD_REQUEST
}
interface IBuyCardAction {
    readonly type: typeof BUY_CARD_SUCCESS,
    readonly id: string
}
interface IBuyCardRequestAction {
    readonly type: typeof BUY_CARD_REQUEST
}
interface IBuyCardFailedAction {
    readonly type: typeof BUY_CARD_FAILED
}

interface ISetNotification {
    readonly type: typeof SET_NOTIFICATION
}

export type TCardsActions = 
    ICreateCardAction | ICreateCardFailedAction | ICreateCardRequestAction |
    IDeleteCardAction | IDeleteCardFailedAction | IDeleteCardRequestAction |
    IBuyCardAction | IBuyCardFailedAction | IBuyCardRequestAction | ISetNotification;

export function createCard(card: TCard): AppThunk {
    return function(dispatch: AppDispatch) {
        dispatch({
            type: CREATE_CARD_REQUEST
        })
        createCardRequest(card)
            .then(response => {
                if(response && response.success) {
                    dispatch({
                        type: CREATE_CARD_SUCCESS,
                        card: response.card
                    })
                } else {
                    dispatch({
                        type: CREATE_CARD_FAILED
                    })
                }
            })
    }
}

export function deleteCard(id: string): AppThunk {
    return function(dispatch: AppDispatch) {
        dispatch({
            type: DELETE_CARD_REQUEST
        })
        deleteCardRequest(id)
            .then(response => {
                if(response && response.success) {
                    dispatch({
                        type: DELETE_CARD_SUCCESS,
                        id: response.id
                    })
                } else {
                    dispatch({
                        type: DELETE_CARD_FAILED
                    })
                }
            })
    }
}

export function buyCard(id: string): AppThunk {
    return function(dispatch: AppDispatch) {
        dispatch({
            type: BUY_CARD_REQUEST
        })
        buyCardRequest(id)
            .then(response => {
                if(response && response.success) {
                    dispatch({
                        type: BUY_CARD_SUCCESS,
                        id: response.id
                    })
                } else {
                    dispatch({
                        type: BUY_CARD_FAILED
                    })
                }
            })
    }
}