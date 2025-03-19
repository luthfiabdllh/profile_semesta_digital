import Image from "next/image";
import ModeToggle from "./components/modeToggle/modeToggle";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ModeToggle />
      <Image
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
