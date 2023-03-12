import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import logo from "../logo.png";
export const NavBar = () => {
  return (
    <header>
      <span className="heading">
        <Link reloadDocument to="/">
          <img className="logo" src={logo} alt="Logo"></img>
          Recipe App
        </Link>
      </span>
      <IconButton edge="end" component={Link} to="/add">
        <AddIcon />
      </IconButton>
      <div className="cuisine-links">
        <a className="cuisine-link" href="/cuisine/1">
          Indian
        </a>
        <a className="cuisine-link" href="/cuisine/2">
          Chinese
        </a>
      </div>
    </header>
  );
};
