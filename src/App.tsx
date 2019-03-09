import React from 'react';
import { Root, Routes } from 'react-static';
import './styles/app.css';
import Header from '@components/header';

function App() {
  return (
    <Root>
      <Header />
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
