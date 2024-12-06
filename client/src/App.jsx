import { RouterProvider } from "react-router-dom"
import LayoutHeader from "./components/LayoutHeader"
import { router } from "./router/router"


function App() {

  return (
    <div className="w-full h-auto">
      <LayoutHeader/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
