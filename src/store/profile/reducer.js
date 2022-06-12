import { TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";


const initialState = {
  firstName: "",
	lastName: "",
	dateOfBirth: "",
	userName: "",
	city: "",
	description: "",
	avatarUrl: "https://place-hold.it/300x500/666/fff.png/000",
	isVisibleProfile: true,
};
export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
		case TOGGLE_VISIBLE_PROFILE:
			return {...state, isVisibleProfile: !state.isVisibleProfile};
		case UPDATE_PROFILE:
			return {
				...state, 
				...action.payload
			};
    default: 
      return state;
  }
}