import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to= "/">
                    <h1>Clotion</h1>
                </Link>

                <Link to = "/create">
                    <h4>Create Class</h4>
                </Link>
            </div>
        </header>

     );
}
 
export default Navbar;