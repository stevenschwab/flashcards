import { createSlice } from "@reduxjs/toolkit";

export const CardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards = { ...state, ...action.payload };
        }
    }
});

export const { addCard } = CardsSlice.actions;
export default CardsSlice.reducer;
export const selectCards = state => state.cards.cards;