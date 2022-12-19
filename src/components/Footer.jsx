import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ <i>Vipul Wakode</i> {year}</p>
    </footer>
  );
}

export default Footer;
