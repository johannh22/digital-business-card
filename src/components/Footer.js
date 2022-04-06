import "../styles/footer.css";
import twitterIcon from "../images/twitter.svg";
import facebookIcon from "../images/facebook.svg";
import instagramIcon from "../images/instagram.svg";
import githubIcon from "../images/github.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={twitterIcon} alt="twitter-icon" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="facebook-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="instagram-icon" />
      </a>
      <a href="https://github.com/johannh22" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="github-icon" />
      </a>
    </footer>
  );
}
