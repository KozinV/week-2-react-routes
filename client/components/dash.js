import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dash = () => {
    return (
        <div>
            <Head title="Hello" />
            <div className="flex items-center justify-center h-screen">
                <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
                    <div id="title">Dashboard</div>
                    <Link to="/dashboard/profile/c3c064b0-c45b-4807-b710-0d5bb66386f0">Go To Profile</Link>
                    <Link to="/dashboard/main">Go To Main</Link>
                </div>
            </div>
        </div>
    )
}

Dash.propTypes = {}

export default Dash