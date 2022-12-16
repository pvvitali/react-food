import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="page-footer teal lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Foods</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><Link to='/' className="grey-text text-lighten-3">Home</Link></li>
                  <li><Link to='about' className="grey-text text-lighten-3">About</Link></li>
                  <li><Link to='contact' className="grey-text text-lighten-3">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    );
};

export default Footer;