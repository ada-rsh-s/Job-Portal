import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            impedit amet saepe consequuntur consequatur deleniti obcaecati
            asperiores quaerat, quas voluptates distinctio? Laudantium totam a,
            ipsam ducimus, soluta culpa placeat rerum aut dolorum voluptatum
            eveniet. Quis eum, quo quod repudiandae vel repellat eius dicta
            officiis velit quia quas fugiat aut delectus.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
