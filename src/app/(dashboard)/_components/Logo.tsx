import Image from "next/image";
const Logo = () => {
  return (
    <Image
      height={130}
      width={130}
      alt="logo"
      src="/logo.svg"
      className="p-6"
    />
  );
};

export default Logo;
