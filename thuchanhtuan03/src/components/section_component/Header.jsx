import "../../assets/styles/header.css";
import Navigator from "../atomic_component/Navigator/Navigator";
import InputSearch from "../atomic_component/InputSearch/InputSearch";
import Logo from "../atomic_component/Logo/Logo";
import logo from "../../assets/image/avatar_small.png";
import Button from "../atomic_component/Button/Button";

function Header() {
  return (
    <div className="header">
      {/* logo */}
      <Logo logo={logo} />

      {/* ô tìm kiếm */}
      <InputSearch placeholder={"What would you like to cook"} />

      {/* navigation */}
      <div className="navbar">
        <Navigator name={"What to cook"} />
        <Navigator name={"recipes"} />
        <Navigator name={"Ingredients"} />
        <Navigator name={"Occasions"} />
        <Navigator name={"About us"} />
      </div>

      {/* thông tin cá nhân */}
      <Button title={"Login"} type={"login"} />
      <Button title={"Subscribe"} type={"subscribe"} />
    </div>
  );
}

export default Header;
