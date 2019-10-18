import streams from "../apis/streams";
import {CREATE_STREAM, DELETE_STREAM, GET_STREAM, GET_STREAMS, EDIT_STREAM} from './types'
import history from "../history";

export const SignIn = (id) => {
    return {
        type: "SIGN_IN",
        payload: id
    }
};

export const SignOut = () => {
    return {
        type: "SIGN_OUT"
    }
};

export const createStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post("/streams", {...formValues, userId});
    dispatch({type: CREATE_STREAM, payload: response.data});

    history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id});
};

export const getStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({type: GET_STREAM, payload: response.data});
};

export const getStreams = () => async (dispatch) => {
    const response = await streams.get(`/streams`);

    dispatch({type: GET_STREAMS, payload: response.data});
};

export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data})

    history.push("/");
};

