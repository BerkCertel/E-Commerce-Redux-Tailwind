import { useNavigate } from "react-router-dom";

function NavbarLeft() {
  const navigate = useNavigate();

  return (
    <div
      className="navbar-left-main cursor-pointer"
      onClick={() => navigate("/")}
    >
      <div className="text-6xl">ShopFlux</div>
    </div>
  );
}

export default NavbarLeft;
