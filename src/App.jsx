import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import { useState } from "react"

function App() {
  const [showModel, setShowModel] = useState(false)

  function handleToggleModel() {
    setShowModel(!showModel)
  }

  return (
    <>
    <Main />
    {showModel && (<SideBar handleToggleModel={handleToggleModel} />)}
    <Footer handleToggleModel={handleToggleModel} />
    </>
  )
}

export default App
