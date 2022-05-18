import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/TopicsSlice";

export const thunkActionCreator = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizToTopic(payload));
    };
};

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = { ...action.payload };
        }
    }
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
export const selectQuizzes = state => state.quizzes.quizzes;