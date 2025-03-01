import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Welcome to our job portal, where we connect job seekers with their
            dream jobs and employers with the best talent. Explore
            opportunities, track your applications, and take the next step in
            your career with us.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
