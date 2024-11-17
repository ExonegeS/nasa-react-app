import React from 'react'

export default function SideBar(props) {
    const { handleToggleModel } = props

    return (
        <div className='sidebar'>
            <div className="bgOverlay" onClick={() => { handleToggleModel() }}></div>
            <div className="sidebarContents">
            <h2>The Brutal Ilya Gussak</h2>
                <div>
                    <p>Description</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, tempora iste! Autem illum tenetur voluptates fugit iusto voluptas, consequuntur rem esse perferendis atque, facere reiciendis, officiis excepturi culpa laboriosam molestias.</p>
                </div>
                <button onClick={() => { handleToggleModel() }}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
