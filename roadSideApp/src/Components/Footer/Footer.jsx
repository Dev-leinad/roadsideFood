// import React from "react";
import './footer.css'
import { MdFacebook } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { TfiLinkedin } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";




const Footer = () => {
  return (
    <>
      <footer >
        <div className="footer__section">
          <div className="company__logo__footer">
            <div className="footer__logo">
              <a href="index.html">RoadSide Foods</a>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              enim alias sit, error et, eligendi reprehenderit ullam nobis illo
              id veniam magni porro laborum animi cum! Nostrum delectus quae
              totam?
            </p>

            <div className="footer__social__links">
              <ul>
                <li>
               
                  <a href=""> <span><MdFacebook /></span></a>
                </li>
                <li>
                  <a href=""> <span><LuInstagram/> </span></a>
                </li>
                <li>
                  <a href=""> <span> <RiTwitterXLine /></span> </a>
                </li>
                <li>
                  <a href=""><span> <TfiLinkedin /> </span></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__about">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="footer__about">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">FaQ</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Partner with us.</a>
                </li>
              </ul>
            </div>
            <div className="footer__about">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">Feed back</a>
                </li>
                <li>
                  <a href="#">Support center</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__subscribe__form">
            <form action="#" onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="subscribenow" >Subscribe Now</label>
              <input type="text" placeholder="email Address" />
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
