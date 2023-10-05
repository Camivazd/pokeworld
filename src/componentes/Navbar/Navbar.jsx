
import { Link, NavLink } from "react-router-dom";

import CartWidget from "./CartWidget/CartWidget";


const Navbar = () => {
    return (
        <div className="navbar border-b-4 border-indigo-950/120 flex flex-row"><font></font>

            <Link className="navbar-start" to='/'>
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="">
                            <img className="w-32 hover:cursor-pointer" src="/pokelogo.svg" alt="pokemon" /><font></font>
                        </label>
                    </div>
                </div>
            </Link>

            <div className="navbar-center">
                <NavLink className='btn btn-ghost normal-case text-xl text-center' to='/'>Todos<font></font></NavLink>
            </div>

            <div className="navbar-center">
                <NavLink className='btn btn-ghost normal-case text-xl text-center' to='categoria/mochilas'>Mochilas</NavLink>
            </div>

            <div className="navbar-center">
                <NavLink className='btn btn-ghost normal-case text-xl text-center' to='categoria/peluches'>Peluches</NavLink>
            </div>

            <div className="navbar-center">
                <NavLink className='btn btn-ghost normal-case text-xl text-center' to='categoria/tazas'>Tazas</NavLink>
            </div>

            <div className="navbar-center">
                <NavLink className='btn btn-ghost normal-case text-xl text-center' to='categoria/juegos'>Videojuegos</NavLink>
            </div>

            <Link className="navbar-end" to={'/cart'}>
                <CartWidget />
            </Link>

        </div >
    )
}

export default Navbar