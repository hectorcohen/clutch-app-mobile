import {createSlice} from "@reduxjs/toolkit";

const userCardSlice = createSlice({
	name: 'userCard',
	initialState: {
		cards: [],
	},
	reducers: {
		setCards : (state, {payload}) => {
			state.cards = payload
		}
	}
})

export const {setCards} = userCardSlice.actions
export default userCardSlice.reducer