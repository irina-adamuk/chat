import {  } from "./types";
import { nanoid } from "nanoid";
import { format } from "date-fns";



const initialState = {
	messages: {
	chat2: [
		{ 
		author: "user user",
		id: nanoid(3),
		message: "hello",
		date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),}]
	}

};
export const messageReducer = (state = initialState, action) => {
  switch(action.type) {


    default: 
      return state;
  }
}