import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>To-do List</h1>
      </Link>
      <div className="links">
        <Link to="/calendar" className="linkToCal">
          달력보기
        </Link>
        <Link to="/create" className="linkToAdd">
          추가하기
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
