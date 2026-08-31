import { createBrowserRouter } from"react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./page/Home"
import Books from "./page/Books"
import Audio from "./page/Audio"
import Library from "./page/Library"
import Games from './page/Games'
import Login from "./page/Login"
import Foun from "./page/Foun"
import History from './page/History'
import Search from "./page/Search"

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
          {  index: true,
            element: <Home/>,
          },
         {
           path: "books",
           element: <Books/>
         },
          {
            path: "/audio",
            element: <Audio/>
          },
          {
            path: "/library",
            element: <Library/>
          },
         {
          path: '/games',
          element: <Games/>
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
          path: "/history",
          element: <History/>
        },
        {
          path: "/search/:text",
          element: <Search/>

        }

        ]
    }
])

export default myRouter