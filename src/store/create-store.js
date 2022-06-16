import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer} from "./profile";
import { conversationsReducer } from "./conversations";
import { messageReducer } from "./messages/reducer";
import { logger } from "./middlewares";

export const store = createStore(
  combineReducers({ profile: profileReducer, 
    conversations: conversationsReducer, messages: messageReducer }),

//compose для передачи нескольких функций во втором аргументке store
  compose(
    //applyMiddleware для того, чтобы указать, какие Middleware передавать
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);
