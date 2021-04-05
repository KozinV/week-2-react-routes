import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Dash from './dash'
import Main from './main'
import User from './user'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
            <Route exact path="/dashboard/" component={() => <Dash />} />
            <Route exact path="/dashboard/main" component={() => <Main />} />
            <Route exact path="/dashboard/profile/:user" component={() => <User />} />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
