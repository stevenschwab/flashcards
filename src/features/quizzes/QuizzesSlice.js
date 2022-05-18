import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/TopicsSlice";

export const addQuizAddQuizId = quiz => {
    const { quizId, name, topicId, cardIds } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizToTopic( { quizId: quizId, topicId: topicId } ));
    }
};

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
        }
    }
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
export const selectQuizzes = state => state.quizzes.quizzes;