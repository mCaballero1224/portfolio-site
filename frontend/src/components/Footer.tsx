import React from 'react'

function Header() {
  return (
    <footer>
      <p>&copy; Michael Caballero ({new Date().getFullYear()})</p>
      <hr />
      <span id="socials text-center">
          <p>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </p>
      </span>
    </footer>
  );
}

export default Header;
