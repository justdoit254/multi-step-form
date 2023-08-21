import React from "react";

// This file is no longer needed as the project state is not managed by redux

const FormContext = React.createContext({});

export const FormProvider = ({children}) => {
    const [yourInfo, setYourInfo] = React.useState({
        name: "", email: "", phone: "", formValid: false,
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
        // console.log(yourInfo)
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
          console.log(yourInfo)
          // handleChange()
        }, [yourInfo])

    return (
        <FormContext.Provider value={{yourInfo, setYourInfo, handleChange, handleSelect}}>
            {children}
        </FormContext.Provider>
    )    
}

export default FormContext