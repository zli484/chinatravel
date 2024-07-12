import Link from "next/link";
import laravel from "@/images/logos/laravel.svg";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <Image className="h-8 w-auto" src={laravel} alt="Logo" />
    </Link>
  );
}
export default Logo;
