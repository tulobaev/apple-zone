import React from "react";
import scss from "./Footer.module.scss";
import AppleIcon from "@mui/icons-material/Apple";
const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <div className={scss.start}>
              <AppleIcon className={scss.apple_icons} />
              <p>Apple Store Online</p>
            </div>
          </div>

          <div className={scss.block}>
            <div className={scss.box}>
              <ul>
                <li>Shop and Learn</li>
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Vision</li>
                <li>AirPods</li>
                <li>TV & Home</li>
                <li>AirTag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </ul>
              <ul>
                <li>Apple Wallet</li>
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Cash</li>
              </ul>
            </div>
            <div className={scss.box}>
              <ul>
                <li>Account</li>
                <li>Manage Your Apple Account</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </ul>
              <ul>
                <li>Entertainment</li>
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Apple Fitness+</li>
                <li>Apple News+</li>
                <li>Apple Podcasts</li>
                <li>Apple Books</li>
                <li>App Store</li>
              </ul>
            </div>
            <div className={scss.box}>
              <ul>
                <li>Apple Store</li>
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Certified Refurbished</li>
                <li>Apple Trade In</li>
                <li>Financing</li>
                <li>Carrier Deals at Apple</li>
                <li>Find your Order - Apple</li>
                <li>Shopping Help</li>
              </ul>
            </div>
            <div className={scss.box}>
              <ul>
                <li>For Business</li>
                <li>Apple and Business</li>
                <li>Shop for Business</li>
              </ul>

              <ul>
                <li>For Education</li>
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>Shop for College</li>
              </ul>
              <ul>
                <li>For Healthcare</li>
                <li>Apple in Healthcare</li>
                <li>Health on Apple Watch</li>
                <li>Health Records on iPhone</li>
              </ul>
              <ul>
                <li>For Government</li>
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </ul>
            </div>
            <div className={scss.box}>
              <ul>
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li>Supply Chain</li>
              </ul>
              <ul>
                <li>About Apple</li>
                <li>Newsroom</li>
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ul>
            </div>
          </div>

          <div className={scss.bottom}>
            <nav className={scss.nav}>
              <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
              <div className={scss.nav_text}>
                <p>Privacy Policy </p>
                <p>| Terms of Use</p>
                <p>| Sales and Refunds</p>
                <p>| Legal</p>
                <p>| Site Map</p>
              </div>
            </nav>
            <p>United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
