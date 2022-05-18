import { createSlice } from "@reduxjs/toolkit";

export const CardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { cardId, front, back} = action.payload;
            state.cards[cardId] =  {
                id: cardId,
                front: front,
                back: back
            };
        }
    }
});

export const { addCard } = CardsSlice.actions;
export default CardsSlice.reducer;
export const selectCards = state => state.cards.cards;