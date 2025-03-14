import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {

  return (
    <>
      <ul className="main-menu__list">
        <li>
        <Link href="/">Home </Link>
        </li>

        <li>
          <Link href="about">About Us</Link>
        </li>

        <li>
          <Link href="services">Services</Link>
        </li>

        <li>
          <Link href="projects">Projects</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
