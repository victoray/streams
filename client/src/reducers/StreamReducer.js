import {CREATE_STREAM, DELETE_STREAM, GET_STREAM, GET_STREAMS, EDIT_STREAM} from "../actions/types";
import _ from 'lodash';

export const StreamReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case GET_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case GET_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;

    }
};