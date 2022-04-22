import "./Footer.css";
import { FaFacebookF, FaGooglePlay, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						<h2 className="footer-heading"><a href="#" className="logo">Welcome Welcome</a></h2>
						<p className="menu">
							<a href="#">Home</a>
							<a href="#">Agent</a>
							<a href="#">About</a>
							<a href="#">Listing</a>
							<a href="#">Blog</a>
							<a href="#">Contact</a>
						</p>
						<div className="icon">
							<FaFacebookF className="icon"/>
							<FaGooglePlay className="icon"/>
							<FaTwitter className="icon"/>
							<FaYoutube className="icon-ch"/>
						</div>
					</div>
					<div className="row mt-4">
					<div className="col-md-12 text-center">
						<p className="copyright">
					  		Copyright &copy;2022. All rights 
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
  );
};

export default Footer;
