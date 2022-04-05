import profilePicture from "../images/DSC07388.JPG";
import "../style.css";

export default function Info() {
  return (
    <div className="info">
      <img src={profilePicture} alt="profile" />
      <div className=""></div>
      <h1 className="Name">Johann Homonnai</h1>
      <h3 className="Profession">Electrical Engineer</h3>
      <p className="website">github.com/johannh22</p>
      <div className="buttons">
        <button className="e-mail">E-mail</button>
        <button className="linkedin">LinkedIn</button>
      </div>
    </div>
  );
}
