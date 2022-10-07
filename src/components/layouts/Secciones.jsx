import {Link} from 'react-router-dom'

const Secciones = () => {
    return (
        <>
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              <button className='btn btn-dark'>
                <i className="fas fa-home"></i>
                </button>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/contacto"><button className='btn btn-dark'><i class="fas fa-envelope"></i></button></Link>
        </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about"><button className='btn btn-dark'><i className="fas fa-address-card"></i></button></Link>
        </li>
        </>
    );
}

export default Secciones;