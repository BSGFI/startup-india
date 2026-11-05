import Image from "next/image";
import logo from "../../../public/icons/logo.png";

interface LogoProps {
  priority?: boolean;
}

export default function Logo({ priority = false }: LogoProps) {
  return (
    <span className="relative block h-[60px] w-[160px] shrink-0 overflow-hidden rounded-lg bg-white sm:w-[176px]">
      <Image
        src={logo}
        alt="Build Something Great"
        fill
        priority={priority}
        sizes="(max-width: 640px) 160px, 176px"
        style={{ objectFit: "contain" }}
      />
    </span>
  );
}
