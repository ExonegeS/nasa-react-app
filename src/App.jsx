import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import { useEffect, useState } from "react"

function App() {
    const [data, setData] = useState({ date: "2024-11-17", explanation: "What is the cause of this unusual parabolic structure?  This illuminated cavity, known as LDN 1471, was created by a newly forming star, seen as the bright source at the peak of the parabola.  This protostar is experiencing a stellar outflow which is then interacting with the surrounding material in the Perseus Molecular Cloud, causing it to brighten.  We see only one side of the cavity -- the other side is hidden by dark dust.  The parabolic shape is caused by the widening of the stellar-wind blown cavity over time. Two additional structures can also be seen either side of the protostar; these are known as Herbig-Haro objects, again caused by the interaction of the outflow with the surrounding material.  What causes the striations on the cavity walls, though, remains unknown.  The featured image was taken by NASA and ESA’s Hubble Space Telescope after an original detection by the Spitzer Space Telescope.   Explore Your Universe: Random APOD Generator", hdurl: "https://apod.nasa.gov/apod/image/2411/LDN1471_HubbleSchmidt_1024.jpg", media_type: "image", service_version: "v1", title: "LDN 1471: A Windblown Star Cavity", url: "https://apod.nasa.gov/apod/image/2411/LDN1471_HubbleSchmidt_960.jpg" })
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

            try {
                const res = await fetch(url)
                const apiData = await res.json()
                setData(apiData)
                console.log("DATA\n",apiData)
            }
            catch (err) {
                console.error(err)
            }
        }

        // fetchAPIData()

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
