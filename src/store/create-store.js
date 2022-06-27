import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messageReducer } from "./messages/reducer";
import { gistsReducer } from "./gists/reducer";
import { getPublicGistsApi, getGistsByNameApi } from "../api/gists";
// import { logger, timeSheduler, botMessage, crashReporter, thunk } from "./middlewares";
import { logger, timeSheduler, botMessage, crashReporter } from "./middlewares";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  getConversationsApi,
  createConversationApi,
  removeConversationApi,
} from "../api/conversations";
import {
  getMessagesApi,
  createMessageApi,
  removeMessageApi,
} from "../api/messages";

const api = {
  getPublicGistsApi,
  getGistsByNameApi,
  getConversationsApi,
  createConversationApi,
  removeConversationApi,
  getMessagesApi,
  createMessageApi,
  removeMessageApi
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messageReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  //compose для передачи нескольких функций во втором аргументке store
  compose(
    //applyMiddleware для того, чтобы указать, какие Middleware передавать
    applyMiddleware(
      thunk.withExtraArgument(api),
      logger,
      timeSheduler,
      botMessage,
      crashReporter
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
