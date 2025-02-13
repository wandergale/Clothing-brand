import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.container}>
      <ul>
        <li>
          <a href="/">
            Brand icon
            {/* <img src={spider} alt="spider" /> */}
          </a>
        </li>
        <li className={style.hideOnMobile}>
          <a className={style.link_} href="#about">
            About
          </a>
        </li>
        <li className={style.hideOnMobile}>
          <a className={style.link_} href="#projects">
            Projects
          </a>
        </li>
        <li className={style.hideOnMobile}>
          <a className={style.link_} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
