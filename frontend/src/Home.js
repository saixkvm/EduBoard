import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const Home = () => {

    // boxes with the specified class name
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('/api/classes/')
        .then((res) => {
            return res.json();})
        .then((data) => {
            console.log(data);
            setClasses(data)});
    },[])

    return ( 
        <div className='class_list_parent'>

            <h2>Classes</h2>

            <div className="class_list">
                {
                    classes.map((classy) => (
                        <Link key={classy._id} to={`/class/${classy._id}`} className="no-underline">
                            <div className="className">
                                <h4>{classy.className}</h4>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Home;