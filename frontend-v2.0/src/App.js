import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Mailbox from "./components/MailBox";
import Statistic from "./components/Statistics";
import Aboutdash from "./components/Aboutdash";
import Skillsdash from "./components/Skillsdash";
import Myworkdash from "./components/Myworkdash";
import Socialmediadash from "./components/Socialmediadash";
import MyworkdashAll from "./components/MyworkdashAll";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin">
              <Route path="wlc" element={<Admin page={<Welcome />} />} />
              <Route
                path="statistic"
                element={<Admin page={<Statistic />} />}
              />
              <Route path="mailbox" element={<Admin page={<Mailbox />} />} />
              <Route path="profile" element={<Admin page={<Profile />} />} />
              <Route path="aboutme" element={<Admin page={<Aboutdash />} />} />
              <Route path="Skills" element={<Admin page={<Skillsdash />} />} />
              <Route
                path="MyworkdashAll"
                element={<Admin page={<MyworkdashAll />} />}
              />
              <Route
                path="edit/:id"
                element={<Admin page={<Myworkdash />} />}
              />
              <Route
                path="Socialmediadash"
                element={<Admin page={<Socialmediadash />} />}
              />

              {/* <Route path="about" element={<About />} /> */}
              {/*<Route path="/Statistics" element={<Statistics />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/SocialMedia" element={<SocialMedia />} />
              <Route path="/MyWork" element={<MyWork />} />
              <Route path="/MailBox" element={<MailBox />} /> */}
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
