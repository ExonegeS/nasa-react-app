import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import { useEffect, useState } from "react"

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showModel, setShowModel] = useState(false)

    function handleToggleModel() {
        setShowModel(!showModel)
    }
    useEffect(() => {
        async function fetchAPIData() {
            const NASA_API = import.meta.env.VITE_NASA_API_KEY
            const url = 'https://api.nasa.gov/planetary/apod' + 
            `?api_key=${NASA_API}`

            const todayUTC = (new Date(Date.UTC)).toDateString()
            const localKey = `NASA-${todayUTC}`
            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey))
                setData(apiData)
                console.log("Fetched from cache today")
                return
            }
            localStorage.clear()
            try {
                const res = await fetch(url)
                const apiData = await res.json()
                localStorage.setItem(localKey, JSON.stringify(apiData))
                setData(apiData)
                console.log("Fetched from API today")
            }
            catch (err) {
                console.error(err)
            }
        }

        fetchAPIData()

    }, [])

    return (
        <>
        {data ? (<Main data={data} />) : 
        <div className="loadingState">
            <i className="fa-solid fa-gear"></i>
        </div> }
        {showModel && (<SideBar handleToggleModel={handleToggleModel} data={data}/>) }
        {data && (<Footer handleToggleModel={handleToggleModel} data={data}/>) }
        </>
    )
}

export default App
