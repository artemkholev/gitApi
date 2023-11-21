import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage"
import { FavouritsPage } from "./pages/FavouritsPage/FavouritsPage"
import { Navigation } from "./components/Navigations/Navigation"

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favourites' element={<FavouritsPage/>}/>
      </Routes>
    </>
    
  )
}

export default App
