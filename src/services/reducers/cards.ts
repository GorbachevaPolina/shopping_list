import { TCardsActions } from "../actions/cards"
import { BUY_CARD_FAILED, BUY_CARD_REQUEST, BUY_CARD_SUCCESS, CREATE_CARD_FAILED, CREATE_CARD_REQUEST, CREATE_CARD_SUCCESS, DELETE_CARD_FAILED, DELETE_CARD_REQUEST, DELETE_CARD_SUCCESS, SET_NOTIFICATION } from "../constants/cards"
import { TCard } from "../types/card"

type TCardsState = {
    cards: null | TCard[],
    isCreateRequest: boolean,
    isCreateFailed: boolean,

    isDeleteRequest: boolean,
    isDeleteFailed: boolean,

    isBuyRequest: boolean,
    isBuyFailed: boolean,

    isNotification: boolean,
    title: string,
    message: string,
    type: "" | "error" | "success"
}

const initialState: TCardsState = {
    cards: null,
    isCreateFailed: false,
    isCreateRequest: false,

    isDeleteFailed: false,
    isDeleteRequest: false,

    isBuyFailed: false,
    isBuyRequest: false,

    isNotification: false,
    title: "",
    message: "",
    type: ""
}

export const cardsReducer = (state = initialState, action: TCardsActions): TCardsState => {
    switch(action.type) {
        case CREATE_CARD_REQUEST: {
            return {
                ...state,
                isCreateRequest: true
            }
        }
        case CREATE_CARD_FAILED: {
            return {
                ...state,
                isCreateFailed: true,
                isCreateRequest: false,

                isNotification: true,
                title: "Ошибка",
                message: "Проверьте заполнены ли поля имени и цены товара.",
                type: "error"
            }
        }
        case CREATE_CARD_SUCCESS: {
            return {
                ...state,
                isCreateRequest: false,
                cards: state.cards ? [action.card, ...state.cards] : [action.card],

                isNotification: true,
                title: "Успех!",
                message: "Товар успешно создан.",
                type: "success"
            }
        }
        case DELETE_CARD_REQUEST: {
            return {
                ...state,
                isDeleteRequest: true
            }
        }
        case DELETE_CARD_FAILED: {
            return {
                ...state,
                isDeleteFailed: true,
                isDeleteRequest: false,

                isNotification: true,
                title: "Ошибка",
                message: "Повторите удаление.",
                type: "error"
            }
        }
        case DELETE_CARD_SUCCESS: {
            return {
                ...state,
                isDeleteRequest: false,
                cards: state.cards && state.cards.filter(card => card.id !== action.id),

                isNotification: true,
                title: "Успех!",
                message: "Товар успешно удален.",
                type: "success"
            }
        }
        case BUY_CARD_REQUEST: {
            return {
                ...state,
                isBuyRequest: true
            }
        }
        case BUY_CARD_FAILED: {
            return {
                ...state,
                isBuyRequest: false,
                isBuyFailed: true,

                isNotification: true,
                title: "Ошибка",
                message: "Повторите действие.",
                type: "error"
            }
        }
        case BUY_CARD_SUCCESS: {
            return {
                ...state,
                isBuyRequest: false,
                cards: state.cards && state.cards.map((card) => card.id === action.id ? {...card, isBought: true} : card),

                isNotification: true,
                title: "Успех!",
                message: "Товар успешно куплен.",
                type: "success"
            }
        }
        case SET_NOTIFICATION: {
            return {
                ...state,
                isNotification: false,
                title: "",
                message: ""
            }
        }
        default: {
            return state
        }
    }
}