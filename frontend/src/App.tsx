
import './App.css'
import { Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar.tsx'
import DisplayProducts from './pages/DisplayProducts.tsx'
import PaymentPage from './pages/PaymentPage.tsx'
import Info from "./pages/Info.tsx"
import Home from "./pages/Home.tsx"


function App() {

  return (
    <>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/info" element={<Info/>}></Route>
      <Route path="/media" element={<DisplayProducts/>}></Route>
      <Route path="/payment" element={<PaymentPage/>}/>
    </Routes>
    </>
  )
}
export default App
