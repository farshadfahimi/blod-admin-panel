import { Link } from "react-router-dom";
import './../assets/sidebar.css'

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </aside>
  )
}