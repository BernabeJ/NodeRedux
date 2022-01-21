import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../auth/service";
import { authLogout } from "../../store/actions";
import { getIsLogged } from "../../store/selectors";





function Header({ className }) {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout().then(() => dispatch(authLogout()));
  }

  return (
    <header className={classNames('header', className)}>
      <Link to="/">
        <div className="header-logo">
          <p >Home</p>
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/adverts/new"
        >
         <p>New Adverts</p> 
        </NavLink>
         {isLogged ? (
          <button className="btn btn-primary btn-lg btn-block"  onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <button
            variant="primary"
           className="btn btn-primary btn-lg btn-block" 
            as={Link}
            to="/login"
          >
            Log in
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
