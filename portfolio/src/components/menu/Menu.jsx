import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#aboutme">About me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Projects Videos</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Projects in cooming</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <a href="https://www.linkedin.com/in/mauro-loyola/">
          <img
            src="https://img.icons8.com/ios/500/linkedin.png"
            alt="linkedin"
            width="40"
            height="40"
          />
        </a>
        <a href="https://github.com/stringedcat">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="css3"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.instagram.com/mauro.lyola/">
          <img
            src="https://www.msm.gov.ar/wp-content/uploads/2020/05/new-instagram-logo-png-transparent-light.png"
            alt="linkedin"
            width="40"
            height="40"
          />
        </a>
      </ul>
    </div>
  );
};

export default Menu;
