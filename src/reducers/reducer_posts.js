import { FETCH_POSTS } from '../actions/index';

// post will be our active post
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action)
{
    switch(action.type)
    {
        // Returns a new object: take whatever our current state is,
        // and add in the property (all) action.payload.data
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}