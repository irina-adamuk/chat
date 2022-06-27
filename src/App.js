import { useState, useEffect } from "react";
import {
  HomePage,
  ProfilePage,
  SignUpPage,
  SignInPage,
  ChatPage,
  PageNotFound,
  GistsPage,
} from "./pages";
import { PrivateRoute, PublicRoute } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
// import { createConversationApi, getConversationsApi } from "./api/conversations";

import "./App.scss";



const App = () => {
  const [session, setSession] = useState(null);

  const isAuth = !!session;

  // useEffect(() => {
  //   createConversationApi({chatName: "chvera kozlova", id: "chat520"});
  //   createConversationApi({chatName: "chvera ncjwhefkhej", id: "chat50"});
  //   getConversationsApi();
  // }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ProfilePage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/chat/*"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ChatPage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route
            path="/sign-up"
            element={
              // <PublicRoute isAuth={isAuth}>
                <SignUpPage />
              // </PublicRoute>
            }
          ></Route>
          <Route
            path="/gists"
            element={
              <PrivateRoute isAuth={isAuth}>
                <GistsPage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
