import profilePicture from "../images/DSC07388.JPG";
import emailIcon from "../images/email-icon.svg";
import linkedinIcon from "../images/linkedin-icon.svg";

export default function Info() {
  return (
    <div className="info">
      <img src={profilePicture} alt="profile" />
      <div className="info-text">
        <h1 className="name">Johann Homonnai</h1>
        <h3 className="profession">Electrical Engineer</h3>
        <p className="website">github.com/johannh22</p>
      </div>
      <div className="buttons">
        <a className="e-mail" href="mailto:johannhomonnai@gmail.com" target="_blank">
          <img src={emailIcon} alt="email icon" />
          <p>Email</p>
        </a>
        <a className="linkedin" href="https://linkedin.com/in/johannh22" target="_blank">
          <img src={linkedinIcon} alt="linkedin icon" />
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
}
