import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer} from "./profile";
import { conversationsReducer } from "./conversations";
import { messageReducer } from "./messages/reducer";
import { gistsReducer } from "./gists/reducer";
import { logger, timeSheduler, botMessage, crashReporter, thunk } from "./middlewares";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
}

const rootReducer = combineReducers({ 
  profile: profileReducer, 
  conversations: conversationsReducer,
  messages: messageReducer,
  gists: gistsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  //compose для передачи нескольких функций во втором аргументке store
  compose(
    //applyMiddleware для того, чтобы указать, какие Middleware передавать
    applyMiddleware(logger, timeSheduler, botMessage, crashReporter, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);


export const persistor = persistStore(store);
