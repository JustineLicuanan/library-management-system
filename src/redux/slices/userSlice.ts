import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
	email: string | null;
}

const initialState: UserState = {
	email: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.email = 'john@example.com';
		},
		removeUser: (state) => {
			state.email = null;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
