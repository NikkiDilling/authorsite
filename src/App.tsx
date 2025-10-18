import { useState } from 'react'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  )
}

export default App
