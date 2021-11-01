import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"


const App = () => {
  return (
    <div className="main-div">
    <Sidebar/>
    <Navbar/>
    <Content/>
    </div>
  )
}

export default App
