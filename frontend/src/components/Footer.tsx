export default function Header() {
  return (
    <footer>
      <p>&copy; Michael Caballero ({new Date().getFullYear()})</p>
      <hr />
      <span id="socials text-center">
          <p>
            <a target="_" href="https://www.linkedin.com/in/mcaballero-dev/"><i className="fab fa-linkedin"></i></a>
            <a target="_" href="https://github.com/mCaballero1224/"><i className="fab fa-github"></i></a>
            <a target="_" href="https://www.hackerrank.com/profile/mcaballero_dev/"><i className="fab fa-hackerrank"></i></a>
          </p>
      </span>
    </footer>
  );
}
