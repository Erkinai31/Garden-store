import instagram from "../img/Vector3.svg";
import WhatsApp from "../img/Vector2.svg";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_contacts">
          <h3>Contacts</h3>
          <div className="contacts_number">+49 999 99 99 999</div>
          <div className="social_media">
            <div>
              <img src={instagram} width='46' height='46'/>
              <p>instagram</p>
            </div>
            <div>
              <img src={WhatsApp} width='46' height='46' />
              <p>WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="footer_address">
          <h3>Address</h3>
          <p className="address">Köln,<br/>Fuldabrückstraße 12</p>
          <div>
            <p className="mode">Working mode</p>
            <p className="clock">Around the clock</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer