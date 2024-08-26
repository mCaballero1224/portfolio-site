export default function Footer() {
  return (
    <footer>
      <p>&copy; Michael Caballero ({new Date().getFullYear()})</p>
      <hr />
      <span id="socials text-center">
          <p>
            <a target="_blank" href="https://www.linkedin.com/in/mcaballero-dev/"><i className="fab fa-linkedin"></i></a>
            <a target="_blank" href="https://github.com/mCaballero1224/"><i className="fab fa-github"></i></a>
            <a target="_blank" href="https://www.hackerrank.com/profile/mcaballero_dev/"><i className="fab fa-hackerrank"></i></a>
          </p>
      </span>
    </footer>
  );
}
