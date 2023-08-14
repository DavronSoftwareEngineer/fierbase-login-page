import {BrowserRouter as  Router, Routes, Route, } from "react-router-dom";
import SignInSignUp from "./pages/signIn-signUp";
import SignIn from "./pages/sign-in";
import MiniDrawer from "./pages/drawer";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <>
      {/* <SignInSignUp/> */}
      <Router>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/drawer" element={<MiniDrawer/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
