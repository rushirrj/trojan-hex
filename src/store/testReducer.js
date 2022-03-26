import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "ajit", age: 0, email: "" };

export const testSlice = createSlice({
	name: "test",
	initialState: { value: initialStateValue },
	reducers: {
		addData: (state, action) => {
			state.value = action.payload;
		},

		removeData: (state) => {
			state.value = initialStateValue;
		}
	}
});

export const { removeData, addData } = testSlice.actions;

export default testSlice.reducer;
