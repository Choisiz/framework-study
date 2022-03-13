import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>홈</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          어바웃
        </a>
      </Link>
    </div>
  );
}
