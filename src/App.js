import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styles";
import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import {BrowserRouter as Router, Routes, Route, createBrowserRouter} from 'react-router-dom'

const theme = {
  colors: {
    // body: '#fff',
    body: 'wheat',
  },
  mobile: '768px',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <YourInfo />,
  }
])

function App() {
  const [yourInfo, setYourInfo] = React.useState({
    name: "", email: "", phone: "",
    planFreq: false, planName: "",
    onlineServices: false, largerStorage: false, customizableProfile: false
  })

  // planFreq == false means monthly

  function handleChange(event) {
    // console.log(event)
    // event.preventDefault()
    const {name, value, type, checked} = event.target
    setYourInfo(prevYourInfo => {
      return {
        ...prevYourInfo,
        [name]: type === "checkbox" ? checked : value
      }
    })
    console.log(yourInfo)
  }

  function handleSelect(plan) {
    setYourInfo(prevYourInfo => {
      return {
        ...prevYourInfo,
        planName: plan
      }
    })
    console.log(yourInfo)
  }
    React.useEffect(function() {
      console.log("Re-render");
      // handleChange()
    }, [yourInfo])


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path='/:YourInfo?' element={<YourInfo yourInfo={yourInfo} handleChange={handleChange}/>} />
          <Route path='/SelectPlan' element={<SelectPlan yourInfo={yourInfo} handleChange={handleChange} handleSelect={handleSelect}/>} />
          {/* {yourInfo.name && yourInfo.email && yourInfo.phone && <Route path='/SelectPlan' element={<SelectPlan yourInfo={yourInfo} handleChange={handleChange} handleSelect={handleSelect}/>} /> } */}
          <Route path='/AddOns' element={<AddOns yourInfo={yourInfo} handleChange={handleChange}/>} />
          <Route path='/Summary' element={<Summary yourInfo={yourInfo}/>} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App;

