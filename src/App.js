import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styles";
import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";

const theme = {
  colors: {
    // body: '#fff',
    body: "wheat",
  },
  mobile: "768px",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <YourInfo />,
  },
]);

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/:YourInfo?" element={<YourInfo />} />
          <Route path="/SelectPlan" element={<SelectPlan />} />
          {/* {yourInfo.name && yourInfo.email && yourInfo.phone && <Route path='/SelectPlan' element={<SelectPlan yourInfo={yourInfo} handleChange={handleChange} handleSelect={handleSelect}/>} /> } */}
          <Route path="/AddOns" element={<AddOns />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
