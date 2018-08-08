import * as ActionTypes from './ActionTypes';

export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
}

export const Feedback = (state = {
        errMess: null,
        feedback: []
    }, action) => {
    switch (action.type) {
        // case ActionTypes.FEEDBACK_FAILED:
        //     return {...state, isLoading: false, errMess: action.payload, comments: []}
        // case ActionTypes.ADD_FEEDBACK_STORE:
        //     return {...state, errMess: null, feedback: action.payload}

        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {...state, feedback: state.feedback.concat(feedback)};

        default:
          return state;
      }
};
