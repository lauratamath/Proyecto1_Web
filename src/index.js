/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Primer from './components/Header'
import Second from './components/SecondF'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Footer from './components/Last'

const App = () => (
  <div>
    <Primer />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    <Footer />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
