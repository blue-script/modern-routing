import React, { useState } from 'react'
import './App.css'
import { Site } from './components/Site'
import { Outlet } from 'react-router-dom'

function App() {
	return (
		<div>
            <div>HEADER</div>
			{/* <Site /> */}
            <Outlet/>
            <div>FOOTER</div>
		</div>
	)
}

export default App
