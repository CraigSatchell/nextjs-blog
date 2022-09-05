import Link from "next/link";
import layoutStyles from "../layout/layout.module.css";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={layoutStyles.ul}>
            <span>
              <Link href="/">My Blog | </Link>
            </span>
            <li className={layoutStyles.li}>
              <Link href="/">Home</Link>
            </li>
            <li className={layoutStyles.li}>
              <Link href="/posts/first-post">First Post</Link>
            </li>
            <li className={layoutStyles.li}>
              <Link href="/posts">Archives</Link>
            </li>
            <li className={layoutStyles.li}>
              <Link href="/about">About</Link>
            </li>
            <li className={layoutStyles.li}>
              <Link href="/contactme">Contact Me</Link>
            </li>
          </ul>
          <ThemeSwitcher />
        </nav>
      </header>
      <style jsx>{`
            nav {
              display: flex;
              justify-content: space-between;
            }

            header {
              background-color: #6b136b;
              box-shadow: 3px 3px 5px #666666;
            }
          `}</style>

    </>
  );
};

export default Header;
