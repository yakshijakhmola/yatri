import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import WebError from "./Pages/WebError"
import Home from "./Pages/Home"
import AllFeature from './Component/Feature/AllFeature'
import FilterFeature from './Component/Feature/FilterFeature'
import Contact from './Pages/Contact'
import FeatureDetails from './Component/Feature/FeatureDetails'
const Layout = () =>{
  return(
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>
  )
}
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <WebError/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "feature/",
          element: <AllFeature/>
        },
        {
          path: "feature/:slug",
          element: <FilterFeature/>
        },
        {
          path: "feature/:slug/:title",
          element: <FeatureDetails/>
        },
        {
          path: "contact",
          element: <Contact/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App