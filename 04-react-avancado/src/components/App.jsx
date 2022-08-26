import React, { useEffect, useState, Fragment } from 'react'
import Copy from './Copy'
import ErrorApp from './ErrorApp'
import RenderApp from './RenderApp'
import TypeApp from './TypeApp'
import RefApp from './RefApp'
import SmartComponent from "./SmartComponent"
import Button from './Button/Button'

import './App.css'

export default function App() {
  const [showCopy, setShowCopy] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showRenderProps, setShowRenderProps] = useState(false)
  const [showTypeChecking, setShowTypeChecking] = useState(false)
  const [showRefDOM, setShowRefDOM] = useState(false)
  const [showSmartComponent, setShowSmartComponent] = useState(false)

  const handleCopy = () => {
    setShowCopy(!showCopy)
  }

  const handleError = () => {
    setShowError(!showError)
  }

  const handleRender = () => {
    setShowRenderProps(!showRenderProps)
  }

  const handleTypeChecking = () => {
    setShowTypeChecking(!showTypeChecking)
  }

  const handleRefDOM = () => {
    setShowRefDOM(!showRefDOM)
  }

  const handleSmartComponent = () => {
    setShowSmartComponent(!showSmartComponent)
  }



  return (
    <div className='main-app'>
      <div>
        <Button onClick={handleCopy}>Show Copy</Button>
        {showCopy && <Copy />}
      </div>
      <div>
        <Button onClick={handleError}>Show ErrorApp</Button>
        {showError && <ErrorApp />}
      </div>
      <div>
        <Button onClick={handleRender}>Show RenderApp</Button>
        {showRenderProps && <RenderApp />}
      </div>
      <div>
        <Button onClick={handleTypeChecking}>Show TypeApp</Button>
        {showTypeChecking && <TypeApp />}
      </div>
      <div>
        <Button onClick={handleRefDOM}>Show RefApp</Button>
        {showRefDOM && <RefApp />}
      </div>
      <div>
        <Button onClick={handleSmartComponent}>Show Smart Component</Button>
        {showSmartComponent && <SmartComponent />}
      </div>
    </div>
  )
}
