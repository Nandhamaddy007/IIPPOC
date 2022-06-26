import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <img
            src="https://www.ilpnet.org/wp-content/uploads/2019/06/logo_small.png"
            data-src="https://www.ilpnet.org/wp-content/uploads/2019/06/logo_small.png"
            width="239"
            height="31"
            style={{ maxHeight: "31px", height: "31px" }}
            alt="India Literacy Project Logo"
            data-retina_logo_url="https://www.ilpnet.org/wp-content/uploads/2019/06/logo.png"
            className="fusion-sticky-logo ls-is-cached lazyloaded"
            data-logo-height="31"
            data-logo-width="239"
          />
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </>
  );
}
