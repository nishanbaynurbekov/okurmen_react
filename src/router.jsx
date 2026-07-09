import { createBrowserRouter } from"react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./Barak/Home"
import Kitepter from "./Barak/Kitepter"
import Audio from "./Barak/Audio"
import Kana from "./Barak/Kana"
import Oyun from "./Barak/Oyun"
import Login from "./Barak/Login"
import Foun from "./Barak/Foun"
import Favorites from "./Barak/Favorites"

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
          {  index: true,
            element: <Home/>,
          },
          {
            path: "/kitepter",
            element: <Kitepter/>
          },
          {
            path: "/audio",
            element: <Audio/>
          },
          {
            path: "/kana",
            element: <Kana/>
          },
          {
            path: "/oyun",
            element: <Oyun/>
          },
          {
            path: "/login",
            element: <Login/>
          },
        {
          path: "*",
          element: <Foun/>
        },
        {
          path: "/favorites",
          element: <Favorites/>
        }

        ]
    }
])

export default myRouter