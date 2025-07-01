import "../css/fotter.css";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import {  FaPhone } from "react-icons/fa";

export default function Fotter() {
  return (
    <>
      <div className="footer" id="contact">
        <div className="f_data">
          <div className="first_data same ">
            <h3>hcars</h3>

            <div className="a">
              <p>
                I adore my car; its sleek design, powerful engine, and smooth
                ride make every journey a delightful adventure.
              </p>
              <div className="nmber">
                <a href="" className="lowercase" style={{
                  textTransform: 'lowercase'
                }}>contact@ahmadproweb.com</a>
                <br />
                <a href="https://wa.me/+923106082642?text=Hello! We can help you with building your website ?">+(92)-310-6082642</a>
              </div>
            </div>
          </div>
          <div className="second_data same">
            <h3>Developer</h3>
            <div className="a">
          
              <div className="a2 icons">
                <a href="https://ahmadproweb.com" target="_blank" style={{
                  fontSize: '1.7rem',
                  fontWeight : '900'
                }}>Portfolio</a>
                <a href="https://ahmadproweb.com" target="_blank" style={{
                  fontSize: '1.7rem',
                  fontWeight : '900'
                }}>hafiz ahmad</a>
                <a href="https://wa.me/923193223060?text=Hello!__can_help_you_with_building_your_website_?" target="_blank"> <FaWhatsapp className="icons-im"/> +92-310-6082642 </a>
                <a href="tel:3106082642"> <FaPhone className="icons-im"/> +92-310-6082642 </a>
                <a href="https://www.linkedin.com/in/ahmadproweb/" target="_blank"> <FaLinkedinIn className="icons-im"/> Linkedin </a>
              </div>
            </div>
          </div>
          <div className="third_data same">
            <h3>TOP BRANDS</h3>
            <div className="a">
              <div className="a2">
                <a href="">BMW</a>
                <a href="">Lamborghini</a>
                <a href=""> Camaro</a>
                <a href=""> audi</a>
                <a href="">infinti</a>
                <a href="">nissan</a>
              </div>
              <div className="a2">
                <a href="">civic</a>
                <a href="">corolla</a>
                <a href=""> toyota</a>
                <a href=""> paradu</a>
              </div>
            </div>
          </div>
          <div className="forth_data same">
            <h3>news letter</h3>
            <div className="email">
              <p>enter you email 👇</p>
              <input type="email" placeholder="add email" />
            </div>
          </div>
        </div>
        <div className="fotter_last">
          <hr className="hr" />
          <div className="flex">
            <p>© Copyright.Designed And Developed By Hafiz Ahmad Iftikhar.</p>
            <div className="logo">
              <a href="https://wa.me/+923106082642">

                <AiOutlineWhatsApp />
              </a>
              <a href="mailto:contact@ahmadproweb.com?subject=Web" target="_blank">
                <AiOutlineMail />
              </a>
              <a href="https://www.linkedin.com/in/ahmadproweb" target="_blank">
                <AiFillLinkedin />
              </a>
              <a href="https://ahmadproweb.com" target="_blank">
                <FiFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
