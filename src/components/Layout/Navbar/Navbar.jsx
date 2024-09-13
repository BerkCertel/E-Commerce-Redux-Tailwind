import NavbarLeft from "./NavbarItem/NavbarLeft";
import NavbarRight from "./NavbarItem/NavbarRight";

function Navbar() {
  return (
    <div className="navbar-main">
      <div className="flex justify-between items-center my-5">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </div>
  );
}

export default Navbar;
