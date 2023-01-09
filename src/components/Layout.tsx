import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import '../assets/layout.css'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Sidebar />

        <Outlet />
      </div>
    </>
  )
}