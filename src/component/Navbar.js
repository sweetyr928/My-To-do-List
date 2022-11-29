import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
        <Link to ="/"><h1>My To-do List</h1></Link>
        <div className="links">
            <Link to="/create" className="linkToAdd" >추가하기</Link>
        </div>
      </nav>
    );
}
  
export default Navbar; 