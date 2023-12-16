import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
      <p>Made by Srajan Saxena</p>
    </footer>
  );
}

export default Footer;
