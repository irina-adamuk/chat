import {HomePage, ProfilePage, SignUpPage, SignInPage, ChatPage, PageNotFound} from './pages';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import './App.scss';

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/chat/*" element={<ChatPage/>}></Route>
          <Route path="/sign-in" element={<SignInPage/>}></Route>
          <Route path="/sign-up" element={<SignUpPage/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
