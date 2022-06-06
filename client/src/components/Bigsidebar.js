import { useAppContext } from "../context/appContext.js";
import NavLinks from "./Navlinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
const Bigsidebar = () => {
  const { showSidebar,toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>

          <Navlinks toggleSidebar={toggleSidebar}/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Bigsidebar;
